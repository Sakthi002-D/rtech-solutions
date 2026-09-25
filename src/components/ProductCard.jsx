import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  if (!product) return null

  return (
    <article className="product-card">
      <div className="product-card-header">
        <span className="product-card-tag">{product.category}</span>
        <h3>{product.name}</h3>
      </div>

      <p className="product-card-description">{product.shortDescription}</p>

      {product.types && product.types.length > 0 ? (
        <ul className="product-card-types">
          {product.types.map((type) => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      ) : null}

      <Link className="product-card-link" to={`/products/${product.slug}`}>
        View Details
      </Link>
    </article>
  )
}

export default ProductCard