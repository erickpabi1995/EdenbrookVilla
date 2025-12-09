import styles from './Neighbourhood.module.scss'
import useMediaQuery from '../useMediaQuery'
import { useState } from 'react';


  const data = [
    {
      name:    'Kotoka International Airport',
      imageUrl:'../Airport.jpg'
    },
        {
      name:    'The Trade Fair Center',
      imageUrl:'../tradefair.jpg'
    },
        {
      name:    'Accra Shopping Mall',
      imageUrl:'../shopping mall.jpg'
    },
        {
      name:    'Labadi Beach',
      imageUrl:'../labadi.jpg'
    },
        {
      name:    'Accra Sport Stadium',
      imageUrl:'../stadium.jpg'
    },
        {
      name:    'University of Ghana, Legon',
      imageUrl:'../uog.jpg'
    },
            {
      name:    'Flagstaff House',
      imageUrl:'../flagstaff.jpg'
    },
            {
      name:    'Nyaho Medical Center',
      imageUrl:'../nyaho.jpg'
    }
  ]

const Neighbourhood = () => {



  const isMobile = useMediaQuery("(max-width:768px)");
  return isMobile ? <MobileUI/> : <DesktopUI/>

}

function MobileUI(){
   const [selectedItem, setSelectedItem] = useState(data[0]) // Default to first item

  const handleItemClick = (item) => {
    setSelectedItem(item)
  }
  return(
    <div className={styles.neighbourhood}>
<div className={styles.container}>
<div className={styles.titleColumn}>
  <div className={styles.toggle}>
<button className={styles.button}>
  List view
</button>
    <button className={styles.titleText}>3D view</button>
    </div>
    <div className={styles.content}>
    <p className={styles.title}>Around the Neighborhood</p>
  <p className={styles.insightCard}>Just 20 minutes from Edenbrook Villa, the Accra International Airport connects residents to global destinations, making business and leisure travel seamless.</p>
    <div className={styles.frame}>
      {data.map((item,index)=>(
<div className={styles.neighbourItem} key={index} onClick={()=>handleItemClick(item)}
  style={{cursor:'pointer'}}>
<div className={styles.neighbourFrame}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.8538 8.35403L9.35375 12.854C9.25993 12.9478 9.13268 13.0006 9 13.0006C8.86732 13.0006 8.74007 12.9478 8.64625 12.854C8.55243 12.7602 8.49972 12.633 8.49972 12.5003C8.49972 12.3676 8.55243 12.2403 8.64625 12.1465L12.2931 8.50028H2.5C2.36739 8.50028 2.24021 8.4476 2.14645 8.35383C2.05268 8.26006 2 8.13289 2 8.00028C2 7.86767 2.05268 7.74049 2.14645 7.64672C2.24021 7.55296 2.36739 7.50028 2.5 7.50028H12.2931L8.64625 3.85403C8.55243 3.76021 8.49972 3.63296 8.49972 3.50028C8.49972 3.3676 8.55243 3.24035 8.64625 3.14653C8.74007 3.05271 8.86732 3 9 3C9.13268 3 9.25993 3.05271 9.35375 3.14653L13.8538 7.64653C13.9002 7.69296 13.9371 7.74811 13.9623 7.80881C13.9874 7.86951 14.0004 7.93457 14.0004 8.00028C14.0004 8.06599 13.9874 8.13105 13.9623 8.19175C13.9371 8.25245 13.9002 8.30759 13.8538 8.35403Z" fill="#172B22"/>
</svg>
<p className={selectedItem?.name === item.name ? styles.neighbourText : styles.neighbourTextInactive}>{item.name}</p>
</div>
<div className={styles.neighbourDividerContainer}>
  <div className={styles.neighbourDivider}>

  </div>
</div>
</div>
))}
    </div>
    </div>

    </div>
       <div className={styles.imageContainer}>
      <img 
        src={selectedItem ? selectedItem.imageUrl : '../listMap.png'} 
        alt={selectedItem ? selectedItem.name : 'Map'}
        style={{width: '100%', height: 'auto', objectFit: 'cover'}}
      />
      {selectedItem && (
        <div className={styles.imageCaption}>
          <p>{selectedItem.name}</p>
        </div>
      )}
    </div>
    </div>
    </div>

)
}

function DesktopUI(){

return(
    <div className={styles.neighbourhood}>
<div className={styles.container}>
<p className={styles.title}>Around the Neighborhood</p>
<div className={styles.titleColumn}>
<button className={styles.titleText}>
  List view
</button>
    <button className={styles.button}>3D view</button>
    </div>
</div>
<img src='../listMap.png' alt='Map'/>
<p className={styles.insightCard}>A visual overview of key destinations surrounding Edenbrook Villa — schools, hospitals, leisure, and business hubs all within reach.</p>
</div>

)
}

export default Neighbourhood