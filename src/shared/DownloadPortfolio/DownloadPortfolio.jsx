import useMediaQuery from '../useMediaQuery';
import styles from './DownloadPortfolio.module.scss'

const DownloadPortfolio = () => {

       const isMobile = useMediaQuery("(max-width: 768px)");

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

<div>
  {isMobile ? (
    <div className={styles.mobileImageContainer}>
            <img src="../brochureImageBigMobile.png" alt="House Image" />
    </div>
  )
  :(
      <img src="../brochureImageBig.png" alt="House Image" />
  )
  
}
</div>


</div>
</div>
</div>
)
}

export default DownloadPortfolio 
