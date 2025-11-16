import styles from './LandProjects.module.scss'

const LandProjects = () => {

return(
    <div className={styles.containers}>
<div className={styles.container}>
<div className={styles.title}>
    <div className={styles.titleColumn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
  <path d="M56.485 28.0125V3.9125H32.385V20.26H6.82V13.9675H27.3975V0H3.2975V24.1H20.26V48.4375H13.9675V27.86H0V51.96H24.1V35.6125H49.205V41.905H28.6275V55.8725H52.7275V31.7725H36.225V7.435H42.5175V28.0125H56.485ZM6.82 3.835H23.875V10.1275H6.82V3.835ZM10.1275 48.435H3.835V31.38H10.1275V48.435ZM49.2 52.035H32.145V45.7425H49.2V52.035ZM24.0975 31.7725V24.0975H32.3875V31.7725H24.0975ZM46.355 7.435H52.6475V24.49H46.355V7.435Z" fill="url(#paint0_linear_11370_3169)"/>
  <defs>
    <linearGradient id="paint0_linear_11370_3169" x1="9.395" y1="9.09" x2="62.045" y2="61.74" gradientUnits="userSpaceOnUse">
      <stop stop-color="#AF771E"/>
      <stop offset="0.53" stop-color="#FCC97E"/>
      <stop offset="1" stop-color="#AF771E"/>
    </linearGradient>
  </defs>
</svg>
<p className={styles.titleText}>Edenbrook Villa</p>
<p className={styles.titleDescription}>Set within Accra’s most exclusive enclave, Edenbrook Villa embodies serenity, privacy, and architectural excellence — redefining what it means to come home.</p>
   <button className={styles.button}>View Project Details</button>
   </div>
<div className={styles.insights}>
    <div className={styles.insightCard}>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
  <path d="M2.625 0.75C3.12228 0.75 3.59954 0.947198 3.95117 1.29883C4.3028 1.65046 4.5 2.12772 4.5 2.625C4.5 2.99584 4.38962 3.35865 4.18359 3.66699C3.97761 3.9751 3.68517 4.21556 3.34277 4.35742C3.00016 4.49934 2.6225 4.53621 2.25879 4.46387C1.89524 4.39147 1.56095 4.21329 1.29883 3.95117C1.03671 3.68905 0.858534 3.35476 0.786133 2.99121C0.713786 2.6275 0.750664 2.24984 0.892578 1.90723C1.03444 1.56483 1.2749 1.27239 1.58301 1.06641C1.89135 0.860379 2.25416 0.75 2.625 0.75Z" fill="white" stroke="white" stroke-width="1.5"/>
</svg>
<p className={styles.blogSubContainer}>1 / 32 projects</p>
    </div>
    <div className={styles.blogColumn}>
        <div className={styles.blogSubColumn}>
<div className={styles.blogSub}>
<img src='../sliderImage.png'/>
<img src='../sliderImage.png'/>
<img src='../sliderImage.png'/>
<img src='../sliderImage.png'/>
<img src='../sliderImage.png'/>
<img src='../sliderImage.png'/>
<img src='../sliderImage.png'/>
<img src='../sliderImage.png'/>
<img src='../sliderImage.png'/>
</div>
<div className={styles.badge}>
    <div className={styles.badge_text}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11 17L6 12M6 12L11 7M6 12H18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
      <div className={styles.badge_text}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M13 17L18 12M18 12L13 7M18 12H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>

</div>
        </div>

    </div>
</div>

    </div>
</div>
</div>
)
}

export default LandProjects