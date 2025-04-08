
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainNavigation from "@/components/MainNavigation";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Página no encontrada</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90" size="lg">
          <Link to="/">Volver al inicio</Link>
        </Button>
      </main>
    </div>
  );
};

export default NotFound;
