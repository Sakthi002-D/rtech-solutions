function MaterialCard({ material }) {
  if (!material) return null

  return (
    <article className="info-card">
      <h3>{material.name}</h3>
      <p>{material.description}</p>
    </article>
  )
}

export default MaterialCard