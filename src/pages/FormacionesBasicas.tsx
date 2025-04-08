
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { BookOpen, CheckCircle, FileText, Users, Brain } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FormacionesBasicas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-center">Formaciones Básicas en IA</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Programas introductorios diseñados para equipos que comienzan su viaje con la inteligencia artificial
          </p>
          
          {/* Hero section */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-xl p-8 mb-16 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Potencia a tu equipo con conocimientos fundamentales en IA</h2>
                <p className="mb-6 text-lg">
                  Nuestros cursos introductorios están diseñados para hacer accesible la inteligencia artificial a todos los niveles 
                  de tu organización, sin necesidad de conocimientos técnicos previos.
                </p>
                <Button className="bg-white text-blue-700 hover:bg-gray-100">
                  Solicitar información
                </Button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white/20 p-8 rounded-full">
                  <BookOpen size={80} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Cursos destacados */}
          <h2 className="text-2xl font-bold mb-6">Cursos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden border-2 border-blue-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">IA Fundamentals</h3>
                <p className="text-gray-600 mb-4">
                  Un recorrido completo por los conceptos básicos de la IA y su aplicación en el mundo empresarial.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>8 horas de formación presencial/online</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Certificación al completar el curso</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Materiales didácticos incluidos</span>
                  </li>
                </ul>
                <p className="font-bold text-lg mb-4">Desde 450€ por participante</p>
                <Button>Ver detalles</Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-2 border-blue-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">IA para Managers</h3>
                <p className="text-gray-600 mb-4">
                  Enfocado en directivos y mandos intermedios que necesitan comprender el impacto de la IA en sus departamentos.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>12 horas de formación intensiva</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Casos prácticos adaptados a su sector</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sesión de consultoría incluida</span>
                  </li>
                </ul>
                <p className="font-bold text-lg mb-4">Desde 750€ por participante</p>
                <Button>Ver detalles</Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-2 border-blue-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">IA en la Oficina</h3>
                <p className="text-gray-600 mb-4">
                  Curso práctico sobre cómo utilizar herramientas de IA para mejorar la productividad en tareas administrativas diarias.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>6 horas de formación práctica</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Workshops con herramientas reales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Guías paso a paso para cada herramienta</span>
                  </li>
                </ul>
                <p className="font-bold text-lg mb-4">Desde 300€ por participante</p>
                <Button>Ver detalles</Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-2 border-blue-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Introducción a Chatbots</h3>
                <p className="text-gray-600 mb-4">
                  Aprende a crear chatbots simples para atención al cliente y soporte sin necesidad de programación.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>10 horas de formación práctica</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Creación de un chatbot funcional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Soporte post-formación (1 mes)</span>
                  </li>
                </ul>
                <p className="font-bold text-lg mb-4">Desde 550€ por participante</p>
                <Button>Ver detalles</Button>
              </div>
            </Card>
          </div>
          
          {/* Beneficios */}
          <h2 className="text-2xl font-bold mb-6">Beneficios de Nuestras Formaciones Básicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Sin conocimientos previos</h3>
              <p className="text-gray-600">
                Nuestras formaciones están diseñadas para ser accesibles a todos los niveles, sin necesidad de conocimientos técnicos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Formación personalizada</h3>
              <p className="text-gray-600">
                Adaptamos el contenido a las necesidades específicas de tu empresa y sector.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Aplicación inmediata</h3>
              <p className="text-gray-600">
                Enfoque práctico para que los participantes puedan aplicar lo aprendido desde el primer día.
              </p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar con la IA?</h2>
            <p className="mb-6 max-w-2xl mx-auto text-gray-700">
              Ponte en contacto con nosotros para diseñar un plan de formación básica adaptado a las necesidades de tu organización.
            </p>
            <Button size="lg">
              Solicitar presupuesto
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FormacionesBasicas;
