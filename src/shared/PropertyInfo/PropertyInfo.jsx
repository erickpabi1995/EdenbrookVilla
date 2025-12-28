import styles from './PropertyInfo.module.scss'

const PropertyInfo = () => {
const Interior = [
  {
    title:"TOTAL LIVABLE AREA",
    value:"2,200 sqft of meticulously designed interior space."
  },
    {
    title:"FINISHES",
    value:"High-grade porcelain floor tiles, custom-fitted wardrobes, and skimmed walls with premium matte finishes."
  },
    {
    title:"CLIMATE CONTROL",
    value:"Energy-efficient multi-split AC systems in all primary rooms."
  },
    {
    title:"CEILINGS",
    value:"Recessed LED lighting with architectural POP ceiling designs."
  },
    {
    title:"KITCHEN",
    value:"Fully integrated gourmet kitchen with quartz countertops and stainless steel appliances."
  }
]
const Exterior = [
  {
    title:"EXTERIOR",
    value:'Focus on the architectural "Fasad" and durability.'
  },
    {
    title:"DESIGN",
    value:"Contemporary minimalist architecture featuring natural stone accents and expansive glass windows."
  },
    {
    title:"OUTDOOR LIVING",
    value:"Private balcony with glass balustrades offering panoramic views of the neighborhood."
  },
    {
    title:"SECURITY",
    value:"Multi-point secure entry systems, automated gate access, and perimeter electric fencing."
  },
    {
    title:"LIGHTING",
    value:"Automated exterior mood lighting to highlight the Qluxe Homes architectural silhouette at night."
  },
]
const Financial = [
  {
    title:"SALE PRICE",
    value:"Starting at $420, 000 "
  },
    {
    title:"PAYMENT PLAN",
    value:"5 Payment Plan Installment"
  },
]
const Area = [
    {
    title:"LOT SIZE",
    value:"3,200 sqft."
  },
    {
    title:"LANDSCAPING",
    value:"Professionally curated greenery and low-maintenance tropical landscaping."
  },
    {
    title:"DRAINAGE",
    value:"Engineered drainage systems to ensure a pristine environment during all seasons."
  },
    {
    title:"UTILITY SPACE",
    value:"Dedicated hidden area for water storage tanks (poly-tanks) and generator bypass."
  }
]
const Parking = [
    {
    title:"CAPACITY",
    value:"Spacious paved parking area comfortably accommodating 2-3 large vehicles."
  },
    {
    title:"SURFACE",
    value:"Surface: High-durability interlocking pavement blocks."
  },
    {
    title:"ACCESS",
    value:"Direct secure access from the parking area to the main entrance."
  },
    {
    title:"PROTECTION",
    value:"Optional cantilevered car shade or pergola for weather protection."
  }
]
const Location = [
    {
    title:"THE NEIGHBORHOOD",
    value:'Tse-Addo is Accra’s fastest-growing "Prime" residential hub, known for its serene atmosphere and elite community.'
  },
    {
    title:"ACCESSIBILITY",
    value:"Minutes away from Cantonments, Airport Residential, and the Labadi Beach corridor."
  },
    {
    title:"LIFESTYLE",
    value:"Proximity to top-tier international schools, private hospitals, and the vibrant dining scene of the capital."
  }
]
const ProjectHighlights = [
    {
    title:"PROJECT STATUS",
    value:'Ongoing Development'
  },
    {
    title:"DEVELOPER",
    value:"Qluxe Homes"
  },
    {
    title:"NUMBER OF UNITS",
    value:"5 units"
  },
    {
    title:"BUILDING TYPE",
    value:"High-End Residential"
  }
]
return(
    <div className={styles.propertyInfo}>
<div className={styles.container}>
<div className={styles.title}>
<p className={styles.titleColumn}>Interior</p>
<div className={styles.titleText}>
  <div className={styles.titleDescription}></div>
</div>
{Interior.map((item,index)=>
  <div className={styles.button} key={index}>
    <div className={styles.insights}>
<p className={styles.insightCard}>{item.title}</p>
<p className={styles.insightValue}>{item.value}</p>
    </div>
  </div>
  )}
</div>
<div className={styles.title}>
<p className={styles.titleColumn}>Exterior</p>
<div className={styles.titleText}>
  <div className={styles.titleDescription}></div>
</div>
{Exterior.map((item,index)=>
  <div className={styles.button} key={index}>
    <div className={styles.insights}>
<p className={styles.insightCard}>{item.title}</p>
<p className={styles.insightValue}>{item.value}</p>
    </div>
  </div>
  )}
</div>
</div>
<div className={styles.container}>
<div className={styles.title}>
<p className={styles.titleColumn}>Area and Lot</p>
<div className={styles.titleText}>
  <div className={styles.titleDescription}></div>
</div>
{Area.map((item,index)=>
  <div className={styles.button} key={index}>
    <div className={styles.insights}>
<p className={styles.insightCard}>{item.title}</p>
<p className={styles.insightValue}>{item.value}</p>
    </div>
  </div>
  )}
</div>
<div className={styles.title}>
<p className={styles.titleColumn}>Financial</p>
<div className={styles.titleText}>
  <div className={styles.titleDescription}></div>
</div>
{Financial.map((item,index)=>
  <div className={styles.button} key={index}>
    <div className={styles.insights}>
<p className={styles.insightCard}>{item.title}</p>
<p className={styles.insightValue}>{item.value}</p>
    </div>
  </div>
  )}
</div>
</div>
<div className={styles.container}>
<div className={styles.title}>
<p className={styles.titleColumn}>Parking</p>
<div className={styles.titleText}>
  <div className={styles.titleDescription}></div>
</div>
{Parking.map((item,index)=>
  <div className={styles.button} key={index}>
    <div className={styles.insights}>
<p className={styles.insightCard}>{item.title}</p>
<p className={styles.insightValue}>{item.value}</p>
    </div>
  </div>
  )}
</div>
<div className={styles.title}>
<p className={styles.titleColumn}>Location: Tse Addo, Accra</p>
<div className={styles.titleText}>
  <div className={styles.titleDescription}></div>
</div>
{Location.map((item,index)=>
  <div className={styles.button} key={index}>
    <div className={styles.insights}>
<p className={styles.insightCard}>{item.title}</p>
<p className={styles.insightValue}>{item.value}</p>
    </div>
  </div>
  )}
</div>
</div>
<div className={styles.container}>
<div className={styles.title}>
<p className={styles.titleColumn}>Project Highlights</p>
<div className={styles.titleText}>
  <div className={styles.titleDescription}></div>
</div>
{ProjectHighlights.map((item,index)=>
  <div className={styles.button} key={index}>
    <div className={styles.insights}>
<p className={styles.insightCard}>{item.title}</p>
<p className={styles.insightValue}>{item.value}</p>
    </div>
  </div>
  )}
</div>
</div>
</div>

)
}

export default PropertyInfo