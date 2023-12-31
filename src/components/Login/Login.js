import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginization } from 'redux/Authorization/operations';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import { setLoggedIn } from 'redux/Authorization/aSlice';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();


  const handleLogin = async () => {
    try {
      const response = await dispatch(loginization({ email, password }));

      if (response) {
        dispatch(setLoggedIn(true)); // Dispatch action to set isLoggedIn to true
        console.log('Login successful');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <section className={styles.logincontainer}>
      <input
        type="text"
        placeholder="Email"
        className={styles.logininput}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.logininput}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className={styles.loginbutton}>
        Login
      </button>
      <p className={styles.registerlink}>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </section>
  );
}
