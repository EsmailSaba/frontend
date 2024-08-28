// src/components/RegistrationForm.js

import React, { useState } from 'react';

function RegistrationForm() {
  const [FirstName, setFirstName] = useState('');
  const [SecondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`First Name: ${FirstName},'Second Name: ${SecondName }, Email: ${email}, Password: ${password}`);
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
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
          className=" required:border-red-500 w-full p-2 border border-sky-500/100 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-text mb-2">Second Name:</label>
        <input
          type="text"
          value={SecondName}
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
      <div className="mb-4">
        <label className="block text-text mb-2">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="required:border-red-500 w-full p-2 border border-sky-500/100 rounded"
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
