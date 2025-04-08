
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

const NuestraHistoria = () => {
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
          
          <h1 className="text-4xl font-bold mb-6 text-center">Nuestra Historia</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg mb-8">
              Desde nuestra fundación en 2018, hemos recorrido un camino de constante evolución y crecimiento, 
              siempre guiados por nuestra pasión por hacer la IA accesible y útil para todo tipo de organizaciones.
            </p>
            
            {/* Línea de tiempo */}
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:-ml-px before:h-full before:bg-gradient-to-b before:from-blue-500 before:to-emerald-500">
              {/* 2018 */}
              <div className="relative pl-10">
                <div className="absolute left-0 rounded-full w-7 h-7 bg-blue-500 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h2 className="text-xl font-bold text-blue-600 mb-2">2018: Los inicios</h2>
                  <Collapsible>
                    <CollapsibleTrigger className="font-medium text-blue-500 hover:underline w-full text-left">
                      Ver más detalles
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="mt-2">
                        María Rodríguez, nuestra fundadora, identificó una brecha importante: mientras las grandes 
                        corporaciones podían permitirse implementar soluciones de IA, las pequeñas y medianas empresas 
                        quedaban marginadas de esta revolución tecnológica. Con una visión clara de democratizar la IA, 
                        fundó nuestra empresa con un equipo inicial de 5 personas en un pequeño espacio de coworking en Madrid.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
              
              {/* 2019 */}
              <div className="relative pl-10">
                <div className="absolute left-0 rounded-full w-7 h-7 bg-blue-400 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h2 className="text-xl font-bold text-blue-600 mb-2">2019: Primer programa de formación</h2>
                  <Collapsible>
                    <CollapsibleTrigger className="font-medium text-blue-500 hover:underline w-full text-left">
                      Ver más detalles
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="mt-2">
                        Desarrollamos y lanzamos nuestra primera metodología de formación en IA para empresas, enfocada 
                        especialmente en sectores tradicionales. Este programa piloto se implementó con 10 empresas locales 
                        con resultados sorprendentes: todas reportaron mejoras significativas en sus procesos después de 
                        adaptar soluciones de IA a sus necesidades específicas.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
              
              {/* 2020 */}
              <div className="relative pl-10">
                <div className="absolute left-0 rounded-full w-7 h-7 bg-cyan-500 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h2 className="text-xl font-bold text-blue-600 mb-2">2020: Adaptación y expansión digital</h2>
                  <Collapsible>
                    <CollapsibleTrigger className="font-medium text-blue-500 hover:underline w-full text-left">
                      Ver más detalles
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="mt-2">
                        La pandemia nos obligó a reimaginar nuestra oferta. En tiempo récord, transformamos todos nuestros 
                        programas a formato digital, lo que inesperadamente nos permitió expandir nuestro alcance más allá 
                        de España. Terminamos el año con clientes en 5 países de Europa y América Latina y duplicamos 
                        nuestro equipo.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
              
              {/* 2021 */}
              <div className="relative pl-10">
                <div className="absolute left-0 rounded-full w-7 h-7 bg-teal-500 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h2 className="text-xl font-bold text-blue-600 mb-2">2021: Primera ronda de inversión</h2>
                  <Collapsible>
                    <CollapsibleTrigger className="font-medium text-blue-500 hover:underline w-full text-left">
                      Ver más detalles
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="mt-2">
                        Aseguramos nuestra primera ronda de financiación significativa, lo que nos permitió invertir 
                        en I+D para desarrollar herramientas propietarias que facilitaran la implementación de IA en 
                        entornos empresariales no técnicos. Lanzamos nuestra plataforma de aprendizaje adaptativo que 
                        personaliza la formación según el perfil y progreso de cada participante.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
              
              {/* 2022 */}
              <div className="relative pl-10">
                <div className="absolute left-0 rounded-full w-7 h-7 bg-emerald-500 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h2 className="text-xl font-bold text-blue-600 mb-2">2022: Expansión sectorial</h2>
                  <Collapsible>
                    <CollapsibleTrigger className="font-medium text-blue-500 hover:underline w-full text-left">
                      Ver más detalles
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="mt-2">
                        Desarrollamos módulos especializados para sectores específicos como salud, educación, manufactura y 
                        servicios financieros. Esta especialización nos permitió ofrecer soluciones mucho más relevantes y 
                        efectivas para cada industria, multiplicando por tres nuestra cartera de clientes.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
              
              {/* 2023 */}
              <div className="relative pl-10">
                <div className="absolute left-0 rounded-full w-7 h-7 bg-green-500 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h2 className="text-xl font-bold text-blue-600 mb-2">2023: Reconocimiento internacional</h2>
                  <Collapsible>
                    <CollapsibleTrigger className="font-medium text-blue-500 hover:underline w-full text-left">
                      Ver más detalles
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="mt-2">
                        Fuimos reconocidos como empresa innovadora en el campo de la educación tecnológica por la Comisión Europea. 
                        Además, establecimos alianzas estratégicas con universidades y centros de investigación para 
                        mantenernos a la vanguardia de la innovación y asegurar que nuestros programas siempre incorporen 
                        los últimos avances.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
              
              {/* 2024 */}
              <div className="relative pl-10">
                <div className="absolute left-0 rounded-full w-7 h-7 bg-green-400 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h2 className="text-xl font-bold text-blue-600 mb-2">2024: Mirando al futuro</h2>
                  <Collapsible>
                    <CollapsibleTrigger className="font-medium text-blue-500 hover:underline w-full text-left">
                      Ver más detalles
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="mt-2">
                        Actualmente, estamos expandiendo nuestras operaciones a nivel global con nuevas oficinas en 
                        Latinoamérica y trabajando en un ambicioso programa de certificación en IA para profesionales 
                        de diversos sectores. Nuestro objetivo es impactar positivamente en más de 1.000 organizaciones 
                        en los próximos tres años, siempre manteniendo nuestra misión de hacer la IA accesible para todos.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-xl font-bold mb-4 text-center">¿Quieres formar parte de nuestra historia?</h3>
            <div className="flex justify-center">
              <Button asChild>
                <Link to="/formulario">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NuestraHistoria;
