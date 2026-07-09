import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-stone-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-serif text-stone-800 tracking-wide">Kalisari<span className="text-teal-700 font-bold">FOODS</span></h1>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <a href="#" className="text-stone-600 hover:text-teal-700 transition">Beranda</a>
          <a href="#cara-kerja" className="text-stone-600 hover:text-teal-700 transition">Cara Kerja</a>
          <a href="#konsultasi" className="text-stone-600 hover:text-teal-700 transition">Konsultasi Menu</a>
        </div>
        <button className="bg-stone-100 hover:bg-stone-200 text-stone-800 text-sm font-bold px-6 py-2.5 rounded-full transition duration-300 hidden md:block">
          MARI MAKAN
        </button>
      </div>
    </nav>
  );
}

export default Navbar;