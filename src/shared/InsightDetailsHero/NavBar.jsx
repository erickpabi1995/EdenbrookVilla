
import { useState } from 'react'
import styles from './NavBar.module.scss'

const NavBar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navList = [{
      name:'About',
      link:''
    },
{
  name:'Projects',
  link:''
},
{
  name:'Partner Agents',
  link:''
},
{
  name:'Investors',
  link:''
},
{
  name:'Insights',
  link:''
},
]
    return (
        <nav className={styles.navbar}>
            <div className={styles.frame}>
           
                <img src='./Logo.svg' alt="Logo" />

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
                     
                   <ul className={`${styles.logo} ${isMenuOpen ? styles.menuOpen : ''}`}>
  {navList.map((item, index) => (
    <li key={index} className={styles.listItems}>
      <a href={item.link}>
        {item.name}
      </a>
    </li>
  ))}
  <div className={styles.button_container}>
    <button className={styles.button}>CONTACT US</button>
  </div>
</ul>
           
                     
                  
                             
            </div>
        </nav>
    )
}

export default NavBar