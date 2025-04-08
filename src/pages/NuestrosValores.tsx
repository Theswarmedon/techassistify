
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Users, Lightbulb, Shield } from 'lucide-react';

const NuestrosValores = () => {
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
          
          <h1 className="text-4xl font-bold mb-6 text-center">Nuestros Valores</h1>
          
          <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            Los valores son el corazón de nuestra organización. Definen quiénes somos, cómo trabajamos y qué pueden 
            esperar de nosotros nuestros clientes, socios y colaboradores.
          </p>
          
          {/* Valor: Innovación */}
          <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-blue-600 text-white p-8 flex flex-col justify-center items-center">
                <Lightbulb size={64} className="mb-4" />
                <h2 className="text-3xl font-bold text-center">Innovación</h2>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Pensamos diferente</h3>
                <p className="mb-4 text-lg">
                  La innovación está en nuestro ADN. No nos conformamos con soluciones estándar o enfoques 
                  tradicionales. Buscamos constantemente nuevas perspectivas, metodologías y tecnologías que 
                  nos permitan ofrecer un valor excepcional.
                </p>
                <h4 className="font-bold mt-6 mb-2">Cómo lo aplicamos:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Invertimos el 20% de nuestro tiempo en investigación y desarrollo.</li>
                  <li>Fomentamos la experimentación y aprendemos de los fracasos.</li>
                  <li>Mantenemos colaboraciones activas con universidades y centros de investigación.</li>
                  <li>Organizamos hackathones internos para resolver desafíos de manera creativa.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Valor: Excelencia */}
          <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/3 bg-green-600 text-white p-8 flex flex-col justify-center items-center">
                <Target size={64} className="mb-4" />
                <h2 className="text-3xl font-bold text-center">Excelencia</h2>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Comprometidos con la calidad</h3>
                <p className="mb-4 text-lg">
                  Nos esforzamos por alcanzar los más altos estándares en todo lo que hacemos. Creemos que la 
                  excelencia no es un acto puntual sino un hábito que cultivamos día a día en cada interacción, 
                  cada proyecto y cada decisión.
                </p>
                <h4 className="font-bold mt-6 mb-2">Cómo lo aplicamos:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Implementamos rigurosos sistemas de control de calidad en todos nuestros procesos.</li>
                  <li>Medimos constantemente el impacto y los resultados de nuestras soluciones.</li>
                  <li>Invertimos en el desarrollo profesional continuo de nuestro equipo.</li>
                  <li>Nos sometemos a evaluaciones externas para validar la calidad de nuestros servicios.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Valor: Colaboración */}
          <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-purple-600 text-white p-8 flex flex-col justify-center items-center">
                <Users size={64} className="mb-4" />
                <h2 className="text-3xl font-bold text-center">Colaboración</h2>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Juntos llegamos más lejos</h3>
                <p className="mb-4 text-lg">
                  Creemos en el poder de la colaboración tanto interna como con nuestros clientes. Las mejores 
                  soluciones surgen cuando combinamos diferentes perspectivas, conocimientos y experiencias en un 
                  entorno de respeto mutuo y objetivos compartidos.
                </p>
                <h4 className="font-bold mt-6 mb-2">Cómo lo aplicamos:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Trabajamos en equipos multidisciplinares para cada proyecto.</li>
                  <li>Involucramos activamente a nuestros clientes en todo el proceso.</li>
                  <li>Practicamos la escucha activa y valoramos todas las contribuciones.</li>
                  <li>Compartimos conocimientos y mejores prácticas dentro y fuera de la organización.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Valor: Ética */}
          <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/3 bg-amber-600 text-white p-8 flex flex-col justify-center items-center">
                <Shield size={64} className="mb-4" />
                <h2 className="text-3xl font-bold text-center">Ética</h2>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-4 text-amber-600">Tecnología responsable</h3>
                <p className="mb-4 text-lg">
                  Reconocemos que la IA tiene un impacto profundo en la sociedad. Nos comprometemos a utilizarla y 
                  enseñarla de manera ética, responsable y transparente, siempre considerando sus implicaciones 
                  sociales más amplias.
                </p>
                <h4 className="font-bold mt-6 mb-2">Cómo lo aplicamos:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Seguimos estrictos principios éticos en el desarrollo e implementación de soluciones de IA.</li>
                  <li>Educamos sobre la importancia de la privacidad de datos y el consentimiento informado.</li>
                  <li>Trabajamos activamente para identificar y mitigar sesgos en los algoritmos.</li>
                  <li>Promovemos la transparencia en cómo funcionan y toman decisiones nuestros sistemas.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-xl font-bold mb-4 text-center">¿Compartes nuestros valores?</h3>
            <p className="text-center mb-6">
              Nos encantaría colaborar contigo y tu organización.
            </p>
            <div className="flex justify-center">
              <Button asChild>
                <Link to="/formulario">Hablemos</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NuestrosValores;
