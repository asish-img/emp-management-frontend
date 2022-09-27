import logo from './logo.svg';

import Navbar from './Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Component/Dashboard';
import Trainees from './Component/Trainees';
import Intern from './Component/Intern';
import Job from './Component/Job';
import { useState } from 'react';
import Allemployee from './Component/Allemployee';
import Addemployee from './Component/Addemployee';


function App() {

  return (
    
        
       
     
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route exact path="/" element={<Navbar/>}/> 
      <Route  exact path ="/dashboard" element={<Dashboard />}/>
      <Route path ="/intern" element={<Intern/>}/>
      <Route path ="/job" element={<Job/>}/>
      <Route path ="/traine" element={<Trainees/>}/>
      <Route exact path = "/allemployee" element={<Allemployee/>}/>
      <Route exact path = "/addemployee" element={<Addemployee/>}/>
      <Route exact path = "/editemployee" element={<Addemployee/>}/>
      <Route exact path = "/editintern" element={<Addemployee/>}/>
      <Route exact path = "/edittrainee" element={<Addemployee/>}/>
      <Route exact path = "/editonjob" element={<Addemployee/>}/>
      
     </Routes>
     </BrowserRouter>
    
  );
}

export default App;
