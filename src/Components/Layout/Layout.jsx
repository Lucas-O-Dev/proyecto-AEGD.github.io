// Components/Layout/Layout.js
import React from 'react';
import ResponsiveAppBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;