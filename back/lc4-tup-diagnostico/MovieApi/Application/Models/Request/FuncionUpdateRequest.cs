using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models.Request
{
    public class FuncionUpdateRequest
    {
       [Required]
        public DateTime Date { get; set; }
        [Required]
        public float Precio { get; set; }
        [Required]
        public int? PeliculaId { get; set; }
    }
}
