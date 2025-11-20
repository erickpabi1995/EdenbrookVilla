import Blog from '../shared/Blog/Blog'
import Containers from '../shared/Containers/Containers'
import CTA from '../shared/CTA/CTA'
import FAQ from '../shared/FAQ/FAQ'
import Footer from '../shared/Footer/Footer'
import AltHeader from '../shared/AltHeader/AltHeader'
import ProjectInvestments from '../shared/ProjectInvestments/ProjectInvestments'
import InvestorRelations from '../shared/InvestorRelations/InvestorRelations'
import Investors from '../shared/Investors/Investors'
import Metrics from '../shared/Metrics/Metrics'
import NewsLetter from '../shared/Newsletter/NewsLetter'
import Partners from '../shared/Partners/Partners'
import Sustainable from '../shared/Sustainable/Sustainable'
import Testimonials from '../shared/Testimonials/Testimonials'
import Investment from '../shared/Investment/Investment'
// import NavBar from '../shared/NavBar/NavBar'

const InvestorsPage = () => {


return(
    <>
    <Investors/>
    <InvestorRelations/>
    <Partners/>
    <Containers content={'Discover our developments'} contentBackground={true}/>
    <ProjectInvestments/>
    <AltHeader/>
    <Investment/>
    <CTA/>
    <Blog/>
    <NewsLetter/>
    <FAQ/>
    <Footer/>
    </>


)
}

export default InvestorsPage