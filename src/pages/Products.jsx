import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Products() {
  return (
    <main className="page products-page">
      <div className="page-header">
        <p className="section-kicker">Product categories</p>
        <h1>Rubber and sealing solutions</h1>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </main>
  )
}

export default Products