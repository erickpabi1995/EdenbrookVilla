import styles from './DownloadBrochures.module.scss'

const DownloadBrochures = () => {

return(
    <div className={styles.downloadBrochures}>
         <picture>
        <source media="(max-width: 768px)" srcSet="../edenbrookContainerMobile.png" />
        <source media="(min-width: 769px)" srcSet="../edenBrookContainer.png" />
        <img src="../edenBrookContainer.png" alt="Edenbrook Villa" style={{width: '100%'}} />
    </picture>
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
    {/* <div className='absolute bottom-[262px] right-24'>
    <img src='../edenPlaceHolder.png' alt='Edenbrook Villa Living room'/>
    </div> */}


</div>
</div>
</div>
)
}

export default DownloadBrochures