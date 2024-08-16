using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Enums;

namespace Domain.Entities
{
    public class Pelicula
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdPelicula {  get; set; }    
        public string NombrePelicula { get; set; }
        public OrigenPelicula OrigenPelicula {  get; set; }
        public int DirectorPeliculaId { get; set; }

        [ForeignKey("DirectorPeliculaId")]
        public Director Director { get; set; }

    }
}
