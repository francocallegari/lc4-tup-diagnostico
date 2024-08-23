using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IFuncionRepository : IRepositoryBase<Funcion>
    {
        List<Funcion> GetFunciones();
        Funcion GetFuncionById(int id);
        List<Funcion> GetFuncionesByDirectorDate(int directorId, DateOnly fecha);
        List<Funcion> FuncionesWithInternationalMovies();
        Funcion GetFuncionByMovieDate(DateOnly fecha, TimeOnly hora, int peliculaId);
    }
}
