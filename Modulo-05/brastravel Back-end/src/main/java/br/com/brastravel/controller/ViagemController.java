package br.com.brastravel.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;

import br.com.brastravel.model.Cliente;
import br.com.brastravel.services.ClienteService;
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

import br.com.brastravel.model.Viagem;
import br.com.brastravel.services.ViagemService;

@RestController
@CrossOrigin
@RequestMapping("/viagem")
public class ViagemController {

	@Autowired
	private ViagemService viagemService;

	@Autowired
	private ClienteService clienteService;

	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/buscarViagens")
	public List<Viagem> list() {
		try {
			return viagemService.listAll();
		} catch (NoSuchElementException e) {
			return (List<Viagem>) new ResponseEntity<Viagem>(HttpStatus.NOT_FOUND);
		}
	}

	@PreAuthorize("hasRole('CLIENTE') or hasRole('ADMIN')")
	@PostMapping("/addViagem")
	public String add(@RequestBody Viagem viagem) {
		viagemService.save(viagem);
		return "Boa viagem!";
	}

	@PreAuthorize("hasRole('CLIENTE') or hasRole('ADMIN')")
	@GetMapping("/buscarViagem/{id}")
	public ResponseEntity<Viagem> get(@PathVariable Integer id) {
		try {
			Viagem viagem = viagemService.get(id);
			return new ResponseEntity<Viagem>(viagem, HttpStatus.OK);

		} catch (NoSuchElementException e) {
			return new ResponseEntity<Viagem>(HttpStatus.NOT_FOUND);
		}
	}

	@PreAuthorize("hasRole('CLIENTE') or hasRole('ADMIN')")
	@PutMapping("/alterarViagem/{id}")
	public ResponseEntity<Viagem> update(@RequestBody Viagem newViagem, @PathVariable Integer id) {
		try {
			Viagem existingViagem = viagemService.get(id);
			existingViagem.setOrigem(newViagem.getOrigem());
			existingViagem.setDestino(newViagem.getDestino());
			existingViagem.setValor(newViagem.getValor());
			existingViagem.setData_ida(newViagem.getData_ida());
			existingViagem.setData_volta(newViagem.getData_volta());
			viagemService.save(existingViagem);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Viagem>(HttpStatus.NOT_FOUND);
		}
	}

	@PreAuthorize("hasRole('CLIENTE') or hasRole('ADMIN')")
	@DeleteMapping("/excluirViagem/{id}")
	public String delete(@PathVariable Integer id) {
		Viagem delViagem = viagemService.get(id);
		Cliente cliente = clienteService.findClienteByViagem(delViagem);
		List<Viagem> newViagem = new ArrayList<Viagem>();
		cliente.getViagens().forEach(viagem1 ->
					newViagem.add(viagem1.equals(delViagem) ? null : viagem1)
		);
		if(!newViagem.isEmpty()) {
			cliente.setViagens(newViagem);
			clienteService.save(cliente);
		}else{
			cliente.setViagens(newViagem);
			clienteService.save(cliente);
		}
		viagemService.delete(id);
		return "Viagem Cancelada.";
	}

}
