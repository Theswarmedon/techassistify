
import React from 'react';
import MainNavigation from '@/components/MainNavigation';

const Productos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-center">Nuestros Productos</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Descubre nuestras soluciones de formación impulsadas por IA
          </p>
          
          {/* Product content will go here */}
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Esta página está en construcción. Aquí encontrarás información sobre nuestros productos y servicios.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Productos;
