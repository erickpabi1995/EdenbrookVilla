import styles from './Blog.module.scss'

const Blog = () => {

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
    }
  ]
return(
    <div className={styles.blog}>
<div className={styles.container}>
<div className={styles.title}>
<div className={styles.titleColumn}>
<p className={styles.titleText}>— Insights</p>
<p className={styles.titleDescription}>Insights from the World of Qluxe.</p>
</div>
<button className={styles.button}> View all Insights</button>
</div>

<div className={styles.insights}>
  {blogs.map((blog)=>
<div className={styles.insightCard}>
  <img src={blog.image} alt="Blog" style={{height:"231px",objectFit:"cover"}}/>
  <div className={styles.blogSubContainer}>
    <div className={styles.blogColumn}>
      <div className={styles.blogSubColumn}>
        <div className={styles.blogSub}>
<div className={styles.badge}>
<p className={styles.badge_text}>Press Release</p>
</div>
<p className={styles.date_text}>{blog.date}</p>
        </div>
        <p className={styles.header}>{blog.heading}</p>

      </div>

    </div>

  </div>
  <div className={styles.logo_groups}>
    <img src={blog.imageAuthor} alt="Blog author"/>
    <div className={styles.logo_subgroups}>
      <p className={styles.logo_text}>{blog.author}</p>
      <p className={styles.logo_secondary}>{blog.title}</p>
    </div>
  </div>
</div>
)}
</div>

</div>
</div>
)
}

export default Blog