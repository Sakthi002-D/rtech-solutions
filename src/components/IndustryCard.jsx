function IndustryCard({ industry }) {
  if (!industry) return null

  return (
    <article className="info-card">
      <h3>{industry.name}</h3>
      <p>{industry.description}</p>
    </article>
  )
}

export default IndustryCard