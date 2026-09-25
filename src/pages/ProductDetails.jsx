import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'

function ProductDetails() {
  const { productSlug } = useParams()
  const product = products.find((item) => item.slug === productSlug)

  if (!product) {
    return (
      <main className="page product-details-page">
        <div className="page-header">
          <p className="section-kicker">Product details</p>
          <h1>Product not found</h1>
        </div>
        <Link className="text-link" to="/products">
          Back to products <span aria-hidden="true">-&gt;</span>
        </Link>
      </main>
    )
  }

  return (
    <main className="page product-details-page">
      <div className="page-header">
        <p className="section-kicker">{product.category}</p>
        <h1>{product.name}</h1>
      </div>

      <article className="product-details-card">
        <p className="product-details-description">{product.shortDescription}</p>

        {product.types && product.types.length > 0 ? (
          <div className="detail-section">
            <h2>Types</h2>
            <ul>
              {product.types.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {product.technicalInfo && product.technicalInfo.length > 0 ? (
          <div className="detail-section">
            <h2>Technical information</h2>
            <ul>
              {product.technicalInfo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <Link className="primary-link" to="/products">
          Back to all products
        </Link>
      </article>
    </main>
  )
}

export default ProductDetails