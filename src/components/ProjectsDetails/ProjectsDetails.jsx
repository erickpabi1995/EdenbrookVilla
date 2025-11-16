import ContactUs from '../../shared/ContactUs/ContactUs'
import DownloadBrochures from '../../shared/DownloadBrochures/DownloadBrochures'
import FloorPlan from '../../shared/FloorPlan/FloorPlan'
import History from '../../shared/History/History'
import Journey from '../../shared/Journey/Journey'
import Neighbourhood from '../../shared/Neighbourhood/Neighbourhood'
import PaymentPlan from '../../shared/PaymentPlan/PaymentPlan'
import PropertyInfo from '../../shared/PropertyInfo/PropertyInfo'
import Sustainable from '../../shared/Sustainable/Sustainable'
import CTA from '../../shared/CTA/CTA'
import FAQ from '../../shared/FAQ/FAQ'
import Blog from '../../shared/Blog/Blog'
import NewsLetter from '../../shared/Newsletter/NewsLetter'
import Footer from '../../shared/Footer/Footer'
import Header from '../../shared/Header/Header'
import UnitGallery from '../../shared/UnitGallery/UnitGallery'
import ProjectDetailsHero from '../../shared/ProjectDetailsHero/ProjectDetailsHero'
import Map from '../../shared/Map/Map'

const ProjectDetails = () => {
    return(
        <>
        <ProjectDetailsHero/>
        <Header/>
        <History/>
        <Journey/>
        <UnitGallery/>
        <PropertyInfo/>
        <FloorPlan/>
        <Neighbourhood/>
        <PaymentPlan/>
        <Map/>
        <DownloadBrochures/>
        <Sustainable/>
        <ContactUs/>
        <FAQ/>
        <CTA/>
           <Blog/>
    <NewsLetter/>
    <FAQ/>
    <Footer/>
        </>
    )
}

export default ProjectDetails