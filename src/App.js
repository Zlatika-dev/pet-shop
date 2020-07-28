import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <div className="hello"></div>
    </div>
  );
}

export default App;
