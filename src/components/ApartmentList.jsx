import React, { useEffect, useState } from 'react';
import axios from '../services/apiService';

const ApartmentList = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get('/apartments');
        setApartments(response.data);
      } catch (error) {
        console.error('Error fetching apartments', error);
      }
    };

    fetchApartments();
  }, []);

  return (
    <div>
      <h3>Available Apartments</h3>
      <ul>
        {apartments.map((apartment) => (
          <li key={apartment._id}>{apartment.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApartmentList;
