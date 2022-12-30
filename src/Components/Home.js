import React from 'react'
import {Link } from 'react-router-dom'
import './home.css'
import Rectangle from '../Image/Rectangle 2697.png'

const Home = () => {
  return (
    <div className='nav'>
    
     <img src={Rectangle} alt='Rectangle'></img>
    <Link className='tools' to='/tools'>tools</Link><br></br>
    <div className='s'>
    <button className='but1' ><Link to="/Signup" className='signup'>signup</Link></button>
    <button className='but2'> <Link to="/Login" className='Login'>Login </Link></button>
    {/* <Link to="/Signup" className='signup'>signup</Link> */}
    {/* <Link to="/Login" className='Login'>Login </Link><br></br> */}
    </div>
  {/* <Link to="/Signup">signup</Link><br></br>
  <Link to="/Login">Login </Link><br></br> */}
    </div>
  )
}

export default Home