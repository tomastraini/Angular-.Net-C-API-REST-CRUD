using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace Api_REST.Models
{
    public class CardlistDBContext: DbContext
    {
        public CardlistDBContext(DbContextOptions<CardlistDBContext> options): base(options)
        {

        }
        public DbSet<Cardlist> Cardlists { get; set; }
    }
}
