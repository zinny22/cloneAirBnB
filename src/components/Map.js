import React from 'react'
import GoogleMap from 'google-map-react'
import Marker from '../components/Marker'

const Map = props => {
  const { post_list, zoom, center} = props

  return (
        <React.Fragment>
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMap
              bootstrapURLKeys={{ key: "AIzaSyCywpX9BWo-fg2AFtPGwGtEzj_pOD-ls6M" }}
              defaultCenter={center}
              defaultZoom={zoom}
            >
            {
              post_list.map((v, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <Marker
                      text={`₩${v.price}`}
                      info={v}
                    />
                  </React.Fragment>
                )
              })
            }
            </GoogleMap>
          </div>
        </React.Fragment>
  )
}

Map.defaultProps = {
  center: {
    lat: 37.42990861398286,
    lng: 126.89336566108994,
  },
  zoom: 7,
  options: {
    gestureHandling: 'cooperative',
  },
}

export default Map