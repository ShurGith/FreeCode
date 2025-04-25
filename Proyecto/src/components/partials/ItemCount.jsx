import { useState, useEffect } from 'react'

function ItemCount({ producto }) {

    const [count, setCount] = useState(1)
    function sumar() {
        count < producto.stock && setCount(count + 1)
    }
    function restar() {
        count > 1 && setCount(count - 1)
    }
    function agregarAlCarrito() {
        const carrito = {
            id: producto.id,
            cantidad: count
        }
        console.log(carrito)

    }

    return (
        <>
            <div className='div-btnComprar'>
                <button className="btn-product" onClick={agregarAlCarrito}>
                    Añadir al carrito
                </button>
            </div>
            <div className="container-contador">
                <button className='btnCount' onClick={sumar}>+</button>
                <input type="number" readOnly className='inputCount' value={count} />
                <button className='btnCount' onClick={restar}>-</button>
                <p className='stock'>Stock: {producto.stock}</p>
            </div>
        </>
    )
}

export default ItemCount