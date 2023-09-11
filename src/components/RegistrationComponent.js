import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Authorization/operations';
import Navigation from './Navigation';

const RegistrationComponent = () => {
  const dispatch = useDispatch();

 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(formData));

   
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <Navigation/>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationComponent;
