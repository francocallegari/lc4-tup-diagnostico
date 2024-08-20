using Application.Interfaces;
using Application.Models;
using Application.Models.Request;
using Domain.Entities;
using Domain.Interfaces;
using System;
using System.Collections.Generic;

namespace Application.Services
{
    public class FuncionService : IFuncionService
    {
        private readonly IFuncionRepository _funcionRepository;
        private readonly IPeliculaRepository _peliculaRepository;
        private readonly IRepositoryBase<Director> _directorRepository;

        public FuncionService(IFuncionRepository funcionRepository, IPeliculaRepository peliculaRepository, IRepositoryBase<Director> directorRepository)
        {
            _funcionRepository = funcionRepository;
            _peliculaRepository = peliculaRepository;
            _directorRepository = directorRepository;
        }

        public List<FuncionDto> GetAll()
        {
            var funciones = _funcionRepository.GetFunciones();
            return FuncionDto.CreateList(funciones);
        }

        public FuncionDto GetById(int id)
        {
            var funcion = _funcionRepository.GetFuncionById(id)
                ?? throw new Exception("Función no encontrada");

            return FuncionDto.Create(funcion);
        }

        public FuncionDto Create(FuncionRequest funcionRequest)
        {
            var pelicula = _peliculaRepository.GetPeliculaById(funcionRequest.PeliculaId)
                ?? throw new Exception("Película no encontrada");

            var funcionNueva = new Funcion
            {
                Fecha = new DateOnly(funcionRequest.Year, funcionRequest.Month, funcionRequest.Day),
                Precio = funcionRequest.Precio,
                Hora = new TimeOnly(funcionRequest.Hours, funcionRequest.Minutes),
                PeliculaId = funcionRequest.PeliculaId,
                Pelicula = pelicula
            };

            var funcion = _funcionRepository.Add(funcionNueva);
            return FuncionDto.Create(funcion);
        }

        public void Update(FuncionUpdateRequest funcionRequest, int id)
        {
            var funcion = _funcionRepository.GetFuncionById(id)
                ?? throw new Exception("Función no encontrada");

            funcion.Fecha = DateOnly.FromDateTime(funcionRequest.Date);
            funcion.Hora = TimeOnly.FromDateTime(funcionRequest.Date);
            funcion.Precio = funcionRequest.Precio;

            if (funcionRequest.PeliculaId.HasValue)
            {
                var pelicula = _peliculaRepository.GetPeliculaById(funcionRequest.PeliculaId.Value)
                    ?? throw new Exception("Película no encontrada");

                funcion.PeliculaId = funcionRequest.PeliculaId.Value;
                funcion.Pelicula = pelicula;
            }

            _funcionRepository.Update(funcion);
        }

        public void Delete(int id)
        {
            var funcion = _funcionRepository.GetFuncionById(id)
                ?? throw new Exception("Función no encontrada");

            _funcionRepository.Delete(funcion);
        }
    }
}
