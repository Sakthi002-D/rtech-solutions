import IndustryCard from '../components/IndustryCard'
import { industries } from '../data/industries'

function Industries() {
  return (
    <main className="page products-page">
      <div className="page-header">
        <p className="section-kicker">Industries</p>
        <h1>Serving critical industrial sectors</h1>
      </div>

      <div className="product-grid">
        {industries.map((industry) => (
          <IndustryCard key={industry.slug} industry={industry} />
        ))}
      </div>
    </main>
  )
}

export default Industries