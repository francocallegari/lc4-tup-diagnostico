using Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models
{
    public class DirectorDto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }

        public static DirectorDto Create(Director director)
        {
            var dto = new DirectorDto();
            dto.Id = director.DirectorId;
            dto.Nombre = director.Nombre;

            return dto;
        }
    }
}
