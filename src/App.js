
import './App.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Home from './Components/Home'
import Tools from './Components/Tools';
import Search from './Components/Search';
import ImageGenerator from './Components/ImageGenerator';
import CommingSoon from './Components/CommingSoon';
import data from '../src/Data/db.json'



function App() {
  return (
    <div className="App">
    <BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/tools" element={<Tools />} />
   <Route path="/SignUp" element={<SignUp />} />
   <Route path="/Login" element={<Login />} />
   <Route path="/Search" element={<Search/>} />
   {
    data.Information.map((Data)=>(
      <Route key={Data.id} path={`/tools/${Data.route}`} element={(Data.status==="Coming Soon")?<CommingSoon/>:
      <ImageGenerator/>}>
      </Route>

    ))
   }

   
    </Routes>       
</BrowserRouter> 
    </div>
    
  );
}

export default App;
