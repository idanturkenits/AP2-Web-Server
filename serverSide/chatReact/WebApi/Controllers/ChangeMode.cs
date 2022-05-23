﻿using Microsoft.AspNetCore.Mvc;
using System.Net;
using WebApi.Services;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api")]
    public class ChangeMode : ControllerBase
    {
        private IService _service;

        public ChangeMode(IService service)
        {
            _service = service;
        }

        // Post: api/invitations
        [HttpPost]
        [Route("transfer")]
        public async Task<IActionResult> Transfer(string from, string to, string content)
        {
            await _service.AddNewMessage(await _service.GetChat(to, from), content, false);

            return StatusCode((int)HttpStatusCode.Created);
        }


        // Post: api/invitations
        [HttpPost]
        [Route("invitations")]
        public async Task<IActionResult> Invitations(string from, string to, string server)
        {
            await _service.AddNewContact(to, from, from, server);

            await _service.AddNewChat(to, from);
            return StatusCode((int)HttpStatusCode.Created);
        }

    }
}