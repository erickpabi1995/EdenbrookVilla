import styles from './NewsLetter.module.scss'

const NewsLetter = () => {


return(
    <div className={styles.newsLetter}>
<div className={styles.container}>
<div className={styles.title}>
<div className={styles.titleColumn}>
<p className={styles.titleText}>Stay updated</p>
<p className={styles.titleDescription}>Be the first to know when we launch.</p>
<p className={styles.button}>Sign up to receive exclusive updates, sneak peeks, and be the first to access our launch.</p>
</div>
<div className={styles.insights}>
<div className={styles.insightCard}>
<input className={styles.blogSubContainer} placeholder='Jessica@email.com'></input>
<button className={styles.blogColumn}>Subscribe</button>
</div>
<p className={styles.blogSubColumn}>Only updates. No spam</p>
</div>
</div>
<div>
  <img src='../newsLetterImage.svg' alt='NewsLetter'/>
</div>
</div>

</div>
)
}

export default NewsLetter