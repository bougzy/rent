// src/App.js
import React, { useState } from 'react';
import {  Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import LandlordLogin from './components/LandlordLogin';
import TenantLogin from './components/TenantLogin';
import TenantRegistration from './components/TenantRegistration';
import TenantDashboard from './components/TenantDashboard';
import LandlordDashboard from './components/LandlordDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import "./App.css"

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [tenant, setTenant] = useState(null);

  return (
    <>
    <Navbar />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        

        {/* Landlord Routes */}
        <Route path="/landlord/login" element={!isAdmin ? <LandlordLogin setIsAdmin={setIsAdmin} /> : <Navigate to="/landlord/dashboard" />} />
        <Route path="/landlord/dashboard" element={isAdmin ? <LandlordDashboard /> : <Navigate to="/landlord/login" />} />

        {/* Tenant Routes */}
        <Route path="/tenant/login" element={!tenant ? <TenantLogin setTenant={setTenant} /> : <Navigate to="/tenant/dashboard" />} />
        <Route path="/tenant/registration" element={!tenant ? <TenantRegistration /> : <Navigate to="/tenant/dashboard" />} />
        <Route path="/tenant/dashboard" element={tenant ? <TenantDashboard tenant={tenant} /> : <Navigate to="/tenant/login" />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
