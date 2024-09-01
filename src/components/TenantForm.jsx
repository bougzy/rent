import React, { useState } from 'react';
import axios from '../services/apiService';

const TenantForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/tenants/register', { name, email, password });
      alert('Registration successful!');
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Registration failed', error);
      alert('Registration failed, please try again.');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h3>Register as Tenant</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default TenantForm;
