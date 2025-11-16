import styles from './HomeHero.module.scss'
import NavBar from './NavBar'

const HomeHero = () => {

return(
    <div className={styles.containers}>

<div className={styles.container}>
    
      <video 
        className={styles.videoBackground}
        autoPlay 
        loop 
        muted 
        playsInline
    >
        <source src="../video.mp4" type="video/mp4" />
        <source src="/path-to-your-video.webm" type="video/webm" />
        Your browser does not support the video tag.
    </video>
    <div className={styles.contentOverlay}>
        <NavBar/>
<div className={styles.title}>
    <div className={styles.titleColumn}>
<p className={styles.titleText}>QLUXE</p>
</div>
   <div className={styles.button}>
<div className={styles.insights}>
<p className={styles.insightText}>From design to detail, Qluxe Homes creates architectural landmarks that embody modern elegance and timeless value.</p>
<div className={styles.blogSubContainer}>
    <button className={styles.blogColumn}>See Projects</button>
      <button className={styles.blogSubColumn}>Contact us</button>
</div>

</div>
<div className={styles.blogSub}>
<p className={styles.badge}>Our Partners</p>
<div className={styles.logo_container}>
    <div className={styles.logo_subcontainer}>
<img src='../kutahya-small-logo.png' alt='Kutahya Logo'/>
<img src='../whirlpool-small-logo.png' alt='Kutahya Logo'/>
<img src='../coral-dulux-small-logo.png' alt='Kutahya Logo'/>
<img src='../builders-small-logo.png' alt='Kutahya Logo'/>
<img src='../lighting-philips-small-logo.png' alt='Kutahya Logo'/>
<img src='../delfur-small-logo.png' alt='Kutahya Logo'/>
<img src='../hansgrohe-small-logo.png' alt='Kutahya Logo'/>
    </div>

</div>
</div>

   </div>
    </div>
    </div>
   
</div>
</div>
)
}

export default HomeHero