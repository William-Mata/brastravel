package br.com.brastravel.repository;

import br.com.brastravel.model.User;
import br.com.brastravel.model.Viagem;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.brastravel.model.Cliente;

import java.util.Optional;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
    Optional<Cliente> findClienteByUser(User user);
    Optional<Cliente> findClienteByViagens(Viagem viagem);
}



