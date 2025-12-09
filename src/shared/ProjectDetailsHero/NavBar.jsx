import { useState } from 'react'
import styles from './NavBar.module.scss'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const leftNavItems = [
    {
      name:'history',
      link:'#history',
    },
    {
      name:'floor plans',
      link:'#floorPlans',
    },
        {
      name:'gallery',
      link:'#unitGallery',
    }
  ]
  
  const rightNavItems = [

    { 
      name:'neighborhood',
      link:'#neighborhood',
    },
       { 
      name:'payment plan',
      link:'#paymentplan',
    }
  ]

  const handleOffer = () => {
    
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.frame}>
        {/* Left Navigation Items */}
        <ul className={styles.leftNavItems}>
          {leftNavItems.map((item, index) => (
            <li key={index} className={styles.listItems}>
              <a href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Center Logo */}
        <div className={styles.logo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M32 16.0437V2.24082H18.3468V11.6036H3.86368V7.99964H15.5213V0H1.86811V13.8029H11.4777V27.7417H7.9129V15.9563H0V29.7592H13.6532V20.3964H27.8757V24.0004H16.2181V32H29.8713V18.1971H20.5223V4.25827H24.0871V16.0437H32ZM3.86368 2.19643H13.5257V5.80035H3.86368V2.19643ZM5.73745 27.7403H2.17261V17.9723H5.73745V27.7403ZM27.8729 29.8021H18.2109V26.1982H27.8729V29.8021ZM13.6518 18.1971V13.8014H18.3482V18.1971H13.6518ZM26.2611 4.25827H29.826V14.0262H26.2611V4.25827Z" fill="url(#paint0_linear_11480_12047)"/>
            <defs>
              <linearGradient id="paint0_linear_11480_12047" x1="5.32248" y1="5.20614" x2="35.4751" y2="35.0318" gradientUnits="userSpaceOnUse">
                <stop stopColor="#AF771E"/>
                <stop offset="0.53" stopColor="#FCC97E"/>
                <stop offset="1" stopColor="#AF771E"/>
              </linearGradient>
            </defs>
          </svg>
          <p className={styles.logoText}>Edenbrook Villa</p>
        </div>

        {/* Mobile Logo (visible only on mobile) */}
        <div className={styles.mobileLogo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M32 16.0437V2.24082H18.3468V11.6036H3.86368V7.99964H15.5213V0H1.86811V13.8029H11.4777V27.7417H7.9129V15.9563H0V29.7592H13.6532V20.3964H27.8757V24.0004H16.2181V32H29.8713V18.1971H20.5223V4.25827H24.0871V16.0437H32ZM3.86368 2.19643H13.5257V5.80035H3.86368V2.19643ZM5.73745 27.7403H2.17261V17.9723H5.73745V27.7403ZM27.8729 29.8021H18.2109V26.1982H27.8729V29.8021ZM13.6518 18.1971V13.8014H18.3482V18.1971H13.6518ZM26.2611 4.25827H29.826V14.0262H26.2611V4.25827Z" fill="url(#paint0_linear_11480_12047)"/>
            <defs>
              <linearGradient id="paint0_linear_11480_12047" x1="5.32248" y1="5.20614" x2="35.4751" y2="35.0318" gradientUnits="userSpaceOnUse">
                <stop stopColor="#AF771E"/>
                <stop offset="0.53" stopColor="#FCC97E"/>
                <stop offset="1" stopColor="#AF771E"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Mobile Make an Offer Button */}
        <div className={styles.mobileButtonContainer}>
          <button className={styles.mobileButton} onClick={handleOffer}>MAKE AN OFFER</button>
        </div>

        {/* Right Navigation Items */}
        <ul className={styles.rightNavItems}>
          {rightNavItems.map((item, index) => (
            <li key={index} className={styles.listItems}>
              <a href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
          <div className={styles.button_container}>
            <button className={styles.button} onClick={handleOffer}>MAKE AN OFFER</button>
          </div>
        </ul>

        {/* Mobile Hamburger Menu */}
        <button 
          className={styles.hamburger} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Mobile Menu */}
        <ul className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          {[...leftNavItems, ...rightNavItems].map((item, index) => (
            <li key={index} className={styles.mobileListItem}>
              <a href={item.link} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar