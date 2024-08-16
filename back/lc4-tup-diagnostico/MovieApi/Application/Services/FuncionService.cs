using Application.Interfaces;
using Application.Models;
using Application.Models.Request;
using Domain.Entities;
using Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
            var funcion = _funcionRepository.GetById(id)
                ?? throw new Exception("Funcion no encontrada");

            return FuncionDto.Create(funcion);
        }

        public FuncionDto Create(FuncionRequest funcionRequest)
        {
            var pelicula = _peliculaRepository.GetPeliculaById(funcionRequest.PeliculaId)
                ?? throw new Exception("Pelicula no encontrada");
            
            var funcionNueva = new Funcion();
            funcionNueva.Fecha = new DateOnly(funcionRequest.Year, funcionRequest.Month, funcionRequest.Day);
            funcionNueva.Precio = funcionRequest.Precio;
            funcionNueva.Hora = new TimeOnly(funcionRequest.Hours, funcionRequest.Minutes);
            funcionNueva.PeliculaId = funcionRequest.PeliculaId;
            funcionNueva.Pelicula = pelicula;

            var funcion = _funcionRepository.Add(funcionNueva);

            return FuncionDto.Create(funcion);
        }

        public void Update(FuncionUpdateRequest funcionRequest, int id)
        {
            var funcion = _funcionRepository.GetById(id)
                ?? throw new Exception("Funcion no encontrada");

            var pelicula = _peliculaRepository.GetPeliculaById(funcionRequest.PeliculaId)
                ?? throw new Exception("Pelicula no encontrada");

            funcion.Fecha = funcionRequest.Fecha ?? funcion.Fecha;
            funcion.Precio = funcionRequest.Precio ?? funcion.Precio;
            funcion.Hora = funcionRequest.Horario ?? funcion.Hora;
            funcion.PeliculaId = funcionRequest.PeliculaId ?? funcion.PeliculaId;
            funcion.Pelicula = pelicula;

            _funcionRepository.Update(funcion);

        }

        public void Delete(int id)
        {
            var funcion = _funcionRepository.GetById(id)
                ?? throw new Exception("Funcion no encontrada");

            _funcionRepository.Delete(funcion);
        }
    }
}
