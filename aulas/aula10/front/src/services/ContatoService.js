import axios from "axios";

const url = import.meta.env.VITE_URL_API;

function carregarContatos() {
  return axios
    .get(import.meta.env.VITE_URL_API)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: error.message };
    });
}

function criarContato(contato) {
  return axios
    .post(url, contato)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: error.message };
    });

  // try {
  //   const response = await axios.post(url, contato);
  //   return { sucesso: true, dado: response.data }
  // } catch (erro) {
  //   return { sucesso: false, message: erro.message }
  // }
}

function atualizarContato(contato) {
  axios
    .put(import.meta.end.URL_API)
    .then(response)
    .catch(error);
}

function removerContato(id) {
  return axios
    .delete(`${url}/${id}`)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: error.message };
    });
}

function obterContato(id) {
  return axios
    .get(`${url}/${id}`)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: error.message };
    });
}

export { carregarContatos, criarContato, removerContato, obterContato };
