using BrasTravel.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace BrasTravel.Controllers
{
    public class PagesController : Controller
    {

        private AgenciaDbContext _context;

        public PagesController(AgenciaDbContext context)
        {
            _context = context;
        }

        public IActionResult Home()
        {
            return View();
        }

        public IActionResult Contatos()
        {
            return View();
        }


        public IActionResult Promocoes()
        {
            return View();
        }

        public IActionResult Destinos()
        {
            return View();
        }

        public IActionResult Internacionais()
        {
            return View();
        }

        public IActionResult Nacionais()
        {
            return View();
        }

        [HttpPost]
        public IActionResult CreateContato(Contato contato)
        {
            _context.Add(contato);
            _context.SaveChanges();
            return RedirectToAction("Contatos");
        }
        
        [HttpPost]
        public IActionResult Create(Pessoa pessoa)
        {
            _context.Add(pessoa);
            _context.SaveChanges();
            return RedirectToAction("Viagem");
        }

        public IActionResult Viagem()
        {

            ViewBag.pessoa = _context.Pessoa.ToList();
            ViewBag.viagem = _context.Viagem.ToList();

            if (ViewBag.pessoa == null)
            {
                return NotFound();
            }


            return View();
        }

        public IActionResult Edit(int id)
        {

            var pessoa = _context.Pessoa.Where(p => p.IdPessoa == id).FirstOrDefault();

            var viagem = _context.Viagem.Where(v => v.IdViagem == pessoa.ViagemId).FirstOrDefault();

            if (pessoa == null)
            {
                return NotFound();
            }

            return PartialView("_ModalViagemEdit", pessoa);
        }


        [HttpPost]
        public IActionResult Edit(Pessoa pessoa)
        {
            var IdV = pessoa.ViagemId;
            var viagem = _context.Viagem.Find(IdV);

            if (viagem != null)
            {
                _context.Viagem.Remove(viagem);

            }

            _context.Pessoa.Update(pessoa);
            _context.SaveChanges();


            return RedirectToAction("Viagem");
        }

        public IActionResult Details(int id)
        {
            var pessoa = _context.Pessoa.Where(p => p.IdPessoa == id).FirstOrDefault();
            var viagem = _context.Viagem.Where(v => v.IdViagem == pessoa.ViagemId).FirstOrDefault();
            return PartialView("_ModalViagemDetalhes", pessoa); ;
        }

        [HttpGet]
        public IActionResult Delete(int id)
        {
            var pessoa = _context.Pessoa.Where(p => p.IdPessoa == id).FirstOrDefault();

            if (pessoa != null)
            {
                var viagem = _context.Viagem.Where(v => v.IdViagem == pessoa.ViagemId).FirstOrDefault();
            }

            return PartialView("_ModalViagemDelete", pessoa); ;
        }

        [HttpPost]
        public IActionResult Delete(Pessoa pessoa)
        {
            var pessoaDel = _context.Pessoa.Where(p => p.IdPessoa == pessoa.IdPessoa).FirstOrDefault();
            var viagem = _context.Viagem.Where(v => v.IdViagem == pessoa.ViagemId).FirstOrDefault();


            _context.Pessoa.Remove(pessoaDel);
            _context.Viagem.Remove(viagem);
            _context.SaveChanges();


            return RedirectToAction("Viagem");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }


    }
}