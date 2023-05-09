package br.com.sigatransportes;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //ligar api
@RequestMapping("/api/cidades") //plural - mapeamento
public class CidadesController {
	
	@PostMapping
	public CidadesFormRequest salvar(@RequestBody CidadesFormRequest cidade) {
		System.out.println(cidade);
		return cidade;
		
	}

}
