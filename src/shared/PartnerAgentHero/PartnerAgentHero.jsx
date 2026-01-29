import { useNavigate } from 'react-router-dom'
import styles from './PartnerAgentHero.module.scss'

const PartnerAgentHero = ({onAgentSelect}) => {
    const navigate = useNavigate()

    const handleContact = () => {
        navigate('/contactUs')
    }

  const handleExplore = () => {
        const element = document.getElementById('partnerAgentDirectory')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

        const handleAgentImageClick = () => {
        if (onAgentSelect) {
            onAgentSelect(1)
        }
    }
return(
    <div className={styles.partnerAgents}>
<div className={styles.container}>
<div className={styles.title}>
    <div className={styles.titleColumn}>
<p className={styles.titleText}>Trusted Partners in Every Transaction</p>
<p className={styles.titleDescription}>Qluxe Homes collaborates with a select network of verified agents to deliver seamless client experiences and uphold our standard of excellence.</p>
   <div className={styles.button}>
<button className={styles.insights} onClick={handleContact}>become a partner agent</button>
<button className={styles.insightCard} onClick={handleExplore}>explore approved agents</button>
   </div>
<div className={styles.blogSubContainer}>
    <div className={styles.blogColumn}>
   <img src='../partner.jpeg' alt='Avatar' style={{width:'32px',height:'32px',objectFit:'cover'}} className='rounded-full cursor-pointer' onClick={handleAgentImageClick}/>
<img src='../Avatar1.png' alt='Avatar'/>
<img src='../Avatar2.png' alt='Avatar'/>
    </div>
    <p className={styles.blogSubColumn}>Trusted by 2k+ investors & developers</p>
</div>

    </div>
    <div className={styles.blogSub}>
<img src='../partner.jpeg' alt='Partner 1' style={{objectPosition:"center top", objectFit:"cover"}}/>
<div className={styles.badge}>
<img src='../Logo.svg' alt='Partner 1' style={{objectFit:'contain'}} />
<img src='../Logo.svg' alt='Partner 1'  style={{objectFit:'contain'}} />
</div>
<div className={styles.badge}>

<img src='../Logo.svg' alt='Partner 1'  style={{objectFit:'contain'}} />
<img src='../Logo.svg' alt='Partner 1'  style={{objectFit:'contain'}} />
<img src='../Logo.svg' alt='Partner 1'  style={{objectFit:'contain'}} />
</div>
<div className={styles.badge}>

<img src='../Logo.svg' alt='Partner 1'  style={{objectFit:'contain'}} />
<img src='../Logo.svg' alt='Partner 1'  style={{objectFit:'contain'}} />
<img src='../Logo.svg' alt='Partner 1'  style={{objectFit:'contain'}} />
<img src='../Logo.svg' alt='Partner 1'  style={{objectFit:'contain'}} />
</div>
    </div>
</div>
</div>
</div>
)
}

export default PartnerAgentHero