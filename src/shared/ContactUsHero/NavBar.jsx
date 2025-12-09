import { useState } from 'react'
import styles from './NavBar.module.scss'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()

      const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navList = [{
      name:'About',
      link:'/about'
    },
{
  name:'Projects',
  link:'/projectsHub'
},
{
  name:'Partner Agents',
  link:'/partnerAgents'
},
{
  name:'Investors',
  link:'/investors'
},
{
  name:'Insights',
  link:'/insightHub'
},
]

const handleContact = () => {
  navigate('/contactUs')
}
    return (
        <nav className={styles.navbar}>
            <div className={styles.frame}>
           
                <img src='./Logo.svg' alt="Logo" onClick={()=>navigate('/')} className='cursor-pointer' />

                <div className={styles.mobileControls}>
                    <div className={styles.button_container}>
                        <button className={styles.button} onClick={handleContact}>CONTACT US</button>
                    </div>
                    
                    <button 
                        className={styles.hamburger} 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                    </button>
                </div>
                     
                   <ul className={`${styles.logo} ${isMenuOpen ? styles.menuOpen : ''}`}>
  {navList.map((item, index) => (
    <li key={index} className={styles.listItems}>
      <a href={item.link}>
        {item.name}
      </a>
    </li>
  ))}
  <div className={`${styles.button_container} ${styles.desktopOnly}`}>
    <button className={styles.button} onClick={handleContact}>CONTACT US</button>
  </div>
</ul>
           
                     
                  
                             
            </div>
        </nav>
    )
}

export default NavBar