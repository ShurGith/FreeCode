import { useState } from 'react';

//CF %##2vJ9zbcs4


function Counter() {
    const [count, setCount] = useState(0)

    function sumar() {
        setCount(count + 1)
        console.log("Sumar");
    }

    function restar() {
        setCount(count - 1)
        console.log("Restar");

    }
    return (
        <div className='divcontainer'>
            <h1>Count: {count}</h1>
            <div className='divbuttons'>
                <button className='aceptar' onClick={sumar}>Sumar</button>
                <button className='rechazar' onClick={restar}>Restar</button>
            </div>
        </div>
    )
}

export default Counter