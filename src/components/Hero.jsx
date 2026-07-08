import React from 'react';

function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-stone-50 to-white">
      {/* Ornamen Abstrak Latar Belakang */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-stone-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold tracking-wider 
        mb-6 border border-teal-100">
          ALGORITMA REKOMENDASI KULINER
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-tight mb-6">
          Kombinasi Menu <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-500 italic">Sesuai Selera Anda</span>
        </h1>
        <p className="text-lg text-stone-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Sistem cerdas yang menganalisis profil rasa dan batasan finansial Anda untuk merakit paket menu 
          full course dari berbagai pilihan kuliner di wilayah Kalisari.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#konsultasi" className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-full 
          font-medium transition duration-300 shadow-md shadow-teal-900/10">
            Mulai Konsultasi →
          </a>
          <a href="#cara-kerja" className="bg-white hover:bg-stone-50 text-stone-700 border 
          border-stone-200 px-8 py-4 rounded-full font-medium transition duration-300 shadow-sm">
            Pelajari Sistem
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;