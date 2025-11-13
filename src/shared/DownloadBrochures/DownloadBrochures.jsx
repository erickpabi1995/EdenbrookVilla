import styles from './DownloadBrochures.module.scss'

const DownloadBrochures = () => {

return(
    <div className={styles.downloadBrochures}>
        <img src='../edenBrookContainer.png' alt='Edenbrook Villa'/>
<div className={styles.container}>
<div className={styles.title}>
    <div className={styles.titleColumn}>
        <div className={styles.titleDescription}>
<p className={styles.titleText}>Edenbrook Villa Brochure</p>
        </div>

    <div className={styles.button}>
<p className={styles.insights}>Download detailed specifications, floor plans, and imagery.</p>
<button className={styles.insightCard}>Download Brochure</button>
    </div>
    </div>
    <div className='absolute bottom-[262px] right-24'>
    <img src='../edenPlaceHolder.png' alt='Edenbrook Villa Living room'/>
    </div>


</div>
</div>
</div>
)
}

export default DownloadBrochures