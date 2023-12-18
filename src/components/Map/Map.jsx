import './map.css'
import React, { useContext, useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline, Tooltip } from 'react-leaflet'
import { fetchNearbyLocations } from '../../API/Overpass'
import { getCurrentLocation } from '../../API/getcurrentLocation'
import { locationPinIcon, mylocationIcon, tollIcon } from '../../Utils/lefletIcons'
import { fetchRoute } from '../../API/Osrm'
import { getTollDetails, getTollLocationsPolyline } from '../../API/tollCalculator'
import { AmenitiesContext } from '../../Context/AmenitiesContext'

function CenterMap({ newLocation }) {
  const map = useMap()
  map.setView(newLocation, map.getZoom());
  return null
}
const Map = () => {
  const {amenitiesData , searchRange }=useContext(AmenitiesContext)
  const [currentLocation, setcurrentLocation] = useState(null)
  const [location, setlocation] = useState("cafe")
  const [nearByPlacesData, setnearByPlacesData] = useState(null)
  const [route, setRoute] = useState(null)
  const [selectedPOI, setSelectedPOI] = useState(null);
  const [toll, settoll] = useState(null)
  const [currentMarker, setcurrentMarker] = useState()
  const [centerLocation, setCenterLocation] = useState(currentLocation ? { lat: currentLocation.latitude, lon: currentLocation.longitude } : { lat: 52.5200, lon: 13.4050 })
  const [makerdata, setmakerdata] = useState([])
  const [showRoute, setshowRoute] = useState(null)
  useEffect(() => {
    getCurrentLocation()
      .then((location) => {
        console.log('Current Location:', location);
        if (currentLocation == null) {
          setcurrentLocation(location)
          setCenterLocation({ lat: location.latitude, lon: location.longitude })
          console.log(centerLocation, "centerlocation ")

        }
      })
      .catch((error) => {
        console.error('Error getting current location:', error.message);
      });


  }, [currentLocation])

 useEffect(()=>{ 
    if(amenitiesData){ 
      setlocation(amenitiesData)
      fetchLocation(amenitiesData)
    }
       
        console.log("amenitiesData",amenitiesData)
 }, [amenitiesData])
  const handleMakers = async (lat, lon) => {
    try {
      const startLocation = { lat: centerLocation.lat, lon: centerLocation.lon } || (await getCurrentLocation());
      const endLocation = { lat, lon };

      const routeData = await fetchRoute(startLocation, endLocation);
      const data = []

      if (routeData.routes[0].geometry) {
        await routeData.routes[0].geometry.coordinates.map(item => data.push(item.reverse()))
        const tollData = await getTollLocationsPolyline(data)
        if (tollData.status === 'OK') {
          settoll(tollData)
          return { tollData, routes: data }

        }
      };
    } catch (error) {
      console.error('Error generating route:', error.message);
    }
  }

  const fetchLocation = async (ameniti) => {
    console.log("ameniti", ameniti)
    const data = await fetchNearbyLocations(ameniti, centerLocation , searchRange )
    setnearByPlacesData(data)
      const allmarker =[]
     await data.map(async (location) => {
        let data = await handleMakers(location.lat, location.lon)
          allmarker.push({location,...data})
          console.log("running" , allmarker)
           return 0 
    })
    console.log("allmarker", allmarker)
    setmakerdata(allmarker)
    console.log( "nearbyplaces",nearByPlacesData)


  }
  useEffect(()=>{ 
     console.log('makerdata',makerdata )
     console.log( "nearbyplaces",nearByPlacesData)
  },[makerdata , nearByPlacesData])

  const handleMarkerClick = async ( lat, lon , routes) => {
      console.log(routes)
     setshowRoute(routes)
     console.log(showRoute)
  }

  const handleMakrerHover = () => {

  }
  return (
    <div ><MapContainer style={{ height: '480px', width: '100%' }} center={[centerLocation.lat, centerLocation.lon]} zoom={13} scrollWheelZoom={true}>
      <CenterMap newLocation={[centerLocation.lat, centerLocation.lon]} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {currentLocation && <Marker icon={mylocationIcon} position={[currentLocation.latitude, currentLocation.longitude]}>
        <Popup>{`Latitude: ${currentLocation.latitude}, Longitude: ${currentLocation.longitude}  your location `}</Popup>
      </Marker>}

      {makerdata && makerdata.map((data, index) => {
               const {location, tollData , routes }=data
        return(
            
        <Marker icon={locationPinIcon} key={index} position={[location.lat, location.lon]} eventHandlers={{ click: () => handleMarkerClick(  location.lat, location.lon , routes  ), }}>
          <Tooltip>
          {location &&  <p > <span style={{ fontWeight: 'bold' }}>{location.tags.name ? location.tags.name : " "}</span>  </p>}

            {`Latitude: ${location.lat}, Longitude: ${location.lon} `}
               
            {tollData &&  <p > <span style={{ fontWeight: 'bold' }}>distance:</span>{tollData.route.distance.metric}  </p>}
              {tollData&&  tollData.route.costs.minimumTollCost ? <p > <span style={{ fontWeight: 'bold' }}>Minimum Toll Cost :</span>{tollData.route.costs.minimumTollCost} {tollData.summary.currency} </p>: <p style={{color:"green"}}>No toll on this route </p>}
          </Tooltip>

        </Marker>


      )})}
      {toll && toll.route.tolls.map((location, index) => {
        console.log(location.lng)
        return (
          <Marker icon={tollIcon} key={index} position={[location.lat, location.lng]} eventHandlers={{ click: () => handleMarkerClick({ lat: location.lat, lon: location.lon }) }}>
            <Tooltip>
              <h4>{location.name}</h4>
              {`Latitude: ${location.lat}, Longitude: ${location.lng}, `}
              <p > <span style={{ fontWeight: 'bold' }}>Prepaid Card Cost :</span>{location.currency} {location.prepaidCardCost} </p>
              <p > <span style={{ fontWeight: 'bold' }}>Road :</span>{location.road} </p>
            </Tooltip>
          </Marker>
        )
      })}


      {showRoute && <Polyline className='Route' pathOptions={{
        color: '#468beb',
        weight: 5,
        opacity: 0.7,
        filter: 'drop-shadow(0px 0px 10px rgba(46, 98, 255, 0.9))'
      }} positions={[...showRoute]} />}
    </MapContainer>
      <button type='button' onClick={() => fetchLocation(location)}> search locaiton </button>
    </div>
  )
}

export default Map