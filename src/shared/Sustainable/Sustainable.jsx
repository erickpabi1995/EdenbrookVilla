import styles from './Sustainable.module.scss'
const Sustainable = () => {





return(
    <div className={styles.sustainable}>
<div className={styles.container}>
<div className={styles.title}>
<p className={styles.titleColumn}>Each qluxe development is designed with intentions using locally sourced materials, energy efficient systems, and environmentally conscious construction practices that preserve the harmony between nature and modern living</p>
</div>
<div className={styles.titleText}>
<div className={styles.titleDescription}>
{/* <img src='../placeholder.svg' alt='Placeholder Image'/> */}

    <picture>
        <source media="(max-width: 768px)" srcSet="../placeholderMobile.png" />
        <source media="(min-width: 769px)" srcSet="../placeholder.svg" />
        <img src="../placeholder.svg" alt="House Image"/>
    </picture>

</div>
{/* <img src='../placeholder2.svg' alt='Placeholder Image'/> */}
    <picture>
        <source media="(max-width: 768px)" srcSet="../placeholder2Mobile.png" />
        <source media="(min-width: 769px)" srcSet="../placeholder2.svg" />
        <img src="../placeholder2.svg" alt="House Image"/>
    </picture>
</div>
</div>
</div>
)
}

export default Sustainable