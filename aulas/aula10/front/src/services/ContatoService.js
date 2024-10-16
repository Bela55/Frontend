import axios from "axios";

function carregarContatos() {
  const dados = [];
  axios
    .get(import.meta.env.VITE_URL_API)
    .then((response) => dados.push(...response.data))
    .catch((error) => new Error("Deu ruim"));
  return dados;
}

function criarContato(contato) {
  axios
    .post(import.meta.env.VITE_URL_API, contato)
    .then((response) => (contato.id = response.id))
    .catch((error) => new Error("Deu ruim"));
  return contato;
}

function atualizarContato(contato) {
  axios
    .put(import.meta.end.URL_API)
    .then(response)
    .catch(error);
}

function removerContato(contato) {
  axios
    .delete(import.meta.env.URL_API)
    .then(response)
    .catch(error);
}

function obterContato(contato) {}

export { carregarContatos, criarContato }