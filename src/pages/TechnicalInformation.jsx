const technicalInfo = [
  {
    heading: 'Gasket dimensions',
    items: ['Gasket ID', 'Gasket OD', 'Gasket thickness', 'PCD', 'Hole size and quantity'],
  },
  {
    heading: 'O-ring measurements',
    items: ['O-ring ID', 'O-ring OD', 'O-ring CS (Cross Section)', 'AS568 / ISO 3601 / BS sizes', 'O-ring measurement guidance'],
  },
  {
    heading: 'Rubber sheet specifications',
    items: ['Rubber sheet thickness: 0.5 mm to 50 mm', 'Rubber sheet hardness: 40 to 90 Shore A', 'Rubber sheet finish options', 'Temperature range information where provided'],
  },
  {
    heading: 'Standards',
    items: ['AS568', 'ISO 3601', 'BS sizes'],
  },
]

function TechnicalInformation() {
  return (
    <main className="page products-page">
      <div className="page-header">
        <p className="section-kicker">Technical information</p>
        <h1>Product measurement and specification guidance</h1>
      </div>

      <div className="technical-grid">
        {technicalInfo.map((section) => (
          <section key={section.heading} className="info-card technical-card">
            <h3>{section.heading}</h3>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}

export default TechnicalInformation