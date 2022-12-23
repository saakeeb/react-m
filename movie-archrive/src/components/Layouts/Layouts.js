import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Navbars from '../Navbar/Navbars';
import './Layouts.css';

const Layouts = () => {
  return (
    <div className="layouts">
      <ToastContainer autoClose={2000} />
      <div className="main-layouts">
        <Navbars />
        <Outlet />
      </div>
      <div className="bg-area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
    </div>
  );
};

export default Layouts;