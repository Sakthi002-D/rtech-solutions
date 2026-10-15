import {

   ArrowRight,

   ArrowUpRight,

   Beaker,

   Building,

   Car,

   Check,

   Droplets,

   Flame,

   Pill,

   ShieldCheck,

   Utensils,

   Zap,

} from 'lucide-react'

import { Link } from 'react-router-dom'

import { industries } from '../data/industries'

import { products } from '../data/products'

import oilGasImage from '../assets/images/industries/industries-1.png'

import petrochemicalImage from '../assets/images/industries/industries-2.png'

import powerImage from '../assets/images/industries/industries-3.png'

import automotiveImage from '../assets/images/industries/04-automotive.jpg'

import constructionImage from '../assets/images/industries/05-construction.jpg'

import waterImage from '../assets/images/industries/06-water-treatment.jpg'

import pharmaImage from '../assets/images/industries/07-pharmaceutical.jpg'

import foodImage from '../assets/images/industries/08-food-processing.jpg'

import gasketsImage from '../assets/images/product-gasket.png'

import customMouldedImage from '../assets/images/custom_moulded.png'

import oRingsImage from '../assets/images/product-o-rings.jpg'

import washersImage from '../assets/images/product-washers.jpg'

import hosesImage from '../assets/images/product-hoses.jpg'

import bushesImage from '../assets/images/product-bushes.jpg'

import bellowsImage from '../assets/images/product-bellows.jpg'

import sheetsImage from '../assets/images/product-sheets.jpg'

import './Industries.css'
import SEO from '../components/SEO.jsx'

// Load the four replacement hero images from src/assets/images/industries.
const industryHeroGallery = Object.entries(
  import.meta.glob('../assets/images/industries/industries-*.{jpg,jpeg,png,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, image]) => image)


const industryImages = {

   'oil-and-gas': oilGasImage,

   petrochemical: petrochemicalImage,

   power: powerImage,

   automotive: automotiveImage,

   construction: constructionImage,

   'water-treatment': waterImage,

   pharmaceutical: pharmaImage,

   'food-processing': foodImage,

}

const industryIcons = {

   'oil-and-gas': Flame,

   petrochemical: Beaker,

   power: Zap,

   automotive: Car,

   construction: Building,

   'water-treatment': Droplets,

   pharmaceutical: Pill,

   'food-processing': Utensils,

}

const productImages = {

   'rubber-gaskets': gasketsImage,

   'o-rings': oRingsImage,

   'rubber-washers-seals': washersImage,

   'rubber-hoses': hosesImage,

   'rubber-bushes': bushesImage,

   bellows: bellowsImage,

   'rubber-sheets': sheetsImage,

   'custom-moulded-components': customMouldedImage,

}

const applicationSlugs = [

   'rubber-gaskets',

   'o-rings',

   'rubber-hoses',

   'rubber-washers-seals',

   'bellows',

   'custom-moulded-components',

]

const heroPoints = [

   'Engineered for critical sealing',

   'Material-matched to conditions',

   'Prototype to production supply',

]

const environmentItems = [

   {

      slug: 'oil-and-gas',

      name: 'Oil & Gas',

      description: 'Sealing solutions for demanding industrial equipment.',

      image: oilGasImage,

      productSlug: 'rubber-gaskets',

   },

   {

      slug: 'petrochemical',

      name: 'Petrochemical',

      description: 'Rubber components for process equipment and pipelines.',

      image: petrochemicalImage,

      productSlug: 'rubber-hoses',

   },

   {

      slug: 'power',

      name: 'Power',

      description: 'Sealing components for industrial power systems.',

      image: powerImage,

      productSlug: 'o-rings',

   },

   {

      slug: 'automotive',

      name: 'Automotive',

      description: 'Rubber components for vibration control and sealing.',

      image: automotiveImage,

      productSlug: 'rubber-bushes',

   },

]

function Industries() {

   const applications = applicationSlugs

      .map((slug) => products.find((product) => product.slug === slug))

      .filter(Boolean)

   return (

      <>
         <SEO
            title="Industrial Rubber Solutions | R-Tech Solutions"
            description="R-Tech Solutions supplies rubber and sealing products for oil and gas, petrochemical, power, automotive, construction, water, pharma and food processing."
            path="/industries"
         />
      <main className="in2-page">

         <section className="in2-hero" aria-labelledby="in2-hero-title">

            <div className="in2-hero-inner">

               <div className="in2-hero-copy">

                  <p className="in2-eyebrow">

                     <span className="in2-eyebrow-bar" aria-hidden="true" />

                     Industries We Serve

                  </p>

                  <h1 id="in2-hero-title">

                     Rubber Solutions for <span>Demanding Industries</span>

                  </h1>

                  <p className="in2-lede">

                     R-Tech Solutions supplies rubber and sealing products for

                     industrial applications across oil and gas, petrochemical, power,

                     automotive, construction, water treatment, pharmaceutical, and

                     food processing environments.

                  </p>

                  <ul className="in2-hero-points">

                     {heroPoints.map((point) => (

                        <li key={point}>

                           <Check aria-hidden="true" />

                           {point}

                        </li>

                     ))}

                  </ul>

                  <div className="in2-actions">

                     <a className="in2-btn in2-btn-red" href="#in2-sectors">

                        Explore Industries

                        <ArrowRight aria-hidden="true" />

                     </a>

                     <Link className="in2-btn in2-btn-outline" to="/request-a-quote">

                        Request a Quote

                     </Link>

                  </div>

               </div>

               <div className="in2-hero-media">

                  <div className="in2-collage premium-industries-collage" aria-hidden="true">
                    {industryHeroGallery.length >= 4 ? (
                      <>
                        <img className="in2-collage-main" src={industryHeroGallery[0]} alt="" fetchPriority="high" />
                        <img src={industryHeroGallery[1]} alt="" />
                        <img src={industryHeroGallery[2]} alt="" />
                        <img className="in2-collage-wide" src={industryHeroGallery[3]} alt="" />
                      </>
                    ) : (
                      <>
                        <img className="in2-collage-main" src={oilGasImage} alt="" fetchPriority="high" />
                        <img src={gasketsImage} alt="" />
                        <img src={petrochemicalImage} alt="" />
                        <img className="in2-collage-wide" src={powerImage} alt="" />
                      </>
                    )}
                  </div>

               </div>

            </div>

         </section>

         <section

            className="in2-sectors"

            id="in2-sectors"

            aria-labelledby="in2-sectors-title"

         >

            <div className="in2-inner">

               <header className="in2-head in2-head-row">

                  <div>

                     <p className="in2-eyebrow">

                        <span className="in2-eyebrow-bar" aria-hidden="true" />

                        Industrial Sectors

                     </p>

                     <h2 id="in2-sectors-title">

                        Rubber and sealing products for <span>critical industries</span>

                     </h2>

                  </div>

                  <a className="in2-text-link" href="#in2-apps-title">

                     Product applications

                     <ArrowUpRight aria-hidden="true" />

                  </a>

               </header>

               <ul className="in2-grid">

                  {industries.map((industry, index) => {

                     const Icon = industryIcons[industry.slug] || ShieldCheck

                     return (

                        <li key={industry.slug}>

                           <article className="in2-card">

                              <span className="in2-card-media">

                                 <img

                                    src={industryImages[industry.slug]}

                                    alt=""

                                    loading="lazy"

                                 />

                              </span>

                              <span className="in2-card-body">

                                 <span className="in2-card-top">

                                    <span className="in2-card-num">0{index + 1}</span>

                                    <span className="in2-card-icon" aria-hidden="true">

                                       <Icon />

                                    </span>

                                 </span>

                                 <h3>{industry.name}</h3>

                                 <p>{industry.description}</p>

                              </span>

                           </article>

                        </li>

                     )

                  })}

               </ul>

            </div>

         </section>

         <section className="in2-apps" aria-labelledby="in2-apps-title">

            <div className="in2-inner">

               <header className="in2-head in2-head-row">

                  <div>

                     <p className="in2-eyebrow">

                        <span className="in2-eyebrow-bar" aria-hidden="true" />

                        Product Applications

                     </p>

                     <h2 id="in2-apps-title">

                        Solutions for <span>real-world applications</span>

                     </h2>

                  </div>

                  <Link className="in2-text-link" to="/products">

                     View all products

                     <ArrowUpRight aria-hidden="true" />

                  </Link>

               </header>

               <ul className="in2-apps-grid">

                  {applications.map((product) => (

                     <li key={product.slug}>

                        <Link className="in2-app" to={`/products/${product.slug}`}>

                           <span className="in2-app-media">

                              <img

                                 src={productImages[product.slug]}

                                 alt={product.name}

                                 loading="lazy"

                              />

                           </span>

                           <span className="in2-app-body">

                              <span className="in2-app-cat">{product.category}</span>

                              <span className="in2-app-row">

                                 <strong>{product.name}</strong>

                                 <span className="in2-app-arrow" aria-hidden="true">

                                    <ArrowRight />

                                 </span>

                              </span>

                           </span>

                        </Link>

                     </li>

                  ))}

               </ul>

            </div>

         </section>

         <section className="in2-env" aria-labelledby="in2-env-title">

            <div className="in2-inner in2-env-grid">

               <figure className="in2-env-media">

                  <img

                     src={oilGasImage}

                     alt="Industrial oil and gas equipment with rubber sealing components"

                     loading="lazy"

                  />

               </figure>

               <div className="in2-env-content">

                  <p className="in2-eyebrow">

                     <span className="in2-eyebrow-bar" aria-hidden="true" />

                     Applications in Focus

                  </p>

                  <h2 id="in2-env-title">

                     Engineered for <span>Demanding Environments</span>

                  </h2>

                  <p className="in2-env-lede">

                     R-Tech Solutions supplies rubber and sealing products selected for

                     the operating conditions found across core industrial sectors.

                  </p>

                  <ul className="in2-env-list">

                     {environmentItems.map((item, index) => (

                        <li key={item.slug}>

                           <Link

                              className="in2-env-item"

                              to={`/products/${item.productSlug}`}

                           >

                              <span className="in2-env-item-media">

                                 <img

                                    src={item.image}

                                    alt=""

                                    loading="lazy"

                                 />

                                 <span className="in2-env-item-num">

                                    0{index + 1}

                                 </span>

                              </span>

                              <span className="in2-env-item-body">

                                 <strong>{item.name}</strong>

                                 <span>{item.description}</span>

                              </span>

                              <span className="in2-env-item-arrow" aria-hidden="true">

                                 <ArrowRight />

                              </span>

                           </Link>

                        </li>

                     ))}

                  </ul>

                  <div className="in2-env-actions">

                     <Link className="in2-btn in2-btn-red" to="/products">

                        Explore Products

                        <ArrowRight aria-hidden="true" />

                     </Link>

                  </div>

               </div>

            </div>

         </section>

         <section className="in2-cta" aria-labelledby="in2-cta-title">

            <div className="in2-inner in2-cta-inner">

               <div className="in2-cta-copy">

                  <p className="in2-eyebrow">

                     <span className="in2-eyebrow-bar" aria-hidden="true" />

                     Let&apos;s Work Together

                  </p>

                  <h2 id="in2-cta-title">

                     Let&apos;s discuss your <span>industrial requirements</span>

                  </h2>

                  <p>

                     Talk to us about rubber and sealing products for your industry

                     and application.

                  </p>

               </div>

               <Link className="in2-btn in2-btn-white" to="/request-a-quote">

                  Request a Quote

                  <ArrowRight aria-hidden="true" />

               </Link>

            </div>

         </section>

      </main>

      </>
   )

}

export default Industries