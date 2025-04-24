import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import ItemList from "./ItemList"

function itemListContainer() {
    const [productos, setProductos] = useState([])
    console.log(productos)
    useEffect(() => {
        pedirDatos()
            .then((res) => setProductos(res.products))
    }, [])


    return (
        <ItemList productos={productos} />
    )
}

export default itemListContainer