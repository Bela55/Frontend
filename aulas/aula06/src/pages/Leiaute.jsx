import { NavLink, Outlet } from "react-router-dom";

function Leiaute () {
    return (
        <>
            <header>
                <h1>Aluno Online</h1>
            </header>
            <main>
               <nav>
                  <ul>
                      <li><NavLink to="/Home">Home</NavLink></li>
                      <li><NavLink to="/Perfil">Perfil</NavLink></li>
                      <li><NavLink to="/">Sair</NavLink></li>
                  </ul>
                </nav>
                <section>
                  <Outlet />
                </section>
            </main>
        </>
    );
}

export default Leiaute;