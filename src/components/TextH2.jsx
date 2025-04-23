import { useEffect, useState } from 'react'

function TextH2() {
    const [text, setText] = useState("")

    const handleText = (e) => {
        setText(e.target.value)
        //  console.log(text)
    }
    //console.log("Hola mundo")

    useEffect(() => {
        console.log("MONTADO")
        return () => {
            console.log("DESMONTADO")
        }
    }, [])

    /*
    //**
      ?Sin nada se ejecuta el montado y el desmontado cada vez que se renderiza el componente es decir
      ?cuando se escribe en el input
    
    //*** Con corchete vacio se ejecuta el montado y el desmontado al pulsar el boton pero nada al escribir.
    
    //*** Con corchete con variable se ejecuta el montado y el desmontado al pulsar el boton y al escribir
    
    */

    return (
        <>
            <div>
                <input type="text" className="inputText" onChange={handleText} />
                <h2>{text}</h2>
            </div>
        </>
    )
}
export default TextH2