package br.com.brastravel.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.brastravel.model.Contato;
import br.com.brastravel.service.ContatoService;

@RestController
@RequestMapping("/contato")
@CrossOrigin
public class ContatoController {

	@Autowired
	private ContatoService contatoService;

	@SuppressWarnings("unchecked")
	@GetMapping("/getAll")
	public List<Contato> list() {
		try {
			return contatoService.listAll();

		} catch (NoSuchElementException e) {
			return (List<Contato>) new ResponseEntity<Contato>(HttpStatus.NOT_FOUND);
		}

	}

	@PostMapping("/add")
	public String add(@RequestBody Contato contato) {
		contatoService.save(contato);
		return "Contato enviado!";

	}

	@GetMapping("/{id}")
	public ResponseEntity<Contato> get(@PathVariable Integer id) {
		try {
			Contato contato = contatoService.get(id);
			return new ResponseEntity<Contato>(contato, HttpStatus.OK);

		} catch (NoSuchElementException e) {
			return new ResponseEntity<Contato>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Contato> update(@RequestBody Contato newContato, @PathVariable Integer id) {
		try {
			contatoService.update(id, newContato);
			return new ResponseEntity<>(HttpStatus.OK);

		} catch (NoSuchElementException e) {
			return new ResponseEntity<Contato>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	public String delete(@PathVariable Integer id) {
		contatoService.delete(id);
		return "Contato Excluido.";
	}

}
