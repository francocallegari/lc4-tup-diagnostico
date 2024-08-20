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
        public OrigenPelicula Origen { get; set; }
        public int DirectorPeliculaId { get; set; }
        public DirectorDto Director { get; set; }

        public static PeliculaDto Create(Pelicula pelicula)
        {

            return new PeliculaDto
            {
                Id = pelicula.IdPelicula,
                Nombre = pelicula.NombrePelicula,
                Origen = pelicula.OrigenPelicula,
                DirectorPeliculaId = pelicula.DirectorPeliculaId,
                Director = pelicula.Director != null ? DirectorDto.Create(pelicula.Director) : null
            };
        }


        public static List<PeliculaDto> CreateList(IEnumerable<Pelicula> peliculas)
        {
            return peliculas.Select(Create).ToList();
        }
    }
}
