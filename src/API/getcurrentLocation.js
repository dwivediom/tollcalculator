export function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      // Check if Geolocation is supported by the browser
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser'));
      } else {
        // Use the Geolocation API to get the current position
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          }
        );
      }
    });
  }
  
  // Example usage:
  getCurrentLocation()
    .then((location) => {
      console.log('Current Location:', location);
    })
    .catch((error) => {
      console.error('Error getting current location:', error.message);
    });