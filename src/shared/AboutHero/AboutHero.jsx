import styles from './AboutHero.module.scss'

const AboutHero = () => {

return(
    <div className={styles.containers}>
<div className={styles.container}>
<div className={styles.title}>
    <div className={styles.titleColumn}>
<p className={styles.titleText}>Building the Future of Luxury Living</p>
<p className={styles.titleDescription}>Qluxe Homes is redefining Ghana’s modern architecture landscape — where precision, design integrity, and lifestyle vision come together to create enduring spaces.</p>
   <div className={styles.button}>
<div className={styles.insights}>
<img src='../Avatar.png' alt='Avatar'/>
<img src='../Avatar1.png' alt='Avatar'/>
<img src='../Avatar2.png' alt='Avatar'/>
</div>
<p className={styles.blogSubContainer}>Trusted by 2k+ investors & developers</p>
   </div>
    </div>
    <div className={styles.blogColumn}>
<p className={styles.blogSubColumn}>Our Partners</p>
<div className={styles.blogSub}>
    <div className={styles.badge}>
<img src='../kutahya-small-logo.png' alt='Kutahya Logo'/>
{/* <img src='../whirlpool-small-logo.png' alt='Kutahya Logo'/> */}
<div className={styles.whirlpool}></div>
<div className={styles.coral}></div>
{/* <img src='../builders-small-logo.png' alt='Kutahya Logo'/> */}
<div className={styles.buildings}></div>
{/* <img src='../lighting-philips-small-logo.png' alt='Kutahya Logo'/> */}
<div className={styles.philips}></div>
{/* <img src='../delfur-small-logo.png' alt='Kutahya Logo'/> */}
<div className={styles.delFur}></div>
<img src='../hansgrohe-small-logo.png' alt='Kutahya Logo'/>
    </div>
</div>
    </div>
</div>
<div className={styles.image}>
    <img src='../Image.png' alt='Image'/>
</div>
</div>
</div>
)
}

export default AboutHero