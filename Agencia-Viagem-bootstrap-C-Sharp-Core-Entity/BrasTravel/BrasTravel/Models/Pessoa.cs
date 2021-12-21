using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BrasTravel.Models
{
    [Table("Pessoas")]
    public class Pessoa
    {
        [Key]
        public int IdPessoa { get; set; }

        [Required(ErrorMessage = "Informe seu nome completo.")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Informe sua idade.")]
        public int Idade { get; set; }

        [Required(ErrorMessage = "Informe seu CPF.")]
        public string CPF { get; set; }

        [ForeignKey("Viagem")]
        public int ViagemId { get; set; }
        public virtual Viagem Viagem { get; set; }

    }

}