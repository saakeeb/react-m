import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbars from '../Navbar/Navbars';
import './Layouts.css';

const Layouts = () => {
  return (
    <div className="layouts">
      <Navbars />
      <Outlet />
      <div class="bg-area" >
        <ul class="circles">
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