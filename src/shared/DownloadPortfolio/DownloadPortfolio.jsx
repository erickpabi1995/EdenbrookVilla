import styles from './DownloadPortfolio.module.scss'

const DownloadPortfolio = () => {

return(
    <div className={styles.header}>
<div className={styles.cta6}>
  {/* <div className={styles.img}></div> */}
<div className={styles.frame}>
<div className={styles.secondFrame}>
<div className={styles.text}>
  <p className={styles.investmentText}>DOWNLOAD OUR INVESTMENT PORTFOLIO</p>
  <p className={styles.investmentSubtext}>Download detailed specifications and breakdown of our vast investment portfolio</p>
</div>
<button className={styles.brochureButton}>Download Brochure</button>

<div className={styles.secondColumn}>
  <p className={styles.secondText}></p>
  <p className={styles.smallText}></p>
</div>

</div>
<img src='../brochureImageBig.png' alt='Building'/>

</div>
</div>
</div>
)
}

export default DownloadPortfolio 
