package br.com.brastravel.controller;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
import br.com.brastravel.services.ContatoService;
import org.springframework.web.client.HttpStatusCodeException;

@RestController
@CrossOrigin
@RequestMapping("/contato")
public class ContatoController {

	@Autowired
	private ContatoService contatoService;

	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/buscarContatos")
	public ResponseEntity<List<Contato>> buscarContatos() {
		List<Contato> listContatos = contatoService.listAll();
		return ResponseEntity.ok(listContatos);
	}

	@PostMapping("/addContato")
	public String addContato(@RequestBody Contato contato) {
		contatoService.save(contato);
		return "Contato enviado!";
	}

	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/buscarContato/{id}")
	public ResponseEntity<Contato> buscarContato(@PathVariable Integer id) {
		try {
			Contato contato = contatoService.get(id);
			return new ResponseEntity<Contato>(contato, HttpStatus.OK);

		} catch (NoSuchElementException e) {
			return new ResponseEntity<Contato>(HttpStatus.NOT_FOUND);
		}
	}

	@PreAuthorize("hasRole('ADMIN')")
	@PutMapping("/alterarContato/{id}")
	public ResponseEntity<Contato> alterarContato(@RequestBody Contato newContato, @PathVariable Integer id) {
		try {
			contatoService.update(id, newContato);
			return new ResponseEntity<>(HttpStatus.OK);

		} catch (NoSuchElementException e) {
			return new ResponseEntity<Contato>(HttpStatus.NOT_FOUND);
		}
	}

	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/deletarContato/{id}")
	public String deleteContato(@PathVariable Integer id) {
		contatoService.delete(id);
		return "Contato Excluido.";
	}

}
