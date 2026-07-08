import React from 'react';

function CaraKerja() {
  const steps = [
    { num: '01', title: 'Input Preferensi', desc: 'Tentukan jenis rasa, pilihan karbohidrat, serta protein yang sedang Anda inginkan pada antarmuka kami.' },
    { num: '02', title: 'Pemrosesan TF-IDF', desc: 'Sistem mengekstraksi kata kunci preferensi Anda dan mencocokkannya dengan dataset menu menggunakan matriks algoritma.' },
    { num: '03', title: 'Evaluasi & Filtering', desc: 'Algoritma Cosine Similarity mengukur akurasi dan menyaring paket yang sesuai dengan batas maksimal budget Anda.' },
  ];

  return (
    <section id="cara-kerja" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">Arsitektur Pemrosesan Data</h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto rounded"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-8 border border-stone-100 rounded-2xl relative shadow-sm hover:shadow-md transition duration-300 group">
              <span className="text-6xl font-serif font-bold text-stone-100 absolute top-4 right-6 group-hover:text-teal-50 transition duration-300">{step.num}</span>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-stone-800 mb-3 mt-4">{step.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaraKerja;