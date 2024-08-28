
import './App.css';
import LoginForm from './Components/LoginForm'; // Import your LoginForm component
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RegistrationForm from './Components/RegistrationForm';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center">
        
        <div className="text-center">
        <h1 className="text-2xl font-bold text-text mb-6 text-center">
          Compound Connect
        </h1>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;