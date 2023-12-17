import './map.css'
import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap , Marker , Popup , Polyline, Tooltip} from 'react-leaflet'
import { fetchNearbyLocations } from '../../API/Overpass'
import { getCurrentLocation } from '../../API/getcurrentLocation'
import { locationPinIcon, mylocationIcon, tollIcon } from '../../Utils/lefletIcons'
import { fetchRoute } from '../../API/Osrm'
import { getTollDetails, getTollLocationsPolyline } from '../../API/tollCalculator'
function CenterMap({newLocation}) {
    const map = useMap()
    map.setView(newLocation, map.getZoom());
    return null
  }
const Map = () => {
    const [currentLocation, setcurrentLocation] = useState(null)
 const [location, setlocation] = useState("cafe")
 const [nearByPlacesData, setnearByPlacesData] = useState(null)
 const [route, setRoute] = useState(null)
 const [selectedPOI, setSelectedPOI] = useState(null);
const [toll, settoll] = useState(null)
const [currentMarker, setcurrentMarker] = useState("")
 const [centerLocation, setCenterLocation] = useState(currentLocation ? {lat:currentLocation.latitude, lon:currentLocation.longitude}:{lat:52.5200, lon:13.4050})
 
 useEffect(() => {
   getCurrentLocation()
   .then((location) => {
     console.log('Current Location:', location);
     if(currentLocation==null){
        setcurrentLocation(location)
        setCenterLocation({lat:location.latitude , lon:location.longitude})
        console.log(centerLocation, "centerlocation ")
        
    }
   })
   .catch((error) => {
     console.error('Error getting current location:', error.message);
   });
 
   
 }, [currentLocation ])

    const fetchLocation= async() =>{ 
      const data =  await fetchNearbyLocations(location , centerLocation)
      setnearByPlacesData(data)
      console.log( nearByPlacesData)
      
      
    }

const handleMarkerClick= async({lat,lon})=>{ 
    try {
        const startLocation = {lat:centerLocation.lat,lon: centerLocation.lon} || (await getCurrentLocation());
        const endLocation = {lat,lon};
  
        const routeData = await fetchRoute(startLocation, endLocation);
           const data = []
           if(routeData.routes[0].geometry){
           await  routeData.routes[0].geometry.coordinates.map( item=> data.push(item.reverse()))
           console.log(data)
           setRoute(data);
           console.log("route1",route)
            const tollData = await getTollLocationsPolyline(data)
            console.log(tollData)
            if(tollData.status=='OK'){
                settoll(tollData)
                console.log( "toll",toll)
            }
           
           }
           console.log(data )

        
    
        setSelectedPOI({lat,lon});
      } catch (error) {
        console.error('Error generating route:', error.message);
      }
}   

const handleMakrerHover=()=>{ 

}
  return (
    <div ><MapContainer style={{ height: '480px', width: '100%' }} center={[centerLocation.lat, centerLocation.lon]} zoom={13} scrollWheelZoom={true}>
    <CenterMap newLocation={[centerLocation.lat, centerLocation.lon]}/>
    
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   {currentLocation &&<Marker icon={mylocationIcon}  position={[currentLocation.latitude, currentLocation.longitude]}>
          <Popup>{`Latitude: ${currentLocation.latitude}, Longitude: ${currentLocation.longitude}  your location `}</Popup>
        </Marker>}
   
    {nearByPlacesData && nearByPlacesData.map((location, index) => (
        
        <Marker  icon={locationPinIcon} key={index} position={[location.lat, location.lon]} eventHandlers={{click: ()=> handleMarkerClick({lat:location.lat, lon:location.lon}), hover:()=>handleMakrerHover({lat:location.lat, lon:location.lon})}}>
          <Tooltip>{`Latitude: ${location.lat}, Longitude: ${location.lon}`} 
         
          
          
          </Tooltip>
        </Marker>
        
      
      ))}
    {toll && toll.route.tolls.map((location, index) =>  {
         console.log(location.lng)
        return(
        <Marker  icon={tollIcon}   key={index} position={[location.lat, location.lng]} eventHandlers={{click: ()=> handleMarkerClick({lat:location.lat, lon:location.lon})}}>
          <Tooltip> 
             <h4>{location.name}</h4>
            {`Latitude: ${location.lat}, Longitude: ${location.lng}, `}
             <p > <span style={{fontWeight:'bold'}}>Prepaid Card Cost :</span>{location.currency} {location.prepaidCardCost} </p>
             <p > <span style={{fontWeight:'bold'}}>Road :</span>{location.road} </p>
          </Tooltip>
        </Marker>
        )}) }

  
 {route &&<Polyline className='Route' pathOptions={ { color: '#468beb',
    weight: 5,
    opacity: 0.7,
    filter: 'drop-shadow(0px 0px 10px rgba(46, 98, 255, 0.9))' }} positions={[...route]} />}
  </MapContainer>
    <button type='button' onClick={()=>fetchLocation(location)}> search locaiton </button>
  </div>
  )
}

export default Map