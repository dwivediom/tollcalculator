 import axios from "axios";
  export const fetchNearbyLocations = async (data , centerlocation) => {
    try {
    //   const response = await axios.get(`https://overpass-api.de/api/interpreter?data=[out:json];(node(around:1000,${centerlocation.lat},${centerlocation.lon})[%22amenity%22=%22${data}%22];);out;`);
      const response = await axios.get( `https://overpass-api.de/api/interpreter?data=[out:json];(node(around:10000,${centerlocation.lat},${centerlocation.lon})[%22amenity%22=%22${data}%22];);out meta qt 5;`);
     
      // Extract coordinates from the Overpass Turbo response
      console.log(response)
      const coordinates = response.data.elements.map((element) => ({
        lat: element.lat,
        lon: element.lon,
      }));
       console.log( coordinates , )
      return  coordinates
    } catch (error) {
      console.error('Error fetching nearby locations:', error);
    }
  };
