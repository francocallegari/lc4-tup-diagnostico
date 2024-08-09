using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Funcion
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdFuncion { get; set; }  

        public DateTime Fecha { get; set; }
        public DateTime Hora { get; set; }
        public float Precio { get; set; }

        
        public int PeliculaId { get; set; }

        [ForeignKey("PeliculaId")]
        public Pelicula Pelicula { get; set; }  


    }
}
