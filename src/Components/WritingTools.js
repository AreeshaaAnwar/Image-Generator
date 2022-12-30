import React from 'react'
import data from '../Data/db.json'
import './WritingTools.css'
import { Link } from 'react-router-dom'

// import AI from '../tool-images/AI-Long-form.svg'
const WritingTools = () => {
  if(data.Information===0){
    return <div className='error'>No recipes to load...</div>
  }
  return (
    <div className='cards'>
    {
      data.Information.map((da,index)=>(
          <div  key={index}>
          {/* <image src={da.img} alt='aa'></image> */}
          <div className='card'>
          <img src={da.img} alt="tool"/>
          <div className='text'>{da.name}</div>
          <div className='subtitle'>{da.subtitle}</div>
          <div className='a'>
          <button><Link to={`/tools/${da.route}`} className='status' >{da.status}</Link></button>
         </div>
          
          </div>

          </div>
        ))
    }
    
    
    </div>
  )
}

export default WritingTools