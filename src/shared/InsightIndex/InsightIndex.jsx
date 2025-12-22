import { useState } from 'react'
import styles from './InsightIndex.module.scss'
import { BlogData } from '../BlogData'
import { useNavigate } from 'react-router-dom'

const InsightIndex = () => {
  const navigate = useNavigate()

    const index = [
        'All',
        'Press Releases',
        'Market Highlights',
        'Events & Expos',
        'Social Highlight',
        'ReaL Estate Trends'
    ]
        const [selected, setSelected] = useState('All')

   
    
  const blogs = BlogData

   const filteredBlogs = selected === 'All'
        ? blogs
        : blogs.filter(blog => blog.category === selected)

            const handleBlogClick = (blogIndex) => {
        navigate('/insightDetails', { 
            state: { 
                blog: blogs[blogIndex],
                blogId: blogIndex 
            } 
        })
      }

return(
    <div className={styles.containers}>
<div className={styles.container}>
<p className={styles.title}>Insights</p>
<p className={styles.titleText}>Latest insights</p>
<p className={styles.titleDescription}>Discover stories, tips, and resources to inspire your next big idea.</p>
   </div>
   <div className={styles.button}>
<div className={styles.insights}>
    {index.map((item)=>
<div  
onClick={()=>setSelected(item)}
className={`${styles.insightCard}

${selected === item ? styles.selected : ''}`} key={item}>
    <p className={styles.blogSubContainer}>{item}</p>
</div>
)}
</div>
    <div className={styles.blogColumn}>
<div className={styles.blogSubColumn}>
      {filteredBlogs.length === 0 ? (
        <div className={styles.emptyState}>
        <p className={styles.logo_subgroups}>No insights available for this category.</p>
        </div>
    ) : (
    filteredBlogs.map((item,idx)=>
    <div className={styles.blogSub} key={idx}  onClick={() => handleBlogClick(idx)} style={{ cursor: 'pointer' }}>
<img src={item.image} alt='Blog Image' style={{height:"231px",width:"448px",objectFit:"cover"}}/>
<div className={styles.badge}>
    <div className={styles.badge_text}>
        <div className={styles.date_text}>
            <div className='flex items-center justify-center gap-3'>
            <div className={styles.header}>
                <p className={styles.badge_text_secondary}>{item.category}</p>
                </div>
                     <p className={styles.logo_groups}>{item.date}</p>
                     </div>
                     <p className={styles.logo_subgroups}>{item.title}</p>
            </div>
        </div>
          <div className={styles.footer_groups}>
            <img src={item.imageAuthor} alt="Blog author"/>
            <div className={styles.footer_subgroups}>
              <p className={styles.footer_text}>{item.author}</p>
              <p className={styles.footer_secondary}>{item.jobDescription}</p>
            </div>
          </div>
        </div>
    </div>
    )
    )}
</div>
</div>
<div>
    </div>
</div>
</div>
)
}

export default InsightIndex