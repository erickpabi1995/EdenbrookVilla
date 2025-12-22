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
    <img src='../kutahyaLogo.png' alt='Logo' onClick={()=>window.open('https://ngkutahyaseramik.com.tr/en/','_blank','noopener,noreferrer')}/>
     <img src='../whirlpoollogo.svg' alt='Logo' onClick={()=>window.open('https://www.whirlpool.ca/','_blank','noopener,noreferrer')} />
      <img src='../coralLogo.svg' alt='Logo' onClick={()=>window.open('https://www.coraldulux.com.gh/','_blank','noopener,noreferrer')}/>
        <div></div>
    </div>
     <div className={styles.insights}>
  <div></div>
          <img src='../buildersLogo.svg' alt='Logo' onClick={()=>window.open('https://www.instagram.com/morthanbuilders/','_blank','noopener,noreferrer')}/>
            <img src='../philipsLogo.svg' alt='Logo'  onClick={()=>window.open('https://www.lighting.philips.ca/','_blank','noopener,noreferrer')}/>
              <img src='../delFurLogo.svg' alt='Logo' onClick={()=>window.open('https://www.delfurltd.com/','_blank','noopener,noreferrer')}/>
                
    </div>
</div>
</div>

</div>
)
}

export default Partners