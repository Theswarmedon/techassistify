
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { Code, CheckCircle, Server, Database, Cpu } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CursosAvanzados = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-center">Cursos Avanzados en IA</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Formación especializada para profesionales técnicos y equipos de desarrollo que buscan dominar las tecnologías de IA
          </p>
          
          {/* Hero section */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-xl p-8 mb-16 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Lleva tus habilidades técnicas al siguiente nivel</h2>
                <p className="mb-6 text-lg">
                  Nuestros cursos avanzados proporcionan conocimientos profundos y experiencia práctica en las tecnologías de IA más demandadas
                  en el mercado actual.
                </p>
                <Button className="bg-white text-purple-700 hover:bg-gray-100">
                  Explorar programas
                </Button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white/20 p-8 rounded-full">
                  <Code size={80} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Cursos destacados */}
          <h2 className="text-2xl font-bold mb-6">Programas Técnicos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden border-2 border-purple-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Machine Learning Engineer</h3>
                <p className="text-gray-600 mb-4">
                  Aprende a diseñar, implementar y desplegar modelos de machine learning a escala empresarial.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>60 horas de formación intensiva</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proyecto final con datos reales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mentoría personalizada</span>
                  </li>
                </ul>
                <p className="font-bold text-lg mb-4">Desde 2.500€ por participante</p>
                <Button>Ver detalles</Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-2 border-purple-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Deep Learning Especialista</h3>
                <p className="text-gray-600 mb-4">
                  Domina las redes neuronales avanzadas y técnicas de deep learning para resolver problemas complejos.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>80 horas de formación teórico-práctica</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Acceso a GPUs para entrenamiento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Implementación de modelos avanzados</span>
                  </li>
                </ul>
                <p className="font-bold text-lg mb-4">Desde 3.200€ por participante</p>
                <Button>Ver detalles</Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-2 border-purple-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">NLP y Procesamiento de Texto</h3>
                <p className="text-gray-600 mb-4">
                  Especialízate en el procesamiento de lenguaje natural y las técnicas avanzadas de análisis de texto.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>40 horas de formación especializada</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Implementación de transformers y LLMs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Casos prácticos de aplicación empresarial</span>
                  </li>
                </ul>
                <p className="font-bold text-lg mb-4">Desde 2.800€ por participante</p>
                <Button>Ver detalles</Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-2 border-purple-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">MLOps y Despliegue de Modelos</h3>
                <p className="text-gray-600 mb-4">
                  Aprende a llevar modelos de IA a producción con las mejores prácticas de ingeniería de software.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>50 horas de formación práctica</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Implementación CI/CD para modelos ML</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Monitorización y mantenimiento</span>
                  </li>
                </ul>
                <p className="font-bold text-lg mb-4">Desde 3.000€ por participante</p>
                <Button>Ver detalles</Button>
              </div>
            </Card>
          </div>
          
          {/* Detalles técnicos */}
          <h2 className="text-2xl font-bold mb-6">Tecnologías que aprenderás</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-100">
              <p className="font-semibold">TensorFlow</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-100">
              <p className="font-semibold">PyTorch</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-100">
              <p className="font-semibold">Scikit-learn</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-100">
              <p className="font-semibold">Keras</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-100">
              <p className="font-semibold">Hugging Face</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-100">
              <p className="font-semibold">Docker</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-100">
              <p className="font-semibold">Kubernetes</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-100">
              <p className="font-semibold">MLflow</p>
            </div>
          </div>
          
          {/* Requisitos */}
          <div className="bg-purple-50 border border-purple-100 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-4">Requisitos previos</h2>
            <p className="mb-4 text-gray-700">
              Nuestros cursos avanzados están diseñados para profesionales técnicos que ya cuentan con:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Conocimientos de programación en Python</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Fundamentos de estadística y matemáticas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Experiencia básica con análisis de datos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Conocimiento general sobre inteligencia artificial</span>
              </li>
            </ul>
            <p className="text-gray-700">
              ¿No estás seguro si cumples los requisitos? Contáctanos para una evaluación gratuita.
            </p>
          </div>
          
          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">¿Listo para convertirte en un experto en IA?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Nuestros programas avanzados están diseñados para convertirte en un profesional altamente cualificado en el campo de la IA.
            </p>
            <Button className="bg-white text-purple-700 hover:bg-gray-100">
              Solicitar información detallada
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CursosAvanzados;
