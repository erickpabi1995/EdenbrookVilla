import styles from './InvestorRelations.module.scss'

const InvestorRelations = () => {

    const InvestorData = [
        {
            name:'square feet developed',
            value:'3M',
            unit: ''
        },
           {
            name:'premium units sold',
            value:'100',
            unit: ''
        },
           {
            name:'active developments across Ghana',
            value:'10',
            unit: ''
        }
    ]


return(
    <div className={styles.investorRelations}>
<div className={styles.container}>
<div className={styles.title}>
<p className={styles.titleColumn}>A Proven Vision for Sustainable Growth. <span className={styles.titleText}>From exclusive residential developments to landmark community projects, Qluxe continues to redefine Ghana’s property landscape. Each investment is guided by rigorous market research, premium design execution, and a commitment to long-term value creation.</span></p>
</div>
    <div className={styles.titleDescription}>
        {InvestorData.map((item)=>
    <div className={styles.button}>
       <div className={styles.insights}></div>
          <div className={styles.insightCard}>
            <p className={styles.blogSubContainer}>{item.name}</p>
            <div className={styles.blogColumn}>
<p className={styles.blogSubColumn}>{item.value}</p>
<p className={styles.blogSub}>{item.unit}</p>
            </div>
          </div>
    </div>
    )}
    </div>
</div>
</div>
)
}

export default InvestorRelations