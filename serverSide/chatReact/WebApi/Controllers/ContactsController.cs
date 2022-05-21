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
    public class ContactsController : ControllerBase
    {
        private IService _service;
        public IConfiguration _configuration;
        public ContactsController(IService service, IConfiguration config)
        {
            _service = service;
            _configuration = config;
        }

        // GET: Users/contacts
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll()
        {
            var username = _service.GetUsernameFromJWT(HttpContext);
            var contactList = new List<ContactJson>();
            foreach (var c in await _service.GetAllContacts(username))
            {
                var j = await _service.ToJsonContact(c, username);
                contactList.Add(j);
            }
            return Ok(contactList);
        }

        // GET: Users/contacts/contactsName
        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> Get(string id)
        {
            var username = _service.GetUsernameFromJWT(HttpContext);
            var c = await _service.GetContact(username, id);
            var j = await _service.ToJsonContact(c, username);
            return Ok(j);
        }

        // GET: Users/contacts/contactsUsername
        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Put(string id)
        {
            var username = _service.GetUsernameFromJWT(HttpContext);
            //await _service.UpdateContact(username, id, name, server);
            //Update!!!
            return StatusCode((int)HttpStatusCode.NoContent);
        }

        // GET: Users/contacts/contactsUsername
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Delete(string id)
        {
            var username = _service.GetUsernameFromJWT(HttpContext);
            await _service.DeleteContact(username, id);
            return StatusCode((int)HttpStatusCode.NoContent);
        }


        // GET: Users/contacts
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Post([FromBody] string id)
        {
            var username = _service.GetUsernameFromJWT(HttpContext);
            if (!_service.ContactExists(id))
                //await _service.AddNewContact(username, id, name, server);
                //change

            await _service.AddNewChat(username, id);

            return StatusCode((int)HttpStatusCode.Created);
        }
    }
}
