
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { ArrowRight, MessageCircle, Calendar, FileSpreadsheet, Users, UserCheck, Monitor } from 'lucide-react';

const ProcesoTrabajo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-center">Proceso de Trabajo</h1>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            Conoce en detalle cómo implementamos nuestros programas de formación en IA desde el primer contacto hasta la evaluación de resultados
          </p>

          {/* Timeline del proceso */}
          <div className="relative space-y-8 mb-16">
            {/* Punto 1 */}
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="rounded-full bg-blue-500 text-white flex items-center justify-center w-12 h-12">
                  <MessageCircle size={24} />
                </div>
                <div className="h-full w-0.5 bg-blue-200"></div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex-grow">
                <h3 className="text-xl font-bold mb-3">1. Consulta Inicial</h3>
                <p className="text-gray-700 mb-4">
                  El proceso comienza con una reunión inicial donde escuchamos sus necesidades y objetivos específicos. 
                  Nos interesa entender su contexto empresarial, el nivel actual de conocimiento de su equipo y las metas que desea alcanzar.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="font-medium">Duración aproximada: 1-2 reuniones</p>
                  <p className="text-gray-600">Formato: Presencial o videoconferencia</p>
                </div>
              </div>
            </div>
            
            {/* Punto 2 */}
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="rounded-full bg-green-500 text-white flex items-center justify-center w-12 h-12">
                  <FileSpreadsheet size={24} />
                </div>
                <div className="h-full w-0.5 bg-blue-200"></div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex-grow">
                <h3 className="text-xl font-bold mb-3">2. Análisis de Necesidades y Propuesta</h3>
                <p className="text-gray-700 mb-4">
                  Nuestro equipo analiza la información recogida y elabora una propuesta detallada que incluye:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  <li>Objetivos de aprendizaje específicos</li>
                  <li>Programa formativo personalizado</li>
                  <li>Metodología y recursos necesarios</li>
                  <li>Calendario tentativo de implementación</li>
                  <li>Métricas de evaluación propuestas</li>
                  <li>Presupuesto detallado</li>
                </ul>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="font-medium">Duración aproximada: 1-2 semanas</p>
                  <p className="text-gray-600">Entregable: Documento de propuesta formativa</p>
                </div>
              </div>
            </div>
            
            {/* Punto 3 */}
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="rounded-full bg-purple-500 text-white flex items-center justify-center w-12 h-12">
                  <Calendar size={24} />
                </div>
                <div className="h-full w-0.5 bg-blue-200"></div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex-grow">
                <h3 className="text-xl font-bold mb-3">3. Planificación Detallada</h3>
                <p className="text-gray-700 mb-4">
                  Una vez aprobada la propuesta, trabajamos en la planificación detallada del programa:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  <li>Definición del equipo de formadores</li>
                  <li>Elaboración de materiales específicos</li>
                  <li>Configuración de plataformas técnicas</li>
                  <li>Calendario definitivo de sesiones</li>
                  <li>Preparación de casos prácticos adaptados</li>
                </ul>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                  <p className="font-medium">Duración aproximada: 2-3 semanas</p>
                  <p className="text-gray-600">Entregable: Plan detallado de implementación</p>
                </div>
              </div>
            </div>
            
            {/* Punto 4 */}
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="rounded-full bg-amber-500 text-white flex items-center justify-center w-12 h-12">
                  <Users size={24} />
                </div>
                <div className="h-full w-0.5 bg-blue-200"></div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex-grow">
                <h3 className="text-xl font-bold mb-3">4. Implementación del Programa</h3>
                <p className="text-gray-700 mb-4">
                  Ejecutamos el programa formativo según el plan establecido:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  <li>Sesiones teórico-prácticas</li>
                  <li>Talleres de aplicación real</li>
                  <li>Tutorías y mentorías personalizadas</li>
                  <li>Acceso a plataforma de aprendizaje online</li>
                  <li>Desarrollo de proyectos prácticos</li>
                </ul>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                  <p className="font-medium">Duración: Variable según programa (1-6 meses)</p>
                  <p className="text-gray-600">Formato: Presencial, online o híbrido</p>
                </div>
              </div>
            </div>
            
            {/* Punto 5 */}
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="rounded-full bg-red-500 text-white flex items-center justify-center w-12 h-12">
                  <Monitor size={24} />
                </div>
                <div className="h-full w-0.5 bg-blue-200"></div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex-grow">
                <h3 className="text-xl font-bold mb-3">5. Seguimiento Continuo</h3>
                <p className="text-gray-700 mb-4">
                  Durante todo el proceso, realizamos un seguimiento continuo para asegurar el progreso adecuado:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  <li>Reuniones periódicas de seguimiento</li>
                  <li>Informes de progreso</li>
                  <li>Ajustes al programa según necesidad</li>
                  <li>Resolución de dudas y desafíos específicos</li>
                </ul>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <p className="font-medium">Periodicidad: Semanal o quincenal</p>
                  <p className="text-gray-600">Entregable: Informes de seguimiento</p>
                </div>
              </div>
            </div>
            
            {/* Punto 6 */}
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="rounded-full bg-blue-600 text-white flex items-center justify-center w-12 h-12">
                  <UserCheck size={24} />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3">6. Evaluación y Cierre</h3>
                <p className="text-gray-700 mb-4">
                  Al finalizar el programa, realizamos una evaluación completa:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  <li>Evaluación de conocimientos adquiridos</li>
                  <li>Medición de impacto en los KPIs establecidos</li>
                  <li>Encuestas de satisfacción</li>
                  <li>Informe final de resultados</li>
                  <li>Recomendaciones para siguientes pasos</li>
                </ul>
                <div className="flex items-center justify-center bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <ArrowRight className="text-blue-500 mr-2" size={20} />
                  <p className="font-medium text-blue-800">
                    El proceso no termina aquí: ofrecemos soporte post-formación y programas de seguimiento para asegurar la aplicación efectiva de lo aprendido
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Elementos Diferenciadores */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Elementos Diferenciadores de Nuestro Proceso</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-lg mb-2">Personalización Extrema</h3>
                <p className="text-gray-700">
                  No creemos en soluciones genéricas. Cada programa es diseñado específicamente para su organización, 
                  alineado con sus objetivos de negocio y adaptado a la realidad de su equipo.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-lg mb-2">Aprendizaje Aplicado</h3>
                <p className="text-gray-700">
                  Todos nuestros programas incluyen proyectos prácticos basados en casos reales de su empresa, 
                  garantizando una aplicación inmediata de los conocimientos adquiridos.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-lg mb-2">Formadores Expertos</h3>
                <p className="text-gray-700">
                  Nuestro equipo está compuesto por profesionales con experiencia real en implementación de 
                  proyectos de IA, combinando conocimiento técnico y visión de negocio.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-lg mb-2">Soporte Continuo</h3>
                <p className="text-gray-700">
                  Más allá de la formación, ofrecemos un acompañamiento durante todo el proceso de implementación, 
                  asegurando que los conocimientos se traduzcan en resultados tangibles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProcesoTrabajo;
