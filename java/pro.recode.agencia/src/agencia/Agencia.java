package agencia;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Agencia {

	private int cont = 0;
	private boolean repetido;
	private char opcaoMenu = '0';
	private List<Cliente> clientes = new ArrayList<>();
	private List<Destino> destinos = new ArrayList<>();
	Scanner dados = new Scanner(System.in);

	public Agencia() {

		System.out.println("#### Bem vindo(a) a agencia de viagens Recode Pro!!! ####");

		this.menu();
	}

	public void menu() {
		if(opcaoMenu != '7') {			
		System.out.println("\n==== Menu da agencia de viagens ====");
		System.out.println("1 - Cadastrar Novo Cliente");
		System.out.println("2 - Consulta Cliente");
		System.out.println("3 - Consulta todos Clientes");
		System.out.println("4 - Cadastrar Novos Destinos");
		System.out.println("5 - Consulta Destinos");
		System.out.println("6 - Consulta Todos os Destinos");
		System.out.println("7 - Sair");
		System.out.print("Selecione uma das opcoes: ");

		opcaoMenu = dados.next().charAt(0);
		this.opcoes(opcaoMenu);
		}

	}

	public void opcoes(char opcao) {
		do {

			switch (opcaoMenu) {
			case '1':
				this.cadastrarCliente();
				break;
			case '2':
				this.consultaCliente();
				break;

			case '3':
				this.listarClientes();
				break;

			case '4':
				this.cadastrarDestino();
				break;

			case '5':
				this.consultaDestino();
				break;

			case '6':
				this.listarDestinos();
				break;
			case '7':
				System.out.println("Programa finalizado com sucesso!");
				break;

			default:
				System.out.println("[ Opção Inválidada!!! ]");
				break;
			}

			if ((this.clientes.size() >= 1) && (this.destinos.size() >= 1)) {
				if ((this.clientes.get(this.clientes.size() - 1) != null)
						&& (this.destinos.get(this.destinos.size() - 1) != null)) {
					repetido = false;

					for (Destino destino : this.destinos) {
						if (destino.getClientes().toString()
								.contains(this.clientes.get(this.clientes.size() - 1).toString())) {
							repetido = true;
						}
					}

					if (!repetido) {
						this.destinos.get(this.destinos.size() - 1)
								.setClientes(this.clientes.get(this.clientes.size() - 1));
					}

					repetido = false;

					for (Cliente cliente : this.clientes) {

						if (cliente.getDestinos().toString()
								.contains(this.destinos.get(this.destinos.size() - 1).toString())) {
							repetido = true;
						}
					}

					if (!repetido) {
						this.clientes.get(this.clientes.size()-1)
								.setDestinos(this.destinos.get(this.destinos.size() - 1));
					}
				}
			}

			this.menu();
			
		} while (opcaoMenu != '7');
	}

	public void cadastrarCliente() {
		System.out.println("\n##### Bem vindo ao cadastro de clientes!!! ####");
		System.out.print("Sr(a) cliente informe seu nome: ");
		this.clientes.add(this.clientes.size(), new Cliente(dados.next()));
	}

	public void consultaCliente() {
		if (this.clientes.size() >= 1) {
			this.clientes.get(this.clientes.size() - 1).informacoes();
		}
	}

	public void listarClientes() {
		cont = 0;
		for (Cliente cliente : this.clientes) {
			System.out.println(++cont + "° - Cliente: " + cliente.getNomes());
		}
	}

	public void cadastrarDestino() {
		System.out.println("\n\n##### Bem vindo ao cadastro de destinos!!! ####");
		if (this.clientes.size() >= 1) {
			System.out.print("Sr(a) " + this.clientes.get(clientes.size() - 1).getNomes() + " informe seu destino: ");
		} else {
			System.out.print("Sr(a) cliente informe seu destino: ");
		}
		this.destinos.add(this.destinos.size(), new Destino(dados.next()));

	}

	public void consultaDestino() {
		if (this.destinos.size() >= 1) {
			this.destinos.get(this.destinos.size() - 1).informacoes();
		}

	}

	public void listarDestinos() {
		cont = 0;
		for (Destino destino : this.destinos) {
			System.out.println(++cont + "° - Destino: " + destino.getDestino());
		}
	}
}
