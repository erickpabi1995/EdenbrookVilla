import InsightDetailsHero from '../shared/InsightDetailsHero/InsightDetailsHero'
import CTA from '../shared/CTA/CTA'
import Blog from '../shared/Blog/Blog'
import NewsLetter from '../shared/Newsletter/NewsLetter'
import FAQ from '../shared/FAQ/FAQ'
import Footer from '../shared/Footer/Footer'
import ContactUsHero from '../shared/ContactUsHero/ContactUsHero'
import ContactUsHeader from '../shared/ContactUsHeader/ContactUsHeader'
import SendMessage from '../shared/SendMessage/SendMessage'

const ContactUsPage = () => {
    return(
        <div>
<ContactUsHero/>
<ContactUsHeader/>
<SendMessage/>
    <FAQ/>
  <CTA/>
           <Blog/>
    <NewsLetter/>

    <Footer/>
        </div>
    )

}

export default ContactUsPage