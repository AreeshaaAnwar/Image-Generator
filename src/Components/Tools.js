import React from 'react'
import './Tools.css'
import Rectangle from '../Image/Rectangle 2697.png'
import SearchBar from './SearchBar'
import WritingTools from './WritingTools'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


// import { useFetch } from '../Hooks/useFetch' 

const Tools = () => {

  const navigate=useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate('/');
   }
  return (
    <div>
    <div className="topnav" id="myTopnav">
 <img src={Rectangle} alt='Rectangle'  className="active" style={{padding:'10px'}}></img>
 <SearchBar/>
 
   {localStorage.getItem("accessToken")?<button onClick={logout} className='login'  >LOGOUT</button> :<button className='login' ><Link to="/Login" style={{color:'black'}}>Login</Link></button>
   }
  </div>
  <div className='bo'>
<span>AI Writing Tools</span>
  {/* {error && <p className='error'>{error}</p>}
   {isPending && <p className='loading'>Loading...</p>}
   {
    apidata && <WritingTools data={apidata}/>} */}
<WritingTools/>
  </div>
  </div>
  
  )
}

export default Tools