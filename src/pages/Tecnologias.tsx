
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { Code, Cpu, Database, CloudCog, Server, MoveUp } from 'lucide-react';

const Tecnologias = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-center">Tecnologías y Herramientas</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Utilizamos las tecnologías más avanzadas y herramientas de vanguardia para ofrecer soluciones de IA efectivas
          </p>

          {/* Sección principal de tecnologías */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="text-lg text-gray-700 mb-8">
              Nuestra experiencia abarca todo el ecosistema tecnológico relacionado con la Inteligencia Artificial. 
              Seleccionamos cuidadosamente las herramientas más adecuadas para cada proyecto, garantizando siempre 
              soluciones escalables y de vanguardia.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Categoría 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Code className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Lenguajes de Programación</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    Python
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    R
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    Julia
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    JavaScript/TypeScript
                  </li>
                </ul>
              </div>
              
              {/* Categoría 2 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Cpu className="text-purple-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Frameworks de ML y DL</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    TensorFlow
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    PyTorch
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    Keras
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    scikit-learn
                  </li>
                </ul>
              </div>
              
              {/* Categoría 3 */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-100 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Database className="text-green-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Big Data</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Apache Spark
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Hadoop
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Kafka
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Databricks
                  </li>
                </ul>
              </div>
              
              {/* Categoría 4 */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CloudCog className="text-amber-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Cloud Computing</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                    AWS SageMaker
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                    Google AI Platform
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                    Azure ML
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                    IBM Watson
                  </li>
                </ul>
              </div>
              
              {/* Categoría 5 */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Server className="text-red-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">MLOps</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    MLflow
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Kubeflow
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    DVC
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Airflow
                  </li>
                </ul>
              </div>
              
              {/* Categoría 6 */}
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <MoveUp className="text-sky-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">NLP y LLMs</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-sky-500 rounded-full mr-2"></span>
                    Transformers (Hugging Face)
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-sky-500 rounded-full mr-2"></span>
                    BERT y variantes
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-sky-500 rounded-full mr-2"></span>
                    OpenAI API
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-sky-500 rounded-full mr-2"></span>
                    spaCy y NLTK
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sección de herramientas para formación */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Plataformas de Formación</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-6">
                Complementamos nuestra oferta formativa con plataformas digitales que facilitan el aprendizaje continuo:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">LMS Personalizado</h3>
                  <p className="text-gray-600">Plataforma de aprendizaje a medida con seguimiento individualizado y contenido adaptativo.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Simuladores IA</h3>
                  <p className="text-gray-600">Entornos virtuales para poner en práctica los conocimientos en escenarios realistas.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Notebooks Interactivos</h3>
                  <p className="text-gray-600">Entornos Jupyter y Colab para aprendizaje práctico de programación y algoritmos.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Comunidad de Práctica</h3>
                  <p className="text-gray-600">Espacio colaborativo para compartir conocimientos y resolver dudas entre profesionales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tecnologias;
