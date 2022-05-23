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
    [Route("api/contacts")]
    public class MessageController : ControllerBase
    {
        private IService _service;
        public IConfiguration _configuration;
        public MessageController(IService service, IConfiguration config)
        {
            _service = service;
            _configuration = config;
        }

        // GET: Users/contacts/contactsName
        [HttpGet("{id}/messages/{id2}")]
        [Authorize]
        public async Task<IActionResult> GetMessage(string id,int id2)
        {
            var msgJson = _service.ToJsonMessage(await _service.GetMessageById(id2));
            return Ok(msgJson);
        }

        // GET: Users/contacts/contactsUsername
        [HttpPut("{id}/messages/{id2}")]
        [Authorize]
        public async Task<IActionResult> Put(string id, int id2, string content)
        {
            await _service.UpdateMessage(await _service.GetMessageById(id2), content);
            return StatusCode((int)HttpStatusCode.NoContent);
        }

        // GET: Users/contacts/contactsUsername
        [HttpDelete("{id}/messages/{id2}")]
        [Authorize]
        public async Task<IActionResult> Delete(string id, int id2)
        {
            await _service.DeleteMessage(await _service.GetMessageById(id2));
            return StatusCode((int)HttpStatusCode.NoContent);
        }
    }
}
