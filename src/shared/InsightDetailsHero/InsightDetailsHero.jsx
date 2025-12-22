import NavBar from './NavBar'
import styles from './InsightDetailsHero.module.scss'
import { useState, useEffect, useRef } from 'react'

const InsightDetailsHero = ({blogData}) => {


       const defaultBlog = {
        image: '../blog1.svg',
        date: '28 Feb 2020',
        heading: 'Why Now Is the Time for the Diaspora to Invest in Ghana Real Estate',
        author: 'Kojo Annan',
        imageAuthor: '../blog_author.svg',
        title: 'Blogger, QLuxe Homes'
    }

    const blog = blogData || defaultBlog

     const contentTable = [
        blog.firstContentHeader,
        blog.secondContentHeader,
        blog.thirdContentHeader,
        blog.fourthContentHeader,
        blog.fifthContentHeader,
        blog.sixthContentHeader,
        blog.seventhContentHeader,
        blog.eighthContentHeader,
    ].filter(header => header && header.trim() !== '')

    // Newsletter state and logic
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
    // Active section state for table of contents
    const [activeSection, setActiveSection] = useState('Intro')
    const sectionRefs = useRef({})

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleEmailChange = (e) => {
        const emailValue = e.target.value
        setEmail(emailValue)
        
        // Reset validation state when user starts typing
        if (!isValidEmail) {
            setIsValidEmail(true)
        }
        
        // Reset subscription state if user changes email after subscribing
        if (isSubscribed) {
            setIsSubscribed(false)
        }
    }

    const handleSubscribe = async () => {
        if (!email.trim()) {
            setIsValidEmail(false)
            return
        }

        if (!validateEmail(email)) {
            setIsValidEmail(false)
            return
        }

        setIsLoading(true)
        
        // Simulate API call delay
        setTimeout(() => {
            setIsLoading(false)
            setIsSubscribed(true)
            // You can store the email locally or log it for now
            console.log('Subscribed email:', email)
        }, 1500)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubscribe()
        }
    }

    // Function to normalize section titles for comparison
    const normalizeSectionTitle = (title) => {
        return title.replace(/^\d+\.\s*/, '').trim()
    }

    // Scroll to section when table of content item is clicked
    const scrollToSection = (sectionTitle) => {
        const normalizedTitle = normalizeSectionTitle(sectionTitle)
        const element = sectionRefs.current[normalizedTitle]
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    // Set up intersection observer to track which section is in view
    useEffect(() => {
        const observers = []
        const sections = Object.entries(sectionRefs.current)

        sections.forEach(([title, element]) => {
            if (element) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                                // Find the matching content table item
                                const matchingTableItem = contentTable.find(item => 
                                    normalizeSectionTitle(item) === title
                                )
                                if (matchingTableItem) {
                                    setActiveSection(matchingTableItem)
                                }
                            }
                        })
                    },
                    {
                        threshold: 0.5,
                        rootMargin: '-50px 0px -50px 0px'
                    }
                )
                observer.observe(element)
                observers.push(observer)
            }
        })

        return () => {
            observers.forEach(observer => observer.disconnect())
        }
    }, [])

    // Function to check if content item is active
    const isActiveContentItem = (item) => {
        return item === activeSection
    }

return(
    <div className={styles.containers}>
        <NavBar/>
<div className={styles.container}>
<div className={styles.title}>
    <p className={styles.titleColumn}>Press Release</p>
      
<div className={styles.titleText}></div>
<p className={styles.titleDescription}>{blog.date}</p>
</div>

   <div className={styles.button}>
<p className={styles.insights}>{blog.title}</p>
   <p className={styles.insightCard}>{blog.keywords}</p>
   </div>

   <div className={styles.blogSubContainer}>
    <img src={blog.imageAuthor} alt='Avatar'/>
    <p className={styles.blogColumn}>
{blog.author}
    </p>
   </div>
</div>
<div className={styles.blogSubColumn}>
    <img src={blog.image} alt='Insight Frame' style={{width:"100%"}}/>
<div className={styles.blogSub}>
    <div className={styles.badge}>
        <p 
            className={styles.badge_text}
            ref={el => sectionRefs.current[blog.firstContentHeader] = el}
        >
            {blog.firstContent}
        </p>
    <div className={styles.header}>
<p 
    className={styles.date_text}
    ref={el => sectionRefs.current[blog.secondContentHeader] = el}
>
{blog.secondContentHeader}
</p>
<p className={styles.logo_groups}>{blog.secondContent}</p>
    </div>
 <div className={styles.header}>
<p 
    className={styles.date_text}
    ref={el => sectionRefs.current[blog.thirdContentHeader] = el}
>
    {blog.thirdContentHeader}
</p>
<p className={styles.logo_groups}>{blog.thirdContent}</p>
    </div>
     <div className={styles.header}>
<p 
    className={styles.date_text}
    ref={el => sectionRefs.current[blog.fourthContentHeader] = el}
>
    {blog.fourthContentHeader}
</p>
<p className={styles.logo_groups}>{blog.fourthContent}</p>
    </div>
     <div className={styles.header}>
<p 
    className={styles.date_text}
    ref={el => sectionRefs.current[blog.fifthContentHeader] = el}
>
    {blog.fifthContentHeader}
</p>
<p className={styles.logo_groups}>{blog.fifthContent}</p>
    </div>
     <div className={styles.header}>
<p 
    className={styles.date_text}
    ref={el => sectionRefs.current[blog.sixthContentHeader] = el}
>
   {blog.sixthContentHeader}
</p>
<p className={styles.logo_groups}>{blog.sixthContent}</p>
<p className={styles.logo_groups}>{blog.sixthContent ? blog.description : ''}</p>

    </div>
     <div className={styles.header}>
<p 
    className={styles.date_text}
    ref={el => sectionRefs.current[blog.seventhContentHeader] = el}
>
   {blog.seventhContentHeader}
</p>
<p className={styles.logo_groups}>{blog.seventhContent}</p>
<p className={styles.logo_groups}>{blog.seventhContent ? blog.description : ''}</p>
    </div>
         <div className={styles.header}>
<p 
    className={styles.date_text}
    ref={el => sectionRefs.current[blog.eighthContentHeader] = el}
>
   {blog.eighthContentHeader}
</p>
<p className={styles.logo_groups}>{blog.eighthContent}</p>
<p className={styles.logo_groups}>{blog.eighthContent ? blog.description : ''}</p>
    </div>
             <div className={styles.header}>


    </div>
    </div>
    <div className={styles.logo_secondary}>
<div className={styles.contentContainer}>
<p className={styles.logo_text}>Table of content</p>
<div className={styles.divider}></div>
<div className={styles.contentSubContainer}>
    {contentTable.map((item,index) =>
<div 
    className={`${styles.contentInnerContainer} ${isActiveContentItem(item) ? styles.active : ''}`} 
    key={index}
    onClick={() => scrollToSection(item)}
    style={{ cursor: 'pointer' }}
>
<p className={styles.contentInnerText}>{item}</p>
</div>
)}
</div>
</div>
<div className={styles.newsLetterMainContainer}>
<div className={styles.newsLetterContainer}>
<div className={styles.newsLetter}>
    {!isSubscribed ? (
        <>
            <p className={styles.newsLetterText}>Subscribe to our newsletter</p>
            <p className={styles.newsLetterSubtext}>Our bi-weekly newsletter full of inspiration, podcast, trend and news.</p>
        </>
    ) : (
        <>
            <p className={styles.newsLetterText}>Thank you</p>
            <p className={styles.newsLetterSubtext}>You're now subscribed. Welcome to our community!</p>
        </>
    )}
</div>
<div className={styles.inputContainer}>
<input 
    className={`${styles.inputStyles} ${!isValidEmail ? styles.error : ''} ${isSubscribed ? styles.success : ''}`}
    placeholder={isSubscribed ? 'Successfully subscribed!' : 'Jessica@email.com'}
    value={email}
    onChange={handleEmailChange}
    onKeyPress={handleKeyPress}
    disabled={isSubscribed || isLoading}
    type="email"
/>
<button 
    className={`${styles.subscribeBtn} ${isLoading ? styles.loading : ''} ${isSubscribed ? styles.subscribed : ''}`}
    onClick={handleSubscribe}
    disabled={isSubscribed || isLoading}
>
    {isLoading ? 'Subscribing...' : isSubscribed ? 'Subscribed ✓' : 'Subscribe'}
</button>
</div>
{!isValidEmail && (
    <p className={styles.errorText} style={{color: 'red', fontSize: '12px', marginTop: '5px'}}>
        Please enter a valid email address
    </p>
)}
</div>
</div>
    </div>
      

</div>


</div>


   </div>

)
}

export default InsightDetailsHero