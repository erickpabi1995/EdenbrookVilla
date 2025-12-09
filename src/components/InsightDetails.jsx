import InsightDetailsHero from '../shared/InsightDetailsHero/InsightDetailsHero'
import CTA from '../shared/CTA/CTA'
import Blog from '../shared/Blog/Blog'
import NewsLetter from '../shared/NewsLetter/NewsLetter'
import FAQ from '../shared/FAQ/FAQ'
import { useLocation } from 'react-router-dom'
import Footer from '../shared/Footer/Footer'

const InsightDetails = () => {
        const location = useLocation()
    const blogData = location.state?.blog
    return(
        <div>
<InsightDetailsHero blogData={blogData}/>
  <CTA/>
           <Blog/>
    <NewsLetter/>
    <FAQ/>
    <Footer/>
        </div>
    )

}

export default InsightDetails