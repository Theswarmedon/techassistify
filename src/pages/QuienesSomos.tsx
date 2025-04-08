
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { Users, BookOpen, Briefcase, PackageOpen } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-center">Quiénes Somos</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Somos un equipo de expertos comprometidos con la transformación digital y la innovación a través de soluciones de IA
          </p>

          {/* Historia y Misión */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Nuestra Historia y Misión</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="mb-4">
                Fundada en 2018, nuestra empresa nació con la visión de hacer la inteligencia artificial accesible para todas las organizaciones, independientemente de su tamaño o sector.
              </p>
              <p className="mb-4">
                Nuestra misión es democratizar el acceso a la IA proporcionando soluciones de formación personalizadas que permitan a las empresas aprovechar el poder de estas tecnologías de manera efectiva y ética.
              </p>
              <p className="mb-4">
                Con más de 5 años de experiencia en el sector, hemos ayudado a más de 200 empresas a implementar soluciones basadas en IA que han transformado sus operaciones y mejorado su competitividad.
              </p>
              <div className="flex justify-center mt-6">
                <Button asChild>
                  <Link to="/nuestra-mision">
                    Conoce nuestra misión
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Nuestro Equipo */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Nuestro Equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Miembro del equipo 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                  <Users size={64} className="text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">María Rodríguez</h3>
                  <p className="text-sm text-gray-500 mb-3">CEO y Fundadora</p>
                  <p className="text-gray-700">
                    Con más de 15 años de experiencia en tecnología y una visión clara sobre el futuro de la IA en el mundo empresarial.
                  </p>
                </CardContent>
              </Card>

              {/* Miembro del equipo 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <BookOpen size={64} className="text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Carlos Sánchez</h3>
                  <p className="text-sm text-gray-500 mb-3">Director de Formación</p>
                  <p className="text-gray-700">
                    Especialista en pedagogía digital con enfoque en metodologías innovadoras para la enseñanza de tecnologías complejas.
                  </p>
                </CardContent>
              </Card>

              {/* Miembro del equipo 3 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-center">
                  <Briefcase size={64} className="text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Ana López</h3>
                  <p className="text-sm text-gray-500 mb-3">Directora de Tecnología</p>
                  <p className="text-gray-700">
                    Ingeniera informática con amplia experiencia en desarrollo de soluciones de IA y aprendizaje automático.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-6">
              <Button asChild>
                <Link to="/nuestro-equipo">
                  Conoce a todo nuestro equipo
                </Link>
              </Button>
            </div>
          </div>

          {/* Valores */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Valor 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovación</h3>
                <p className="text-center text-gray-700">
                  Buscamos constantemente nuevas formas de aplicar la IA para resolver problemas empresariales complejos.
                </p>
              </div>

              {/* Valor 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <span className="text-green-600 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Excelencia</h3>
                <p className="text-center text-gray-700">
                  Nos comprometemos a ofrecer la más alta calidad en todas nuestras soluciones y servicios.
                </p>
              </div>

              {/* Valor 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Colaboración</h3>
                <p className="text-center text-gray-700">
                  Trabajamos estrechamente con nuestros clientes para garantizar soluciones que se adapten perfectamente a sus necesidades.
                </p>
              </div>

              {/* Valor 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <span className="text-amber-600 text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Ética</h3>
                <p className="text-center text-gray-700">
                  Promovemos un uso responsable y ético de la IA, priorizando la transparencia y la privacidad de los datos.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Button asChild>
                <Link to="/nuestros-valores">
                  Explora nuestros valores
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-10">
            <Button asChild variant="outline">
              <Link to="/nuestra-historia">
                Conoce nuestra historia
              </Link>
            </Button>
            <Button asChild>
              <Link to="/formulario">
                Contacta con nosotros
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuienesSomos;
