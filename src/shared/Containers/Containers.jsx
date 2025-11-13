import styles from './Containers.module.scss'

const Containers = ({content, contentBackground,title}) => {

return(
    <div className={styles.containers} style={{background: contentBackground ? '#FFF' : '#172B22'}}>
<div className={styles.container}>
<p className={styles.title} style={{color: contentBackground ? '#000' : '#FFF', fontSize:title ? '140px' : '150px'}} >{content}</p>
</div>
</div>
)
}

export default Containers