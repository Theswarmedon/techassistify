
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NuestraMision = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <Button 
            variant="outline" 
            className="mb-6" 
            asChild
          >
            <Link to="/quienes-somos" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver a Quiénes Somos
            </Link>
          </Button>
          
          <h1 className="text-4xl font-bold mb-6 text-center">Nuestra Misión</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Democratizando el acceso a la IA</h2>
            <p className="mb-6 text-lg">
              En el corazón de nuestra empresa está la firme creencia de que la inteligencia artificial debe ser 
              accesible para todas las organizaciones, independientemente de su tamaño, sector o recursos. 
              Esta convicción nos impulsa cada día a crear soluciones que eliminen las barreras de entrada a 
              estas poderosas tecnologías.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Formación personalizada e inclusiva</h2>
            <p className="mb-6 text-lg">
              Nuestra misión va más allá de simplemente ofrecer herramientas tecnológicas. Nos comprometemos 
              a proporcionar formación personalizada que permita a cada empresa entender, implementar y 
              maximizar el valor de la IA dentro de su contexto único. Creemos que el verdadero potencial 
              de la IA se desbloquea cuando se adapta a las necesidades específicas de cada organización.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Ética y responsabilidad</h2>
            <p className="mb-6 text-lg">
              Nos guía un fuerte compromiso con el uso ético y responsable de la IA. Promovemos prácticas 
              que respetan la privacidad, garantizan la transparencia y evitan sesgos. Creemos que el futuro 
              de la IA debe construirse sobre una base de confianza y responsabilidad compartida.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Impacto medible</h2>
            <p className="text-lg">
              Nos esforzamos por generar un impacto tangible y medible en cada una de las organizaciones con 
              las que trabajamos. Nuestro éxito se mide por la capacidad de nuestros clientes para transformar 
              sus operaciones, mejorar su toma de decisiones y alcanzar nuevos niveles de competitividad 
              gracias a las soluciones de IA que implementamos juntos.
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-xl font-bold mb-4 text-center">¿Quieres saber más sobre cómo podemos ayudarte?</h3>
            <div className="flex justify-center">
              <Button asChild>
                <Link to="/formulario">Contáctanos hoy</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NuestraMision;
