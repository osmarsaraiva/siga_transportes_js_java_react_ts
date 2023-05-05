import { useState } from "react";
import { Layout } from "components";

export const CadastroCidades: React.FC = () => {
    
    const [cidade, setCidade] = useState('')

    const [estado, set] = useState('')

    const [outro, setOutro] = useState('')

  return (
    <Layout titulo="Cadastros de Cidades">

      <div className="columns"></div>
      <div className="field is-half column">
        <label className="label" htmlFor="inputCidade">
          Cidade:
        </label>
        <div className="control">
          <input
            className="input"
            id="inputCidade" value = {cidade}
            placeholder="Digite o nome da cidade"
          />
        </div>
      </div>

      <div className="field is-half column">
        <label className="label" htmlFor="inputEstado">
          Estado:
        </label>
        <div className="control">
          <input
            className="input"
            id="inputEstado" value = {estado}
            placeholder="Digite o nome da Estado em SIGLAS"
          />
        </div>
      </div>

      <div className="field is-half column">
        <label className="label" htmlFor="inputOutro">
          Outro:
        </label>
        <div className="control">
          <input
            className="input"
            id="inputOutro" value = {outro}
            placeholder="Digite o nome de outro Estado/Referência"
          />
        </div>
      </div>


      <div className="field is-grouped">
        <div className="control">
          <button className="button">Salvar</button>
        </div>
        <div className="control">
          <button className="button">Voltar</button>
        </div>
      </div>
    </Layout>
  );
};
