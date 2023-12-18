import React from 'react'
import Autocomplate from './Autocomplate'
import { DefaultSlider } from './DefaultSlider'

const Form = () => {
  return (
    <div className='items-center flex md:flex-row max-sm:flex-col lg:flex-row justify-center m-2'>
         <Autocomplate/>
         <div>
            <DefaultSlider/>
         </div>
      
    
     </div>
  )
}

export default Form