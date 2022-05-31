import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/Home';
import Perros from './pages/perros/Perrospage';
import Error404 from './pages/error404/Error404';
import {
  BrowserRouter, 
  Navigate, 
  Route, 
  Routes
  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/perros' element={<Perros/>}></Route>
      <Route path='*' element={<Error404/>}></Route>
      <Route path='/home' element={<Navigate replace to={'/'}/>}></Route>   
    </Routes>
  </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
