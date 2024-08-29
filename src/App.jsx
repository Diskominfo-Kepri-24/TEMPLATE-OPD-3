import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sejarah from './pages/Sejarah';
import Visi from './pages/Visi';
import Instansi from './pages/Instansi';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/visi" element={<Visi />} /> 
          <Route path="/instansi" element={<Instansi />} /> 
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
