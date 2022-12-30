// import './Search.css'
import React from 'react'
import { useLocation} from "react-router-dom";
import { useFetch } from '../Hooks/useFetch' 
import WritingTools from './WritingTools';
import data from '../Data/db.json'

const Search = () => {
  const queryString=useLocation().search
  const queryParams= new URLSearchParams(queryString)
  const query=queryParams.get('q')
  const url='http://localhost:3000/Information?q='+query
  const{apidata, isPending,message,error,postData}=useFetch(url)
  console.log(apidata)
  return (
    <div>
      <h2 className='page-title'>Recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
   {isPending && <p className='loading'>Loading...</p>}
   {apidata && <WritingTools recipes={apidata}/>}
    </div>
  )
}

export default Search