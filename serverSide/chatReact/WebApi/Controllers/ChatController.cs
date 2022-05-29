﻿#nullable disable
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using WebApi.Data;
using WebApi.Models;
using WebApi.Services;
using WebApi.Controllers;
using System.Net;
using System.Text.Json;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/contacts")]
    public class ChatController : ControllerBase
    {
        private IService _service;
        public IConfiguration _configuration;
        private HTTPService _httpService;
        public ChatController(IService service, IConfiguration config)
        {
            _service = service;
            _configuration = config;
            _httpService = new HTTPService();
        }

        // GET: Users/contacts/contactsName
        [HttpGet("{id}/messages")]
        [Authorize]
        public async Task<IActionResult> Get(string id)
        {
            var username = _service.GetUsernameFromJWT(HttpContext);
            var chatJson = await _service.ToJsonChat(await _service.GetChat(username, id));

            return Ok(chatJson);
        }

        // GET: Users/contacts
        [HttpPost("{id}/messages")]
        [Authorize]
        public async Task<IActionResult> Post(string id, [FromBody] JsonElement body)
        {
            var content = body.GetProperty("content").ToString();
            var username = _service.GetUsernameFromJWT(HttpContext);
            var chat = await _service.GetChat(username, id);
            await _service.AddNewMessage(chat,content,true);

            // adding contact invitation
            var contact = await _service.GetContact(username, id);
            await _httpService.sendTransfer(contact.Server, username, id, content);

            return StatusCode((int)HttpStatusCode.Created);
        }


        [HttpGet("currentUser")]
        [Authorize]
        public async Task<IActionResult> GetUser()
        {
            var username = _service.GetUsernameFromJWT(HttpContext);
            return Ok(await _service.GetUserInfoById(username));
        }
    }
}
