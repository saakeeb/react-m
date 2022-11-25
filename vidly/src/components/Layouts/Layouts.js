import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbars from '../Navbar/Navbars';
import './Layouts.css';

const Layouts = () => {
  return (
    <div className="layouts">
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