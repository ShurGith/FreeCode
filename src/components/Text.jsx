import { useState } from 'react'
import TextMostrar from './TextMostrar'

function Text() {
    const [show, setShow] = useState(true)
    const [eltexto, setelTexto] = useState("")
    const [componente, setComponente] = useState(true)

    function texto(e) {
        setelTexto(e.target.value)
    }
    function borraTexto(e) {
        setelTexto("")
        e.target.parentNode.querySelector("input").value = ""
    }
    function handleText() {
        setShow(!show)
    }
    function handleComponent() {
        setComponente(!componente)
    }

    return (
        <>
            <div className="divcontainer">
                <h1>Escribe algo</h1>
                <div className='divinner'>
                    <input type="text" onChange={texto} />
                    <h2>{eltexto}</h2>
                </div>
                {eltexto && <button className='rechazar' onClick={borraTexto}>Borrar</button>}
            </div>

            <div className="divcontainer">
                <div className='divinner'>{show && <h1>Esto es visible</h1>}</div>
                <div className="divbutton">
                    <button className={!show ? "aceptar" : "rechazar"}
                        onClick={handleText}>
                        {!show ? "Mostrar" : "Ocultar"}
                    </button>
                </div>
            </div>

            <div className="divcontainer">
                <h1>Componente</h1>
                <div className='divinner'>{componente && <TextMostrar />} </div>
                <div className="divbutton">
                    <button className={!componente ? "aceptar" : "rechazar"}
                        onClick={handleComponent}>
                        {!componente ? "Mostrar" : "Ocultar"}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Text