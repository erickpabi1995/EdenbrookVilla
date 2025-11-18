import Blog from '../shared/Blog/Blog'
import Containers from '../shared/Containers/Containers'
import CTA from '../shared/CTA/CTA'
import FAQ from '../shared/FAQ/FAQ'
import Footer from '../shared/Footer/Footer'
import HomeAbout from '../shared/HomeAbout/HomeAbout'
import HomeHero from '../shared/HomeHero/HomeHero'
import LandProjects from '../shared/LandingPageProjects/LandProjects'
import Metrics from '../shared/Metrics/Metrics'
import NewsLetter from '../shared/Newsletter/NewsLetter'
import Partners from '../shared/Partners/Partners'
import Sustainable from '../shared/Sustainable/Sustainable'
import Testimonials from '../shared/Testimonials/Testimonials'

const LandingPage = () => {


return(
    <>
    <HomeHero/>
    <div id='about'>
  <HomeAbout/>
    </div>
    <Containers content={'Discover our developments'}/>
    <div id='projects'>
    <LandProjects/>
    </div>
<div id='partnerAgents'>
    <Partners/>
</div>

    <Metrics/>
    <Sustainable/>
    <Testimonials/>
    <CTA/>
    <div id='insights'>
    <Blog/>
    </div>

    <NewsLetter/>
    <FAQ/>
    <Footer/>
    </>


)
}

export default LandingPage