import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
