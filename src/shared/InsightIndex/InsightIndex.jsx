import styles from './InsightIndex.module.scss'

const InsightIndex = () => {

    const index = [
        'All',
        'Press Releases',
        'Market Highlights',
        'Events & Expos',
        'Social Highlight',
        'ReaL Estate Trends'
    ]

   
    
  const blogs = [
    {
      image: '../blog1.svg',
      date:'28 Feb 2020',
      heading: 'Why Now Is the Time for the Diaspora to Invest in Ghana Real Estate',
      author: 'Kojo Annan',
      imageAuthor: '../blog_author.svg',
      title:'Blogger, QLuxe Homes'
    },
        {
      image: '../blog2.svg',
      date:'28 Feb 2020',
      heading: 'Why Now Is the Time for the Diaspora to Invest in Ghana Real Estate',
      author: 'Kojo Annan',
      imageAuthor: '../blog_author2.svg',
      title:'Blogger, QLuxe Homes'
    },
        {
      image: '../blog3.svg',
      date:'28 Feb 2020',
      heading: 'Why Now Is the Time for the Diaspora to Invest in Ghana Real Estate',
      author: 'Kojo Annan',
      imageAuthor: '../blog_author3.svg',
      title:'Blogger, QLuxe Homes'
    },
           {
      image: '../blog4.png',
      date:'28 Feb 2020',
      heading: 'Why Now Is the Time for the Diaspora to Invest in Ghana Real Estate',
      author: 'Kojo Annan',
      imageAuthor: '../blog_author3.svg',
      title:'Blogger, QLuxe Homes'
    }
  ]

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
<div className={styles.insightCard}>
    <p className={styles.blogSubContainer}>{item}</p>
</div>
)}
</div>
    <div className={styles.blogColumn}>
<div className={styles.blogSubColumn}>
    {blogs.map((item)=>
    <div className={styles.blogSub}>
<img src={item.image} alt='Blog Image' style={{height:"231px",width:"448px",objectFit:"cover"}}/>
<div className={styles.badge}>
    <div className={styles.badge_text}>
        <div className={styles.date_text}>
            <div className='flex items-center justify-center gap-3'>
            <div className={styles.header}>
                <p className={styles.badge_text_secondary}>Press Release</p>
                </div>
                     <p className={styles.logo_groups}>{item.date}</p>
                     </div>
                     <p className={styles.logo_subgroups}>{item.heading}</p>
            </div>
        </div>
          <div className={styles.footer_groups}>
            <img src={item.imageAuthor} alt="Blog author"/>
            <div className={styles.footer_subgroups}>
              <p className={styles.footer_text}>{item.author}</p>
              <p className={styles.footer_secondary}>{item.title}</p>
            </div>
          </div>
        </div>
    </div>
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