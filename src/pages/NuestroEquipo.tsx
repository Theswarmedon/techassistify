
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Linkedin, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const NuestroEquipo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <Button 
            variant="outline" 
            className="mb-6" 
            asChild
          >
            <Link to="/quienes-somos" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver a Quiénes Somos
            </Link>
          </Button>
          
          <h1 className="text-4xl font-bold mb-6 text-center">Nuestro Equipo</h1>
          
          <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            Contamos con un equipo multidisciplinar de profesionales especializados en IA, formación y transformación digital, 
            unidos por la pasión de hacer la tecnología más accesible y útil para todos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* María Rodríguez */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                <div className="text-white text-5xl font-bold">MR</div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">María Rodríguez</h3>
                <p className="text-gray-500 mb-4">CEO y Fundadora</p>
                <p className="text-gray-700 mb-6">
                  Con más de 15 años liderando proyectos tecnológicos innovadores, María fundó la empresa con la visión de 
                  democratizar el acceso a la IA. Doctora en Ciencias de la Computación, ha sido pionera en el desarrollo 
                  de metodologías de aprendizaje adaptadas al entorno empresarial.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Carlos Sánchez */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <div className="text-white text-5xl font-bold">CS</div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Carlos Sánchez</h3>
                <p className="text-gray-500 mb-4">Director de Formación</p>
                <p className="text-gray-700 mb-6">
                  Especialista en pedagogía digital con más de una década de experiencia en el diseño de programas educativos.
                  Carlos ha revolucionado la forma en que se enseñan tecnologías complejas, desarrollando metodologías que 
                  hacen accesible la IA incluso para perfiles no técnicos.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Globe className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Ana López */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-center">
                <div className="text-white text-5xl font-bold">AL</div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Ana López</h3>
                <p className="text-gray-500 mb-4">Directora de Tecnología</p>
                <p className="text-gray-700 mb-6">
                  Ingeniera informática con especialización en IA y aprendizaje automático. Ana lidera el desarrollo 
                  de nuestras soluciones tecnológicas, asegurando que combinen innovación con facilidad de uso. Su enfoque 
                  en la explicabilidad de los algoritmos ha sido clave para hacer la IA más comprensible.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Javier Martínez */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center">
                <div className="text-white text-5xl font-bold">JM</div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Javier Martínez</h3>
                <p className="text-gray-500 mb-4">Director de Experiencia del Cliente</p>
                <p className="text-gray-700 mb-6">
                  Con formación en psicología y experiencia en UX, Javier asegura que nuestras soluciones sean 
                  no solo tecnológicamente avanzadas sino realmente útiles y adaptadas a las necesidades humanas. 
                  Su enfoque centrado en el usuario ha sido fundamental para nuestro éxito.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Globe className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-xl font-bold mb-4 text-center">¿Quieres formar parte de nuestro equipo?</h3>
            <p className="text-center mb-6">
              Estamos siempre en búsqueda de talento apasionado por la IA y la educación.
            </p>
            <div className="flex justify-center">
              <Button asChild>
                <Link to="/formulario">Envía tu CV</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NuestroEquipo;
