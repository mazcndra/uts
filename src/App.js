import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Products from './components/Products';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { productsData } from './components/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Products products={productsData} /> {/* Mengirim data produk sebagai props */}
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
