
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { ArrowLeft, CreditCard, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const Checkout = () => {
  // Simple form submission simulation
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Compra realizada!",
      description: "Gracias por tu compra. Recibirás un correo electrónico con los detalles.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary mb-8 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al inicio</span>
          </Link>
          
          <h1 className="text-3xl font-bold mb-3">Finalizar Compra</h1>
          <p className="text-gray-600 mb-8">Estás a un paso de transformar tu empresa con IA</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Información de Pago</h2>
                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre Completo</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-2 border rounded-md"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Correo Electrónico</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-2 border rounded-md"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="card" className="block text-sm font-medium mb-1">Número de Tarjeta</label>
                      <div className="flex items-center border rounded-md overflow-hidden">
                        <input
                          type="text"
                          id="card"
                          className="w-full p-2 border-none"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                        <div className="p-2">
                          <CreditCard className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium mb-1">Fecha de Expiración</label>
                        <input
                          type="text"
                          id="expiry"
                          className="w-full p-2 border rounded-md"
                          placeholder="MM/AA"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium mb-1">CVC</label>
                        <input
                          type="text"
                          id="cvc"
                          className="w-full p-2 border rounded-md"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button type="submit" className="w-full bg-primary">
                        Completar Pedido
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-2">
                      <Shield className="h-4 w-4" />
                      <span>Pago seguro con encriptación SSL</span>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Resumen de Compra</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Plan Profesional</span>
                      <span className="font-medium">€499</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Impuestos</span>
                      <span className="font-medium">€104,79</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>€603,79</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 pt-2">
                      Al completar tu compra, aceptas nuestros términos y condiciones y política de privacidad.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
