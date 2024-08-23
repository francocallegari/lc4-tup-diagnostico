using Domain.Entities;
using Domain.Enums;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class FuncionRepository : EfRepository<Funcion>, IFuncionRepository
    {
        public FuncionRepository(ApplicationContext context) : base(context)
        {
        }

        public List<Funcion> GetFunciones()
        {
            return _context.Funciones.Include(f => f.Pelicula).ThenInclude(p => p.Director).ToList();
        }

        public Funcion GetFuncionById(int id)
        {
            return _context.Funciones.Include(f => f.Pelicula).ThenInclude(p => p.Director).FirstOrDefault(f => f.IdFuncion == id);
        }

        public List<Funcion> GetFuncionesByDirectorDate(int directorId, DateOnly fecha)
        {
            return _context.Funciones.Include(f => f.Pelicula).ThenInclude(p => p.Director).Where(f => f.Fecha == fecha && f.Pelicula.DirectorPeliculaId == directorId).ToList();
        }

        public List<Funcion> FuncionesWithInternationalMovies()
        {
            return _context.Funciones.Include(f => f.Pelicula).ThenInclude(p => p.Director).Where(f => f.Pelicula.OrigenPelicula == OrigenPelicula.Internacional).ToList();
        }

        public Funcion GetFuncionByMovieDate(DateOnly fecha, TimeOnly hora, int peliculaId)
        {
            return _context.Funciones.Include(f => f.Pelicula).ThenInclude(p => p.Director).FirstOrDefault(f => f.Fecha == fecha && f.Hora == hora && f.PeliculaId == peliculaId);
        }
    }
}
