
import { Slider } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AmenitiesContext } from "../../../Context/AmenitiesContext";
export function DefaultSlider() {
     const {searchRange ,setSearchRange}= useContext(AmenitiesContext)
    const [inputvalue , setinputvalue ] = useState(10)
    const  handleChange=(e)=>{  
        setinputvalue(e.target.value)
        setSearchRange(e.target.value)
    }
  return (
    <div className="flex w-96 flex-col gap-8">
      
      <div class="relative mb-6">
      <p> Explore within  {inputvalue} km radius </p>  
    <label for="labels-range-input" class="sr-only">Labels range</label>
    <input id="labels-range-input" type="range" onChange={(e)=>handleChange(e)} value={inputvalue} min="1" max="150" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min (1 Km)</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">10 Km</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">100 KM</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max (150 Km)</span>
</div>
      
    </div>
  );
}