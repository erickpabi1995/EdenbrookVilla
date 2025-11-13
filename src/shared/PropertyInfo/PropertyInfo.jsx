import styles from './PropertyInfo.module.scss'

const PropertyInfo = () => {
const Interior = [
  {
    title:"TOTAL BEDROOMS",
    value:3
  },
    {
    title:"TOTAL BATHROOMS",
    value:4
  },
    {
    title:"KITCHEN AREA",
    value:3500
  },
    {
    title:"LAUNDRY ROOM",
    value:3
  },
    {
    title:"FLOORING",
    value:"Tile"
  },
    {
    title:"FIREPLACE",
    value:"Den"
  },
    {
    title:"APPLIANCES",
    value:"Celing Fan, Refrigerator, Washer, Dryer,Intercom,Dishwasher"
  },
]
const Exterior = [
  {
    title:"STORIES",
    value:2
  },
    {
    title:"POOL",
    value:"In Ground"
  },
    {
    title:"LOT FEATURES",
    value:"lawn, Yard"
  },
    {
    title:"PARKING",
    value:"Carport, Carport Attached"
  },
    {
    title:"HEAT TYPE",
    value:"Central"
  },
    {
    title:"AIR CONDITIONING",
    value:"Central"
  },
    {
    title:"SECURITY FEATURES",
    value:"Automatic Gate, Prewired for alarm system"
  },
]
const Financial = [
  {
    title:"SALES PRICE",
    value:"$795,000"
  },
    {
    title:"ZONING",
    value:"BHR1*"
  },
]
const Area = [
  {
    title:"STATUS",
    value:"For Sale"
  },
    {
    title:"LOT AREA",
    value:"0,700"
  },
    {
    title:"MLS ID",
    value:"2548904"
  },
    {
    title:"TYPE",
    value:"Residential"
  },
    {
    title:"YEAR BUILT",
    value:"2024"
  },
    {
    title:"NEIGHBORHOOD",
    value:"New York"
  },
    {
    title:"WATER FRONTAGE",
    value:"None"
  },
    {
    title:"VIEW DESCRIPTION",
    value:"City, Trees/Woods, Pool"
  },
]
return(
    <div className={styles.propertyInfo}>
<div className={styles.container}>
<div className={styles.title}>
<p className={styles.titleColumn}>Interior</p>
<div className={styles.titleText}>
  <div className={styles.titleDescription}></div>
</div>
{Interior.map((item)=>
  <div className={styles.button}>
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
{Exterior.map((item)=>
  <div className={styles.button}>
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
{Area.map((item)=>
  <div className={styles.button}>
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
{Financial.map((item)=>
  <div className={styles.button}>
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