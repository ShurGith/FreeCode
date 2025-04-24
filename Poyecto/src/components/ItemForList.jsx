
import { codeColors } from '../helpers/codeColors'
function ItemForList({ producto }) {
    console.log(producto)
    return (
        <div className="card-forlist">
            <h2 className="title-product">{producto.title}</h2>
            <h5 className="category-product"
                style={{ backgroundColor: codeColors[producto.category] || '#bdc3c7' }}
            >{producto.category}</h5>
            <img className="img-product" src={producto.thumbnail} alt={producto.title} />
            {/*  <p className="description-product">{producto.description}</p> */}
            <h3 className="price-product">${producto.price}</h3>
            <a className="btn-product" href={`/item/${producto.id}`}>Mas Info</a>
        </div>
    )
}

export default ItemForList