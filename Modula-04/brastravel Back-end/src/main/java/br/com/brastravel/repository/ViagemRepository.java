package br.com.brastravel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.brastravel.model.Viagem;

public interface ViagemRepository extends JpaRepository<Viagem, Integer> {

}
