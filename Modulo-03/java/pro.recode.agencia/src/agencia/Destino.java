package agencia;

import java.util.ArrayList;
import java.util.List;

public class Destino {

	private String destino;
	private List<Cliente> clientes = new ArrayList<>();

	public Destino(String destino) {
		super();
		this.destino = destino;
	}

	public String getDestino() {
		return this.destino;
	}

	public void setDestino(String destino) {
		this.destino = destino;
	}

	public String getClientes() {
		return this.clientes.toString();
	}

	public void setClientes(Cliente cliente) {
		this.clientes.add(cliente);
	}

	// fiz para teste
	@Override
	public String toString() {
		return this.destino;
	}

	public void informacoes() {
		System.out.println("\n#### Informações do Destino ####");
		System.out.println("Destino: " + this.getDestino());
		for (Cliente cliente : this.clientes) {
			System.out.println("Clientes: " + cliente.getNomes());
		}
	}

}
