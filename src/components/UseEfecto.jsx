import { useState, useEffect } from 'react'

function UseEfecto() {
    const [text, setText] = useState("")


    const handleText = (e) => {
        setText(e.target.value)
        // console.log(text);
    }

    useEffect(() => {
        console.log('Elemento Actualizado');
        return () => {
            console.log('Return Elemento Eliminado');
        }
    }, [])

    return (
        <>
            <div className="divcontainer">
                <h1>UseEffect</h1>
                <button className='rechazar' onClick={delInput}>Ocultar Elemento</button>
                <div className='divinner'>
                    <input type="text" className="inputText" onChange={handleText} />
                    <h2>{text}</h2>
                </div>
            </div>
        </>
    )
}
export default UseEfecto