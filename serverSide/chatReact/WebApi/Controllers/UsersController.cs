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


namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IService _service;
        public IConfiguration _configuration;
        public UsersController(IService service, IConfiguration config)
        {
            this._service = service;
            _configuration = config;
        }

        // POST: api/login/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [Route("Login")]
        /*[ValidateAntiForgeryToken]*/
        public async Task<IActionResult> Login(string Username, string password)
        {
            User x = await _service.GetUserById(Username);
            if (x == null)
            {
                return NotFound();
            }
            else if (!x.Password.Equals(password))
            {
                return NotFound();
            }
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, _configuration["JWTParams:Subject"]),
                new Claim(JwtRegisteredClaimNames.Aud, _configuration["JWTParams:Audience"]),
                new Claim(JwtRegisteredClaimNames.Iss, _configuration["JWTParams:Issuer"]),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim("UserId", Username)
            };

            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWTParams:SecretKey"]));
            var mac = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                _configuration["JWTParams:Issuer"],
                _configuration["JWTParams:Audience"],
                claims,
                expires: DateTime.UtcNow.AddMinutes(60),
                signingCredentials: mac);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            
            return Ok(jwt);
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([Bind("Username,Name,Password")] User user)
        {
            await _service.AddNewUser(user);
            User x = await _service.GetUserById(user.Username);
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, _configuration["JWTParams:Subject"]),
                new Claim(JwtRegisteredClaimNames.Aud, _configuration["JWTParams:Audience"]),
                new Claim(JwtRegisteredClaimNames.Iss, _configuration["JWTParams:Issuer"]),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim("UserId", user.Username)
            };

            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWTParams:SecretKey"]));
            var mac = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                _configuration["JWTParams:Issuer"],
                _configuration["JWTParams:Audience"],
                claims,
                expires: DateTime.UtcNow.AddMinutes(60),
                signingCredentials: mac);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return Ok(jwt);
        }

        // GET: Users/contacts
        [HttpGet]
        [Authorize]
        [Route("contacts")]
        public async Task<IActionResult> Get()
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
    }
}