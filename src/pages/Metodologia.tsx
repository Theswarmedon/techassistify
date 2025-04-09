
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { ClipboardList, Settings, Users, LineChart } from 'lucide-react';

const Metodologia = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-center">Nuestra Metodología</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Un enfoque estructurado y probado para implementar soluciones de IA en su organización
          </p>

          {/* Metodología en detalle */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Metodología en 4 Pasos</h2>
            
            <div className="space-y-16">
              {/* Paso 1 */}
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-500 rounded-full p-3 shadow-lg">
                    <ClipboardList size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">1. Evaluación</h3>
                    <p className="text-gray-700 mb-4">
                      La fase de evaluación nos permite comprender profundamente su organización, identificando oportunidades específicas donde la IA puede generar el mayor impacto.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Análisis exhaustivo de madurez digital</li>
                      <li>Evaluación de infraestructura tecnológica existente</li>
                      <li>Mapeo de competencias del equipo</li>
                      <li>Identificación de casos de uso prioritarios</li>
                      <li>Definición de métricas de éxito personalizadas</li>
                      <li>Evaluación de riesgos y consideraciones éticas</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-gray-200"></div>
              </div>

              {/* Paso 2 */}
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="bg-green-500 rounded-full p-3 shadow-lg">
                    <Settings size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">2. Planificación</h3>
                    <p className="text-gray-700 mb-4">
                      Basándonos en los resultados de la evaluación, elaboramos un plan personalizado que alinea perfectamente las soluciones de IA con sus objetivos de negocio.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Diseño curricular adaptado a su sector</li>
                      <li>Itinerarios formativos por perfiles profesionales</li>
                      <li>Selección de herramientas y plataformas óptimas</li>
                      <li>Planificación temporal realista</li>
                      <li>Asignación de recursos y presupuestos</li>
                      <li>Definición de criterios de evaluación y éxito</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-gray-200"></div>
              </div>

              {/* Paso 3 */}
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="bg-purple-500 rounded-full p-3 shadow-lg">
                    <Users size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">3. Implementación</h3>
                    <p className="text-gray-700 mb-4">
                      Ejecutamos el plan formativo combinando teoría y práctica, con un enfoque en aplicaciones reales que aporten valor inmediato a su organización.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Sesiones teórico-prácticas inmersivas</li>
                      <li>Talleres aplicados a casos reales de su empresa</li>
                      <li>Mentorías personalizadas con expertos del sector</li>
                      <li>Plataforma e-learning con contenido complementario</li>
                      <li>Proyectos prácticos con impacto medible</li>
                      <li>Comunidad de práctica para aprendizaje colaborativo</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-gray-200"></div>
              </div>

              {/* Paso 4 */}
              <div>
                <div className="flex items-start gap-6">
                  <div className="bg-amber-500 rounded-full p-3 shadow-lg">
                    <LineChart size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">4. Evaluación y Mejora Continua</h3>
                    <p className="text-gray-700 mb-4">
                      No nos limitamos a implementar y marcharnos. Establecemos un ciclo de mejora continua que garantiza resultados sostenibles a largo plazo.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Análisis detallado de KPIs predefinidos</li>
                      <li>Evaluación de impacto en procesos de negocio</li>
                      <li>Encuestas de satisfacción y aprendizaje</li>
                      <li>Sesiones de seguimiento periódicas</li>
                      <li>Identificación de nuevas oportunidades de mejora</li>
                      <li>Actualización continua de contenidos y enfoque</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Metodologia;
