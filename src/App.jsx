import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import { lazy,Suspense } from 'react'
import ScrollToTop from './shared/ScrollToTop'


const ProjectDetails = lazy(()=>import('./components/ProjectsDetails/ProjectsDetails'))



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
            <ProjectDetails />
          </Suspense>
        }
      />
      </Routes>
      </BrowserRouter>
  )
}

export default App
