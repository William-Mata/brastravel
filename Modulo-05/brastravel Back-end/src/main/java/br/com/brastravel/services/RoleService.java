package br.com.brastravel.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.brastravel.model.Role;
import br.com.brastravel.repository.RoleRepository;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public Role cadastrarRole(Role role) {
        return roleRepository.save(role);
    }
}