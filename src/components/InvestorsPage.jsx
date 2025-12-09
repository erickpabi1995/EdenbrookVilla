import Blog from '../shared/Blog/Blog'
import Containers from '../shared/Containers/Containers'
import CTA from '../shared/CTA/CTA'
import FAQ from '../shared/FAQ/FAQ'
import Footer from '../shared/Footer/Footer'
import ProjectInvestments from '../shared/ProjectInvestments/ProjectInvestments'
import InvestorRelations from '../shared/InvestorRelations/InvestorRelations'
import Investors from '../shared/Investors/Investors'
import NewsLetter from '../shared/NewsLetter/NewsLetter'
import Partners from '../shared/Partners/Partners'
import Investment from '../shared/Investment/Investment'
import InvestorAltHeader from '../shared/InvestorAltHeader/InvestorAltHeader'
import DownloadPortfolio from '../shared/DownloadPortfolio/DownloadPortfolio'

const InvestorsPage = () => {


return(
    <>
    <Investors/>
    <InvestorRelations/>
    <Partners/>
    <Containers content={'Discover our developments'} contentBackground={true}/>
    <ProjectInvestments/>
    <InvestorAltHeader/>
    <Investment/>
    <DownloadPortfolio/>
    <CTA/>
    <Blog/>
    <NewsLetter/>
    <FAQ/>
    <Footer/>
    </>


)
}

export default InvestorsPage