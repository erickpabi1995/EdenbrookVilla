import NavBar from './NavBar'
import styles from './Investors.module.scss'
import { useState } from 'react'

const Investors = () => {

  const Tabs = ["Tab 1" , "Tab 2" , "Tab 3" , "Tab 4"]

  const [active,setActive] = useState("Tab 1")


return(
    <div className={styles.investors}>
      <NavBar/>
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
<div className={`${styles.tabs} ${active === item ? styles.active : styles.inactive}`} key={index} onClick={() => setActive(item)} >
<p className={styles.tabText}>{item}</p>
</div>
  )}
</div>

</div>

</div>
</div>

)
}

export default Investors