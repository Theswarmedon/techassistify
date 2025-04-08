
import React from 'react';
import MainNavigation from '@/components/MainNavigation';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          Esta página está en construcción. Aquí encontrarás artículos y noticias sobre IA y formación empresarial.
        </p>
      </main>
    </div>
  );
};

export default Blog;
