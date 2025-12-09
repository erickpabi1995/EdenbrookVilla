import Blog from '../shared/Blog/Blog'
import CTA from '../shared/CTA/CTA'
import FAQ from '../shared/FAQ/FAQ'
import Footer from '../shared/Footer/Footer'
import NewsLetter from '../shared/NewsLetter/NewsLetter'
import ProjectsHubHero from '../shared/ProjectsHubHero/ProjectsHubHero'

const ProjectsHub = () => {
return(
    <>
    <ProjectsHubHero/>
     <CTA/>
           <Blog/>
    <NewsLetter/>
    <FAQ/>
    <Footer/>
    </>
)
}


export default ProjectsHub