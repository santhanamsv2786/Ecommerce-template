import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './pagess/Mainpage';
import Home from './pagess/Home';
import Shop from './pagess/Shop';
import Blog from './pagess/Blog';
import Pages from './pagess/Pages';
import Contact from './pagess/Contact';
import Mainpg from './pagess/Mainpg';
import Navibar from './pagess/Navibar';
import Login from './pagess/Login';
// import productdes from './pagess/productdes';
import Productdes from './pagess/Productdes';
import Cartpage from './pagess/Cartpage';
import Footer from './pagess/Footer';
import Register from './pagess/Register';
import Tracking from './pagess/Tracking';


function App() {
  return (
    <BrowserRouter>
    <Navibar/> 
      <Routes>
        {/* <Route path='/' element={<Mainpg/>}/> */}
        <Route path='/' element={<Mainpage/>}/>
        <Route path='pd/:id' element={<Productdes/>} />
        <Route path='home' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='pages' element={<Pages/>}/>
        <Route path='cartpage' element={<Cartpage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='tracking' element={<Tracking/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
