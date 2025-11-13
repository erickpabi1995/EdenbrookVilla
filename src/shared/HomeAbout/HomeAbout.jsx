import styles from './HomeAbout.module.scss'

const HomeAbout = () => {

return(
    <div className={styles.about}>
<div className={styles.container}>
<div className={styles.title}>
    <div className={styles.titleColumn}>
<p className={styles.titleText}>
About us
</p>
<p className={styles.titleDescription}>
A Vision Rooted in Design and Distinction.
</p>
    </div>
         <div className={styles.button}>
<div className={styles.insights}>
<p className={styles.insightCard}>Qluxe Homes redefines real estate in Ghana through architecture that balances precision, serenity, and sophistication. Each development reflects a deep respect for craft and community.</p>
<button className={styles.blogSubContainer}>
More about us
</button>
</div>
    </div>
</div>

<div className={styles.blogColumn}>
<div className={styles.blogSubColumn}>
    <img src='../aboutImage3.svg' alt="About Image" style={{width: '348px', height: '348px'}}/>
</div>
     <img src='../aboutImage2.svg' alt="About Image" style={{height: '828px'}}/>
      <img src='../aboutImage.svg' alt="About Image" style={{width: '348px', height: '522px'}}/>
</div>
</div>
</div>
)
}

export default HomeAbout