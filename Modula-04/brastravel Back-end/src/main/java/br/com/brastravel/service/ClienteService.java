package br.com.brastravel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.brastravel.model.Cliente;
import br.com.brastravel.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repoCliente;
	
	public List<Cliente> listAll() {
		return repoCliente.findAll();
	}

	public void save(Cliente cliente) {
		repoCliente.save(cliente);
	}

	public void update(Integer id, Cliente newCliente) {
		Cliente oldCliente = repoCliente.getById(id);
		oldCliente.setNome(newCliente.getNome());
		oldCliente.setIdade(newCliente.getIdade());
		oldCliente.setCpf(newCliente.getCpf());
		repoCliente.save(oldCliente);
	}

	
	public Cliente get(Integer id) {
		return repoCliente.findById(id).get();
	}

	public void delete(Integer id) {
		repoCliente.deleteById(id);
	}

}
