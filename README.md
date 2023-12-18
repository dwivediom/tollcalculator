  
**Toll Calculator React App** 
This React application helps users calculate toll details, find nearby locations, and visualize routes on a map. 
**Live Demo Explore the live demo of the application** [here](https://tollcalculator-liart.vercel.app/).


**Getting Started**

### Clone the Repository

    git clone https://github.com/dwivediom/tollcalculator.git

    cd tollcalculator` 

### Install Dependencies



    npm install`

 

### Run the Application



    `npm start`

 

This will start the development server, and you can view the application in your browser at [http://localhost:3000](http://localhost:3000/).

## Application Structure

The project structure is organized as follows:

plaintextCopy code

    `tollcalculator
    │
    ├── src
    │   ├── API
    │   ├── Assets
    │   ├── components
    │   ├── Context
    │   └── Utils
    ├── package.json
    ├── README.md
    └── ... (other configuration files)` 

-   **API**: Contains files for interacting with various APIs. For example, `Osrm.js` can be found [here](https://github.com/dwivediom/tollcalculator/blob/main/src/API/Osrm.js).
-   **Assets**: Holds static assets, such as icons.
-   **components**: Contains React components, including the main `Map` component. The `Map.jsx` file can be found [here](https://github.com/dwivediom/tollcalculator/blob/main/src/components/Map/Map.jsx).
-   **Context**: Includes React context for managing state. The `AmenitiesContext.js` file can be found [here](https://github.com/dwivediom/tollcalculator/blob/main/src/Context/AmenitiesContext.js).
-   **Utils**: Contains utility functions. The `lefletIcons.js` file can be found [here](https://github.com/dwivediom/tollcalculator/blob/main/src/Utils/lefletIcons.js).
- #### `src/API`

-   **Osrm.js:** Handles interactions with the OSRM API for route calculation. It contains the `fetchRoute` function.
-   **Overpass.js:** Manages interactions with the Overpass API for fetching nearby locations. It includes the `fetchNearbyLocations` function.
-   **getcurrentLocation.js:** Provides a utility function to obtain the current geolocation using the browser's Geolocation API. The `getCurrentLocation` function is defined here.
-   **tollCalculator.js:** Interacts with the TollGuru API to fetch toll details. It includes functions like `getTollDetails` and `getTollLocationsPolyline`.

#### `src/Assets/Icons`

-   **Icons:** A directory containing static icons used in the project, such as location pins, my location icon, and toll icons.

#### `src/components/Map`

-   **map.css:** Stylesheet specific to the Map component.
-   **Map.jsx:** The main React component responsible for rendering the interactive map. It utilizes various functions from the API directory, handles geolocation, and displays markers and routes.

#### `src/Context`

-   **AmenitiesContext.js:** Defines a React context to manage state related to amenities. It is likely used to share amenities data across components.

#### `src/Utils`

-   **lefletIcons.js:** Contains utility functions for creating Leaflet map icons. It defines icon variables such as `locationPinIcon`, `mylocationIcon`, and `tollIcon`.

#### `package.json`

-   Configuration file specifying project dependencies and scripts.

#### `README.md`

-   Project documentation in Markdown format, explaining how to clone, install dependencies, run the application, project structure, and other details.

## Packages Used




### APIs Description:

-   **[OSRM API (OpenStreetMap Routing Machine)](http://project-osrm.org/docs/v5.24.0/api/#general-options):**
    
    -   **Description:** OSRM is a routing service that provides efficient routes between locations. It's widely used for calculating routes based on OpenStreetMap data.
-   **[Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API):**
    
    -   **Description:** The Overpass API allows querying and extracting specific data from the OpenStreetMap database. It's commonly used to retrieve information about nearby locations based on certain criteria.
-   **[TollGuru API](https://tollguru.com/developers/docs):**
    
    -   **Description:** TollGuru is an API that provides toll-related information, including toll costs, for various routes. It helps in calculating toll details for specific journeys.

### Packages Description:

-   **[@headlessui/react](https://headlessui.dev/):**
    
    -   **Description:** Headless UI provides accessible and customizable UI components for React. It's designed to be flexible and unstyled, allowing developers to easily adapt components to their design needs.
-   **[@heroicons/react](https://heroicons.com/):**
    
    -   **Description:** Heroicons is a set of free, MIT-licensed high-quality SVG icons for you to use in your web projects. The `@heroicons/react` package makes it easy to use these icons in React applications.
-   **[@material-tailwind/react](https://material-tailwind.com/docs/getting-started/react-introduction):**
    
    -   **Description:** Material Tailwind is a UI kit that combines the design principles of Material Design with the utility-first approach of Tailwind CSS. The React package brings these components into React applications.
-   **[axios](https://axios-http.com/docs/intro):**
    
    -   **Description:** Axios is a promise-based HTTP client for the browser and Node.js. It simplifies making HTTP requests and handling responses.
-   **[leaflet](https://leafletjs.com/reference-1.7.1.html):**
    
    -   **Description:** Leaflet is an open-source JavaScript library for interactive maps. It's lightweight, easy to use, and customizable, making it a popular choice for embedding maps in web applications.
-   **[react](https://reactjs.org/docs/getting-started.html):**
    
    -   **Description:** React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of an application efficiently.
-   **[react-dom](https://reactjs.org/docs/react-dom.html):**
    
    -   **Description:** React DOM is the entry point for working with the DOM (Document Object Model) in React applications. It provides methods for rendering React components to the DOM.
-   **[react-leaflet](https://react-leaflet.js.org/docs/start):**
    
    -   **Description:** React-Leaflet is a React wrapper for Leaflet, making it easy to integrate Leaflet maps into React applications with the power of React components.
-   **[react-scripts](https://create-react-app.dev/docs/getting-started):**
    
    -   **Description:** React Scripts is a set of scripts and configuration used by Create React App. It simplifies the development process by providing a pre-configured setup for building React applications.
-   **[tw-elements](https://tailwindelements.com/docs/introduction):**
    
    -   **Description:** Tailwind Elements is a collection of UI elements and components built with Tailwind CSS. It provides ready-to-use components that align with the Tailwind CSS design philosophy.
-   **[tw-elements-react](https://tailwindelements.com/docs/introduction/react-introduction):**
    
    -   **Description:** Tailwind Elements React is the React-specific version of Tailwind Elements. It brings Tailwind-styled React components to your React applications.
-   **[web-vitals](https://web.dev/vitals/):**
    
    -   **Description:** Web Vitals is an initiative by Google to provide unified guidance for quality signals that are essential for delivering a good user experience on the web. The `web-vitals` package helps measure and report these web vitals.

## APIs Used



- [OSRM API](https://router.project-osrm.org/) for route calculation. For example, `Osrm.js` can be found [here](https://github.com/dwivediom/tollcalculator/blob/main/src/API/Osrm.js).
- [Overpass API](https://overpass-api.de/) for fetching nearby locations. For example, `Overpass.js` can be found [here](https://github.com/dwivediom/tollcalculator/blob/main/src/API/Overpass.js).
- [TollGuru API](https://tollguru.com/) for toll details. For example, `tollCalculator.js` can be found [here](https://github.com/dwivediom/tollcalculator/blob/main/src/API/tollCalculator.js).

## Usage

 1. Open your browser and navigate to [http://localhost:3000](http://localhost:3000). 
 2.  Explore the application features, including finding nearby locations and calculating toll details.``

## Contributing



If you would like to contribute to the project, feel free to submit issues or pull requests on [GitHub](https://github.com/dwivediom/tollcalculator).`

 

## License



This project is licensed under the [MIT License](LICENSE).`

