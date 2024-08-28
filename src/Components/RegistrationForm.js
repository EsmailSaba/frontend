// src/components/RegistrationForm.js

import React, { useState } from 'react';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8081/api-user/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, secondName, email }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        // Handle successful login (e.g., redirect, store token)
      } else {
        console.error('Login failed:', response.statusText);
        // Handle login failure
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-4 border-sky-500/100 shadow-xl bg-background p-6 rounded-lg max-w-md mx-auto"
    >
      <div className="mb-4">
        <label className="block text-text mb-2">First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className=" required:border-red-500 w-full p-2 border border-sky-500/100 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-text mb-2">Second Name:</label>
        <input
          type="text"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
          className="required:border-red-500 w-full p-2 border border-sky-500/100 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-text mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="invalid:border-red-500 required:border-red-500 w-full p-2 border border-sky-500/100 rounded "
        />
      </div>
      <button
        type="submit"
        className="ease-in-out duration-300 bg-text text-white p-2 w-full rounded hover:bg-opacity-90"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
