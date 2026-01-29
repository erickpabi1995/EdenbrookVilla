import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './QLuxePartners.module.scss'

const QLuxePartners = () => {
  const navigate = useNavigate()

  const handleContact = () => {
    navigate('/contactUs')
  }

  // Animation variants for infinite scrolling
  const scrollVariants = {
    rightToLeft: {
      x: ['0%', '-100%'],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    },
    leftToRight: {
      x: ['-100%', '0%'],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  }

  return(
    <div className={styles.qluxePartners}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.titleColumn}>
            <p className={styles.titleText}>Partner with Qluxe</p>
            <p className={styles.titleDescription}>
              Join our network of trusted real estate professionals and gain access to exclusive listings, 
              sales tools, and marketing resources — backed by the Qluxe name.
            </p>
          </div>
          <button className={styles.button} onClick={handleContact}>
            Apply to become a partner agent
          </button>
        </div>
      </div>

      <div className={styles.insights}>
        {/* First scrolling row - moves right to left */}
        <div className={styles.scrollContainer}>
          <motion.div 
            className={styles.insightCard}
            variants={scrollVariants}
            animate="rightToLeft"
          >
            <img 
              src='../partner.jpeg' 
              alt='Partner Agent 1' 
              className={styles.agentImage}
            />
            <img 
              src='../Logo.svg' 
              alt='Partner Agent 2' 
              className={styles.agentImage2}
            />
            <img 
              src='../Logo.svg' 
              alt='Partner Agent 3' 
              className={styles.agentImage2}
            />
            <img 
              src='../Logo.svg' 
              alt='Partner Agent 4' 
              className={styles.agentImage2}
            />
          </motion.div>
          
          {/* Duplicate for seamless loop */}
          <motion.div 
            className={styles.insightCard}
            variants={scrollVariants}
            animate="rightToLeft"
          >
            <img 
              src='../partner.jpeg' 
              alt='Partner Agent 1' 
              className={styles.agentImage}
            />
            <img 
              src='../Logo.svg' 
              alt='Partner Agent 2' 
              className={styles.agentImage2}
            />
            <img 
              src='../Logo.svg' 
              alt='Partner Agent 3' 
              className={styles.agentImage2}
            />
            <img 
              src='../Logo.svg' 
              alt='Partner Agent 4' 
              className={styles.agentImage2}
            />
          </motion.div>
        </div>

        {/* Second scrolling row - moves left to right */}
        <div className={styles.scrollContainer}>
          <motion.div 
            className={styles.insightCard}
            variants={scrollVariants}
            animate="leftToRight"
          >
            <img 
              src='../Logo.svg' 
              alt='Partner Agent 5' 
              className={styles.agentImage2}
            />
            <img 
              src='../Logo.svg' 
              alt='Partner Agent 6' 
              className={styles.agentImage2}
            />
            <img 
              src='../partner.jpeg' 
              alt='Partner Agent 7' 
              className={styles.agentImage}
            />
            <img 
              src='../Logo.svg' 
              alt='Partner Agent 8' 
              className={styles.agentImage2}
            />
          </motion.div>
          
          {/* Duplicate for seamless loop */}
          <motion.div 
            className={styles.insightCard}
            variants={scrollVariants}
            animate="leftToRight"
          >
            <img 
              src='../Logo.svg' 
              alt='Partner Agent 5' 
              className={styles.agentImage2}
            />
            <img 
              src='../Logo.svg' 
              alt='Partner Agent 6' 
              className={styles.agentImage2}
            />
            <img 
              src='../partner.jpeg' 
              alt='Partner Agent 7' 
              className={styles.agentImage}
            />
            <img 
              src='../Logo.svg' 
              alt='Partner Agent 8' 
              className={styles.agentImage2}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default QLuxePartners