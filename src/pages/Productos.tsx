
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { BookOpen, Users, Briefcase, PackageOpen, CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
            Descubre nuestras soluciones de formación impulsadas por IA adaptadas a las necesidades específicas de cada organización
          </p>
          
          {/* Categorías de productos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">Formaciones Básicas</h2>
              <p className="text-gray-600">Cursos introductorios a la IA para todos los niveles organizacionales.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">Cursos Avanzados</h2>
              <p className="text-gray-600">Formación especializada para equipos técnicos y desarrolladores.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">Soluciones Empresariales</h2>
              <p className="text-gray-600">Programas personalizados para grandes organizaciones.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PackageOpen className="h-8 w-8 text-amber-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">Asesorías</h2>
              <p className="text-gray-600">Consultoría estratégica para implementación de IA en su negocio.</p>
            </div>
          </div>
          
          {/* Productos destacados */}
          <h2 className="text-2xl font-bold mb-6 text-center">Productos Destacados</h2>
          <div className="space-y-10 mb-16">
            {/* Producto 1 */}
            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gradient-to-r from-blue-500 to-blue-700 p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <BookOpen size={60} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">IA Fundamentals</h3>
                    <div className="mt-4 text-xl font-bold">Desde 1.200€</div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">Curso de Fundamentos de IA para Empresas</h3>
                  <p className="text-gray-700 mb-4">
                    Un programa completo diseñado para que todo el personal de su organización comprenda los conceptos básicos de la IA, sus aplicaciones prácticas y su impacto en la industria.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>20 horas de formación teórico-práctica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Materiales didácticos interactivos</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Casos prácticos adaptados a su sector</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Certificación al finalizar</span>
                    </li>
                  </ul>
                  <Button>Solicitar información</Button>
                </div>
              </div>
            </Card>
            
            {/* Producto 2 */}
            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gradient-to-r from-purple-500 to-purple-700 p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Users size={60} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">AI Developer Pro</h3>
                    <div className="mt-4 text-xl font-bold">Desde 2.500€</div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">Formación Avanzada para Desarrolladores</h3>
                  <p className="text-gray-700 mb-4">
                    Una formación técnica intensiva diseñada para equipos de desarrollo que desean implementar soluciones de IA en sus productos y servicios.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>40 horas de formación práctica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Workshops hands-on con frameworks actuales</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Desarrollo de un proyecto real</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Mentorías personalizadas</span>
                    </li>
                  </ul>
                  <Button>Solicitar información</Button>
                </div>
              </div>
            </Card>
            
            {/* Producto 3 */}
            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gradient-to-r from-green-500 to-green-700 p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Briefcase size={60} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Enterprise AI</h3>
                    <div className="mt-4 text-xl font-bold">Personalizado</div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">Programa de Transformación Digital con IA</h3>
                  <p className="text-gray-700 mb-4">
                    Un programa integral para grandes organizaciones que buscan implementar la IA a nivel estratégico en múltiples departamentos.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Evaluación completa de necesidades</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Formación personalizada por departamentos</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Acompañamiento en la implementación</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Seguimiento y optimización continua</span>
                    </li>
                  </ul>
                  <Button>Solicitar información</Button>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Sección de industrias */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Soluciones por Industria</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3 border-b pb-2">Sector Financiero</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Análisis predictivo para detección de fraude</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Sistemas de scoring crediticio con IA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Chatbots para atención al cliente</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3 border-b pb-2">Sector Salud</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Procesamiento de imágenes médicas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Predicción de riesgos en pacientes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Optimización de protocolos clínicos</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3 border-b pb-2">Retail</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Sistemas de recomendación personalizada</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Optimización de inventario</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Análisis de comportamiento del consumidor</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3 border-b pb-2">Manufactura</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Mantenimiento predictivo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Optimización de cadenas de producción</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Control de calidad automatizado</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3 border-b pb-2">Logística</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Optimización de rutas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Predicción de demanda</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Gestión inteligente de almacenes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3 border-b pb-2">Sector Público</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Análisis de datos para políticas públicas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Optimización de servicios ciudadanos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Sistemas de detección de emergencias</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">¿Listo para transformar tu organización con IA?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Contacta con nuestro equipo para recibir asesoramiento personalizado y descubrir qué solución se adapta mejor a las necesidades de tu organización.
            </p>
            <Button className="bg-white text-blue-700 hover:bg-gray-100">
              Contactar ahora
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Productos;
