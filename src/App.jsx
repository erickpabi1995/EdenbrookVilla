import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import { lazy,Suspense } from 'react'

const ProjectsHub = lazy(()=>import('./components/ProjectsHub'))
const InvestorsPage = lazy(()=>import('./components/InvestorsPage'))
const InsightDetailsPage = lazy(()=>import('./components/InsightDetails'))
const ContactUsPage = lazy(()=>import('./components/ContactUsPage'))
const InsightHubPage = lazy(()=>import('./components/InsightHubPage'))
const PartnerAgents = lazy(()=>import('./components/PartnerAgents/PartnerAgents'))
const ProjectDetails = lazy(()=>import('./components/ProjectsDetails/ProjectsDetails'))
const AboutPage = lazy(()=>import('./components/AboutPage/AboutPage'))
const Testimonials = lazy(()=>import('./shared/PrivacyPolicyHero/PrivacyPolicyHero'))
const LandingPage = lazy(()=>import('./components/LandingPage'))
const PrivacyPolicy = lazy(()=>import('./components/PrivacyPolicy'))

function App() {


  return (
    <BrowserRouter>
    <Routes>
          <Route
        path={'/'}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            {' '}
            <LandingPage />
          </Suspense>
        }
      />
       <Route
        path={'/projectsHub'}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            {' '}
            <ProjectsHub />
          </Suspense>
        }
      />
          <Route
        path={'/privacyPolicy'}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            {' '}
            <PrivacyPolicy />
          </Suspense>
        }
      />
        <Route
        path={'/contactUs'}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            {' '}
            <ContactUsPage />
          </Suspense>
        }
      />
         <Route
        path={'/insightDetails'}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            {' '}
            <InsightDetailsPage />
          </Suspense>
        }
      />
         <Route
        path={'/insightHub'}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            {' '}
            <InsightHubPage />
          </Suspense>
        }
      />
       <Route
        path={'/about'}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            {' '}
            <AboutPage />
          </Suspense>
        }
      />
         <Route
        path={'/partnerAgents'}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            {' '}
            <PartnerAgents />
          </Suspense>
        }
      />
        <Route
        path={'/projectDetails'}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            {' '}
            <ProjectDetails />
          </Suspense>
        }
      />
   <Route
        path={'/investors'}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            {' '}
            <InvestorsPage />
          </Suspense>
        }
      />
       <Route
        path={'/test'}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            {' '}
            <Testimonials />
          </Suspense>
        }
      />
      </Routes>
      </BrowserRouter>
  )
}

export default App
