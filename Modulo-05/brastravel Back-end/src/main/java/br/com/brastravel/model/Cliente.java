package br.com.brastravel.model;


import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "cliente")
public class Cliente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String nome;

	private Date data_nascimento;

	private String telefone;

	private String cpf;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "USER_CLIENTE",
			joinColumns = {
					@JoinColumn(name = "CLIENTE_ID")
			},
			inverseJoinColumns = {
					@JoinColumn(name = "USER_ID")
			}
	)
	private User user;

	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "CLIENTE_VIAGEM",
			joinColumns = {
					@JoinColumn(name = "CLIENTE_ID")
			},
			inverseJoinColumns = {
					@JoinColumn(name = "VIAGEM_ID")
			}
	)
	private List<Viagem> viagens;
		
}
