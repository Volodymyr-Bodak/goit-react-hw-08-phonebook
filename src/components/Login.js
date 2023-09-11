import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginization } from 'redux/Authorization/operations';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    
    if (email && password) {
      const loginData = { email, password };
      dispatch(loginization(loginData));
    } else {
      console.error('Please fill in all fields.');
    }
  };

  return (
    <section>
      <div>
        <h2>Login</h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Log in</button>
        <p>
          Or <Link to="/register">register now</Link>
        </p>
      </div>
    </section>
  );
}
