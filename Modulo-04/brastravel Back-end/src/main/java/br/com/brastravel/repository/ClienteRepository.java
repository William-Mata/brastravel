package br.com.brastravel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.brastravel.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}



