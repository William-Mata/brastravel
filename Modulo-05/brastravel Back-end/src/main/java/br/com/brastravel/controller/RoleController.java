package br.com.brastravel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.brastravel.model.Role;
import br.com.brastravel.services.RoleService;




@RestController
@CrossOrigin
public class RoleController {

	@Autowired
	private RoleService roleService;
	
	@PostMapping({"/cadastrarRole"})
	public Role cadastrarRole(@RequestBody Role role) {
		return roleService.cadastrarRole(role);
	}
	
}
