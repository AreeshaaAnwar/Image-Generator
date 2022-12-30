import { useState,useEffect } from 'react'
import { useFetch } from '../Hooks/useFetch'  
import { useNavigate ,Link} from 'react-router-dom'
import React from 'react'
import './SignUp.css'
import Rectangle from '../Image/Rectangle 2697.png'

  export default function Signup() {
  const [email,setemail]=useState('')

  const[password,setpassword]=useState('')

  const[name,setName]=useState('')

  const navigate=useNavigate()

  const{apidata, isPending,error,postData}=useFetch

  ('https://auth-system-production.up.railway.app/v1/api/auth/signup','POST');
  const handlesubmit =(e)=>{

  e.preventDefault()

  postData({email,name,password});
  

  }
  useEffect(() => {

    if(apidata){

       if(apidata.success){

        localStorage.setItem("accessToken",apidata.data.accessToken);
        
        navigate('/tools')

      }}

  }, [apidata,navigate])

  return (

  <div className='flex-container'>
<div  className='flex-item-left'>
<div className='cen'>
<div className='center'>
<img src={Rectangle} alt='Rectangle'  className="active" style={{padding:'10px'}}></img>
<h5>Continue to AI</h5>
</div>
  <form onSubmit={handlesubmit}  >

    

    <label>

      <span >Name:</span>

      <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>

    </label>

    <label>

      <span >Email:</span>

      <input type="email" onChange={(e)=>setemail(e.target.value)} value={email}/>

    </label>

    <label>

      <span >Password:</span>

      <input type="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>

    </label>

    {/* <button className='btn'>Signup</button> */}

    {!isPending && <button className='btn'>Signup</button>}

     {isPending && <button className='btn'disabled>loading</button>}

     {error && <p>{error}</p>}

  </form>
  <p>already have an account?<Link to="/Login">Login</Link></p>
  </div>

</div>
<div className='flex-item-right' >
<h5 style={{display:'flex',justufyContent:'center'}}> Signup over 70,000 leading brands<br></br>agencies and content writer </h5>
  
</div>
  </div>

  )

}