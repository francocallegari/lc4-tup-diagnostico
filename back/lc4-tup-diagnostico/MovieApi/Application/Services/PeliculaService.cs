using Application.Interfaces;
using Application.Models;
using Domain.Interfaces;
using System;
using System.Collections.Generic;

namespace Application.Services
{
    public class PeliculaService : IPeliculaService
    {
        private readonly IPeliculaRepository _peliculaRepository;

        public PeliculaService(IPeliculaRepository peliculaRepository)
        {
            _peliculaRepository = peliculaRepository;
        }

        public List<PeliculaDto> GetAll()
        {
            var peliculas = _peliculaRepository.GetAll();
            return PeliculaDto.CreateList(peliculas);
        }

        public PeliculaDto GetById(int id)
        {
            var pelicula = _peliculaRepository.GetPeliculaById(id)
                ?? throw new Exception("Pelicula no encontrada");

            return PeliculaDto.Create(pelicula);
        }
    }
}
