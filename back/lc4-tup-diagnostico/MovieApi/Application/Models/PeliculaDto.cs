using Domain.Entities;
using Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models
{
    public class PeliculaDto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public OrigenPelicula Origen {  get; set; }
        public int DirectorPeliculaId { get; set; }
        public DirectorDto Director { get; set; }

        public static PeliculaDto Create(Pelicula pelicula)
        {
            var dto = new PeliculaDto();
            dto.Id = pelicula.IdPelicula;
            dto.Nombre = pelicula.NombrePelicula;
            dto.Origen = pelicula.OrigenPelicula;
            dto.DirectorPeliculaId = pelicula.DirectorPeliculaId;
            dto.Director = DirectorDto.Create(pelicula.Director);

            return dto;
        }
    }
}
