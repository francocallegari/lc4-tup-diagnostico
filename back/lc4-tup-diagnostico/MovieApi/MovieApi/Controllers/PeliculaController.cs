using Application.Interfaces;
using Application.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace MovieApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeliculaController : ControllerBase
    {
        private readonly IPeliculaService _peliculaService;

        public PeliculaController(IPeliculaService peliculaService)
        {
            _peliculaService = peliculaService;
        }

        [HttpGet("Peliculas")]
        public IActionResult GetAll()
        {
            try
            {
                var peliculas = _peliculaService.GetAll();
                return Ok(peliculas);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("Pelicula/{id}")]
        public IActionResult Get([FromRoute] int id)
        {
            try
            {
                var pelicula = _peliculaService.GetById(id);
                return Ok(pelicula);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}

