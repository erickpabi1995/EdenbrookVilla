import styles from './QLuxePartners.module.scss'

const QLuxePartners = () => {


return(
    <div className={styles.qluxePartners}>
<div className={styles.container}>
<div className={styles.title}>
<div className={styles.titleColumn}>
<p className={styles.titleText}>Partner with Qluxe</p>
<p className={styles.titleDescription}>Join our network of trusted real estate professionals and gain access to exclusive listings, sales tools, and marketing resources — backed by the Qluxe name.</p>
</div>
<button className={styles.button}> Apply to become a partner agent</button>
</div>

</div>
<div className={styles.insights}>
  <div className={styles.insightCard}>
 <img src='../kutahyaLogo.png' alt='Logo'/>
     <img src='../whirlpoollogo.svg' alt='Logo'/>
      <img src='../coralLogo.svg' alt='Logo'/>
  </div>
  <div className={styles.insightCard}>
 <img src='../kutahyaLogo.png' alt='Logo'/>
     <img src='../whirlpoollogo.svg' alt='Logo'/>
      <img src='../coralLogo.svg' alt='Logo'/>

  </div>
</div>
</div>
)
}

export default QLuxePartners