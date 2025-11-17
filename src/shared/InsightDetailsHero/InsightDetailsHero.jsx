import NavBar from './NavBar'
import styles from './InsightDetailsHero.module.scss'

const InsightDetailsHero = () => {

    const contentTable =['Intro','A Market on the Rise','Diaspora Demand & Emotional Connection','3. Favourable Conditions for International Buyers','4. The Legacy Factor','5. Why Qluxe Homes']

return(
    <div className={styles.containers}>
        <NavBar/>
<div className={styles.container}>
<div className={styles.title}>
    <p className={styles.titleColumn}>Press Release</p>
      
<div className={styles.titleText}></div>
<p className={styles.titleDescription}>28th feb, 2025</p>
</div>

   <div className={styles.button}>
<p className={styles.insights}>Why Now Is the Time for the Diaspora to Invest in Ghana Real Estate</p>
   <p className={styles.insightCard}>Keywords: buy property in Ghana, Ghana real estate investment, diaspora homes Ghana</p>
   </div>

   <div className={styles.blogSubContainer}>
    <img src='../Avatar.png' alt='Avatar'/>
    <p className={styles.blogColumn}>
Kojo Annan
    </p>
   </div>
</div>
<div className={styles.blogSubColumn}>
    <img src='../insightFrame.png' alt='Insight Frame'/>
<div className={styles.blogSub}>
    <div className={styles.badge}>
        <p className={styles.badge_text}>For Ghanaians living abroad, the idea of owning a home back home has always carried deep emotion — pride, belonging, and the dream of creating something that lasts beyond a lifetime. Today, that dream aligns perfectly with opportunity. Ghana’s real estate market is experiencing steady growth, modernisation, and increasing international attention. For the diaspora, this is the moment to make homeownership a reality and investment a legacy.</p>
    <div className={styles.header}>
<p className={styles.date_text}>1. A Market on the Rise</p>
<p className={styles.logo_groups}>Over the past decade, Ghana has become one of Africa’s most stable and attractive destinations for property investment. Cities such as Accra, Tema, and Kumasi are expanding rapidly with new infrastructure, gated communities, and modern developments. Government projects like road expansions and airport upgrades are improving accessibility, while private developers are redefining urban living standards.</p>
    <p className={styles.logo_subgroups}>For investors abroad, this means one thing: value appreciation. Properties in prime areas such as Tse Addo, Airport Hills, and East Legon have seen consistent year-on-year growth even during global slowdowns. Ghana’s stable political climate and growing demand for quality housing create the perfect environment for long-term returns.</p>
    </div>
 <div className={styles.header}>
<p className={styles.date_text}>2. Diaspora Demand and Emotional Connection</p>
<p className={styles.logo_groups}>Beyond numbers, there is a powerful emotional story driving this growth — the return of the Ghanaian diaspora. Many are no longer just visiting; they are coming home to invest, retire, or build family legacies. Owning property is more than a financial move; it is a reconnection with identity.</p>
    <p className={styles.logo_subgroups}>At Qluxe Homes, we understand that feeling. Our developments, such as Edenbrook at Tse Addo, are designed with that emotional heartbeat in mind, combining modern design with the warmth of Ghanaian hospitality. Each home becomes a bridge between where you have been and where you belong.</p>
    </div>
    </div>
    <div className={styles.logo_secondary}>
<div className={styles.contentContainer}>
<p className={styles.logo_text}>Table of content</p>
<div className={styles.divider}></div>
<div className={styles.contentSubContainer}>
    {contentTable.map(item =>
<div className={styles.contentInnerContainer}>
<p className={styles.contentInnerText}>{item}</p>
</div>
)}
</div>
</div>
<div className={styles.newsLetterContainer}>
<div className={styles.newsLetter}>
    <p className={styles.newsLetterText}>Subscribe to our newsletter</p>
    <p className={styles.newsLetterSubtext}>Our bi-weekly newsletter full of inspiration, podcast, trend and news.</p>
</div>
<div className={styles.inputContainer}>
<input className={styles.inputStyles} placeholder='Jessica@email.com'></input>
<button className={styles.subscribeBtn}>Subscribe</button>
</div>
</div>
    </div>
      

</div>


</div>


   </div>

)
}

export default InsightDetailsHero