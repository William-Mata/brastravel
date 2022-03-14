package br.com.brastravel.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.brastravel.model.Role;

@Repository
public interface RoleRepository extends CrudRepository<Role, String> {

}
