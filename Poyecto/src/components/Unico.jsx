
import { codeColors } from '../helpers/codeColors'
function Item({ producto }) {
    console.log(producto)
    return (
        <div className="card-product">
            <h2 className="title-product">{producto.title}</h2>
            <div className="container-imagenes">
                <img className="img-product" src={producto.thumbnail} alt={producto.title} />
                {producto.images &&
                    <div className="div-thumbs">
                        {producto.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className="thumbnail"
                            />
                        ))}
                    </div>
                }
            </div>
            <p className="description-product">{producto.description}</p>
            <h3 className="price-product">${producto.price}</h3>
            <h5 className="category-product"
                style={{ backgroundColor: codeColors[producto.category] || '#bdc3c7' }}
            >{producto.category}</h5>
            <a className="btn-product" href={`/item/${producto.id}`}>Comprar</a>
        </div>
    )
}

export default Item