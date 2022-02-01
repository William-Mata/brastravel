package br.com.brastravel.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "viagem")
public class Viagem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String origem;
	private String destino;
	private String valor;
	private Date data_ida;
	private Date data_volta;
	
	

	public Viagem() {
		
	}
	
	
	public Viagem(Integer id, String origem, String destino, String valor, Date data_ida, Date data_volta) {
		super();
		this.id = id;
		this.origem = origem;
		this.destino = destino;
		this.valor = valor;
		this.data_ida = data_ida;
		this.data_volta = data_volta;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getOrigem() {
		return origem;
	}

	public void setOrigem(String origem) {
		this.origem = origem;
	}

	public String getDestino() {
		return destino;
	}

	public void setDestino(String destino) {
		this.destino = destino;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	public Date getData_ida() {
		return data_ida;
	}

	public void setData_ida(Date data_ida) {
		this.data_ida = data_ida;
	}

	public Date getData_volta() {
		return data_volta;
	}

	public void setData_volta(Date data_volta) {
		this.data_volta = data_volta;
	}

}
