import styles from './Referrals.module.scss'

const Containers = () => {

return(
    <div className={styles.referrals}>
<div className={styles.container}>
<div className={styles.title}>
    <p className={styles.titleColumn}>Refer a Qualified Buyer or Investor</p>
    <div className={styles.titleText}>
        <p className={styles.titleDescription}>Have a client who would be the right fit for a Qluxe property? Submit an introduction. Our partnership team will handle the process discreetly from viewing to completion.</p>
    <button className={styles.button}>Submit a Referral</button>
    </div>
</div>
</div>
</div>
)
}

export default Containers