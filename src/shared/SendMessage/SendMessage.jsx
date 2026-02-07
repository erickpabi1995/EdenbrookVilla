import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './SendMessage.module.scss'
import emailjs from '@emailjs/browser'

const SendMessage = () => {
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    contactReason:'',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)


  useEffect(() => {
    const reason = searchParams.get('reason')
    if (reason === 'partnerAgent') {
      setFormData(prev => ({
        ...prev,
        contactReason: 'partnerAgent'
      }))
    } else if(reason === 'referringBuyer'){
          setFormData(prev => ({
        ...prev,
        contactReason: 'referringBuyer'
      }))
    }
  }, [searchParams])

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    }
    
 if(!formData.contactReason){
  newErrors.contactReason = 'Please select a contact reason'
 }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value, } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing/selecting
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
   const templateParams = {
          to_email: 'felix.quansah@qluxehomes.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          phone:formData.phoneNumber,
          contactReason:formData.contactReason === 'referringBuyer' ? 'Referring a buyer or an investor' : 'Becoming a partner agent',
          title:'General Enquiries',
          subtext:'contact us form on the contact page',
          submitted_at: new Date().toLocaleString(),
        }
        await emailjs.send(
          'service_wrmhgus',  
          'template_cl8tsqj', 
          templateParams,
          'Z8nadH7Nmwiyy_0Nf' 
        )
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitSuccess(true)
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        contactReason: '',
        message: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ submit: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className={styles.contactUs}>
        <div className={styles.container}>
          <div className={styles.title}>
            <div className={styles.titleColumn}>
              <div className={styles.button}>
                <p className={styles.titleText}>Thank You</p>
                <p className={styles.titleDescription}>Your message has been sent successfully. We'll respond within 24 hours on business days.</p>
                <button 
                  className={styles.submitBtn} 
                  onClick={() => setSubmitSuccess(false)}
                >
                  Send Another Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.contactUs}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.titleColumn}>
            <div className={styles.button}>
              <p className={styles.titleText}>Send Us a Message</p>
              <p className={styles.titleDescription}>Our team responds within 24 hours on business days.</p>
            </div>
          </div>
        </div>

        <div className={styles.insights}>
          <div className={styles.insightCard}>
            <p className={styles.blogSubContainer}>Talk to our team</p>
            <p className={styles.blogColumn}>We'd love to hear from you. Please fill out this form.</p>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.blogSubColumn}>
            <div className={styles.blogSub}>
              <div className={styles.badge}>
                <div className={styles.input}>
                  <p className={styles.label}>Name</p>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`${styles.inputStyles} ${errors.name ? styles.inputError : ''}`}
                    placeholder='Jacob Moore'
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>
                <div className={styles.input}>
                  <p className={styles.label}>Email</p>
                  <input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`${styles.inputStyles} ${errors.email ? styles.inputError : ''}`}
                    placeholder='name@email.com'
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>
              </div>
              
              <div className={styles.badge}>
                <div className={styles.input}>
                  <p className={styles.label}>Phone Number</p>
                  <input 
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={`${styles.inputStyles} ${errors.phoneNumber ? styles.inputError : ''}`}
                    placeholder='0244123456'
                  />
                  {errors.phoneNumber && <span className={styles.errorText}>{errors.phoneNumber}</span>}
                </div>
                
                <div className={styles.input}>
                  <p className={styles.label}>I'm contacting about...</p>
                  <div className={styles.checkboxContainer}>
                    <input 
                      type='radio' 
                      name="contactReason"
                      value="partnerAgent"
                      checked={formData.contactReason === 'partnerAgent'}
                      onChange={handleInputChange}
                      className={styles.checkbox}
                    />
                    <p className={styles.checkboxLabel}>Becoming a partner agent</p>
                  </div>
                  <div className={styles.checkboxContainer}>
                    <input 
                      type='radio'
                      value="referringBuyer" 
                      name="contactReason"
                      checked={formData.contactReason === 'referringBuyer'}
                      onChange={handleInputChange}
                      className={styles.checkbox}
                    />
                    <p className={styles.checkboxLabel}>Referring a buyer or an investor</p>
                  </div>
                  {errors.contactReason && <span className={styles.errorText}>{errors.contactReason}</span>}
                </div>
              </div>
              
              <div className={styles.textArea}>
                <p className={styles.label}>Message</p>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`${styles.textAreaStyles} ${errors.message ? styles.inputError : ''}`}
                  placeholder='Leave us a message...'
                />
                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
              </div>
              
              {errors.submit && <span className={styles.errorText}>{errors.submit}</span>}
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitBtn} ${isSubmitting ? styles.submitting : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SendMessage