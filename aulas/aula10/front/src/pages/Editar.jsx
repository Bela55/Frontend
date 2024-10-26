import { useParams } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Formulario from "./Formulario";
import { obterContato } from "../services/ContatoService";

function Editar() {
  const { id } = useParams();

  const carregar = async () => {
    const resultado = await obterContato(id);
  };
  
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <h2>Editar Contato</h2>
        <Formulario trataEnviar={() => {}} />
      </Conteudo>
    </>
  );
}

export default Editar;
