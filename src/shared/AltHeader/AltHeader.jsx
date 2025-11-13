import styles from './AltHeader.module.scss'

const AltHeader = () => {
  const  data = [
    {
      title:"Exclusive Access",
      description:"Early previews of upcoming developments.",
    },
      {
      title:"Community Engagement",
      description:"Participate in discussions and feedback sessions.",
    },
      {
      title:"Members-Only Events",
      description:"Attend special workshops and networking events.",
    },
      {
      title:"Discounted Services",
      description:"Enjoy reduced rates on premium features and subscriptions.",
    }
  ]
return(
    <div className={styles.header}>
<div className={styles.cta6}>
  <img src='../altHeaderImage.png' alt='Placeholder Image'/>
<div className={styles.frame}>
<div className={styles.secondFrame}>
<p className={styles.text}>— Why Partner with Qluxe?</p>
{data.map((item)=>
<div className={styles.secondColumn}>
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

export default AltHeader