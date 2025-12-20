import { useState } from 'react'
import styles from './DownloadBrochures.module.scss'

const DownloadBrochures = () => {
const [isDownloading,setIsDownloading] = useState(false)

const handleDownload = async () => {
    try{
         setIsDownloading(true)
            const link = document.createElement('a')
            link.href = '../edenBrookContainer.png'
            link.download = 'Edenbrook-Villa-Brochure.png'
            link.target = '_blank'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
    }
     catch (error) {
            console.error('Download failed:', error)
            alert('Download failed. Please try again.')
        } finally {
            setIsDownloading(false)
        }
}
    

return(
    <div className={styles.downloadBrochures}>
        <div className='relative'>
        <img src="../edenBrookContainer.png" alt="Edenbrook Villa" className={styles.brochureImage} />
          <div style={{ position: 'absolute', bottom: '0px', right: '20px' }}>
        <img src='../unitGallerySmall.png' alt='HeaderImage'/>
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
                                className={`${styles.insightCard} ${isDownloading ? styles.downloading : ''}`}
                                onClick={handleDownload}
                                disabled={isDownloading}
                            >
                                {isDownloading ? 'Downloading...' : 'Download Brochure'}
                            </button>
    </div>
    </div>


</div>
</div>
</div>
)
}

export default DownloadBrochures