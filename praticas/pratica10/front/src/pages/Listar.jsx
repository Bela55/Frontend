import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscarTodos } from "../services/ContatoService";
import { remover } from "../services/ContatoService";
import Listagem from "./Listagem";

const trataAtualizar = (id) => {
  navigate(`/editar/${id}`);
};

const trataRemover = async (id) => {};

const resposta = await remover(id);
if (resposta.sucesso) {
  carregar();
  setErro("");
} else {
  setErro(resposta.mensagem);
}

function Listar() {
  const [contatos, setContatos] = useState([]);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <h1>Listar</h1>
    </>
  );
}

export default Listar;
