import { useState } from 'react';
import useMediaQuery from '../useMediaQuery';
import styles from './FloorPlan.module.scss'


  const Tabs = [
"Option A: The Signature",
"Option B: The Horizon",
"Option C: The Grand Estate"
]
  const tabContent = {
    "Option A: The Signature": {
      bedrooms: "4 Ensuite Bedrooms | 4.5 Bathrooms",
      sub: ["Spacious 2,200 sqft of modern livable interiors.", "Designer finishes featuring high-end Qluxe craftsmanship.", "Optimized layout perfect for sophisticated urban family living."],
      price: "$420,000",
      typeA:'Ground Floor',
      typeB: 'First Floor',
      typeAImage:'../gf.jpeg',
      typeBImage:'../ff.jpeg'
    },
    "Option B: The Horizon": {
      bedrooms: "4 Ensuite Bedrooms | 4.5 Bathrooms",
      sub: ["Private rooftop terrace for exclusive outdoor lounging and entertainment", "Skyline views overlooking the prime Tse-Addo neighborhood.", "Enhanced social space bridging the gap between indoor and outdoor luxury."],
      price: "$440,000",
      typeA:'Ground Floor',
      typeB: 'First Floor',
      typeAImage:'../gf.jpeg',
      typeBImage:'../ff.jpeg' 
    },
    "Option C: The Grand Estate": {
      bedrooms: "5 Ensuite Bedrooms | 5.5 Bathrooms",
      sub: ["Rooftop sitting area plus an additional Penthouse Suite/Office.", "Maximum versatility for large families or premium guest hosting.", "The full Qluxe Experience—our most expansive and prestigious floor plan."],
      price: "$460,000",
      typeA:'Ground Floor',
      typeB: 'First Floor',
      typeAImage:'../gf.jpeg', 
      typeBImage:'../ff.jpeg' 
    }
  };

const FloorPlan = () => {



  const [activeTab,setActiveTab] = useState(Tabs[0])

const [activeType,setActiveType] = useState('Ground Floor')

  const content = tabContent[activeTab]

  const handleTabChange = (newTab) => {
    setActiveTab(newTab)
    setActiveType('Ground Floor')
  }

   const handleDownload = () => {
    const link = document.createElement('a');
    const currentImage = activeType === content.typeA ? content.typeAImage : content.typeBImage;
    link.href =  currentImage;
    link.download = `FloorPlan_${activeTab.replace(/[:\s]/g, '_')}_${activeType.replace(/\s/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isMobile = useMediaQuery("(max-width:768px)");
return isMobile ? <MobileUI 
content={content} 
setActiveTab={handleTabChange} 
activeTab={activeTab} 
activeType={activeType} 
setActiveType={setActiveType}
handleDownload={handleDownload}


/> : <DesktopUI 
content={content}
 setActiveTab={handleTabChange} 
 activeTab={activeTab}
 activeType={activeType} 
setActiveType={setActiveType}
handleDownload={handleDownload}

 />
}

function DesktopUI({content,setActiveTab,activeTab,handleDownload,activeType,setActiveType}){
  const currentImage = activeType === content.typeA ? content.typeAImage : content.typeBImage;
  return(
        <div className={styles.floorPlan}>
<div className={styles.container}>
<p className={styles.title}>Floor Plans AND Unit Types</p>
<div className={styles.titleColumn}>
<div className={styles.titleText}>
  {Tabs.map((item)=>
  <div className={`${styles.titleDescription} ${activeTab === item ? '' : styles.nonActive}`}
   key={item} onClick={()=>setActiveTab(item)} style={{cursor:'pointer'}}>
    <p className={styles.button}>{item}</p></div>
  )}
</div>
<div className={styles.insights}>
<div className={styles.insightCard}>
<img src={currentImage} alt='Placeholder Image' style={{width:'100%',height:'552px'}}/>
<div className={styles.blogSubContainer}>
<p className={styles.blogColumn}>{content.bedrooms}</p>
<div className={styles.blogSubColumn}>
 {content.sub.map((subItem, idx) =>
                    <p className={styles.blogSub} key={idx}>{subItem}</p>
                  )}
</div>
<p className={styles.badge}>{content.price}</p>
<div className={styles.social_icons}>
<div className={styles.date_text}>
  <div className={activeType === content.typeA ? styles.header : styles.grid_secondary} onClick={()=>setActiveType(content.typeA)}>
    <p className={activeType === content.typeA ? styles.grid : styles.type} >{content.typeA}</p>
  </div>
    <div className={activeType === content.typeB ? styles.header : styles.grid_secondary} onClick={()=>setActiveType(content.typeB)}>
    <p className={activeType === content.typeB ? styles.grid :  styles.type}>{content.typeB}</p>
  </div>

</div>
    <div className={styles.dividerContainer}>
    <div className={styles.divider}></div>
  </div>
  <button className={styles.downloadBrochure} onClick={handleDownload}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21 13.5V19.5C21 19.6989 20.921 19.8897 20.7803 20.0303C20.6397 20.171 20.4489 20.25 20.25 20.25H3.75C3.55109 20.25 3.36032 20.171 3.21967 20.0303C3.07902 19.8897 3 19.6989 3 19.5V13.5C3 13.3011 3.07902 13.1103 3.21967 12.9697C3.36032 12.829 3.55109 12.75 3.75 12.75C3.94891 12.75 4.13968 12.829 4.28033 12.9697C4.42098 13.1103 4.5 13.3011 4.5 13.5V18.75H19.5V13.5C19.5 13.3011 19.579 13.1103 19.7197 12.9697C19.8603 12.829 20.0511 12.75 20.25 12.75C20.4489 12.75 20.6397 12.829 20.7803 12.9697C20.921 13.1103 21 13.3011 21 13.5ZM11.4694 14.0306C11.539 14.1004 11.6217 14.1557 11.7128 14.1934C11.8038 14.2312 11.9014 14.2506 12 14.2506C12.0986 14.2506 12.1962 14.2312 12.2872 14.1934C12.3783 14.1557 12.461 14.1004 12.5306 14.0306L16.2806 10.2806C16.3503 10.2109 16.4056 10.1282 16.4433 10.0372C16.481 9.94613 16.5004 9.84855 16.5004 9.75C16.5004 9.65145 16.481 9.55387 16.4433 9.46283C16.4056 9.37178 16.3503 9.28906 16.2806 9.21937C16.2109 9.14969 16.1282 9.09442 16.0372 9.0567C15.9461 9.01899 15.8485 8.99958 15.75 8.99958C15.6515 8.99958 15.5539 9.01899 15.4628 9.0567C15.3718 9.09442 15.2891 9.14969 15.2194 9.21937L12.75 11.6897V3C12.75 2.80109 12.671 2.61032 12.5303 2.46967C12.3897 2.32902 12.1989 2.25 12 2.25C11.8011 2.25 11.6103 2.32902 11.4697 2.46967C11.329 2.61032 11.25 2.80109 11.25 3V11.6897L8.78063 9.21937C8.63989 9.07864 8.44902 8.99958 8.25 8.99958C8.05098 8.99958 7.86011 9.07864 7.71937 9.21937C7.57864 9.36011 7.49958 9.55098 7.49958 9.75C7.49958 9.94902 7.57864 10.1399 7.71937 10.2806L11.4694 14.0306Z" fill="#AF771E"/>
</svg> DOWNLOAD FLOOR PLANS
  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
  )
}

function MobileUI({content,setActiveTab,activeType,setActiveType,handleDownload,activeTab}){
  const currentImage = activeType === content.typeA ? content.typeAImage : content.typeBImage;
  return(
        <div className={styles.floorPlan}>
<div className={styles.container}>
<p className={styles.title}>Floor Plans AND Unit Types</p>
<div className={styles.titleColumn}>
<div className={styles.titleText}>
  <div className={styles.mobileImageContainer}>
  <img src={currentImage} alt='Placeholder Image' style={{width:'auto',height:'287px'}}/>
  <div className={styles.blogSubContainer}>
<p className={styles.blogColumn}>{content.bedrooms}</p>
<div className={styles.blogSubColumn}>

 {content.sub.map((subItem, idx) =>
   <div className={styles.content} key={idx}>
                    <p className={styles.blogSub}>{subItem}</p>
                        </div>
                  )}
              
</div>
<p className={styles.badge}>{content.price}</p>
<div className={styles.social_icons}>
  <div className={styles.date_text}>
  <div className={activeType === content.typeA ? styles.header : styles.grid_secondary} onClick={()=>setActiveType(content.typeA)}>
    <p className={activeType === content.typeA ? styles.grid : styles.type} >{content.typeA}</p>
  </div>
    <div className={activeType === content.typeB ? styles.header : styles.grid_secondary} onClick={()=>setActiveType(content.typeB)}>
    <p className={activeType === content.typeB ? styles.grid :  styles.type}>{content.typeB}</p>
  </div>

</div>
  <button className={styles.downloadBrochure} onClick={handleDownload}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21 13.5V19.5C21 19.6989 20.921 19.8897 20.7803 20.0303C20.6397 20.171 20.4489 20.25 20.25 20.25H3.75C3.55109 20.25 3.36032 20.171 3.21967 20.0303C3.07902 19.8897 3 19.6989 3 19.5V13.5C3 13.3011 3.07902 13.1103 3.21967 12.9697C3.36032 12.829 3.55109 12.75 3.75 12.75C3.94891 12.75 4.13968 12.829 4.28033 12.9697C4.42098 13.1103 4.5 13.3011 4.5 13.5V18.75H19.5V13.5C19.5 13.3011 19.579 13.1103 19.7197 12.9697C19.8603 12.829 20.0511 12.75 20.25 12.75C20.4489 12.75 20.6397 12.829 20.7803 12.9697C20.921 13.1103 21 13.3011 21 13.5ZM11.4694 14.0306C11.539 14.1004 11.6217 14.1557 11.7128 14.1934C11.8038 14.2312 11.9014 14.2506 12 14.2506C12.0986 14.2506 12.1962 14.2312 12.2872 14.1934C12.3783 14.1557 12.461 14.1004 12.5306 14.0306L16.2806 10.2806C16.3503 10.2109 16.4056 10.1282 16.4433 10.0372C16.481 9.94613 16.5004 9.84855 16.5004 9.75C16.5004 9.65145 16.481 9.55387 16.4433 9.46283C16.4056 9.37178 16.3503 9.28906 16.2806 9.21937C16.2109 9.14969 16.1282 9.09442 16.0372 9.0567C15.9461 9.01899 15.8485 8.99958 15.75 8.99958C15.6515 8.99958 15.5539 9.01899 15.4628 9.0567C15.3718 9.09442 15.2891 9.14969 15.2194 9.21937L12.75 11.6897V3C12.75 2.80109 12.671 2.61032 12.5303 2.46967C12.3897 2.32902 12.1989 2.25 12 2.25C11.8011 2.25 11.6103 2.32902 11.4697 2.46967C11.329 2.61032 11.25 2.80109 11.25 3V11.6897L8.78063 9.21937C8.63989 9.07864 8.44902 8.99958 8.25 8.99958C8.05098 8.99958 7.86011 9.07864 7.71937 9.21937C7.57864 9.36011 7.49958 9.55098 7.49958 9.75C7.49958 9.94902 7.57864 10.1399 7.71937 10.2806L11.4694 14.0306Z" fill="#AF771E"/>
</svg> DOWNLOAD FLOOR PLANS
  </button>
  </div>

    <div className={styles.dividerContainer}>
    {Tabs.map((item)=>
  <div className={`${styles.titleMobile} ${activeTab === item ? styles.active : styles.nonActive}`}
   key={item} onClick={()=>setActiveTab(item)} style={{cursor:'pointer'}}>
    <p className={`${styles.button} ${activeTab === item ? styles.active : ''}`}>{item}</p></div>
  )}
</div>
</div>
</div>
</div>
</div>
</div>
</div>
  )
}

export default FloorPlan