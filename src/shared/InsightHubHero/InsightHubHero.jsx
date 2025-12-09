import NavBar from './NavBar'
import styles from './InsightHubHero.module.scss'

const InsightHubHero = () => {

return(
    <div className={styles.containers}>
        <NavBar/>
<div className={styles.container}>
<div className={styles.title}>
    <div className={styles.titleColumn}>
      
<div className={styles.titleText}>
<p className={styles.titleDescription}>— Insights</p>

   <p className={styles.button}>Perspectives on Luxury Living and Real Estate</p>
</div>
<p className={styles.insights}>Stay informed with the latest from Qluxe Homes — market trends, press features, and behind-the-scenes stories shaping the future of modern living in Ghana and beyond.</p>

   </div>

    </div>
</div>
</div>
)
}

export default InsightHubHero