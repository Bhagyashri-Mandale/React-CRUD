
import React from 'react';
import './App.css';
//import FormSignin from './Component/FormSignin';
import Home from './Component/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import FormSignin from './Component/FormSignin';
import Registration from './Component/Registration';
import View from './Component/View';
function App() {
  return (
    
    <>
     
    {/* <Home/> */}
   <BrowserRouter>
   <Home/>
  
   <Routes>
    <Route path='/FormSignin' element={<FormSignin/>} />
    <Route path='/Registration' element={<Registration/>} />
    <Route path='/View' element={<View/>} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App;
