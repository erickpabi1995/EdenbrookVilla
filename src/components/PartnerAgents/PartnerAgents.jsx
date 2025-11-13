import AboutInfo from '../../shared/AboutInfo/AboutInfo'
import Containers from '../../shared/Containers/Containers'
import NavBar from '../../shared/NavBar/NavBar'
import PartnerAgentHero from '../../shared/PartnerAgentHero/PartnerAgentHero'
import PartnerAgentDirectory from '../../shared/PartnerAgentDirectory/PartnerAgentDirectory'
import AltHeader from '../../shared/AltHeader/AltHeader'
import Partners from '../../shared/Partners/Partners'
import Referrals from '../../shared/Referrals/Referrals'
import QLuxePartners from '../../shared/QLuxePartners/QLuxePartners'
import NewsLetter from '../../shared/NewsLetter/NewsLetter'
import Blog from '../../shared/Blog/Blog'
import FAQ from '../../shared/FAQ/FAQ'
import Footer from '../../shared/Footer/Footer'

const PartnerAgents = () => {
return(
    <>
<NavBar/>
<PartnerAgentHero/>
  <AboutInfo content={'Collaboration Built on Trust and Integrity. We believe great partnerships create exceptional results. Our agent network is built on professionalism, transparency, and a shared commitment to providing clients with the highest standard of service and luxury property experiences.'}/>
    <Containers content={'BROWSE OUR AGENT DIRECTORY'} contentBackground={true} title={true}/>
    <PartnerAgentDirectory/>
    <AltHeader/>
    <Partners/>
    <Referrals/>
    <QLuxePartners/>
      <Blog/>
    <NewsLetter/>
    <FAQ/>
    <Footer/>
    </>
)
}

export default PartnerAgents