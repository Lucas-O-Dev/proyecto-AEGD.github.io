// Components/Layout/Layout.js
import React from 'react';
import ResponsiveAppBar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;