import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Outlet /> {/* This is where nested components/pages will render */}
      </div>
    </div>
  );
};

export default Layout;
