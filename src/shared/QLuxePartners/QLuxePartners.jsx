
import styles from './QLuxePartners.module.scss'
import { motion } from 'framer-motion'

const QLuxePartners = () => {

return(
    <div className={styles.qluxePartners}>
<div className={styles.container}>
<div className={styles.title}>
<div className={styles.titleColumn}>
<p className={styles.titleText}>Partner with Qluxe</p>
<p className={styles.titleDescription}>Join our network of trusted real estate professionals and gain access to exclusive listings, sales tools, and marketing resources — backed by the Qluxe name.</p>
</div>
<button className={styles.button}> Apply to become a partner agent</button>
</div>

</div>
<div className={styles.insights}>
  <motion.div 
    className={styles.insightCard}
    initial={{ x: -200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
  >
    <img src='../kutahyaLogo.png' alt='Logo'/>
    <img src='../whirlpoollogo.svg' alt='Logo'/>
    <img src='../coralLogo.svg' alt='Logo'/>
  </motion.div>
  <motion.div 
    className={styles.insightCard}
    initial={{ x: 200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
  >
    <img src='../kutahyaLogo.png' alt='Logo'/>
    <img src='../whirlpoollogo.svg' alt='Logo'/>
    <img src='../coralLogo.svg' alt='Logo'/>
  </motion.div>
</div>
</div>
)
}

export default QLuxePartners