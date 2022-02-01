using Microsoft.EntityFrameworkCore;

namespace BrasTravel.Models
{
    public class AgenciaDbContext : DbContext
    {
        public AgenciaDbContext(DbContextOptions<AgenciaDbContext> options) : base(options)
        { }

        public DbSet<Viagem> Viagem { get; set; }

        public DbSet<Pessoa> Pessoa { get; set; }

        public DbSet<Contato> Contato { get; set; }
    }


}