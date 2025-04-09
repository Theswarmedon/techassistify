
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { CheckCircle, TrendingUp, Briefcase, Medal, BarChart4, Building2 } from 'lucide-react';

const CasosExito = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-center">Casos de Éxito</h1>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            Descubra cómo hemos ayudado a empresas de diversos sectores a transformar sus negocios a través de la IA
          </p>

          {/* Destacados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <TrendingUp className="mx-auto text-blue-500 mb-3" size={32} />
              <p className="text-3xl font-bold text-blue-600 mb-2">93%</p>
              <p className="text-gray-700">de nuestros clientes reportan mejoras significativas en eficiencia operacional</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <Briefcase className="mx-auto text-green-500 mb-3" size={32} />
              <p className="text-3xl font-bold text-green-600 mb-2">+200</p>
              <p className="text-gray-700">proyectos exitosos implementados en los últimos 5 años</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <Medal className="mx-auto text-amber-500 mb-3" size={32} />
              <p className="text-3xl font-bold text-amber-600 mb-2">4.9/5</p>
              <p className="text-gray-700">valoración promedio de satisfacción en nuestros programas de formación</p>
            </div>
          </div>

          {/* Casos de éxito por sector */}
          <h2 className="text-2xl font-bold mb-8 text-center">Casos de Éxito por Sector</h2>
          
          {/* Sector Financiero */}
          <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 px-6 py-4">
              <div className="flex items-center">
                <BarChart4 className="text-white mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Sector Financiero</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6 border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold mb-2">Banco Internacional: Prevención de Fraude con IA</h4>
                <p className="text-gray-700 mb-4">
                  Una entidad bancaria líder en España buscaba mejorar su sistema de detección de fraude, que generaba
                  demasiados falsos positivos y sobrecargaba al equipo de análisis.
                </p>
                <div className="mb-4">
                  <p className="font-semibold mb-1">Solución:</p>
                  <p className="text-gray-700">
                    Diseñamos e implementamos un programa de formación especializado para su equipo de analistas de riesgo, 
                    centrándose en modelos de machine learning para detección de anomalías y técnicas avanzadas de clasificación.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center text-green-600">
                    <CheckCircle size={18} className="mr-2 flex-shrink-0" />
                    <span>Reducción del 30% en falsos positivos</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle size={18} className="mr-2 flex-shrink-0" />
                    <span>Aumento del 22% en la tasa de detección</span>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold mb-2">Aseguradora Nacional: Procesamiento de Reclamaciones</h4>
                <p className="text-gray-700 mb-4">
                  Una importante aseguradora buscaba automatizar y optimizar su proceso de gestión de reclamaciones para reducir tiempos
                  y mejorar la experiencia del cliente.
                </p>
                <div className="mb-4">
                  <p className="font-semibold mb-1">Solución:</p>
                  <p className="text-gray-700">
                    Desarrollamos un programa formativo para implementar un sistema de procesamiento de documentos basado en NLP,
                    capacitando al equipo interno para mantenerlo y mejorarlo continuamente.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center text-green-600">
                    <CheckCircle size={18} className="mr-2 flex-shrink-0" />
                    <span>Reducción del 40% en tiempo de procesamiento</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle size={18} className="mr-2 flex-shrink-0" />
                    <span>Incremento del 18% en satisfacción del cliente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sector Salud */}
          <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-600 px-6 py-4">
              <div className="flex items-center">
                <Building2 className="text-white mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Sector Salud</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6 border-l-4 border-green-500 pl-4">
                <h4 className="font-bold mb-2">Hospital Universitario: Análisis de Imágenes Médicas</h4>
                <p className="text-gray-700 mb-4">
                  Un centro médico de referencia necesitaba mejorar la capacidad de sus radiólogos para detectar patologías
                  en imágenes médicas mediante el uso de tecnologías de IA.
                </p>
                <div className="mb-4">
                  <p className="font-semibold mb-1">Solución:</p>
                  <p className="text-gray-700">
                    Implementamos un programa especializado en visión por computador y deep learning para imágenes médicas, 
                    con enfoque práctico en casos reales del hospital.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center text-green-600">
                    <CheckCircle size={18} className="mr-2 flex-shrink-0" />
                    <span>Mejora del 25% en la precisión diagnóstica</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle size={18} className="mr-2 flex-shrink-0" />
                    <span>Reducción del 35% en tiempos de diagnóstico</span>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold mb-2">Laboratorio Farmacéutico: Aceleración en I+D</h4>
                <p className="text-gray-700 mb-4">
                  Un laboratorio enfrentaba desafíos para procesar grandes volúmenes de datos de investigación y identificar
                  patrones relevantes para el desarrollo de nuevos fármacos.
                </p>
                <div className="mb-4">
                  <p className="font-semibold mb-1">Solución:</p>
                  <p className="text-gray-700">
                    Formamos a su equipo científico en técnicas de machine learning para el descubrimiento de moléculas
                    y la predicción de propiedades farmacológicas.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center text-green-600">
                    <CheckCircle size={18} className="mr-2 flex-shrink-0" />
                    <span>Reducción del 30% en tiempo de investigación</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle size={18} className="mr-2 flex-shrink-0" />
                    <span>Identificación de 3 compuestos prometedores</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonios */}
          <h2 className="text-2xl font-bold mb-6 text-center">Lo que Dicen Nuestros Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <blockquote className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <p className="italic text-gray-700 mb-4">
                "El programa de formación en IA transformó por completo la forma en que utilizamos los datos en nuestra empresa. 
                El enfoque práctico y personalizado nos permitió implementar soluciones reales desde el primer día."
              </p>
              <footer className="font-medium">
                <span className="text-gray-900">— Carlos Rodríguez,</span>
                <span className="text-gray-600"> Director de Innovación, Grupo Financiero</span>
              </footer>
            </blockquote>
            
            <blockquote className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <p className="italic text-gray-700 mb-4">
                "El nivel de personalización y la calidad de los formadores superaron nuestras expectativas. Ahora tenemos un equipo 
                capacitado que implementa y mantiene nuestras soluciones de IA sin dependencias externas."
              </p>
              <footer className="font-medium">
                <span className="text-gray-900">— Elena Martínez,</span>
                <span className="text-gray-600"> CTO, Retail Innovation</span>
              </footer>
            </blockquote>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CasosExito;
