import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import { lazy,Suspense } from 'react'


const InvestorsPage = lazy(()=>import('./components/InvestorsPage'))
const PartnerAgents = lazy(()=>import('./components/PartnerAgents/PartnerAgents'))
const ProjectDetails = lazy(()=>import('./components/ProjectsDetails/ProjectsDetails'))
const AboutPage = lazy(()=>import('./components/AboutPage/AboutPage'))
const Testimonials = lazy(()=>import('./shared/ProjectDetailsHero/ProjectDetails'))


function App() {


  return (
    <BrowserRouter>
    <Routes>
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
