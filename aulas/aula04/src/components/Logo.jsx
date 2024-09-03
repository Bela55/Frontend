import './Logo.css'

function Logo(props) {
  return (
    <img 
      className="Logo" 
      scr={props.imagem} 
      alt={props.texto}
   />
  );
}

export default Logo;