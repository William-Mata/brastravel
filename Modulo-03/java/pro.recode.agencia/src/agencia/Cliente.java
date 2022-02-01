package agencia;

import java.util.ArrayList;
import java.util.List;

public class Cliente {

	private String nomes;
	private List<Destino> destinos = new ArrayList<Destino>();

	public Cliente(String nome) {
		super();
		this.nomes = nome;
	}

	public String getNomes() {
		return this.nomes;
	}

	public void setNomes(String nomes) {
		this.nomes = nomes;
	}
		
	public String getDestinos() {
		return this.destinos.toString();
	}

	public void setDestinos(Destino destino) {
		this.destinos.add(destino);
	}

	@Override
	public String toString() {
		return  this.nomes;
	}

	public void informacoes() {
		System.out.println("\n#### Informações do Cliente ####");
		System.out.println("Cliente: " + this.getNomes());
		for (Destino destino : this.destinos) {
			System.out.println("Destino: " + destino.getDestino());
		}
	}
}
