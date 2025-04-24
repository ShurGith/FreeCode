import { useState, useEffect } from 'react'
import { pedirUnico } from '../helpers/pedirDatos'
import Item from './Unico'
const ItemDetails = ({ itemId }) => {

    const [item, setItem] = useState(null)

    useEffect(() => {
        pedirUnico(itemId)
            .then((res) => { setItem(res) })
    }, [itemId])

    return (
        <div>
            <h1>Detalle del producto</h1>
            {item &&
                <Item producto={item} />
            }
        </div>
    )
}

export default ItemDetails