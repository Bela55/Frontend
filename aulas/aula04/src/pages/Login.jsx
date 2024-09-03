import Logo from "../components/Logo";
import Titulo from "../components/Titulo";
import InputUsuario from "../components/InputUsuario";
import InputSenha from "../components/InputSenha";
import BotaoSubmit from "../components/BotaoSubmit";
import Link from "../components/Link";
import Rodape from "../components/Rodape";

function Login() {
  const urlLogo = "https://www.bing.com/images/search?view=detailV2&ccid=0IgGc9d2&id=3127E9AADAD4481508B39D1F38D0FDC066CB937C&thid=OIP.0IgGc9d2XiCzE-vYWVk8DwHaEK&mediaurl=https%3a%2f%2flogos-world.net%2fwp-content%2fuploads%2f2020%2f04%2fBurger-King-Logo-1969-1994.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d0880673d7765e20b313ebd859593c0f%3frik%3dfJPLZsD90DgfnQ%26pid%3dImgRaw%26r%3d0&exph=2160&expw=3840&q=Burger+King+Logos&simid=607992122439387023&FORM=IRPRST&ck=D659D47838B6AD469D1E3D282448929D&selectedIndex=1&itb=1&ajaxhist=0&ajaxserp=0";
  const textoLogo = "Logo da Aplicação";
  return (
    <>
      <main>
        <Logo imagem={urlLogo} texto={textoLogo} />
        <Titulo />
        <InputUsuario />
        <InputSenha />
        <BotaoSubmit />
        <Link />
        <Link />
      </main>
      <Rodape />
    </>
  );
}

export default Login;
