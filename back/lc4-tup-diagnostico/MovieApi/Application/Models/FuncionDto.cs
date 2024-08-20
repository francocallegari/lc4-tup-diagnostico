using Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

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
            return new FuncionDto
            {
                Id = funcion.IdFuncion,
                Fecha = funcion.Fecha,
                Horario = funcion.Hora,
                Precio = funcion.Precio,
                PeliculaId = funcion.PeliculaId,
                Pelicula = PeliculaDto.Create(funcion.Pelicula) 
            };
        }

        public static List<FuncionDto> CreateList(IEnumerable<Funcion> funciones)
        {
            var listDto = new List<FuncionDto>();
            foreach (var funcion in funciones)
            {
                listDto.Add(Create(funcion));
            }
            return listDto;
        }
    }
}
