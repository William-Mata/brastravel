package br.com.brastravel.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;

import br.com.brastravel.model.User;
import br.com.brastravel.model.Viagem;
import br.com.brastravel.services.UserService;
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

import br.com.brastravel.model.Cliente;
import br.com.brastravel.services.ClienteService;
import br.com.brastravel.services.ViagemService;

@RestController
@CrossOrigin
@RequestMapping("/cliente")
public class ClienteController {

	@Autowired
	private ClienteService clienteService;

	@Autowired
	private UserService userService;

	@Autowired
	private ViagemService viagemService;

	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/buscarClientes")
	public List<Cliente> list() {
		try {
			return clienteService.listAll();
		} catch (NoSuchElementException e) {
			return (List<Cliente>) new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
		}
	}

	@PreAuthorize("hasRole('CLIENTE')")
	@PostMapping("/cadastrarCliente/{id}")
	public String add(@RequestBody Cliente cliente, @PathVariable Integer id) {
		cliente.setUser(userService.get(id));
		clienteService.save(cliente);
		return "Cliente cadastrado!";
	}

	@PreAuthorize("hasRole('CLIENTE') or hasRole('ADMIN')")
	@GetMapping("/buscarCliente/{id}")
	public ResponseEntity<Cliente> get(@PathVariable Integer id) {
		try {
			Cliente cliente = clienteService.get(id);
			return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);

		} catch (NoSuchElementException e) {
			return new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
		}
	}

	@PreAuthorize("hasRole('CLIENTE')")
	@GetMapping("/buscarClienteByUser/{id}")
	public ResponseEntity<Cliente> getCliente(@PathVariable Integer id) {
		try {
			User user = userService.get(id);
			Cliente cliente = clienteService.getCliente(user);
			return ResponseEntity.ok(cliente);

		} catch (NoSuchElementException e) {
			return new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
		}
	}

	@PreAuthorize("hasRole('CLIENTE') or hasRole('ADMIN')")
	@GetMapping("/buscarClienteByViagem/{id}")
	public ResponseEntity<Cliente> getClienteViagem(@PathVariable Integer id) {
		try {
			Viagem viagem = viagemService.get(id);
			Cliente cliente = clienteService.findClienteByViagem(viagem);
			return ResponseEntity.ok(cliente);

		} catch (NoSuchElementException e) {
			return new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
		}
	}

	@PreAuthorize("hasRole('CLIENTE') or hasRole('ADMIN')")
	@PutMapping("/alterarCliente/{id}")
	public ResponseEntity<Cliente> update(@RequestBody Cliente newCliente, @PathVariable Integer id) {
		try {
			clienteService.update(id, newCliente);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
		}
	}

	@PreAuthorize("hasRole('CLIENTE') or hasRole('ADMIN')")
	@DeleteMapping("/deleteCliente/{id}")
	public String delete(@PathVariable Integer id) {
		Cliente delCliente = clienteService.get(id);
		delCliente.setUser(new User());
		clienteService.save(delCliente);
		clienteService.delete(delCliente.getId());
		if (!delCliente.getViagens().isEmpty()) {
			delCliente.getViagens().forEach(viagem ->
					viagemService.delete(viagem.getId())
			);
		}
		return "Cliente Excluido.";
	}


	@PreAuthorize("hasRole('CLIENTE')")
	@PutMapping("/comprarViagem/{id}")
	public ResponseEntity<Cliente> comprarViagem(@RequestBody Viagem viagem, @PathVariable Integer id) {
		try {
			Cliente clienteV = clienteService.get(id);
			if (clienteV != null && viagem != null) {
				List<Viagem> newViagem = new ArrayList<Viagem>();
				newViagem.add(viagemService.save(viagem));
				clienteV.getViagens().forEach(viagem1 ->
						newViagem.add(viagem1)
				);
				clienteV.setViagens(newViagem);
				clienteService.save(clienteV);
			}
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
		}
	}
}
