import MaterialCard from '../components/MaterialCard'
import { materials } from '../data/materials'

function Materials() {
  return (
    <main className="page products-page">
      <div className="page-header">
        <p className="section-kicker">Materials</p>
        <h1>Available rubber compounds</h1>
      </div>

      <div className="product-grid">
        {materials.map((material) => (
          <MaterialCard key={material.slug} material={material} />
        ))}
      </div>
    </main>
  )
}

export default Materials