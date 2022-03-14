package br.com.brastravel.controller;


import br.com.brastravel.configuracao.request.RegistrarRequest;
import br.com.brastravel.model.User;
import br.com.brastravel.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.brastravel.model.JwtRequest;
import br.com.brastravel.model.JwtResponse;
import br.com.brastravel.services.JwtService;

@RestController
@CrossOrigin
public class JwtController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserService userService;


    @PostMapping({"/login"})
    public ResponseEntity<?> createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {

        var jwtResponseEntity = jwtService.createJwtToken(jwtRequest);
        return ResponseEntity.ok(jwtResponseEntity);
    }

    @PostMapping({"/registrar"})
    public ResponseEntity<?> cadastrarUsuario(@RequestBody RegistrarRequest registrarRequest) {
        return userService.registerNewUser(registrarRequest);
    }
}