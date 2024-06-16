import React from "react"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

const containerStyle = {
  width: "600px",
  height: "500px",
  borderRadius: "10px",
}

const center = {
  lat: 30.0717052,
  lng: 31.220952,
}

const googleMapsApiKey = "AIzaSyBPq8l_d9x4C8jmw6TL_KYjtQv3lyBbRRU" // prod
// const googleMapsApiKey = "AIzaSyCuTilAfnGfkZtIx0T3qf-eOmWZ_N2LpoY" // dev general
// const googleMapsApiKey = "AIzaSyCnIaqTP0yX4akiGmKCfI5wWem-mZ7_X8o" // dev my location
// const googleMapsApiKey = "AIzaSyCuTilAfnGfkZtIx0T3qf-eOmWZ_N2LpoY" // dev
// googleMapsApiKey: 'AIzaSyAiXRLddC53YrmqhX_FNX62e2SQN6TiP3M', // dev
// googleMapsApiKey: 'AIzaSyBPq8l_d9x4C8jmw6TL_KYjtQv3lyBbRRU', // prod

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
  })

  const [map, setMap] = React.useState(null)

  console.log(map)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const mapOptions = {
    fullscreenControl: false,
    zoomControl: false,
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={mapOptions}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(MyComponent)
