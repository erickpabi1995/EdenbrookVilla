import useMediaQuery from '../useMediaQuery';
import styles from './JourneyWhite.module.scss'

 const Journey = [
  {
    name:"Foundation of Qluxe Homes",
    year:2019,
    description:"What began as a shared vision between architects and entrepreneurs evolved into a commitment to redefine the meaning of home in Ghana’s real estate landscape."
  },
    {
    name:"Launch of Edenbrook Villa Project",
    year:2021,
    description:"Our flagship development introduced a new benchmark for quality and design — blending minimal architecture with serene living environments."
  },
   {
    name:"Expansion into Regional Markets",
    year:2022,
    description:"With strong local reception, Qluxe began exploring new territories and strategic land acquisitions in high-demand areas."
  },
     {
    name:"Digital Presence And Brand Redefinition",
    year:2025,
    description:"A new online experience and refined brand identity positioned Qluxe as a forward-thinking leader in luxury property development."
  },
  ]

const JourneyWhite = () => {

  
  const isMobile = useMediaQuery("(max-width: 768px)");


  return isMobile ? <MobileUI /> : <DesktopUI />;
}

function DesktopUI() {
  return (
        <div className={styles.journeyWhite}>
<div className={styles.container}>
<div className={styles.title}>
<p className={styles.titleColumn}>Our Journey So Far</p>
<p className={styles.titleText}>From our first concept to landmark developments, each milestone marks our ongoing pursuit of excellence.</p>
</div>
<div className={styles.titleDescription}>
  {Journey.map((item,index)=>
  <div className={styles.button} key={index}>
  <div className={styles.insights}>
    <p className={styles.insightCard}>{item.year}</p>
  </div>
      <div className={styles.blogSubContainer}>
        <div className={styles.blogColumn}>
<div className={styles.blogSubColumn}></div>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <circle cx="7.5" cy="7.5" r="7.5" fill="#172B22"/>
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
  );
}

function MobileUI(){
  return(
    <div>
         <div className={styles.journeyWhite}>
<div className={styles.container}>
<div className={styles.title}>
<p className={styles.titleColumn}>Our Journey So Far</p>
<p className={styles.titleText}>From our first concept to landmark developments, each milestone marks our ongoing pursuit of excellence.</p>
</div>
<div className={styles.titleDescription}>
  {Journey.map((item,index)=>
  <div className={styles.button} key={index}>

      <div className={styles.blogSubContainer}>
        <div className={styles.blogColumn}>
<div className={styles.blogSubColumn}></div>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <circle cx="7.5" cy="7.5" r="7.5" fill="#172B22"/>
</svg>
<div className={styles.blogSub}></div>
        </div>
      </div>
        <div className={styles.insights}>
          <div className={styles.content}>
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
    </div>
  )
}


export default JourneyWhite