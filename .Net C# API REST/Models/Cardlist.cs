using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api_REST.Models
{
    public class Cardlist
    {
        [Key]
        public int id_tarjeta { get; set; }

        [Required]
        public string fechaexp { get; set; }

        [Required]
        public string cvv { get; set; }

    }
}
