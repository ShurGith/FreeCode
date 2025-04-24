import './App.css'
import DataFetch from './components/dataFetch'

//import { useState, useEffect } from 'react'

function App() {
  /*const [pokis, setPokis] = useState('');
  //let pokis = false;
  function pokisChange(variable = false) {
    setPokis(variable)
    return variable
  }
*/


  return (
    <>
      <header className="header">
        <h1>Pokemons</h1>
      </header>
      <div className="datos">
        <DataFetch />
      </div>
      <footer className="footer">
        <h2>Footer</h2>
      </footer>
    </>
  )
}

export default App
