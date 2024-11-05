import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  return (
    <>
      <h1>Login</h1>
      <button
        onClick={(e) => login({ email: "isa@iesb.br", senha: "abcd1234" })}
      >
        Entrar
      </button>
    </>
  );
}

export default Login;
