 import axios from "axios"

 export const getTollDetails= async()=> {
    const tollGuruApiUrl = 'https://apis.tollguru.com/toll/v2/origin-destination-waypoints';

  const apiKey = '3M2h8NdJb2mB9LdtdqLBq3B7PBNLM2LH';

  const requestData = {
    from: { address: 'Philadelphia, Pennsylvania', lat: 39.95209, lng: -75.16219 },
    to: { address: 'New York, NY', lat: 40.71455, lng: -74.00715 },
    waypoints: [{ address: 'Bridgewater Township, New Jersey' }],
    serviceProvider: 'here',
    vehicle: {
      type: '2AxlesTaxi',
      weight: { value: 20000, unit: 'pound' },
      height: { value: 7.5, unit: 'meter' },
      length: { value: 7.5, unit: 'meter' },
      axles: 4,
      emissionClass: 'euro_5',
    },
  };
  
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
  };
  

  try {
    const response = await axios.post(tollGuruApiUrl, requestData, { headers });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

 

 export const getTollLocationsPolyline = async (coordinates) => {

       function convertCoordinatesToPath(coordinates) {
        return coordinates.map(coord => coord.join(', ')).join(' | ');
      }

   console.log( await convertCoordinatesToPath(coordinates))
    
    const apiEndpoint = 'https://apis.tollguru.com/toll/v2/complete-polyline-from-mapping-service/#';
    const apiKey = '3M2h8NdJb2mB9LdtdqLBq3B7PBNLM2LH';
    const requestData = {
      mapProvider: 'here',
      path: await convertCoordinatesToPath(coordinates),
      locTimes: [[0, 1660110342], [30, 1660110642], [60, 1660110942], [232, 1660111182]],
      vehicle: {
        type: '2AxlesTaxi',
        weight: { value: 20000, unit: 'pound' },
        height: { value: 7.5, unit: 'meter' },
        length: { value: 7.5, unit: 'meter' },
        axles: 4,
        emissionClass: 'euro_5',
      },
      departure_time: '2021-01-15T13:46:17',
      fuelOptions: {
        fuelCost: { value: 1.305, units: 'USD/gallon', currency: 'USD', fuelUnit: 'gallon' },
        fuelEfficiency: { city: 28.57, hwy: 22.4, units: 'mpg' },
      },
      units: { currency: 'USD' },
    };
    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      };
      
   
    try {
      const response = await axios.post(apiEndpoint, requestData, { headers});
         console.log(response)
      return response.data;
    } catch (error) {
      console.error('Error making API call:', error.message);
     
    }
  };
  

  
  
  


