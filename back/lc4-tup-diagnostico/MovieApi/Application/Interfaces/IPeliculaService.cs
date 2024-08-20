using Application.Models;
using System.Collections.Generic;

namespace Application.Interfaces
{
    public interface IPeliculaService
    {
        List<PeliculaDto> GetAll();
        PeliculaDto GetById(int id);
    }
}
