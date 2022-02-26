import React from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Model1 from './Assets/models.webp'
import Model2 from './Assets/training-5.webp'
import {datas} from './fake'
import './Styles/Styles.css';

function App() {
  return (
   <>
 <Navbar/>
 <Home/>
 <Layout layout = 'first' img = {Model1}  data = {datas} />  
 <Layout layout = 'second' img = { Model2}  data = {datas} />  

   </>
    
  )
}

export default App
