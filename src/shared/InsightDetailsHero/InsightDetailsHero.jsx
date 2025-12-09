import NavBar from './NavBar'
import styles from './InsightDetailsHero.module.scss'
import { useState, useEffect, useRef } from 'react'

const InsightDetailsHero = ({blogData}) => {

    const contentTable =['Intro','A Market on the Rise','Diaspora Demand & Emotional Connection','3. Favourable Conditions for International Buyers','4. The Legacy Factor','5. Why Qluxe Homes']

       const defaultBlog = {
        image: '../blog1.svg',
        date: '28 Feb 2020',
        heading: 'Why Now Is the Time for the Diaspora to Invest in Ghana Real Estate',
        author: 'Kojo Annan',
        imageAuthor: '../blog_author.svg',
        title: 'Blogger, QLuxe Homes'
    }

    const blog = blogData || defaultBlog

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
<p className={styles.titleDescription}>28th feb, 2025</p>
</div>

   <div className={styles.button}>
<p className={styles.insights}>{blog.heading}</p>
   <p className={styles.insightCard}>Keywords: buy property in Ghana, Ghana real estate investment, diaspora homes Ghana</p>
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
            ref={el => sectionRefs.current['Intro'] = el}
        >
            For Ghanaians living abroad, the idea of owning a home back home has always carried deep emotion — pride, belonging, and the dream of creating something that lasts beyond a lifetime. Today, that dream aligns perfectly with opportunity. Ghana's real estate market is experiencing steady growth, modernisation, and increasing international attention. For the diaspora, this is the moment to make homeownership a reality and investment a legacy.
    For investors abroad, this means one thing: value appreciation. Properties in prime areas such as Tse Addo, Airport Hills, and East Legon have seen consistent year-on-year growth even during global slowdowns. Ghana’s stable political climate and growing demand for quality housing create the perfect environment for long-term returns.
        </p>
    <div className={styles.header}>
<p 
    className={styles.date_text}
    ref={el => sectionRefs.current['A Market on the Rise'] = el}
>
    1. A Market on the Rise
</p>
<p className={styles.logo_groups}>Over the past decade, Ghana has become one of Africa's most stable and attractive destinations for property investment. Cities such as Accra, Tema, and Kumasi are expanding rapidly with new infrastructure, gated communities, and modern developments. Government projects like road expansions and airport upgrades are improving accessibility, while private developers are redefining urban living standards.</p>
    <p className={styles.logo_subgroups}>For investors abroad, this means one thing: value appreciation. Properties in prime areas such as Tse Addo, Airport Hills, and East Legon have seen consistent year-on-year growth even during global slowdowns. Ghana's stable political climate and growing demand for quality housing create the perfect environment for long-term returns.</p>
    </div>
 <div className={styles.header}>
<p 
    className={styles.date_text}
    ref={el => sectionRefs.current['Diaspora Demand & Emotional Connection'] = el}
>
    2. Diaspora Demand and Emotional Connection
</p>
<p className={styles.logo_groups}>Beyond numbers, there is a powerful emotional story driving this growth — the return of the Ghanaian diaspora. Many are no longer just visiting; they are coming home to invest, retire, or build family legacies. Owning property is more than a financial move; it is a reconnection with identity.</p>
    <p className={styles.logo_subgroups}>At Qluxe Homes, we understand that feeling. Our developments, such as Edenbrook at Tse Addo, are designed with that emotional heartbeat in mind, combining modern design with the warmth of Ghanaian hospitality. Each home becomes a bridge between where you have been and where you belong.</p>
    </div>
     <div className={styles.header}>
<p 
    className={styles.date_text}
    ref={el => sectionRefs.current['Favourable Conditions for International Buyers'] = el}
>
    3. Favourable Conditions for International Buyers
</p>
<p className={styles.logo_groups}>Buying property in Ghana from abroad is now easier than ever before. The process is transparent, payment plans are flexible, and trusted developers are catering directly to international clients. With virtual tours, secure online documentation, and clear payment schedules, you can confidently invest from anywhere in the world.</p>
    <p className={styles.logo_subgroups}>At Qluxe Homes, we understand that feeling. Our developments, such as Edenbrook at Tse Addo, are designed with that emotional heartbeat in mind, combining modern design with the warmth of Ghanaian hospitality. Each home becomes a bridge between where you have been and where you belong.</p>
    </div>
     <div className={styles.header}>
<p 
    className={styles.date_text}
    ref={el => sectionRefs.current['The Legacy Factor'] = el}
>
    4. The Legacy Factor
</p>
<p className={styles.logo_groups}>Beyond numbers, there is a powerful emotional story driving this growth — the return of the Ghanaian diaspora. Many are no longer just visiting; they are coming home to invest, retire, or build family legacies. Owning property is more than a financial move; it is a reconnection with identity.</p>
    <p className={styles.logo_subgroups}>At Qluxe Homes, we understand that feeling. Our developments, such as Edenbrook at Tse Addo, are designed with that emotional heartbeat in mind, combining modern design with the warmth of Ghanaian hospitality. Each home becomes a bridge between where you have been and where you belong.</p>
    </div>
     <div className={styles.header}>
<p 
    className={styles.date_text}
    ref={el => sectionRefs.current['Why Qluxe Homes'] = el}
>
    5. Why Qluxe Homes
</p>
<p className={styles.logo_groups}>Beyond numbers, there is a powerful emotional story driving this growth — the return of the Ghanaian diaspora. Many are no longer just visiting; they are coming home to invest, retire, or build family leftovers. Owning property is more than a financial move; it is a reconnection with identity.</p>
    <p className={styles.logo_subgroups}>At Qluxe Homes, we understand that feeling. Our developments, such as Edenbrook at Tse Addo, are designed with that emotional heartbeat in mind, combining modern design with the warmth of Ghanaian hospitality. Each home becomes a bridge between where you have been and where you belong.</p>
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