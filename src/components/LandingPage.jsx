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
  <HomeAbout/>
    <Containers content={'Discover our developments'}/>
    <LandProjects/>
    <Partners/>
    <Metrics/>
    <Sustainable/>
    <Testimonials/>
    <CTA/>
    <Blog/>

    <NewsLetter/>
    <FAQ/>
    <Footer/>
    </>


)
}

export default LandingPage