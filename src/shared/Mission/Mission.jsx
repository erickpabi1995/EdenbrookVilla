import styles from './Mission.module.scss'

const Mission = () => {
return(
    <div className={styles.mission}>
<div className={styles.cta6}>
<div className={styles.frame}>
<div className={styles.secondFrame}>
 <img src='../mission1.png' alt='Placeholder Image'/>
 <div className={styles.text}>
  <p className={styles.secondColumn}>— Vision Statement</p>
  <p className={styles.secondText}>To become Ghana’s leading name in luxury developments — a brand synonymous with trust, innovation, and architectural excellence.</p>
 </div>
</div>
<div className={styles.secondColumnActions}>
 <div className={styles.secondColumnButtonContainer}>
  <p className={styles.logo_groups}>— Mission Statement</p>
  <p className={styles.logo_text}>To become Ghana’s leading name in luxury developments — a brand synonymous with trust, innovation, and architectural excellence.</p>
 </div>
  <img src='../mission2.png' alt='Placeholder Image'/>
</div>
</div>
</div>
</div>
)
}

export default Mission