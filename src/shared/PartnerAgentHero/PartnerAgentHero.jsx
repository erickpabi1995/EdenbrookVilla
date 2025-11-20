import styles from './PartnerAgentHero.module.scss'

const PartnerAgentHero = () => {

return(
    <div className={styles.partnerAgents}>
<div className={styles.container}>
<div className={styles.title}>
    <div className={styles.titleColumn}>
<p className={styles.titleText}>Trusted Partners in Every Transaction</p>
<p className={styles.titleDescription}>Qluxe Homes collaborates with a select network of verified agents to deliver seamless client experiences and uphold our standard of excellence.</p>
   <div className={styles.button}>
<button className={styles.insights}>become a partner agent</button>
<button className={styles.insightCard}>explore approved agents</button>
   </div>
<div className={styles.blogSubContainer}>
    <div className={styles.blogColumn}>
   <img src='../Avatar.png' alt='Avatar'/>
<img src='../Avatar1.png' alt='Avatar'/>
<img src='../Avatar2.png' alt='Avatar'/>
    </div>
    <p className={styles.blogSubColumn}>Trusted by 2k+ investors & developers</p>
</div>

    </div>
    <div className={styles.blogSub}>
<img src='../agent2.jpg' alt='Partner 1'/>
<div className={styles.badge}>
<img src='../agent2.jpg' alt='Partner 1' />
<img src='../agent4.jpg' alt='Partner 1' />
</div>
<div className={styles.badge}>
<img src='../agent2.jpg' alt='Partner 1'/>
<img src='../agent4.jpg' alt='Partner 1'/>
<img src='../agent2.jpg' alt='Partner 1' />
</div>
<div className={styles.badge}>
<img src='../agent2.jpg' alt='Partner 1'/>
<img src='../agent4.jpg' alt='Partner 2'/>
<img src='../agent2.jpg' alt='Partner 3'/>
<img src='../agent4.jpg' alt='Partner 4'/>
</div>
    </div>
</div>
</div>
</div>
)
}

export default PartnerAgentHero