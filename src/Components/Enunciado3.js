import { filmes } from "./filmes";

function FilmeCard(props) {
    return (
        <h2> {props.oscar ? '🏳️‍🌈' : null} {props.nome}</h2>
    )
}
function Enunciado3() {
    return (
        <div>
            {filmes.map(filme => {
                return <FilmeCard oscar={filme.oscar} nome={filme.nome}></FilmeCard>
            })}
        </div>
    )
}

export default Enunciado3;