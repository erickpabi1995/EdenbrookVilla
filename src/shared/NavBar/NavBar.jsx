import { useNavigate } from 'react-router-dom'
import styles from './NavBar.module.scss'
import { useState } from 'react'

const NavBar = ({background,color,navItems}) => {
  const navigate = useNavigate()
   const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navList = [...navItems]

    const handleContact = () => {
      navigate('/contactUs')
    }
    return (
        <nav className={styles.navbar} style={{background: background ? background : '#172B22'}}>
            <div className={styles.frame}>
           
                <img src='./Logo.svg' alt="Logo" onClick={()=>navigate('/')} className='cursor-pointer'/>
                     
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
    <li key={index} className={styles.listItems} style={{color: color ? color : '#FFF'}}>
      <a href={item.link} style={{color: 'inherit', textDecoration: 'none'}}>
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