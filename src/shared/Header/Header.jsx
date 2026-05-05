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
  {!isMobile ? (
  <div className='float-right relative'>
  <img src='../architecture.webp' alt='HeaderImage' style={{ width:"1120px",height:"746px"}}/>
     <div className='absolute' style={{top:'80px', left: '-160px'}}> 
      <img src='../headerImage2.png' alt='HeaderImage' style={{ width:"auto",height: "auto"}}/>
    </div>
  
  </div>
  ):(
     <div style={{position:'relative', display: 'flex', justifyContent: 'center', width: '100%'}}>
  <img src='../architecture.webp' alt='HeaderImage' style={{ width:'285px',height:'190px'}}/>
     <div className='absolute' style={{top:'20px', left:'5px'}}> 
      <img src='../headerImage2.png' alt='HeaderImage' style={{ width:'100%',height:'98px'}}/>
    </div>
  
  </div>
  )
  }
  
</div>
{/* <div className='absolute top-10'> 
  <img src='../headerImage2.png' alt='HeaderImage'/>
  </div>  */}
</div>
</div>
)
}

export default CTA