using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Application.Models.Request
{
    public class FuncionRequest
    {
        [Required]
        public int Year { get; set; }
        [Required]
        public int Month { get; set; }
        [Required]
        public int Day { get; set; }
        [Required]
        public int Hours { get; set; }
        [Required]
        public int Minutes { get; set; }
        [Required]
        public float Precio { get; set; }
        [Required]
        public int PeliculaId { get; set; }
    }
}
