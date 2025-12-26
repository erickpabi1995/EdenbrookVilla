import styles from './Testimonials.module.scss'
import { useState, useEffect } from 'react'
import useMediaQuery from '../useMediaQuery'

const Testimonials = () => {

  const [currentPage,setCurrentPage] = useState(0)
  
  // Responsive items per page
  const isTablet = useMediaQuery("(max-width: 1024px)")
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isLarge = useMediaQuery("(min-width: 1440px)")
  
  const getItemsPerPage = () => {
    if (isMobile) return 1
    if (isTablet) return 2
    if (isLarge)  return 4 
    return 3
  }
  
  const itemsPerPage = getItemsPerPage()

  const TestimonialsData = [
  {
    testimonial:'"Working with Qluxe means collaborating with a team that truly values craft. Their commitment to timeless design and precision sets a new benchmark for luxury development in Ghana."',
    authorImage:'../testimonials_author.svg',
    author:'James Alexander Brown',
    title:'Lead Architect, Partner Firm'
  },
    {
    testimonial:"'From our first visit to the final handover, Qluxe delivered more than a home — they delivered an experience. Every detail reflects a level of thought and care that's rare in today's market.'",
    authorImage:'../testimonials_author_2.svg',
    author:'Amelia K',
    title:'Homeowner, Edenbrook Villa'
  },
    {
    testimonial:'"Qluxe Homes stood out for their transparency, design integrity, and long-term vision. Investing with them has been seamless and rewarding in every way."',
    authorImage:'../testimonials_author_3.svg',
    author:'William Thomas Harris',
    title:'Property Investor'
  },
    {
    testimonial:'"Partnering with Qluxe has been an exceptional experience. Their attention to detail, dedication to quality, and passion for creating enduring designs make them a standout in Ghana’s luxury development scene"',
    authorImage:'../Avatar.png',
    author:'Daniel Matthew Collins',
    title:'Lead Architect, Partner Firm'
  },
  {
    testimonial:'"Qluxe redefines excellence in luxury development. Their meticulous attention to detail and unwavering commitment to quality make every project a masterpiece."',
    authorImage:'../testimonials_author.svg',
    author:'James Alexander Brown',
    title:'Lead Architect, Partner Firm'
  },
      {
    testimonial:'"Working with Qluxe is a seamless experience. They combine innovation with elegance, delivering designs that are both timeless and exceptional in craftsmanship."',
    authorImage:'../Avatar.png',
    author:'Daniel Matthew Collins',
    title:'Lead Architect, Partner Firm'
  },
  ]

  // Reset to first page when items per page changes
  useEffect(() => {
    setCurrentPage(0)
  }, [itemsPerPage])

      const handleNext = () => {
        const maxPage = Math.ceil(TestimonialsData.length / itemsPerPage) - 1
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1)
        }
    }
  const handlePrevious = () => {
if(currentPage > 0){
  setCurrentPage(currentPage - 1)
}
  }

  const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentTestimonials = TestimonialsData.slice(startIndex, endIndex)
    
    // Calculate if buttons should be disabled
    const isFirstPage = currentPage === 0
    const isLastPage = currentPage >= Math.ceil(TestimonialsData.length / itemsPerPage) - 1

return(
    <div className={styles.testimonials}>
<div className={styles.container}>
<div className={styles.title}>
<p className={styles.titleColumn}>— Testimonials</p>
<p className={styles.titleText}>The Confidence of Those We Build For.</p>
<p className={styles.titleDescription}>Our clients' stories reflect the trust and satisfaction that define every Qluxe home.</p>
<div className={styles.button}>
  {currentTestimonials.map((item,index)=>
<div className={styles.insights} key={index}>

<p className={styles.insightCard}>
{item.testimonial}
</p>
<div className={styles.blogSubContainer}>
  <img src={item.authorImage} alt='Author'/>
  <div className={styles.blogColumn}>
<p className={styles.blogSubColumn}>{item.author}</p>
<p className={styles.blogSub}>{item.title}</p>
  </div>
</div>
</div>
)}
</div>
</div>
<div className={styles.badge}>
<button 
className={`${styles.badge_text} ${isFirstPage ? styles.disabled : ''}`} 
onClick={handlePrevious}
 disabled={isFirstPage}
>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M20.7073 25.2931C20.8002 25.386 20.8739 25.4963 20.9242 25.6177C20.9745 25.7391 21.0004 25.8692 21.0004 26.0006C21.0004 26.132 20.9745 26.2621 20.9242 26.3835C20.8739 26.5048 20.8002 26.6151 20.7073 26.7081C20.6144 26.801 20.5041 26.8747 20.3827 26.925C20.2613 26.9752 20.1312 27.0011 19.9998 27.0011C19.8684 27.0011 19.7383 26.9752 19.6169 26.925C19.4955 26.8747 19.3852 26.801 19.2923 26.7081L9.29231 16.7081C9.19934 16.6152 9.12558 16.5049 9.07525 16.3835C9.02493 16.2621 8.99903 16.132 8.99903 16.0006C8.99903 15.8691 9.02493 15.739 9.07525 15.6176C9.12558 15.4962 9.19934 15.3859 9.29231 15.2931L19.2923 5.29306C19.48 5.10542 19.7345 5 19.9998 5C20.2652 5 20.5197 5.10542 20.7073 5.29306C20.895 5.4807 21.0004 5.73519 21.0004 6.00056C21.0004 6.26592 20.895 6.52042 20.7073 6.70806L11.4136 16.0006L20.7073 25.2931Z" fill="white"/>
</svg>
</button>
<button 
className={`${styles.badge_text} ${isLastPage ? styles.disabled : ''}`} 
onClick={handleNext}
 disabled={isLastPage}
>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M11.2927 6.70792C11.1998 6.61501 11.1261 6.50471 11.0758 6.38332C11.0255 6.26192 10.9996 6.13182 10.9996 6.00042C10.9996 5.86903 11.0255 5.73892 11.0758 5.61752C11.1261 5.49613 11.1998 5.38583 11.2927 5.29292C11.3856 5.20001 11.4959 5.12631 11.6173 5.07603C11.7387 5.02575 11.8688 4.99986 12.0002 4.99986C12.1316 4.99986 12.2617 5.02575 12.3831 5.07603C12.5045 5.12631 12.6148 5.20001 12.7077 5.29292L22.7077 15.2929C22.8007 15.3858 22.8744 15.4961 22.9248 15.6175C22.9751 15.7389 23.001 15.869 23.001 16.0004C23.001 16.1318 22.9751 16.262 22.9248 16.3834C22.8744 16.5048 22.8007 16.6151 22.7077 16.7079L12.7077 26.7079C12.5201 26.8956 12.2656 27.001 12.0002 27.001C11.7348 27.001 11.4803 26.8956 11.2927 26.7079C11.105 26.5203 10.9996 26.2658 10.9996 26.0004C10.9996 25.7351 11.105 25.4806 11.2927 25.2929L20.5864 16.0004L11.2927 6.70792Z" fill="white"/>
</svg>
</button>
</div>
</div>
</div>
)
}

export default Testimonials