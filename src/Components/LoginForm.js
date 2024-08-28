// src/components/LoginForm.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="border-4 border-sky-500/100 shadow-xl bg-background p-6 rounded-lg max-w-md mx-auto"
      >
      
        <div className="mb-4">
          <label className="block text-text mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-sky-500/100 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-text mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-sky-500/100 rounded"
          />
        </div>
        <button
          type="submit"
          className="ease-in-out duration-300 bg-text text-white p-2 w-full rounded hover:bg-opacity-90"
        >
          Login
        </button>
      </form>
      <div className="text-center mt-4">
        <Link to="/register" className="text-sky-200 underline hover:text-opacity-80">
          Don't have an account? Register here
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
