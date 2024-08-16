using Domain.Entities;
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
    }
}
