// import React from 'react'

// const Profile = () => {
//   return (
//     <div>Profile</div>
//   )
// }


import { useState,useEffect } from 'react'
import { useFetch } from '../Hooks/useFetch'  
import { useNavigate ,Link} from 'react-router-dom'
import React from 'react'
import './SignUp.css'
import Rectangle from '../Image/Rectangle 2697.png'
import Tools from './Tools'

  export default function Profile() {
    const token = localStorage.getItem("accessToken");

  const{apidata, isPending,error,postData}=useFetch

  ('https://auth-system-production.up.railway.app/v1/api/user/profile','GET',token);

 
 console.log(apidata)

  return (

  <div >
<Tools data={apidata}/>
  </div>

  )

}