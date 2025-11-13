import styles from './Partners.module.scss'

const Partners = () => {


return(
    <div className={styles.partners}>
<div className={styles.container}>
<div className={styles.title}>
<p className={styles.titleColumn}>— Our Partners</p>
<p className={styles.titleText}>Trusted Partnerships. Proven Excellence.</p>
<p className={styles.titleDescription}>Qluxe collaborates with leading architects, engineers, financiers, and artisans who share our commitment to detail and enduring quality.</p>
</div>
<div className={styles.button}> 
  <div className={styles.insights}>
    <img src='../kutahyaLogo.png' alt='Logo'/>
     <img src='../whirlpoollogo.svg' alt='Logo'/>
      <img src='../coralLogo.svg' alt='Logo'/>
        <div></div>
    </div>
     <div className={styles.insights}>
  <div></div>
          <img src='../buildersLogo.svg' alt='Logo'/>
            <img src='../philipsLogo.svg' alt='Logo'/>
              <img src='../delFurLogo.svg' alt='Logo'/>
                
    </div>
</div>
</div>

</div>
)
}

export default Partners