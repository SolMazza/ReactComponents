import './App.css';
import { filmes } from './Components/filmes';

function App() {
  
  return (
    <div>
      {filmes.map(filme =>{
       if(filme.oscar){
        return (
        <h2>{filme.nome}</h2>
      )
    }
      })}
    </div>
  )
}

export default App;
