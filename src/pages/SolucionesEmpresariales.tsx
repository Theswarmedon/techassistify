
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { Building, CheckCircle, BarChart, PieChart, Network } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SolucionesEmpresariales = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-center">Soluciones Empresariales de IA</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Programas personalizados para grandes organizaciones que buscan implementar la IA a nivel estratégico
          </p>
          
          {/* Hero section */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-xl p-8 mb-16 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Transformación digital integral con IA</h2>
                <p className="mb-6 text-lg">
                  Nuestras soluciones empresariales están diseñadas para transformar completamente su organización 
                  aprovechando el poder de la inteligencia artificial a todos los niveles.
                </p>
                <Button className="bg-white text-green-700 hover:bg-gray-100">
                  Agendar una consulta
                </Button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white/20 p-8 rounded-full">
                  <Building size={80} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Soluciones corporativas */}
          <h2 className="text-2xl font-bold mb-6">Nuestras Soluciones Corporativas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden border-2 border-green-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise AI Transformation</h3>
                <p className="text-gray-600 mb-4">
                  Programa integral que incluye evaluación, estrategia, implementación y seguimiento para toda la organización.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Evaluación completa de necesidades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Estrategia personalizada de IA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Formación específica por departamentos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Implementación y seguimiento continuo</span>
                  </li>
                </ul>
                <Button>Solicitar información</Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-2 border-green-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Intelligence Suite</h3>
                <p className="text-gray-600 mb-4">
                  Solución completa para análisis de datos empresariales con IA, desde la recolección hasta la visualización.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integración con fuentes de datos existentes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Implementación de modelos predictivos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dashboards personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Formación para equipos de análisis</span>
                  </li>
                </ul>
                <Button>Solicitar información</Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-2 border-green-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Network className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Center of Excellence</h3>
                <p className="text-gray-600 mb-4">
                  Creación de un centro de excelencia en IA dentro de su organización con personal capacitado y procesos optimizados.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Definición de estructura y procesos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Formación avanzada para el equipo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Implementación de metodologías ágiles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mentoría y soporte continuo</span>
                  </li>
                </ul>
                <Button>Solicitar información</Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-2 border-green-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <PieChart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI for Executive Leadership</h3>
                <p className="text-gray-600 mb-4">
                  Programa exclusivo para directivos y líderes que necesitan comprender el impacto estratégico de la IA.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Workshops ejecutivos intensivos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Análisis de casos de éxito por sector</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Definición de estrategia corporativa</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Consultoría personalizada</span>
                  </li>
                </ul>
                <Button>Solicitar información</Button>
              </div>
            </Card>
          </div>
          
          {/* Nuestro proceso */}
          <h2 className="text-2xl font-bold mb-6">Nuestro Proceso</h2>
          <div className="relative mb-16">
            {/* Línea de tiempo */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-green-200 -translate-x-1/2"></div>
            
            {/* Pasos */}
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-green-700">1. Evaluación</h3>
                  <p className="text-gray-700">Análisis exhaustivo de su organización, procesos y necesidades específicas.</p>
                </div>
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold z-10 mx-auto md:mx-0">1</div>
                <div className="md:w-1/2 md:pl-8 md:text-left mt-4 md:mt-0"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 md:order-1 md:-mt-12"></div>
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold z-10 mx-auto md:mx-0">2</div>
                <div className="md:w-1/2 md:pl-8 md:text-left mt-4 md:mt-0 md:order-2">
                  <h3 className="text-xl font-bold text-green-700">2. Planificación Estratégica</h3>
                  <p className="text-gray-700">Creación de un plan personalizado con objetivos claros y medibles.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-green-700">3. Implementación</h3>
                  <p className="text-gray-700">Ejecución del plan con formación, desarrollo e integración de soluciones.</p>
                </div>
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold z-10 mx-auto md:mx-0">3</div>
                <div className="md:w-1/2 md:pl-8 md:text-left mt-4 md:mt-0"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 md:order-1 md:-mt-12"></div>
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold z-10 mx-auto md:mx-0">4</div>
                <div className="md:w-1/2 md:pl-8 md:text-left mt-4 md:mt-0 md:order-2">
                  <h3 className="text-xl font-bold text-green-700">4. Evaluación Continua</h3>
                  <p className="text-gray-700">Seguimiento, análisis de resultados y optimización constante.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Casos de éxito */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Casos de Éxito</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Sector Financiero</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Banco Internacional</h3>
                <p className="text-gray-600 mb-4">
                  Implementación de sistemas de detección de fraude basados en IA que redujeron los incidentes en un 62%.
                </p>
                <p className="text-sm text-gray-500">
                  "La transformación digital con IA ha revolucionado nuestra capacidad para proteger a nuestros clientes."
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Retail</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Cadena de Tiendas XYZ</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollo de un sistema de recomendación personalizada que aumentó las ventas cruzadas en un 47%.
                </p>
                <p className="text-sm text-gray-500">
                  "La implementación de IA nos ha permitido conocer mejor a nuestros clientes y ofrecerles productos que realmente necesitan."
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Manufactura</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Industrias Tecnológicas</h3>
                <p className="text-gray-600 mb-4">
                  Sistema de mantenimiento predictivo que redujo el tiempo de inactividad en un 78% y los costos de mantenimiento en un 35%.
                </p>
                <p className="text-sm text-gray-500">
                  "La capacidad de predecir fallos antes de que ocurran ha transformado nuestra operación industrial."
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">¿Listo para transformar su organización?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Agende una consulta gratuita con nuestros especialistas para explorar cómo nuestras soluciones empresariales pueden impulsar su negocio.
            </p>
            <Button className="bg-white text-green-700 hover:bg-gray-100">
              Agendar consulta
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SolucionesEmpresariales;
