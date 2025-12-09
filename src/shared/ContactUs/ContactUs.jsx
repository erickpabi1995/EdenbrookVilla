import styles from './ContactUs.module.scss'
import useMediaQuery from '../useMediaQuery'
import { useState } from 'react';

const ContactUs = () => {

   const isMobile = useMediaQuery("(max-width: 768px)");

   const [contactFormData, setContactFormData] = useState({
     name: '',
     email: '',
     message: ''
   })

   const [validationErrors, setValidationErrors] = useState({})
   const [isFormSubmitting, setIsFormSubmitting] = useState(false)
   const [formSubmissionResult, setFormSubmissionResult] = useState(null)

    const updateFormField = (event) => {
     const { name, value } = event.target
     setContactFormData(previousData => ({
       ...previousData,
       [name]: value
     }))
     
     // Remove error when user begins typing
     if (validationErrors[name]) {
       setValidationErrors(previousErrors => ({
         ...previousErrors,
         [name]: ''
       }))
     }
   }

   const checkFormValidity = () => {
     const fieldErrors = {}

     // Name field validation
     if (!contactFormData.name.trim()) {
       fieldErrors.name = 'Full name is required'
     } else if (contactFormData.name.trim().length < 2) {
       fieldErrors.name = 'Name should have at least 2 characters'
     }

     // Email field validation
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     if (!contactFormData.email.trim()) {
       fieldErrors.email = 'Email address is required'
     } else if (!emailPattern.test(contactFormData.email)) {
       fieldErrors.email = 'Please provide a valid email format'
     }

     // Message field validation
     if (!contactFormData.message.trim()) {
       fieldErrors.message = 'Please include a message'
     } else if (contactFormData.message.trim().length < 10) {
       fieldErrors.message = 'Message should be at least 10 characters long'
     }

     return fieldErrors
   }

    const processFormSubmission = async (event) => {
     event.preventDefault()
     
     const formErrors = checkFormValidity()
     if (Object.keys(formErrors).length > 0) {
       setValidationErrors(formErrors)
       return
     }

     setIsFormSubmitting(true)
     setFormSubmissionResult(null)

       try {
       // API endpoint for form submission
       localStorage.setItem("form",JSON.stringify({
           fullName: contactFormData.name,
           emailAddress: contactFormData.email,
           inquiryMessage: contactFormData.message,
           submissionTime: new Date().toISOString()
         }),
       )
       const submissionResponse = localStorage.getItem("form") ? JSON.parse(localStorage.getItem("form")) : null 

       if (submissionResponse) {
         setFormSubmissionResult('success')
         setContactFormData({ name: '', email: '', message: '' })
         setValidationErrors({})

             setTimeout(() => {
           setFormSubmissionResult(null)
         }, 5000)
       } else {
         throw new Error('Message delivery failed')
       }
     } catch (submissionError) {
       console.error('Form submission error:', submissionError)
       setFormSubmissionResult('error')
       
       // Clear error message after 5 seconds
       setTimeout(() => {
         setFormSubmissionResult(null)
       }, 5000)
     } finally {
       setIsFormSubmitting(false)
     }
   }

  const contactData = [
    {
      image:'../email.png',
      title:'Email',
      description:'Stay updated and get in touch directly.',
      buttonText:'hey@qluxe.com'
    },
       {
      image:'../chat.png',
      title:'Chat',
      description:'Message us anytime for quick help.',
      buttonText:'Start conversation'
    },
       {
      image:'../map.png',
      title:'Office',
      description:'Visit or write to us at:',
      buttonText:'1980 Mission Street, San Francisco, CA 94103, USA'
    },
       {
      image:'../Phone.png',
      title:'Phone',
      description:'Speak to our team for support.',
      buttonText:'+1 (415) 555-0198'
    }
  ]

return(
    <div className={styles.contactUs}>
<div className={styles.container}>
<div className={styles.title}>
<p className={styles.titleColumn}>Book a Private Viewing or Speak with Our Team.</p>
<p className={styles.titleText}>We’d love to connect. Fill out the form or reach us through any of the options below.</p>
</div>
<div className={styles.titleDescription}>

  <div className={styles.button}>
    <div className={styles.insights}>
      {contactData.map((item,index)=>
      <div className={styles.insightCard} key={index}>
<div className={styles.blogSubContainer}>
<img src={item.image} alt="ContactInfo"/>
</div>
<div className={styles.blogColumn}>
<div className={styles.blogSubColumn}>
  <p className={styles.blogSub}>{item.title}</p>
  <p className={styles.badge}>{item.description}</p>
</div>
<p className={item.title === 'Office' ? styles.office_text : styles.social_icons}>{item.buttonText}</p>
</div>
      </div>
        )}
    </div>
    <div className={styles.date_text}>
      {isMobile ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M15.9455 23L10.396 15.0901L3.44886 23H0.509766L9.09209 13.2311L0.509766 1H8.05571L13.286 8.45502L19.8393 1H22.7784L14.5943 10.3165L23.4914 23H15.9455ZM19.2185 20.77H17.2398L4.71811 3.23H6.6971L11.7121 10.2532L12.5793 11.4719L19.2185 20.77Z" fill="#FCC97E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clipPath="url(#clip0_11487_13637)">
    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#FCC97E"/>
  </g>
  <defs>
    <clipPath id="clip0_11487_13637">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="#FCC97E"/>
  <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="#FCC97E"/>
  <path d="M19.8469 5.59238C19.8469 6.38926 19.2 7.03145 18.4078 7.03145C17.6109 7.03145 16.9688 6.38457 16.9688 5.59238C16.9688 4.79551 17.6156 4.15332 18.4078 4.15332C19.2 4.15332 19.8469 4.8002 19.8469 5.59238Z" fill="#FCC97E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
  <path d="M23.7609 3.64219C23.7609 3.64219 23.5266 1.9875 22.8047 1.26094C21.8906 0.304688 20.8688 0.3 20.4 0.24375C17.0438 -1.3411e-07 12.0047 0 12.0047 0H11.9953C11.9953 0 6.95625 -1.3411e-07 3.6 0.24375C3.13125 0.3 2.10938 0.304688 1.19531 1.26094C0.473438 1.9875 0.24375 3.64219 0.24375 3.64219C0.24375 3.64219 0 5.5875 0 7.52813V9.34687C0 11.2875 0.239062 13.2328 0.239062 13.2328C0.239062 13.2328 0.473437 14.8875 1.19062 15.6141C2.10469 16.5703 3.30469 16.5375 3.83906 16.6406C5.76094 16.8234 12 16.8797 12 16.8797C12 16.8797 17.0438 16.8703 20.4 16.6313C20.8688 16.575 21.8906 16.5703 22.8047 15.6141C23.5266 14.8875 23.7609 13.2328 23.7609 13.2328C23.7609 13.2328 24 11.2922 24 9.34687V7.52813C24 5.5875 23.7609 3.64219 23.7609 3.64219ZM9.52031 11.5547V4.80937L16.0031 8.19375L9.52031 11.5547Z" fill="#FCC97E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#FCC97E"/>
</svg>
          </>
      ):(
        <>
          <svg
onClick={()=>window.open('https://x.com', '_blank')}
xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M13.2879 19.1663L8.66337 12.5748L2.87405 19.1663H0.424805L7.57674 11.0256L0.424805 0.833008H6.71309L11.0717 7.04552L16.5327 0.833008H18.982L12.1619 8.59674L19.5762 19.1663H13.2879ZM16.0154 17.308H14.3665L3.93176 2.69134H5.58092L9.7601 8.54397L10.4828 9.55956L16.0154 17.308Z" fill="white"/>
</svg>
<svg
onClick={()=>window.open('https://facebook.com', '_blank')}
xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clipPath="url(#clip0_11239_12644)">
    <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_11239_12644">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
<svg
onClick={()=>window.open('https://instagram.com', '_blank')}
cursor='pointer'
xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95312C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95312C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523438C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z" fill="white"/>
  <path d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z" fill="white"/>
  <path d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z" fill="white"/>
</svg>
<svg
onClick={()=>window.open('https://youtube.com', '_blank')}
xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
  <path d="M19.8008 3.03516C19.8008 3.03516 19.6055 1.65625 19.0039 1.05078C18.2422 0.253906 17.3906 0.25 17 0.203125C14.2031 -1.11759e-07 10.0039 0 10.0039 0H9.99609C9.99609 0 5.79688 -1.11759e-07 3 0.203125C2.60938 0.25 1.75781 0.253906 0.996094 1.05078C0.394531 1.65625 0.203125 3.03516 0.203125 3.03516C0.203125 3.03516 0 4.65625 0 6.27344V7.78906C0 9.40625 0.199219 11.0273 0.199219 11.0273C0.199219 11.0273 0.394531 12.4063 0.992187 13.0117C1.75391 13.8086 2.75391 13.7813 3.19922 13.8672C4.80078 14.0195 10 14.0664 10 14.0664C10 14.0664 14.2031 14.0586 17 13.8594C17.3906 13.8125 18.2422 13.8086 19.0039 13.0117C19.6055 12.4063 19.8008 11.0273 19.8008 11.0273C19.8008 11.0273 20 9.41016 20 7.78906V6.27344C20 4.65625 19.8008 3.03516 19.8008 3.03516ZM7.93359 9.62891V4.00781L13.3359 6.82812L7.93359 9.62891Z" fill="white"/>
</svg>
<svg
onClick={()=>window.open('https://linkedin.com', '_blank')}
xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="white"/>
</svg>
          </>
        
      )}

    </div>
    
  </div>
<div className={styles.header}>
  <form className={styles.frame} onSubmit={processFormSubmission}>
       {formSubmissionResult === 'success' && (
                <div style={{padding: '12px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px', marginBottom: '16px'}}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {formSubmissionResult === 'error' && (
                <div style={{padding: '12px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '4px', marginBottom: '16px'}}>
                  Sorry, there was an issue sending your message. Please try again.
                </div>
              )}
<div className={styles.input}>
<p className={styles.label}>Name</p>
  <input 
                  className={styles.inputStyles}
                  name="name"
                  value={contactFormData.name}
                  onChange={updateFormField}
                  placeholder='Jacob Moore'
                  disabled={isFormSubmitting}
                />
                {validationErrors.name && (
                  <span style={{color: '#dc3545', fontSize: '14px'}}>{validationErrors.name}</span>
                )}
              
</div>
<div className={styles.input}>
<p className={styles.label}>Email</p>
 <input 
                  className={styles.inputStyles}
                  name="email"
                  type="email"
                  value={contactFormData.email}
                  onChange={updateFormField}
                  placeholder='name@email.com'
                  disabled={isFormSubmitting}
                />
                {validationErrors.email && (
                  <span style={{color: '#dc3545', fontSize: '14px'}}>{validationErrors.email}</span>
                )}
              
</div>
<div className={styles.textArea}>
<p className={styles.label}>Message</p>
   <textarea 
                  className={styles.textAreaStyles}
                  name="message"
                  value={contactFormData.message}
                  onChange={updateFormField}
                  placeholder='Leave us a message...'
                  disabled={isFormSubmitting}
                />
                {validationErrors.message && (
                  <span style={{color: '#dc3545', fontSize: '14px'}}>{validationErrors.message}</span>
                )}
</div>
              <button 
                type="submit"
                className={styles.submitBtn}
                disabled={isFormSubmitting}
                style={{
                  opacity: isFormSubmitting ? 0.6 : 1,
                  cursor: isFormSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isFormSubmitting ? 'Sending...' : 'Send message'}
              </button>
  </form>

</div>
</div>

</div>
</div>

)
}

export default ContactUs