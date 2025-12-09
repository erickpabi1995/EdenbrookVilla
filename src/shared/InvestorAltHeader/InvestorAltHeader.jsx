import styles from './InvestorAltHeader.module.scss'

const InvestorAltHeader = () => {
  const  data = [
    {
      title:"Evaluate Opportunities",
      description:"Our team shares detailed investment decks and performance projections.",
    },
      {
      title:"Community Engagement",
      description:"Participate in discussions and feedback sessions.",
    },
      {
      title:"Members Only Events",
      description:"Attend special workshops and networking events.",
    }
  ]
return(
    <div className={styles.header}>
<div className={styles.cta6}>
  <div className={styles.img}></div>
<div className={styles.frame}>
<div className={styles.secondFrame}>
<p className={styles.text}>— How Qluxe Partnerships Work</p>
{data.map((item,index)=>
<div className={styles.secondColumn} key={index}>
  <p className={styles.secondText}>{item.title}</p>
  <p className={styles.smallText}>{item.description}</p>
</div>
)}
</div>

</div>
</div>
</div>
)
}

export default InvestorAltHeader