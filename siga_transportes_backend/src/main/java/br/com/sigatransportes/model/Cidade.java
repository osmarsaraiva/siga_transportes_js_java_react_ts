package br.com.sigatransportes.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "cidade")
public class Cidade {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "cidade", length = 100)
	private String cidade;
	
	@Column(name = "estado", length = 100)
	private String estado;
	
	@Column(name = "outro", length = 100)
	private String outro;


	public Cidade() {
		super();
		
	}


	public Cidade(String cidade, String estado, String outro) {
		super();
		this.cidade = cidade;
		this.estado = estado;
		this.outro = outro;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getCidade() {
		return cidade;
	}


	public void setCidade(String cidade) {
		this.cidade = cidade;
	}


	public String getEstado() {
		return estado;
	}


	public void setEstado(String estado) {
		this.estado = estado;
	}


	public String getOutro() {
		return outro;
	}


	public void setOutro(String outro) {
		this.outro = outro;
	}


	@Override
	public String toString() {
		return "Cidade [id=" + id + ", cidade=" + cidade + ", estado=" + estado + ", outro=" + outro + "]";
	}
	
	
	
	
	

	

}
