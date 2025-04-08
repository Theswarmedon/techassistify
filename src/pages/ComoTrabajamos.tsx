
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { CheckCircle, ClipboardList, Settings, Users, LineChart } from 'lucide-react';

const ComoTrabajamos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-center">Cómo Trabajamos</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Nuestra metodología está diseñada para optimizar el aprendizaje y la implementación de la IA en su organización
          </p>

          {/* Metodología */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Nuestra Metodología en 4 Pasos</h2>
            
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
                      Comenzamos con una evaluación exhaustiva de las necesidades y capacidades actuales de su organización en materia de IA.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Análisis de madurez digital y tecnológica</li>
                      <li>Identificación de áreas de oportunidad</li>
                      <li>Evaluación de conocimientos del equipo</li>
                      <li>Definición de objetivos y KPIs de formación</li>
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
                      Desarrollamos un plan de formación personalizado adaptado a las necesidades específicas de su empresa.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Diseño de programas formativos a medida</li>
                      <li>Selección de plataformas y herramientas</li>
                      <li>Calendarización de actividades</li>
                      <li>Asignación de recursos y formadores especializados</li>
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
                      Ejecutamos el plan de formación utilizando las mejores prácticas pedagógicas y tecnológicas.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Sesiones teórico-prácticas con expertos del sector</li>
                      <li>Aprendizaje experiencial con casos reales</li>
                      <li>Mentoría y acompañamiento personalizado</li>
                      <li>Plataforma online con recursos complementarios</li>
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
                      Medimos el impacto de la formación y ajustamos de manera continua para maximizar resultados.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Análisis de resultados y KPIs</li>
                      <li>Encuestas de satisfacción y aprendizaje</li>
                      <li>Sesiones de seguimiento</li>
                      <li>Propuestas de mejora y actualización</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tecnologías */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Tecnologías y Herramientas</h2>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="mb-6 text-gray-700">
                En nuestras formaciones utilizamos las tecnologías y herramientas más avanzadas del mercado, adaptándonos siempre a las necesidades y la industria de cada cliente:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Procesamiento del Lenguaje Natural</h3>
                  <p className="text-gray-600">BERT, GPT, Transformers, spaCy</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Visión por Computador</h3>
                  <p className="text-gray-600">OpenCV, TensorFlow, PyTorch</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Machine Learning</h3>
                  <p className="text-gray-600">scikit-learn, XGBoost, LightGBM</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Deep Learning</h3>
                  <p className="text-gray-600">TensorFlow, Keras, PyTorch</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Big Data</h3>
                  <p className="text-gray-600">Hadoop, Spark, Kafka</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Cloud Computing</h3>
                  <p className="text-gray-600">AWS, Google Cloud, Azure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Casos de Éxito */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Casos de Éxito</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Sector Financiero</h3>
                <p className="text-gray-700 mb-4">
                  Formamos al equipo de analistas de riesgos de un importante banco en técnicas avanzadas de machine learning para la detección de fraude.
                </p>
                <div className="flex items-center text-green-600">
                  <CheckCircle size={20} className="mr-2" />
                  <span className="font-medium">Reducción del 30% en falsos positivos</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Sector Salud</h3>
                <p className="text-gray-700 mb-4">
                  Implementamos un programa de capacitación en IA para el personal médico de un hospital universitario enfocado en el análisis de imágenes médicas.
                </p>
                <div className="flex items-center text-green-600">
                  <CheckCircle size={20} className="mr-2" />
                  <span className="font-medium">Mejora del 25% en la precisión diagnóstica</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Sector Retail</h3>
                <p className="text-gray-700 mb-4">
                  Desarrollamos un programa de formación en IA para el departamento de marketing de una cadena de tiendas para implementar sistemas de recomendación.
                </p>
                <div className="flex items-center text-green-600">
                  <CheckCircle size={20} className="mr-2" />
                  <span className="font-medium">Incremento del 15% en ventas cruzadas</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Sector Industrial</h3>
                <p className="text-gray-700 mb-4">
                  Capacitamos al equipo técnico de una fábrica en el uso de IA para mantenimiento predictivo y optimización de procesos.
                </p>
                <div className="flex items-center text-green-600">
                  <CheckCircle size={20} className="mr-2" />
                  <span className="font-medium">Reducción del 40% en tiempo de inactividad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComoTrabajamos;
