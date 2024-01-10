import React from 'react'
import './features.css'
import { com1, com3,com2,  } from './import.js'

const Features = () => {
  return (
    <div className='gpt3__features section__padding'>
       <div className='features__content'>
        <h1 className="features__text">
         My Projects
        </h1>
        <p>The layouts of the websites I have created for desktop and mobile phones.</p>
       </div>
      <div className="features_container">
      <div className='gtp3__features-image'>
        <div>
        <img src={com1} alt="com1" />
        </div>
        <div>
        <img src={com3} alt="com3" />
      </div>
      <div>
        <img src={com2} alt="com2" />
      </div>
     
      </div>
      </div>
    </div>
  )
}

export default Features
