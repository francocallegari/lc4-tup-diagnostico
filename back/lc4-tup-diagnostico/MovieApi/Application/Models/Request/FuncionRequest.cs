using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Application.Models.Request
{
    public class FuncionRequest
    {
        [Required]
        public DateTime Fecha { get; set; }
        [Required]
        public float Precio { get; set; }
        [Required]
        public int PeliculaId { get; set; }
    }
}
