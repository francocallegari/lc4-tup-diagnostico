using Domain.Entities;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class PeliculaRepository : EfRepository<Pelicula>, IPeliculaRepository
    {
        public PeliculaRepository(ApplicationContext context) : base(context)
        {
        }

        public Pelicula GetPeliculaById(int? id) 
        {
            return _context.Peliculas.Include(p => p.Director).FirstOrDefault(p => p.IdPelicula == id);
        }
    }
}
