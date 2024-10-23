import axios from "axios";

const url = import.meta.env.VITE_URL_API;

function carregarContatos() {
  const dados = [];
  axios
    .get(import.meta.env.VITE_URL_API)
    .then((response) => dados.push(...response.data))
    .catch((error) => new Error("Deu ruim"));
  return dados;
}

function criarContato(contato) {
  return axios
    .post(url, contato)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, message: error.message };
    });

    // try {
    //   const response = await axios.post(url, contato);
    //   return { sucesso: true, dado: response.data }
    // } catch (erro) {
    //   return { sucesso: false, message: erro.message }
    // }

  };

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

export { carregarContatos, criarContato };
