import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/globals.css';

const Background = () => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: -1,
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgrounds/bridal-bg.svg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(0.85)',
    }}
  />
);

function App() {
  return (
    <Router basename="/Tasleem-Beauty-Parlour">
      <div className="w-full min-h-screen flex flex-col">
        <Background />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking/:serviceId" element={<Booking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
