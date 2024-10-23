import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Listar Contatos</NavLink>
        </li>
        <li>
          <NavLink to="/">Novo Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
