
import { useState } from 'react'
import styles from './NavBar.module.scss'

const NavBar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navList = [
    {
    name:'history',
    link:'#history',
  },
    {
    name:'journey',
    link:'#journey',
  },
    {
    name:'unit gallery',
    link:'#unitGallery',
  },
    {
    name:'floor plans',
    link:'#floorPlans',
  },
    { 
    name:'neighborhood',
    link:'#neighborhood',
  },
   { 
    name:'payment plan',
    link:'#paymentplan',
  },
   { 
    name:'brochure',
    link:'#brochure',
  },
   { 
    name:'contact us',
    link:'#contactus',
  }

]
    return (
        <nav className={styles.navbar}>
            <div className={styles.frame}>
           <div className={styles.logo}>
         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M32 16.0437V2.24082H18.3468V11.6036H3.86368V7.99964H15.5213V0H1.86811V13.8029H11.4777V27.7417H7.9129V15.9563H0V29.7592H13.6532V20.3964H27.8757V24.0004H16.2181V32H29.8713V18.1971H20.5223V4.25827H24.0871V16.0437H32ZM3.86368 2.19643H13.5257V5.80035H3.86368V2.19643ZM5.73745 27.7403H2.17261V17.9723H5.73745V27.7403ZM27.8729 29.8021H18.2109V26.1982H27.8729V29.8021ZM13.6518 18.1971V13.8014H18.3482V18.1971H13.6518ZM26.2611 4.25827H29.826V14.0262H26.2611V4.25827Z" fill="url(#paint0_linear_11480_12047)"/>
  <defs>
    <linearGradient id="paint0_linear_11480_12047" x1="5.32248" y1="5.20614" x2="35.4751" y2="35.0318" gradientUnits="userSpaceOnUse">
      <stop stop-color="#AF771E"/>
      <stop offset="0.53" stop-color="#FCC97E"/>
      <stop offset="1" stop-color="#AF771E"/>
    </linearGradient>
  </defs>
</svg>
<p className={styles.logoText}>Edenbrook Villa</p>
</div>

                  {/* <button 
                    className={styles.hamburger} 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </button> */}
                  <button 
                    className={styles.hamburger} 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>
                     
                   <ul className={`${styles.navItemFrame} ${isMenuOpen ? styles.menuOpen : ''}`}>
  {navList.map((item, index) => (
    <li key={index} className={styles.listItems}>
      <a href={item.link}>
        {item.name}
      </a>
    </li>
  ))}
</ul>
         <div className={styles.button_container}>
    <button className={styles.button}>MAKE OFFER</button>
  </div>  
                     
                  
                             
            </div>
        </nav>
    )
}

export default NavBar