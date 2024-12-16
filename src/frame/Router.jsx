import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Product from '../pages/Product'
import ContactPage from '../component/ContactPage';
import LoginPage from '../pages/LoginPage';
import Blog from '../component/Blog';
import Portfolio from '../pages/Portfolio';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product' element={<Product />} />  Changed to lowercase
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={<LoginPage />} />  
          <Route path='/portfolio' element={<Portfolio />} />  

        <Route path='/blog' element={<Blog/>} />  
      </Routes>
    </BrowserRouter>
  );
}
