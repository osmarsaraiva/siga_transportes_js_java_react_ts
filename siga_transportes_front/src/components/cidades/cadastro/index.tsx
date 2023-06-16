import { useState } from 'react' //rock
import { Layout, Input } from 'components'
import { useCidadeService } from 'app/services'
import { cidade } from '/app/models/cidades'

export const CadastroCidades: React.FC = () => {
    
    const service = useCidadeService()
    const [cidade, setCidade] = useState<string>('') //variavel e o metodo modificador
    const [estado, setEstado] = useState<string>('')
    const [outro, setOutro] = useState<string>('')


    const submit = () => {
      const cidades: Cidade = {
        cidade,
        estado,
        outro
      }
      service
      .salvar(cidade)
      .then(cidadeResposta => console.log(cidadeResposta))  
    }

  return (
    <Layout titulo="Cadastros de Cidades">
      <div className="columns">

        <Input label = "Cidade: " 
        columnClasses="is-four-thirds"
        onChange={setCidade}
        value={cidade}
        id="inputCidade" 
        placeholder="Digite o nome da cidade"      
        />
        
        <Input label = "Estado: " 
        columnClasses="is-one-quarter"
        onChange={setEstado}
        value={estado}
        id="inputEstado" 
        placeholder="Digite o nome do Estado em SIGLAS"     
        />

      </div>

      <div className="columns">
      <Input label = "Outro: " 
        columnClasses="field column is-full"
        onChange={setOutro}
        value={outro}
        id="inputOutro" 
        placeholder="Digite o nome de outro Estado/Referência"     
        />

    

    </div>


      <div className="field is-grouped">
        <div className="control is-link">
          <button onClick={submit} className="button">Salvar</button>
        </div>

        <div className="control">
          <button className="button">Voltar</button>
        </div>
      </div>
    </Layout>
  )
}
