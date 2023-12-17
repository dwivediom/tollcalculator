import axios from "axios"

const OSRM_API_URL = 'https://router.project-osrm.org/route/v1';

export const fetchRoute = async (start, end) => {
  try {
    const response = await axios.get(
      `${OSRM_API_URL}/driving/${start.lon},${start.lat};${end.lon},${end.lat}?overview=full&geometries=geojson`
    );
    console.log(response)
    return response.data;
  } catch (error) {
    throw new Error('Error fetching route from OSRM API');
  }
};