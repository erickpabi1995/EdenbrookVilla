import { useState } from 'react'
import styles from './DownloadBrochures.module.scss'
import useMediaQuery from '../useMediaQuery';
import emailjs from '@emailjs/browser'

const DownloadBrochures = () => {
  const [isDownloading, setIsDownloading] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [errors, setErrors] = useState({})
  const isMobile = useMediaQuery("(max-width: 768px)");

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+?[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    try {
      setIsDownloading(true)

       const templateParams = {
      to_email: 'felix.quansah@qluxehomes.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      title:'Brochure',
      subtext:'brochure',
      downloaded_at: new Date().toLocaleString(),
    }
    await emailjs.send(
      'service_wrmhgus',  
      'template_6hl9snj', 
      templateParams,
      'Z8nadH7Nmwiyy_0Nf' 
    )
      
      // Save to localStorage
      const existingData = JSON.parse(localStorage.getItem('brochureDownloads') || '[]')
      existingData.push({
        ...formData,
        downloadedAt: new Date().toISOString()
      })
      localStorage.setItem('brochureDownloads', JSON.stringify(existingData))
      
      // Trigger download
      const link = document.createElement('a')
      link.href = '../Edenbrook_brochure.pdf'
      link.download = 'Edenbrook_brochure.pdf'
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Close dialog and reset form
      setShowDialog(false)
      setFormData({ name: '', email: '', phone: '' })
      
    } catch (error) {
      console.error('Download failed:', error)
      alert('Download failed. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  const handleCloseDialog = () => {
    setShowDialog(false)
    setFormData({ name: '', email: '', phone: '' })
    setErrors({})
  }

  return (
    <div className={styles.downloadBrochures}>
      <div className='relative'>
        <img src="../edenBrookContainer.webp" alt="Edenbrook Villa" className={styles.brochureImage} />
        <div style={{ position: 'absolute', bottom: isMobile ? '0px' : '-5px', right: isMobile ? '20px' : '105px' }}>
          {isMobile ? 
            <img src='../unitGallerySmall.png' alt='HeaderImage'/>
            : 
            <img src='../unitGalleryBig.png' alt='HeaderImage'/>
          }
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.titleColumn}>
            <div className={styles.titleDescription}>
              <p className={styles.titleText}>Edenbrook Villa Brochure</p>
            </div>

            <div className={styles.button}>
              <p className={styles.insights}>Download detailed specifications, floor plans, and imagery.</p>
              <button 
                className={styles.insightCard}
                onClick={() => setShowDialog(true)}
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog Modal */}
      {showDialog && (
        <div className={styles.dialogOverlay} onClick={handleCloseDialog}>
          <div className={styles.dialogContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.dialogHeader}>
              <h2 className={styles.dialogTitle}>Download Brochure</h2>
              <button 
                className={styles.closeButton}
                onClick={handleCloseDialog}
                aria-label="Close dialog"
              >
                ×
              </button>
            </div>
            
            <p className={styles.dialogDescription}>
              Please provide your details to download the Edenbrook Villa brochure.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  placeholder="Enter your email address"
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number <span className={styles.required}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
              </div>

              <div className={styles.dialogActions}>
                <button
                  type="button"
                  onClick={handleCloseDialog}
                  className={styles.cancelButton}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isDownloading}
                  className={`${styles.submitButton} ${isDownloading ? styles.downloading : ''}`}
                >
                  {isDownloading ? 'Downloading...' : 'Download'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default DownloadBrochures