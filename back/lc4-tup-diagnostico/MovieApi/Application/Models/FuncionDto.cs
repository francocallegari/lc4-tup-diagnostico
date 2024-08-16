using Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models
{
    public class FuncionDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public DateOnly Fecha { get; set; }
        [Required]
        public TimeOnly Horario { get; set; }
        [Required]
        public float Precio { get; set; }
        [Required]
        public int PeliculaId { get; set; }
        [Required]
        public PeliculaDto Pelicula { get; set; }

        public static FuncionDto Create(Funcion funcion)
        {
            var dto = new FuncionDto();
            dto.Id = funcion.IdFuncion;
            dto.Fecha = funcion.Fecha;
            dto.Horario = funcion.Hora;
            dto.Precio = funcion.Precio;
            dto.PeliculaId = funcion.PeliculaId;
            dto.Pelicula = PeliculaDto.Create(funcion.Pelicula);

            return dto;
        }

        public static List<FuncionDto> CreateList(IEnumerable<Funcion> funcion)
        {
            var listDto = new List<FuncionDto>();
            foreach (var f in funcion)
            {
                listDto.Add(Create(f));
            }
            return listDto;
        }
    }
}

