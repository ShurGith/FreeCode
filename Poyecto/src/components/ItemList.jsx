import ItemForList from './ItemForList'

const ItemList = ({ productos }) => {
    return (
        <>
            <h1>Productos</h1>
            <div className="products-container">
                {productos &&
                    productos.map((producto) => {
                        return (
                            <ItemForList producto={producto} key={producto.id} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ItemList;