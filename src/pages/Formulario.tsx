
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Formulario = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formulario enviado",
      description: "Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.",
    });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Contacto</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Nombre completo</label>
              <Input id="name" placeholder="Introduce tu nombre" required />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Correo electrónico</label>
              <Input id="email" type="email" placeholder="tu@email.com" required />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">Empresa</label>
              <Input id="company" placeholder="Nombre de tu empresa" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
              <Textarea 
                id="message" 
                placeholder="¿En qué podemos ayudarte?" 
                className="min-h-[150px]"
                required
              />
            </div>
            
            <Button type="submit" className="w-full">Enviar mensaje</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Formulario;
