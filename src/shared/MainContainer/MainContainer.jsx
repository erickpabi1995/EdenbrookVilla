import { useNavigate } from 'react-router-dom'
import styles from './MainContainer.module.scss'

const MainContainer = () => {
  const navigate = useNavigate()

  const handleProjectDetails = () => {
    navigate('/projectDetails')
  }

return(
    <div className={styles.containers}>
<div className={styles.container}>
<div className={styles.title}>
    <p className={styles.titleColumn}>Discover Our Developments</p>
    </div>
    </div>
<div className={styles.titleText}>
<div className={styles.titleDescription}>
   <div className={styles.button}>
    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
  <path d="M56.485 28.0125V3.9125H32.385V20.26H6.82V13.9675H27.3975V0H3.2975V24.1H20.26V48.4375H13.9675V27.86H0V51.96H24.1V35.6125H49.205V41.905H28.6275V55.8725H52.7275V31.7725H36.225V7.435H42.5175V28.0125H56.485ZM6.82 3.835H23.875V10.1275H6.82V3.835ZM10.1275 48.435H3.835V31.38H10.1275V48.435ZM49.2 52.035H32.145V45.7425H49.2V52.035ZM24.0975 31.7725V24.0975H32.3875V31.7725H24.0975ZM46.355 7.435H52.6475V24.49H46.355V7.435Z" fill="url(#paint0_linear_11564_9506)"/>
  <defs>
    <linearGradient id="paint0_linear_11564_9506" x1="9.395" y1="9.09" x2="62.045" y2="61.74" gradientUnits="userSpaceOnUse">
      <stop stop-color="#AF771E"/>
      <stop offset="0.53" stop-color="#FCC97E"/>
      <stop offset="1" stop-color="#AF771E"/>
    </linearGradient>
  </defs>
</svg>
<p className={styles.insights}>Edenbrook Villa</p>
<p className={styles.insightCard}>Set within Accra’s most exclusive enclave, Edenbrook Villa embodies serenity, privacy, and architectural excellence — redefining what it means to come home.</p>
<button className={styles.blogSubContainer} onClick={handleProjectDetails}>View project details</button>
   </div>
</div>

</div>
</div>
)
}

export default MainContainer