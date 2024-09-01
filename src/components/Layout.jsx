// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';

const Layout = () => {
  return (
    <>
      <main>
        <Outlet /> {/* This renders the current route's component */}
      </main>
      <WhatsAppButton />
    </>
  );
};

export default Layout;
