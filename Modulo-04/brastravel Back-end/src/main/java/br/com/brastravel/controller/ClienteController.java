package br.com.brastravel.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.brastravel.model.Cliente;
import br.com.brastravel.service.ClienteService;
import br.com.brastravel.service.ViagemService;


@RestController
@RequestMapping("/cliente")
@CrossOrigin
public class ClienteController {

	
	@Autowired
	private ClienteService clienteService;
	
	@Autowired
	private ViagemService viagemService;
	
	@SuppressWarnings("unchecked")
	@GetMapping("/getAll")
	public List<Cliente> list(){
		try {
			return clienteService.listAll();
		} catch (NoSuchElementException e) {
			return (List<Cliente>) new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/add")
	public String add(@RequestBody Cliente cliente ) {
		cliente.setViagem(viagemService.save(cliente.getViagem()));
		clienteService.save(cliente);
		 
		 return "Cliente cadastrado!";
		
	}
	
	 @GetMapping("/{id}")
	    public ResponseEntity<Cliente> get(@PathVariable Integer id) {
	        try {
	        	Cliente cliente = clienteService.get(id);
	            return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);

	        } catch (NoSuchElementException e) {
	            return new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
	        }
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<Cliente> update(@RequestBody Cliente newCliente,@PathVariable Integer id){
	        try{
	        	clienteService.update(id, newCliente);
	        	if(newCliente.getViagem() != null) {	        		
	        		viagemService.update(newCliente.getViagem().getId(), newCliente.getViagem());
	        	}
	        	return new ResponseEntity<>(HttpStatus.OK);
	        }catch (NoSuchElementException e){
	            return new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
	        }
	    }

	    @DeleteMapping("/{id}")
	    public String delete(@PathVariable Integer id){
	    	Cliente delCliente = clienteService.get(id);
	    	clienteService.delete(id);
	    	if(delCliente.getViagem() != null) {	        		
	    		viagemService.delete(delCliente.getViagem().getId());
	    	}
	        return "Cliente Excluido.";
	    }
	
}
