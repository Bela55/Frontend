import Conteudo from "../components/Conteudo";
import FormLogin from "./FormLogin";
import Rodape from "../components/Rodape";

function Login() {
  return (
    <>
      <h1>Aluno Online</h1>
      <Conteudo>
        <FormLogin />
      </Conteudo>
      <Rodape />
    </>
  );
}

export default Login;
