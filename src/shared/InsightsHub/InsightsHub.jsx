import styles from './InsightsHub.module.scss'

const InsightsHub = () => {

  const Tabs = ["Tab 1" , "Tab 2" , "Tab 3" , "Tab 4"]


return(
    <div className={styles.investors}>
<div className={styles.container}>
<div className={styles.title}>
<div className={styles.titleColumn}>
<div className={styles.titleText}>
<p className={styles.titleDescription}>Investing in the Future of Luxury Living</p>
<p className={styles.button}>Qluxe Homes partners with investors who share our vision for growth, innovation, and design excellence. Every project is built to deliver both financial performance and architectural distinction.</p>
<div className={styles.insights}>
  <button className={styles.input}>Contact Investment Team</button>
  <button className={styles.label}>see how it works</button>
</div>
</div>
</div>

<div className={styles.tabContainer}>
  {Tabs.map((item,index)=>
<div className={styles.tabs} key={index}>
<p className={styles.tabText}>{item}</p>
</div>
  )}
</div>

</div>

</div>
</div>

)
}

export default InsightsHub