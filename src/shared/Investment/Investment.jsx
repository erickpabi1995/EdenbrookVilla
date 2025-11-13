import styles from './Investment.module.scss'

const Investment = () => {


return(
    <div className={styles.investment}>
<div className={styles.container}>
<div className={styles.title}>
<div className={styles.titleColumn}>
<p className={styles.titleText}>Be the First to Know About New Investment Opportunities</p>
<p className={styles.titleDescription}>Our next development phase is already in motion. Join our investor list to receive early access to investment decks, project previews, and private consultations before public release.</p>
</div>

</div>
<div className={styles.button}>

  <div className={styles.insights}>
    <div className={styles.input}>
<p className={styles.label}>Name</p>
<input className={styles.inputStyles} placeholder='Jacob Moore'/>
</div>
<div className={styles.input}>
<p className={styles.label}>Email</p>
<input className={styles.inputStyles} placeholder='name@email.com'/>
</div>
<div className={styles.input}>
<p className={styles.label}>Message</p>
<input className={styles.inputStyles} placeholder='Ghana'/> 
</div>
<button className={styles.submitBtn}>Send  message</button>
<p className={styles.disclaimer}>Your details are kept confidential. A member of our investor relations team will reach out before each new release.</p>
  </div>






</div>
</div>

</div>

)
}

export default Investment