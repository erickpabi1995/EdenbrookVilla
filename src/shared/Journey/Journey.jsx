import styles from './Journey.module.scss'
import useMediaQuery from '../useMediaQuery'

 const JourneyData = [
  {
    name:"Concept",
    year:2025,
    description:"Vision finalized and design approved — August 2025"
  },
    {
    name:"Construction",
    year:2025,
    description:"Phase 1 underway — Estimated completion Q4 2026."
  },
   {
    name:"Handover",
    year:2026,
    description:"Move-in begins — Late 2026."
  },
  ]


const Journey = () => {

  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <MobileUI /> : <DesktopUI />;
}

function DesktopUI(){
  return(
    <div className={styles.journey}>
<div className={styles.container}>
<div className={styles.title}>
<p className={styles.titleColumn}>PROJECT TIMELINE</p>
<p className={styles.titleText}>From our first concept to landmark developments, each milestone marks our ongoing pursuit of excellence.</p>
</div>
<div className={styles.titleDescription}>
  {JourneyData.map((item,index)=>
  <div className={styles.button} key={index}>
  <div className={styles.insights}>
    <p className={styles.insightCard}>{item.year}</p>
  </div>
      <div className={styles.blogSubContainer}>
        <div className={styles.blogColumn}>
<div className={styles.blogSubColumn}></div>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <circle cx="7.5" cy="7.5" r="7.5" fill="#FCC97E"/>
</svg>
<div className={styles.blogSub}></div>
        </div>
      </div>
      <div className={styles.badge}>
<div className={styles.social_icons}>
  <p className={styles.date_text}>{item.name}</p>
  <p className={styles.header}>{item.description}</p>
</div>
      </div>
  </div>
  )}

</div>
</div>
</div>
  )
}

function MobileUI(){
  return(
    <div className={styles.journey}>
<div className={styles.container}>
<div className={styles.title}>
<p className={styles.titleColumn}>PROJECT TIMELINE</p>
<p className={styles.titleText}>From our first concept to landmark developments, each milestone marks our ongoing pursuit of excellence.</p>
</div>
<div className={styles.titleDescription}>
  {JourneyData.map((item,index)=>
  <div className={styles.button} key={index}>
          <div className={styles.blogSubContainer}>
        <div className={styles.blogColumn}>
<div className={styles.blogSubColumn}></div>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <circle cx="7.5" cy="7.5" r="7.5" fill="#FCC97E"/>
</svg>
<div className={styles.blogSub}></div>
        </div>
      </div>
  <div className={styles.insights}>
    <div className={styles.contentCard}>
    <p className={styles.insightCard}>{item.year}</p>

<div className={styles.social_icons}>
  <p className={styles.date_text}>{item.name}</p>
  <p className={styles.header}>{item.description}</p>
      </div>
      </div>
  </div>
  </div>
  )}

</div>
</div>
</div>
  )
}

export default Journey