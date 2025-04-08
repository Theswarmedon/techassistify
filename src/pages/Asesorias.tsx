
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { LightbulbIcon, CheckCircle, MessageSquare, ClipboardCheck, Gauge } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Asesorias = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-center">Asesorías en Inteligencia Artificial</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Consultoría estratégica para implementación y optimización de IA en su negocio
          </p>
          
          {/* Hero section */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-lg shadow-xl p-8 mb-16 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Impulse su negocio con estrategias de IA personalizadas</h2>
                <p className="mb-6 text-lg">
                  Nuestro equipo de consultores expertos analiza su negocio para identificar oportunidades 
                  donde la IA puede generar el máximo valor, creando estrategias adaptadas a sus necesidades específicas.
                </p>
                <Button className="bg-white text-amber-700 hover:bg-gray-100">
                  Reservar consulta inicial
                </Button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white/20 p-8 rounded-full">
                  <LightbulbIcon size={80} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Servicios de asesoría */}
          <h2 className="text-2xl font-bold mb-6">Nuestros Servicios de Asesoría</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden border-2 border-amber-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Diagnóstico de IA</h3>
                <p className="text-gray-600 mb-4">
                  Evaluación completa de su organización para identificar oportunidades de implementación de IA.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Análisis de procesos actuales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Evaluación de madurez digital</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Identificación de casos de uso</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Informe detallado de recomendaciones</span>
                  </li>
                </ul>
                <p className="font-bold text-lg mb-4">Desde 3.500€</p>
                <Button>Solicitar diagnóstico</Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-2 border-amber-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Gauge className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hoja de Ruta de IA</h3>
                <p className="text-gray-600 mb-4">
                  Creación de un plan estratégico detallado para implementar IA en su organización.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Priorización de oportunidades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Plan de implementación por fases</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Estimación de recursos e inversión</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>KPIs y métricas de seguimiento</span>
                  </li>
                </ul>
                <p className="font-bold text-lg mb-4">Desde 5.000€</p>
                <Button>Solicitar hoja de ruta</Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-2 border-amber-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Consultoría Ejecutiva</h3>
                <p className="text-gray-600 mb-4">
                  Asesoramiento continuo a nivel directivo para guiar la estrategia de IA en su organización.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Reuniones periódicas con dirección</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Asesoramiento en toma de decisiones</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Informes de tendencias e innovación</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Acceso prioritario a nuestros expertos</span>
                  </li>
                </ul>
                <p className="font-bold text-lg mb-4">Desde 4.000€/mes</p>
                <Button>Solicitar información</Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-2 border-amber-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <LightbulbIcon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Proof of Concept (POC)</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollo de proyectos piloto para validar los casos de uso de IA en su organización.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Definición del caso de uso</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Desarrollo de prototipo funcional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Validación con datos reales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Evaluación de resultados e impacto</span>
                  </li>
                </ul>
                <p className="font-bold text-lg mb-4">Desde 8.000€</p>
                <Button>Solicitar POC</Button>
              </div>
            </Card>
          </div>
          
          {/* Metodología */}
          <h2 className="text-2xl font-bold mb-6">Nuestra Metodología de Consultoría</h2>
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-amber-600">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Descubrimiento</h3>
                <p className="text-gray-600">
                  Entendemos su negocio, desafíos y objetivos estratégicos.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-amber-600">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Análisis</h3>
                <p className="text-gray-600">
                  Evaluamos oportunidades y definimos casos de uso de alto valor.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-amber-600">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Recomendación</h3>
                <p className="text-gray-600">
                  Creamos un plan de acción detallado y personalizado.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-amber-600">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Implementación</h3>
                <p className="text-gray-600">
                  Le acompañamos en todo el proceso de ejecución y evaluación.
                </p>
              </div>
            </div>
          </div>
          
          {/* Testimonios */}
          <h2 className="text-2xl font-bold mb-6 text-center">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-amber-600">AC</span>
                </div>
                <div>
                  <h4 className="font-bold">Ana Cortés</h4>
                  <p className="text-sm text-gray-500">CIO, Empresa de Logística</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "La consultoría que recibimos transformó nuestra visión sobre la IA. Gracias a sus recomendaciones, implementamos soluciones que optimizaron nuestra cadena de suministro."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-amber-600">JR</span>
                </div>
                <div>
                  <h4 className="font-bold">Javier Rodríguez</h4>
                  <p className="text-sm text-gray-500">Director General, Retail</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Su diagnóstico de IA nos permitió identificar oportunidades que habíamos pasado por alto. La hoja de ruta que desarrollaron ha sido nuestra guía para la transformación digital."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-amber-600">ML</span>
                </div>
                <div>
                  <h4 className="font-bold">María López</h4>
                  <p className="text-sm text-gray-500">CMO, Empresa Financiera</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "La asesoría ejecutiva que recibimos ha sido clave para tomar decisiones estratégicas informadas. Su conocimiento del sector financiero y de IA es excepcional."
              </p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-lg shadow-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">¿Necesita orientación estratégica en IA?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Reserve una consulta inicial gratuita de 30 minutos con uno de nuestros expertos para explorar cómo podemos ayudarle a transformar su negocio.
            </p>
            <Button className="bg-white text-amber-700 hover:bg-gray-100">
              Reservar consulta gratuita
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Asesorias;
