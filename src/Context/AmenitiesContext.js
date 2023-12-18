import React, { useState } from "react";

export const AmenitiesContext = React.createContext();

export const AmenitiesProvider = props => {
 const [amenitiesData, setAmenitiesData ] = useState(null)
 const [searchRange ,setSearchRange ] = useState(null)

//   const getUsers = async () => {
//     return await fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(result => result)
//       .catch(error => console.log("error happened", error));
//   };

  return (
    <AmenitiesContext.Provider value={{ amenitiesData, setAmenitiesData ,searchRange ,setSearchRange}}>
      {props.children}
    </AmenitiesContext.Provider>
  );
};