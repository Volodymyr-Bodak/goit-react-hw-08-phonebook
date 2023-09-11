import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        
        </ul>
      </nav>
      <h2>Welcome to the Home Page</h2>
      <p>This is the home page of your application.</p>
    
    </div>
  );
};

export default Home;
