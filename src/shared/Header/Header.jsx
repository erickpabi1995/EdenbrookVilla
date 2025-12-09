import useMediaQuery from '../useMediaQuery'
import styles from './Header.module.scss'

const CTA = () => {

   const isMobile = useMediaQuery("(max-width: 768px)")
return(
    <div className={styles.header}>
<div className={styles.cta6}>
<div className={styles.frame}>
<div className={styles.secondFrame}>
<p className={styles.text}>A Home Where Architecture Meets Serenity.</p>
</div>
<p className={styles.secondColumn}>Edenbrook Villa was designed as a sanctuary — modern spaces filled with natural light, refined materials, and seamless transitions between indoors and out.</p>
</div>
<div className={styles.secondText}>
  <div className='float-right relative'>
  <img src='../architecture.png' alt='HeaderImage' style={{ width:isMobile ? '286px' : "1120px",height:isMobile ? '190px' : "746px"}}/>
     <div className='absolute' style={{top:isMobile ? '20px' : '80px', left: isMobile ? '-60px' :'-160px'}}> 
      <img src='../headerImage2.png' alt='HeaderImage' style={{ width:isMobile ? '98px' : "auto",height:isMobile ? '98' : "auto"}}/>
    </div>
  
  </div>
  
</div>
{/* <div className='absolute top-10'> 
  <img src='../headerImage2.png' alt='HeaderImage'/>
  </div>  */}
</div>
</div>
)
}

export default CTA