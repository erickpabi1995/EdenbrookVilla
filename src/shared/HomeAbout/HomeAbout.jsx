import { useNavigate } from 'react-router-dom'
import styles from './HomeAbout.module.scss'
import useMediaQuery from '../useMediaQuery'

const HomeAbout = () => {

       const navigate = useNavigate()
         const isMobile = useMediaQuery("(max-width: 768px)");

    const handleAbout = () => {
        navigate('/about')
    }

return(
    <div className={styles.about}>
<div className={styles.container}>
<div className={styles.title}>
    <div className={styles.titleColumn}>
<p className={styles.titleText}>
About us
</p>
<p className={styles.titleDescription}>
A Vision Rooted in Design and Distinction.
</p>
    </div>
         <div className={styles.button}>
<div className={styles.insights}>
<p className={styles.insightCard}>Qluxe Homes redefines real estate in Ghana through architecture that balances precision, serenity, and sophistication. Each development reflects a deep respect for craft and community.</p>
<button className={styles.blogSubContainer} onClick={handleAbout}>
More about us
</button>
</div>
    </div>
</div>

<div className={styles.blogColumn}>
<div className={styles.blogSubColumn}>
    {/* <img src='../aboutImage3.svg' alt="About Image" style={{width: '348px', height: '348px'}}/> */}
         <picture>
        <source media="(max-width: 768px)" srcSet="../headerImage2.png" />
        <source media="(min-width: 769px)" srcSet="../headerImage2.png" />
        <img src="../headerImage2.png" alt="Edenbrook Villa" style={{width:isMobile ? '82px' : '348px', height:isMobile ? '82px' : "348px"}} />
    </picture>
</div>
     {/* <img src='../aboutImage2.svg' alt="About Image" style={{height: '828px'}}/> */}
         <picture>
        <source media="(max-width: 768px)" srcSet="../gallery3.png" />
        <source media="(min-width: 769px)" srcSet="../gallery3.png" />
        <img src="../gallery3.png" alt="Edenbrook Villa" style={{width:isMobile ? 'auto' : '552px',height:isMobile ? '185px' : '828px'}} />
    </picture>
      {/* <img src='../aboutImage.svg' alt="About Image" style={{width: '348px', height: '522px'}}/> */}
           <picture>
        <source media="(max-width: 768px)" srcSet="../edenBrookContainer.png" />
        <source media="(min-width: 769px)" srcSet="../edenBrookContainer.png" />
        <img src="../edenBrookContainer.png" alt="Edenbrook Villa" style={{width:isMobile ? '82px' : '348px',height:isMobile ? '123px' :'522px'}} />
    </picture>
</div>
</div>
</div>
)
}

export default HomeAbout