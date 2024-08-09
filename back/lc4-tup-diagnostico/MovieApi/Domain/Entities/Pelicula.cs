using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Pelicula
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdPelicula {  get; set; }    
        public string NombrePelicula { get; set; }
        public string OrigenPelicula {  get; set; }

        
        public int DirectorPelicula { get; set; }

        [ForeignKey("DirectorPelicula")]
        public Director Director { get; set; }

    }
}
