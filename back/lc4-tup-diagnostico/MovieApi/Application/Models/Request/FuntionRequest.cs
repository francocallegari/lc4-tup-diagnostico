using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Application.Models.Request
{
    public class FuntionRequest
    {
        [Required]
        public DateTime Fecha {  get; set; }
        [Required]
        public DateTime Horario { get; set; }
        [Required]
        public float precio { get; set; }
        [Required]
        public string Pelicula { get; set; }
        [Required]
        public string Director { get; set; }
    }
}
