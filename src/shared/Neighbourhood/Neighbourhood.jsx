import styles from './NeighbourHood.module.scss'
import useMediaQuery from '../useMediaQuery'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';


const data = [
  {
    name: 'Kotoka International Airport',
    imageUrl: '../Airport.jpg',
    description: 'Just 12-15 minutes from Edenbrook Villa, the Kotoka International Airport provides seamless travel for international residents and frequent flyers.'
  },
  {
    name: 'Accra Shopping Mall',
    imageUrl: '../shopping mall.jpg',
    description: '15-18 minutes drive from Edenbrook Villa. The hub for high-end retail, dining, and cinema.'
  },
  {
    name: 'Labadi Beach',
    imageUrl: '../labadi.jpg',
    description: "Immediate access to Accra's premier leisure and resort strip. Just 8-10 minutes drive."
  },
  {
    name: 'Accra Sport Stadium',
    imageUrl: '../stadium.jpg',
    description: 'Just 15-20 minutes drive away from Edenbrook Villa, catch exciting sports events and matches in this state-of-the-art facility.'
  },
  {
    name: 'University of Ghana, Legon',
    imageUrl: '../uog.jpg',
    description: "20-25 minutes drive. Close to the nation's premier academic and research hub."
  },
  {
    name: 'Flagstaff House',
    imageUrl: '../flagstaff.jpg',
    description: '20-25 minutes drive from Edenbrook Villa. The official residence of the President, a symbol of Ghanaian heritage.'
  },
  {
    name: 'Nyaho Medical Center',
    imageUrl: '../nyaho.jpg',
    description: '15-20 minutes drive from Edenbrook Villa. World-class healthcare within a short commute.'
  }
];

const NeighbourHood = () => {



  const isMobile = useMediaQuery("(max-width:768px)");
  return isMobile ? <MobileUI/> : <DesktopUI/>

}

function MobileUI(){
   const [selectedItem, setSelectedItem] = useState(data[0]) // Default to first item

   const[activeView,setActiveView] = useState('list')

   const handleViewToggle = (value) => {
    setActiveView(value)
   }
  const handleItemClick = (item) => {
    setSelectedItem(item)
  }

  const getDisplayImage = () => {
    if (activeView === '3d') {
      return '../listMap.png'
    }
    return selectedItem ? selectedItem.imageUrl : '../listMap.png'
  }

  // Function to determine image alt text
  const getImageAlt = () => {
    if (activeView === '3d') {
      return 'Map'
    }
    return selectedItem ? selectedItem.name : 'Map'
  }
  return(
 <AnimatePresence mode="wait">
  < motion.div
      key="list"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
  className={styles.neighbourhood}>
<div className={styles.container}>
<div className={styles.titleColumn}>
  <div className={styles.toggle}>
<button className={ activeView === 'list' ? styles.button : styles.titleText}
onClick={()=>handleViewToggle('list')}>
  List view
</button>
    <button className={activeView === '3d' ? styles.button : styles.titleText}
    onClick={()=>handleViewToggle('3d')}>3D view</button>
    </div>
    <div className={styles.content} style={{height:activeView === 'list' ? '700px' : 'auto'}}>
    <p className={styles.title}>Around the Neighborhood</p>
    {activeView === 'list' &&
  <p className={styles.insightCard}>{selectedItem.description}</p>
}
    {/* Show the list only when list view is active */}
    {activeView === 'list' && (
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
    )}
    </div>

    </div>
     <div className={styles.imageContainer}>
      <img 
        src={getDisplayImage()} 
        alt={getImageAlt()}
        style={{width: '100%', height: 'auto', objectFit: 'cover'}}
      />
    </div>
    </div>
    </motion.div>
    </AnimatePresence>

)
}

function DesktopUI(){

     const[activeView,setActiveView] = useState('3d')
     const [selectedItem, setSelectedItem] = useState(data[0]) 

   const handleViewToggle = (value) => {
    setActiveView(value)
   }

     const handleItemClick = (item) => {
    setSelectedItem(item)
  }

    const getDisplayImage = () => {
    if (activeView === '3d') {
      return '../listMap.png'
    }
    return selectedItem ? selectedItem.imageUrl : '../listMap.png'
  }

  const getImageAlt = () => {
    if (activeView === '3d') {
      return 'Map'
    }
    return selectedItem ? selectedItem.name : 'Map'
  }

return(
  <AnimatePresence mode="wait">
  {activeView === '3d' && (
    <motion.div
      key="3d"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className={styles.neighbourhood}
    >
<div className={styles.container}>
<p className={styles.title}>Around the Neighborhood</p>
<div className={styles.titleColumn}>
<button onClick={()=>handleViewToggle('list')} className={ activeView === 'list' ? styles.button : styles.titleText}>
  List view
</button>
    <button onClick={()=>handleViewToggle('3d')} className={ activeView === '3d' ? styles.button : styles.titleText}
  >3D view</button>
    </div>
</div>

 <img src='../listMap.png' alt='Map'/>
<p className={styles.insightCard}>A visual overview of key destinations surrounding Edenbrook Villa — schools, hospitals, leisure, and business hubs all within reach.</p> 
</motion.div>
  )}

   {activeView === 'list' && (
    <motion.div
      key="list"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className={styles.variant}
    >
<div className={styles.variantContainer}>
<div className={styles.variantContent}>
  <div className={styles.variantColumn}>
    <p className={styles.variantHeader}>Around the Neighborhood</p>
    <p className={styles.variantSubtext}>{selectedItem.description}</p>
    <div className={styles.variantFrame}>
        {data.map((item,index)=>(
<div className={styles.variantNeighbourhoodTile} key={index} onClick={()=>handleItemClick(item)}   style={{cursor:'pointer'}}>
  <div className={styles.variantListItem}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.8538 8.35378L9.35375 12.8538C9.25993 12.9476 9.13268 13.0003 9 13.0003C8.86732 13.0003 8.74007 12.9476 8.64625 12.8538C8.55243 12.76 8.49972 12.6327 8.49972 12.5C8.49972 12.3674 8.55243 12.2401 8.64625 12.1463L12.2931 8.50003H2.5C2.36739 8.50003 2.24021 8.44736 2.14645 8.35359C2.05268 8.25982 2 8.13264 2 8.00003C2 7.86743 2.05268 7.74025 2.14645 7.64648C2.24021 7.55271 2.36739 7.50003 2.5 7.50003H12.2931L8.64625 3.85378C8.55243 3.75996 8.49972 3.63272 8.49972 3.50003C8.49972 3.36735 8.55243 3.2401 8.64625 3.14628C8.74007 3.05246 8.86732 2.99976 9 2.99976C9.13268 2.99976 9.25993 3.05246 9.35375 3.14628L13.8538 7.64628C13.9002 7.69272 13.9371 7.74786 13.9623 7.80856C13.9874 7.86926 14.0004 7.93433 14.0004 8.00003C14.0004 8.06574 13.9874 8.13081 13.9623 8.1915C13.9371 8.2522 13.9002 8.30735 13.8538 8.35378Z" fill="#172B22"/>
</svg>

  <p className={selectedItem?.name === item.name ? styles.variantListText : styles.variantListTextInactive}>{item.name}</p>

    </div>
    <div className={styles.variantDividerContainer}>
      <div className={styles.variantDivider}>
        </div>
      </div>
  </div>
        ))}
    </div>
    </div>
</div>
<div className={styles.variantImageContainer}>
        <img 
        src={getDisplayImage()} 
        alt={getImageAlt()}
        style={{ height: '900px', alignSelf: 'stretch',objectFit:"cover",imageRendering: 'crisp-edges' }}
      />
      <div className={styles.toggle}>
        <button className={ activeView === 'list' ? styles.activeBtn : styles.inactiveBtn} onClick={()=>handleViewToggle('list')} style={{ fontSize: '14px', padding: '8px 16px' }}>
List View
        </button>
           <button className={ activeView === '3d' ? styles.activeBtn : styles.inactiveBtn} onClick={()=>handleViewToggle('3d')} style={{ fontSize: '14px', padding: '8px 16px' }}>
3d View
        </button>
      </div>
  </div>
</div>
    </motion.div>
    )}
</AnimatePresence>
)
}

export default NeighbourHood