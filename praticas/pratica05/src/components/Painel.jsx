import './Painel.css'

function Painel (props) {
    return (
        <article>
            <h3>
            {props.itens.map((item, index) => <li key={index}>{item}</li>)}
            </h3>
            <ul></ul>
        </article>
    );
}

export default Painel;