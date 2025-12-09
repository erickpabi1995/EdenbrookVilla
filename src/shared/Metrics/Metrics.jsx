import styles from './Metrics.module.scss'

const Metrics = () => {

 const Company = [
  {
    name:"Years of Excellence",
    value:10,
    unit:""
  },
   {
    name:"Luxury Developments",
    value:6,
    unit:""
  },
   {
    name:"Partner Agents",
    value:50,
    unit:""
  },
    {
    name:"Homeowners Inspired",
    value:1000,
    unit:""
  },
  
  ]
return(
    <div className={styles.metrics}>
<div className={styles.container}>
<div className={styles.title}>
<p className={styles.titleColumn}>— Qluxe in Numbers</p>
<p className={styles.titleText}>A Record Built on Precision and Trust.</p>
</div>
<div className={styles.titleDescription}>
  {Company.map((item,index)=>
  <div className={styles.button} key={index}>
  <div className={styles.insights}></div>
    <div className={styles.insightCard}>
      <p className={styles.blogSubContainer}>{item.name}</p>
      <div className={styles.blogColumn}>
        <p className={styles.blogSubColumn}>{item.value}</p>
        <p className={styles.blogSub}>{item.unit}</p>
    </div>
    </div>
  </div>
  )}
</div>
</div>
</div>

)
}

export default Metrics