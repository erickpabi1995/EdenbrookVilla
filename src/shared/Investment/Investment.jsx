import { useState } from 'react'
import styles from './Investment.module.scss'

const Investment = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    })
    
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validateName = (name) => {
        return name.trim().length >= 2
    }

    const validateMessage = (message) => {
        return message.trim().length >= 10
    }

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }))
        }

        // Reset submission state if user changes form after submitting
        if (isSubmitted) {
            setIsSubmitted(false)
        }
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        } else if (!validateName(formData.name)) {
            newErrors.name = 'Name must be at least 2 characters long'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        } else if (!validateMessage(formData.message)) {
            newErrors.message = 'Message must be at least 10 characters long'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async () => {
        if (!validateForm()) {
            return
        }

        setIsLoading(true)
        
        // Simulate API call delay
        setTimeout(() => {
            setIsLoading(false)
            setIsSubmitted(true)
            console.log('Form submitted:', formData)
            
            // Reset form after successful submission
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
                setIsSubmitted(false)
            }, 3000)
        }, 1500)
    }

    const handleKeyPress = (e, field) => {
        if (e.key === 'Enter' && field === 'message') {
            handleSubmit()
        }
    }

    return(
        <div className={styles.investment}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.titleColumn}>
                        <p className={styles.titleText}>Be the First to Know About New Investment Opportunities</p>
                        <p className={styles.titleDescription}>Our next development phase is already in motion. Join our investor list to receive early access to investment decks, project previews, and private consultations before public release.</p>
                    </div>
                </div>
                
                <div className={styles.button}>
                    <div className={styles.insights}>
                        <div className={styles.input}>
                            <p className={styles.label}>Name</p>
                            <input 
                                className={`${styles.inputStyles} ${errors.name ? styles.inputError : ''} ${isSubmitted ? styles.inputSuccess : ''}`}
                                placeholder='Jacob Moore'
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                disabled={isLoading}
                            />
                            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                        </div>
                        
                        <div className={styles.input}>
                            <p className={styles.label}>Email</p>
                            <input 
                                className={`${styles.inputStyles} ${errors.email ? styles.inputError : ''} ${isSubmitted ? styles.inputSuccess : ''}`}
                                placeholder='name@email.com'
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                disabled={isLoading}
                            />
                            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                        </div>
                        
                        <div className={styles.input}>
                            <p className={styles.label}>Message</p>
                            <textarea 
                                className={`${styles.inputStyles} ${styles.textareaStyles} ${errors.message ? styles.inputError : ''} ${isSubmitted ? styles.inputSuccess : ''}`}
                                placeholder='Tell us about your investment interests and goals...'
                                value={formData.message}
                                onChange={(e) => handleInputChange('message', e.target.value)}
                                onKeyPress={(e) => handleKeyPress(e, 'message')}
                                disabled={isLoading}
                                rows="4"
                            />
                            {errors.message && <p className={styles.errorText}>{errors.message}</p>}
                        </div>
                        
                        <button 
                            className={`${styles.submitBtn} ${isLoading ? styles.loading : ''} ${isSubmitted ? styles.submitted : ''}`}
                            onClick={handleSubmit}
                            disabled={isLoading || isSubmitted}
                        >
                            {isLoading ? 'Sending...' : isSubmitted ? 'Message Sent ✓' : 'Send message'}
                        </button>
                        
                        <p className={styles.disclaimer}>
                            Your details are kept confidential. A member of our investor relations team will reach out before each new release.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Investment