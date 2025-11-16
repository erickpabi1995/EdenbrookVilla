
import styles from './NavBar.module.scss'

const NavBar = () => {
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
                     
                   <ul className={styles.logo}>
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