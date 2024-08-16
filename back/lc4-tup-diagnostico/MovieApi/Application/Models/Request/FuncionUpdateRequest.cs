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
        public DateOnly? Fecha { get; set; }
        public TimeOnly? Horario { get; set; }
        public float? Precio { get; set; }
        public int? PeliculaId { get; set; }
    }
}
