import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import styles from './Map.module.scss'

const Map = ({ center = { lat: 5.6037, lng: -0.1870 }, zoom = 12 }) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  const containerStyle = {
    width: '100%',
    height: '500px'
  }

  if (!apiKey) {
    return (
      <div className={styles.neighbourhood}>
        <p className={styles.container}>Map</p>
        <div className={styles.insightCard}>
          <p style={{ padding: '20px', textAlign: 'center' }}>
            Please add your Google Maps API key to the .env file
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.neighbourhood}>
      <p className={styles.container}>Map</p>
      <div className={styles.insightCard}>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  )
}

export default Map