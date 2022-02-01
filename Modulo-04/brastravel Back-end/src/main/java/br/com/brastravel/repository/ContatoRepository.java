package br.com.brastravel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.brastravel.model.Contato;


public interface ContatoRepository extends JpaRepository<Contato, Integer> {

	
	
}
