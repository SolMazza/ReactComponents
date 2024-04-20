import { filmes } from "./filmes";
function Enunciado2(){
    return (
        <div>
            {filmes.map(filme =>{
        if(filme.oscar){
         return (
         <h2>{filme.nome}</h2>
       )
     }})}
        </div>
    )
}
export default Enunciado2;