// filepath: c:\Users\EricNanaKwameKpabi\Documents\GitHub\qluxe\qluxe\src\shared\NavBar\NavBar.jsx
import styles from './NavBar.module.scss'

const NavBar = ({background,color,navItems}) => {
    const navList = [...navItems]
    return (
        <nav className={styles.navbar} style={{background: background ? background : '#172B22'}}>
            <div className={styles.frame}>
           
                <img src='./Logo.svg' alt="Logo" />
                     
                   <ul className={styles.logo}>
  {navList.map((item, index) => (
    <li key={index} className={styles.listItems} style={{color: color ? color : '#FFF'}}>
      <a href={item.link} style={{color: 'inherit', textDecoration: 'none'}}>
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