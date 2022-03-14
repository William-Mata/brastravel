package br.com.brastravel.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.brastravel.model.Viagem;
import br.com.brastravel.repository.ViagemRepository;

@Service
public class ViagemService {

	@Autowired
	private ViagemRepository repoViagem;

	public List<Viagem> listAll() {
		return repoViagem.findAll();
	}

	public Viagem save(Viagem viagem) {
		return repoViagem.save(viagem);
	}

	public Viagem get(Integer id) {
		return repoViagem.findById(id).get();
	}

	public void update(Integer id, Viagem newViagem) {
		if ((id != null && id != 0) && (newViagem != null)) {
			Viagem oldViagem = repoViagem.getById(id);
			oldViagem.setOrigem(newViagem.getOrigem());
			oldViagem.setDestino(newViagem.getDestino());
			oldViagem.setValor(newViagem.getValor());
			oldViagem.setData_ida(newViagem.getData_ida());
			oldViagem.setData_volta(newViagem.getData_volta());
			repoViagem.save(oldViagem);
		}
	}

	public void delete(Integer id) {
		repoViagem.deleteById(id);
	}

}
