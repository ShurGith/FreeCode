import { useContext } from "react"
import { CartContext } from "../context/CartContext"


function Carrito() {
    const { carrito } = useContext(CartContext)

    return (
        <div className="carrito-page">
            {carrito.map((producto) => (
                <div className="card-product" key={producto.id}>
                    <h2 className="title-product">{producto.title}</h2>
                    <p className="price-product">{producto.price}</p>
                    <p className="carrito-count">{producto.count}</p>
                    <img className="img-product" src={producto.thumbnail} alt={producto.title} />
                </div>
            ))}
        </div>
    )
}

export default Carrito