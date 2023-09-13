import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Authorization/operations';
import Navigation from 'components/Navigation';
import styles from './RegistrationComponent.module.css';

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
    <div className={styles.registrationcontainer}>
      <Navigation />
      <h2>Registration</h2>
      <form className={styles.registrationform} onSubmit={handleSubmit}>
        <div>
          <label className={styles.registrationlabel} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className={styles.registrationinput}
          />
        </div>
        <div>
          <label className={styles.registrationlabel} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={styles.registrationinput}
          />
        </div>
        <div>
          <label className={styles.registrationlabel} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className={styles.registrationinput}
          />
        </div>
        <button type="submit" className={styles.registrationbutton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationComponent;
