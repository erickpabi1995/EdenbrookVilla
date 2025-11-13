import styles from './AboutInfo.module.scss'

const AboutInfo = ({content}) => {
return(
    <div className={styles.aboutInfo}>
<div className={styles.cta6}>
<div className={styles.frame}>
<p className={styles.secondFrame}>
  {content}
</p>

</div>
</div>
</div>
)
}

export default AboutInfo