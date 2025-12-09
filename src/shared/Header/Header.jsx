import styles from './Header.module.scss'

const CTA = () => {
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
  <img src='../architecture.png' alt='HeaderImage' style={{width:"1120px",height:"746px"}}/>
     <div className='absolute' style={{top: '80px', left: '-160px'}}> 
      <img src='../headerImage2.png' alt='HeaderImage'/>
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