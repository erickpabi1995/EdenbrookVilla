import { useLocation } from 'react-router-dom'
import styles from './Blog.module.scss'
import { useState } from 'react'
import { BlogData } from '../BlogData'

const Blog = () => {

     
     const location = useLocation()
     const [currentPage,setCurrentPage] = useState(0)
     const itemsPerPage = 3

    const handleInsight = () => {
        window.open('https://qluxehomes.com/insightHub', '_blank')
    }

    const handleBlogClick = (blogIndex) => {
        const actualIndex = currentPage * itemsPerPage + blogIndex
        window.open('https://qluxehomes.com/insightDetails', { 
            state: { 
                blog: blogs[actualIndex],
                blogId: actualIndex 
            } 
        })
         if (location.pathname === '/insightDetails') {
            window.scrollTo({top:0,behavior:'smooth'})
        }
    }

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        const maxPage = Math.ceil(blogs.length / itemsPerPage) - 1
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1)
        }
    }

  const blogs = BlogData

   const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentBlogs = blogs.slice(startIndex, endIndex)
  
    const isFirstPage = currentPage === 0
    const isLastPage = currentPage >= Math.ceil(blogs.length / itemsPerPage) - 1
return(
    <div className={styles.blog}>
<div className={styles.container}>
<div className={styles.title}>
<div className={styles.titleColumn}>
<p className={styles.titleText}>— Insights</p>
<p className={styles.titleDescription}>Insights from the World of Qluxe.</p>
</div>
 <button className={styles.button} onClick={handleInsight}> View all Insights</button> 
</div>

<div className={styles.insights}>
  {currentBlogs.map((blog,index)=>
<div className={styles.insightCard} key={index}  onClick={() => handleBlogClick(index)}
                            style={{ cursor: 'pointer' }}>
  <img src={blog.image} alt="Blog" className={styles.blogImage}/>
  <div className={styles.blogSubContainer}>
    <div className={styles.blogColumn}>
      <div className={styles.blogSubColumn}>
        <div className={styles.blogSub}>
<div className={styles.badge}>
<p className={styles.badge_text}>Press Release</p>
</div>
<p className={styles.date_text}>{blog.date}</p>
        </div>
        <p className={styles.header}>{blog.title}</p>

      </div>

    </div>

  </div>
  <div className={styles.logo_groups}>
    <img src={blog.imageAuthor} alt="Blog author" style={{width:'47px',height:'47px'}} className='rounded-full'/>
    <div className={styles.logo_subgroups}>
      <p className={styles.logo_text}>{blog.author}</p>
      <p className={styles.logo_secondary}>{blog.jobDescription}</p>
    </div>
  </div>
</div>
)}
</div>
<div className={styles.controls}>
<button className={`${styles.controlsContainer} ${isFirstPage ? styles.disabled : ''}`}  disabled={isFirstPage} onClick={handlePrevious}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11 17L6 12M6 12L11 7M6 12H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button>
<div className={`${styles.controlsContainer} ${isLastPage ? styles.disabled : ''}`} 
                        onClick={handleNext}
                        disabled={isLastPage}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M13 17L18 12M18 12L13 7M18 12H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
</div>

</div>
</div>
)
}

export default Blog