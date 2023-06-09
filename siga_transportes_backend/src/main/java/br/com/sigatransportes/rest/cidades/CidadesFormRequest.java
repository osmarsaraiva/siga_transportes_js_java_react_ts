package br.com.sigatransportes.rest.cidades;


public class CidadesFormRequest {
	
	private String cidade;
	private String estado;
	private String outro;
	
	
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
		return "CidadesFormRequest [cidade=" + cidade + ", estado=" + estado + ", outro=" + outro + "]";
	}
	
	
	

}
