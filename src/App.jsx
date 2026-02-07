import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import { lazy,Suspense } from 'react'
import MainContainer from './shared/MainContainer/MainContainer'
import ScrollToTop from './shared/ScrollToTop'

const ProjectsHub = lazy(()=>import('./components/ProjectsHub'))
const InvestorsPage = lazy(()=>import('./components/InvestorsPage'))
const InsightDetailsPage = lazy(()=>import('./components/InsightDetails'))
const ContactUsPage = lazy(()=>import('./components/ContactUsPage'))
const InsightHubPage = lazy(()=>import('./components/InsightHubPage'))
const PartnerAgents = lazy(()=>import('./components/PartnerAgents/PartnerAgents'))
const ProjectDetails = lazy(()=>import('./components/ProjectsDetails/ProjectsDetails'))
const AboutPage = lazy(()=>import('./components/AboutPage/AboutPage'))
const Testimonials = lazy(()=>import('./shared/DownloadPortfolio/DownloadPortfolio'))
const LandingPage = lazy(()=>import('./components/LandingPage'))
const PrivacyPolicy = lazy(()=>import('./components/PrivacyPolicy'))
const SendUsMessage = lazy(()=>import('./components/SendMessageComponents'))


// Create a proper loading component
const LoadingSpinner = () => (
  <div className="loading-container" style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    gap: '16px'
  }}>
    <div className="spinner" style={{
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
    <p style={{ color: '#666', fontSize: '16px' }}>Loading...</p>
  </div>
)

function App() {


  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
          <Route
        path={'/'}
        element={
          <Suspense fallback={<LoadingSpinner/>}>
            {' '}
            <LandingPage />
          </Suspense>
        }
      />
       <Route
        path={'/projectsHub'}
        element={
          <Suspense fallback={<LoadingSpinner/>}>
            {' '}
            <ProjectsHub />
          </Suspense>
        }
      />
          <Route
        path={'/privacyPolicy'}
        element={
          <Suspense fallback={<LoadingSpinner/>}>
            {' '}
            <PrivacyPolicy />
          </Suspense>
        }
      />
        <Route
        path={'/contactUs'}
        element={
          <Suspense fallback={<LoadingSpinner/>}>
            {' '}
            <ContactUsPage />
          </Suspense>
        }
      />
         <Route
        path={'/insightDetails'}
        element={
          <Suspense fallback={<LoadingSpinner/>}>
            {' '}
            <InsightDetailsPage />
          </Suspense>
        }
      />
        <Route
        path={'/messageUs'}
        element={
          <Suspense fallback={<LoadingSpinner/>}>
            {' '}
            <SendUsMessage />
          </Suspense>
        }
      />
         <Route
        path={'/insightHub'}
        element={
          <Suspense fallback={<LoadingSpinner/>}>
            {' '}
            <InsightHubPage />
          </Suspense>
        }
      />
       <Route
        path={'/about'}
        element={
          <Suspense fallback={<LoadingSpinner/>}>
            {' '}
            <AboutPage />
          </Suspense>
        }
      />
         <Route
        path={'/partnerAgents'}
        element={
          <Suspense fallback={<LoadingSpinner/>}>
            {' '}
            <PartnerAgents />
          </Suspense>
        }
      />
        <Route
        path={'/projectDetails'}
        element={
          <Suspense fallback={<LoadingSpinner/>}>
            {' '}
            <ProjectDetails />
          </Suspense>
        }
      />
   <Route
        path={'/investors'}
        element={
          <Suspense fallback={<LoadingSpinner/>}>
            {' '}
            <InvestorsPage />
          </Suspense>
        }
      />
       <Route
        path={'/test'}
        element={
          <Suspense fallback={<LoadingSpinner/>}>
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
