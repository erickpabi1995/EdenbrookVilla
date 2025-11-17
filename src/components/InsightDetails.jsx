import InsightDetailsHero from '../shared/InsightDetailsHero/InsightDetailsHero'
import CTA from '../shared/CTA/CTA'
import Blog from '../shared/Blog/Blog'
import NewsLetter from '../shared/Newsletter/NewsLetter'
import FAQ from '../shared/FAQ/FAQ'
import Footer from '../shared/Footer/Footer'

const InsightDetails = () => {
    return(
        <div>
<InsightDetailsHero/>
  <CTA/>
           <Blog/>
    <NewsLetter/>
    <FAQ/>
    <Footer/>
        </div>
    )

}

export default InsightDetails