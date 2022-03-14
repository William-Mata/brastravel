package br.com.brastravel.services;

import java.util.List;
import java.util.Optional;

import br.com.brastravel.model.User;
import br.com.brastravel.model.Viagem;
import br.com.brastravel.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.brastravel.model.Cliente;
import br.com.brastravel.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repoCliente;
	@Autowired
	private UserRepository userRepository;
	
	public List<Cliente> listAll() {
		return repoCliente.findAll();
	}

	public void save(Cliente cliente) {
		repoCliente.save(cliente);
	}

	public void update(Integer id, Cliente newCliente) {
		Cliente oldCliente = repoCliente.getById(id);
		oldCliente.setNome(newCliente.getNome());
		oldCliente.setData_nascimento(newCliente.getData_nascimento());
		oldCliente.setTelefone(newCliente.getTelefone());
		oldCliente.setCpf(newCliente.getCpf());
		repoCliente.save(oldCliente);
	}

	public Cliente get(Integer id) {
		return repoCliente.findById(id).get();
	}

	public void delete(Integer id) {
		repoCliente.deleteById(id);
	}

	public Cliente getCliente(User user) {
		Cliente cliente = null;
		return  repoCliente.findClienteByUser(user).orElse(cliente);
	}
	public Cliente findClienteByViagem(Viagem viagem) {
		Cliente cliente = null;
		return  repoCliente.findClienteByViagens(viagem).orElse(cliente);
	}

}
