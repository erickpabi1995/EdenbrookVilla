import styles from './SendMessage.module.scss'

const SendMessage = () => {


return(
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
<p className={styles.blogSubContainer}>
  Talk to our team
</p>
<p className={styles.blogColumn}>We’d love to hear from you. Please fill out this form.</p>

      </div>
        <div className={styles.blogSubColumn}>
  <div className={styles.blogSub}>
  <div className={styles.badge}>
<div className={styles.input}>
<p className={styles.label}>Name</p>
<input className={styles.inputStyles} placeholder='Jacob Moore'/>
</div>
<div className={styles.input}>
<p className={styles.label}>Email</p>
<input className={styles.inputStyles} placeholder='name@email.com'/>
</div>
  </div>
    <div className={styles.badge}>
<div className={styles.input}>
<p className={styles.label}>Phone Number</p>
<input className={styles.inputStyles} placeholder='0244123456'/>
</div>
<div className={styles.input}>
<p className={styles.label}>Email</p>
<input className={styles.inputStyles} placeholder='name@email.com'/>
</div>
  </div>
  <div className={styles.textArea}>
<p className={styles.label}>Message</p>
<textarea className={styles.textAreaStyles} placeholder='Leave us a message...'> </textarea>
</div>
<button className={styles.submitBtn}>Submit</button>
  </div>

</div>
    </div>
    
  </div>
</div>

)
}

export default SendMessage