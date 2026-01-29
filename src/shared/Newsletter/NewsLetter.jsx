import useMediaQuery from '../useMediaQuery'
import styles from './NewsLetter.module.scss'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
const NewsLetter = () => {

  const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

     const isMobile = useMediaQuery("(max-width: 768px)");

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

          const templateParams = {
          to_email: 'felix.quansah@qluxehomes.com',
          from_email: email,
          title:'NewsLetter Subscription',
          subtext:'newsletter form',
          submitted_at: new Date().toLocaleString(),
        }
        await emailjs.send(
          'service_wrmhgus',  
          'template_cl8tsqj', 
          templateParams,
          'Z8nadH7Nmwiyy_0Nf' 
        )
        
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
return(
    <div className={styles.newsLetter}>
<div className={styles.container}>
<div className={styles.title}>
<div className={styles.titleColumn}>
{!isSubscribed ? (
    <>
        <p className={styles.titleText}>Stay updated</p>
        <p className={styles.titleDescription}>Be the first to know when we launch.</p>
        <p className={styles.button}>Sign up to receive exclusive updates, sneak peeks, and be the first to access our launch.</p>
    </>
) : (
    <>
        <p className={styles.titleText}>Thank you!</p>
        <p className={styles.titleDescription}>You are now subscribed to our newsletter.</p>
        <p className={styles.button}>We'll keep you updated with the latest news and exclusive content. Check your inbox for a confirmation email.</p>
    </>
)}
</div>
<div className={styles.insights}>
<div className={styles.insightCard}>
 <input 
                                className={`${styles.blogSubContainer} ${!isValidEmail ? styles.error : ''} ${isSubscribed ? styles.success : ''}`}
                                placeholder={isSubscribed ? 'Successfully subscribed!' : 'Jessica@email.com'}
                                value={email}
                                onChange={handleEmailChange}
                                onKeyPress={handleKeyPress}
                                disabled={isSubscribed || isLoading}
                                type="email"
                            />
   <button 
                                className={`${styles.blogColumn} ${isLoading ? styles.loading : ''} ${isSubscribed ? styles.subscribed : ''}`}
                                onClick={handleSubscribe}
                                disabled={isSubscribed || isLoading}
                            >
                                {isLoading ? 'Subscribing...' : isSubscribed ? 'Subscribed ✓' : 'Subscribe'}
                            </button>
</div>
 <p className={`${styles.blogSubColumn} ${!isValidEmail ? styles.errorText : ''}`}>
                            {!isValidEmail ? 'Please enter a valid email address' : isSubscribed ? 'Welcome to our community!' : 'Only updates. No spam'}
                        </p>
</div>
</div>
 <div>
    {!isMobile ?
        <img src="../newsLetterImage.svg" alt="NewsLetter Image" style={{width: '100%'}} />    
        :
         <img src="../newsLetterImage.svg" alt="NewsLetter Image" style={{width: '100%', height:'470px',objectFit:'cover'}} />
} 
</div> 
</div>

</div>
)
}

export default NewsLetter