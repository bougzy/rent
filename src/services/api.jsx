// import axios from 'axios';

// const API_URL = 'http://localhost:5000'; // Your backend URL

// // API calls
// export const landlordLogin = (data) => axios.post(`${API_URL}/landlord/login`, data);
// export const tenantRegister = (data) => axios.post(`${API_URL}/tenant/register`, data);
// export const tenantLogin = (data) => axios.post(`${API_URL}/tenant/login`, data);
// export const updateTenant = (data) => axios.put(`${API_URL}/tenant/update`, data);
// export const processPayment = (data) => axios.post(`${API_URL}/tenant/payment`, data);
// export const getApartments = () => axios.get(`${API_URL}/landlord/apartments`);
// export const updateRent = (data) => axios.put(`${API_URL}/landlord/update-rent`, data);
// export const sendMessage = (data) => axios.post(`${API_URL}/messaging`, data);
// export const getMessages = (user) => axios.get(`${API_URL}/messages`, { params: { user } });



// import axios from 'axios';

// const API_URL = 'http://localhost:5000'; // Your backend URL

// // API calls
// export const landlordLogin = (data) => axios.post(`${API_URL}/landlord/login`, data);
// export const tenantRegister = (data) => axios.post(`${API_URL}/tenant/register`, data);
// export const tenantLogin = (data) => axios.post(`${API_URL}/tenant/login`, data);
// export const updateTenant = (data) => axios.put(`${API_URL}/tenant/update`, data);
// export const processPayment = (data) => axios.post(`${API_URL}/tenant/payment`, data);
// export const getApartments = () => axios.get(`${API_URL}/landlord/apartments`);
// export const updateRent = (data) => axios.put(`${API_URL}/landlord/update-rent`, data);
// export const sendMessage = (data) => axios.post(`${API_URL}/messaging`, data);
// export const getMessages = (user) => axios.get(`${API_URL}/messages`, { params: { user } });
// export const getTenantDetails = (tenantID) => axios.get(`${API_URL}/landlord/tenant-details`, { params: { tenantID } });
// export const updateTenantRentStatus = (data) => axios.put(`${API_URL}/landlord/tenant/rent-status`, data);


// src/services/api.jsx
// import axios from 'axios';

// const API_URL = 'http://localhost:5000'; // Your backend URL

// // API calls
// export const landlordLogin = (data) => axios.post(`${API_URL}/landlord/login`, data);
// export const tenantRegister = (data) => axios.post(`${API_URL}/tenant/register`, data);
// export const tenantLogin = (data) => axios.post(`${API_URL}/tenant/login`, data);
// export const updateTenant = (data) => axios.put(`${API_URL}/tenant/update`, data);
// export const processPayment = (data) => axios.post(`${API_URL}/tenant/payment`, data);
// export const getApartments = () => axios.get(`${API_URL}/landlord/apartments`);
// export const updateRent = (data) => axios.put(`${API_URL}/landlord/update-rent`, data);
// export const sendMessage = (data) => axios.post(`${API_URL}/messaging`, data);
// export const getMessages = (user) => axios.get(`${API_URL}/messages`, { params: { user } });
// export const getTenantDetails = (tenantID) => axios.get(`${API_URL}/landlord/tenant-details`, { params: { tenantID } });
// export const updateTenantRentStatus = (data) => axios.put(`${API_URL}/landlord/tenant/rent-status`, data);



import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const landlordLogin = (data) => axios.post(`${API_URL}/landlord/login`, data);
export const tenantRegister = (data) => axios.post(`${API_URL}/tenant/register`, data);
export const tenantLogin = (data) => axios.post(`${API_URL}/tenant/login`, data);
export const updateTenant = (data) => axios.put(`${API_URL}/tenant/update`, data);
export const processPayment = (data) => axios.post(`${API_URL}/tenant/payment`, data);
export const getApartments = () => axios.get(`${API_URL}/landlord/apartments`);
export const updateRent = (data) => axios.put(`${API_URL}/landlord/update-rent`, data);
export const sendMessage = (data) => axios.post(`${API_URL}/messaging`, data);
export const getMessages = (user) => axios.get(`${API_URL}/messages`, { params: { user } });
export const getTenantDetails = (tenantID) => axios.get(`${API_URL}/landlord/tenant-details`, { params: { tenantID } });
export const updateTenantRentStatus = (data) => axios.put(`${API_URL}/landlord/tenant/rent-status`, data);
