/*import Counter from './components/Counter'
import Text from './components/Text'
import UseEfecto from './components/UseEfecto'*/
import TextH2 from "./components/TextH2"
import { useState } from 'react'

function App() {
    const [boton, setBoton] = useState(false)


    const manejador = () => {
        setBoton(!boton)
    }

    return (
        <div className="app">
            <h1>UseState</h1>
            <button className='aceptar'
                onClick={manejador}>
                Accion Boton
            </button>
            {boton && <TextH2 />}
        </div>
    )
}

export default App