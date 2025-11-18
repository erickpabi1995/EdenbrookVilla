import NavBar from './NavBar'
import styles from './ContactUsHero.module.scss'

const ContactUsHero = () => {

return(
    <div className={styles.containers}>
        <NavBar/>
<div className={styles.container}>
<div className={styles.title}>
    <div className={styles.titleColumn}>
      
<div className={styles.titleText}>
<p className={styles.titleDescription}>— Contact Qluxe Homes</p>

   <p className={styles.button}>Let’s Start the Conversation</p>
</div>
<p className={styles.insights}>Whether you’re exploring a new home, partnership, or investment opportunity, our team is ready to assist. Get in touch with us</p>

   </div>

    </div>
</div>
</div>
)
}

export default ContactUsHero