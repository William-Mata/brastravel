using BrasTravel.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace BrasTravel.Controllers
{
    public class AdministracaoController : Controller
    {
        private AgenciaDbContext _context;



        public AdministracaoController(AgenciaDbContext context)
        {
            _context = context;
        }

        public IActionResult Administracao()
        {
            ViewBag.contatos = _context.Contato.ToList();

            return View();
        }

        [HttpGet]
        public IActionResult EditAdm(int id)
        {

            var contato = _context.Contato.Where(c => c.IdContato == id).FirstOrDefault();


            if (contato == null)
            {
                return NotFound();
            }

            return PartialView("_ModalAdmEdit", contato);
        }


        [HttpPost]
        public IActionResult EditAdm(Contato contato)
        {

            _context.Contato.Update(contato);
            _context.SaveChanges();


            return RedirectToAction("Administracao");
        }
        
        [HttpGet]
        public IActionResult DetailsAdm(int id)
        {
            var contato = _context.Contato.Where(c => c.IdContato == id).FirstOrDefault();

            return PartialView("_ModalAdmDetalhes", contato); ;
        }

        [HttpGet]
        public IActionResult DeleteAdm(int id)
        {
            var contato = _context.Contato.Where(c => c.IdContato == id).FirstOrDefault();


            return PartialView("_ModalAdmDelete", contato); ;
        }

        [HttpPost]
        public IActionResult DeleteAdm(Contato contato)
        {
            var id = contato.IdContato;

            var contatoDel = _context.Contato.Find(id);

            if ((id > 0) && (id != null)) 
            {
                _context.Contato.Remove(contatoDel);
                _context.SaveChanges();
            }
            else
            {
                return NotFound();
            }

            return RedirectToAction("Administracao");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }

}
