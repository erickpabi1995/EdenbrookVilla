
import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom'

const NavBar = () => {
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
  link:'/insights'
},
]
    return (
        <nav className={styles.navbar}>
            <div className={styles.frame}>
           
                <img src='./Logo.svg' alt="Logo" />
                     
                   <ul className={styles.logo}>
  {navList.map((item, index) => (
    <li key={index} className={styles.listItems}>
      <Link to={item.link}>
        {item.name}
      </Link>
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