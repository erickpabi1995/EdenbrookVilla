import styles from './Neighbourhood.module.scss'

const Neighbourhood = () => {

return(
    <div className={styles.neighbourhood}>
<div className={styles.container}>
<p className={styles.title}>Around the Neighborhood</p>
<div className={styles.titleColumn}>
<button className={styles.titleText}>
  List view
</button>
    <button className={styles.button}>3D view</button>
    </div>
</div>
<img src='../listMap.png' alt='Map'/>
<p className={styles.insightCard}>A visual overview of key destinations surrounding Edenbrook Villa — schools, hospitals, leisure, and business hubs all within reach.</p>
</div>

)
}

export default Neighbourhood