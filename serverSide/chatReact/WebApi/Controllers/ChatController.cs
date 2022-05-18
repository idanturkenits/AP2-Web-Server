#nullable disable
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

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/:id/messages")]
    public class ChatController : ControllerBase
    {
        private IService _service;
        public IConfiguration _configuration;
        public ChatController(IService service, IConfiguration config)
        {
            _service = service;
            _configuration = config;
        }

        // GET: Users/contacts/contactsName
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Get(string contactUsername)
        {
            var username = _service.GetUsernameFromJWT(HttpContext);
            var chatJson = await _service.ToJsonChat(await _service.GetChat(username, contactUsername));

            return Ok(chatJson);
        }

        // GET: Users/contacts
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Post(string contactUsername, string content)
        {
            var username = _service.GetUsernameFromJWT(HttpContext);
            await _service.AddNewMessage(await _service.GetChat(username, contactUsername), content, true);

            return StatusCode((int)HttpStatusCode.Created);
        }
    }
}
