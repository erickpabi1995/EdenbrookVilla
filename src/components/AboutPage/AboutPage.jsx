import AboutHero from '../../shared/AboutHero/AboutHero'
import AboutInfo from '../../shared/AboutInfo/AboutInfo'
import Mission from '../../shared/Mission/Mission'
import Team from '../../shared/Team/Team'
import RestofTeam from '../../shared/RestofTeam/RestofTeam'
import JourneyWhite from '../../shared/JourneyWhite/JourneyWhite'
import Sustainable from '../../shared/Sustainable/Sustainable'
import Partners from '../../shared/Partners/Partners'
import Blog from '../../shared/Blog/Blog'
import NewsLetter from '../../shared/NewsLetter/NewsLetter'
import CTA from '../../shared/CTA/CTA'
import FAQ from '../../shared/FAQ/FAQ'
import Footer from '../../shared/Footer/Footer'
import NavBar from '../../shared/NavBar/NavBar'
const AboutPage = () => {

      const navList = [{
      name:'About',
      link:''
    },
{
  name:'Projects',
  link:''
},
{
  name:'Partner Agents',
  link:''
},
{
  name:'Investors',
  link:''
},
{
  name:'Insights',
  link:''
},
]
    return(
      <>
      <NavBar navItems={navList}/>
      <AboutHero/>
      <AboutInfo content={'Founded with a commitment to excellence, Qluxe Homes combines modern architecture with timeless sophistication. Each project reflects our belief that a home should be more than a space — it should be a statement of taste, innovation, and comfort.'}/>
      <Mission/> 
     <Team/>
     <RestofTeam/>
     <JourneyWhite/>
     <Sustainable/>
     <Partners/>
     <CTA/>
    <Blog/>
    <NewsLetter/>
    <FAQ/>
    <Footer/>
      </>
    )
}

export default AboutPage