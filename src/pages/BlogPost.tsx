
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainNavigation from '@/components/MainNavigation';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Mock blog data (same as in Blog.tsx to maintain consistency)
const blogPosts = [
  {
    id: 1,
    title: "Cómo la IA está Transformando la Formación Empresarial",
    excerpt: "Descubre las formas en que la inteligencia artificial está revolucionando los métodos tradicionales de formación en entornos corporativos.",
    content: `
      <p>La inteligencia artificial está redefiniendo la manera en que las empresas abordan la formación de sus empleados. Con soluciones basadas en IA, las organizaciones pueden crear programas de aprendizaje personalizados que se adaptan a las necesidades individuales de cada empleado.</p>
      
      <h2>Personalización a Escala</h2>
      <p>Uno de los mayores beneficios de la IA en la formación empresarial es la capacidad de personalizar el contenido para cada estudiante sin aumentar los costos operativos. Los algoritmos de aprendizaje automático pueden analizar el rendimiento, preferencias y necesidades de cada empleado para ofrecer materiales específicamente diseñados para maximizar su aprendizaje.</p>
      
      <h2>Análisis de Progreso en Tiempo Real</h2>
      <p>Las plataformas de formación impulsadas por IA proporcionan análisis detallados sobre el progreso de los estudiantes. Los gerentes y formadores pueden identificar rápidamente áreas problemáticas y ajustar los programas en consecuencia, lo que resulta en una mejor retención del conocimiento y aplicación práctica.</p>
      
      <h2>Asistentes Virtuales para el Aprendizaje</h2>
      <p>Los chatbots y asistentes virtuales están transformando la experiencia de aprendizaje al proporcionar soporte 24/7. Estos asistentes pueden responder preguntas, ofrecer explicaciones adicionales y guiar a los empleados a través de materiales complejos, todo a su propio ritmo.</p>
      
      <h2>Simulaciones Realistas</h2>
      <p>La IA permite crear simulaciones de trabajo realistas que ayudan a los empleados a practicar habilidades en un entorno seguro. Estas experiencias inmersivas son particularmente valiosas para roles que involucran toma de decisiones críticas o interacciones con clientes.</p>
    `,
    date: "10 Abr 2025",
    author: "María Rodríguez",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    relatedPosts: [2, 3]
  },
  {
    id: 2,
    title: "5 Tendencias de IA que Cambiarán tu Negocio en 2025",
    excerpt: "Análisis de las principales tendencias en inteligencia artificial que tendrán un impacto significativo en las empresas durante el próximo año.",
    content: `
      <p>La inteligencia artificial continúa evolucionando a un ritmo acelerado, introduciendo nuevas posibilidades para las empresas en todos los sectores. Aquí analizamos las cinco tendencias de IA más importantes que transformarán los negocios en 2025.</p>
      
      <h2>1. Aprendizaje Federado</h2>
      <p>El aprendizaje federado permite a las organizaciones entrenar modelos de IA sin comprometer la privacidad de los datos. Esta tecnología distribuye el entrenamiento a través de múltiples dispositivos o servidores, manteniendo los datos sensibles donde se originan mientras contribuyen al modelo global.</p>
      
      <h2>2. IA Generativa Empresarial</h2>
      <p>Los modelos generativos como GPT-4 están siendo adaptados específicamente para aplicaciones empresariales, permitiendo la creación automática de contenido, código y documentación técnica personalizada para las necesidades específicas de cada organización.</p>
      
      <h2>3. IA Consciente del Contexto</h2>
      <p>Los sistemas de IA ahora pueden comprender mejor el contexto en el que operan, lo que resulta en interacciones más naturales y relevantes. Esta capacidad mejora significativamente la experiencia del usuario en aplicaciones empresariales.</p>
      
      <h2>4. Automatización Hiperinteligente</h2>
      <p>La combinación de múltiples tecnologías de IA está permitiendo la automatización de procesos cada vez más complejos, reduciendo costos operativos y liberando a los empleados para tareas de mayor valor estratégico.</p>
      
      <h2>5. IA Explicable (XAI)</h2>
      <p>A medida que aumenta la adopción de IA en procesos críticos, crece la demanda de transparencia en la toma de decisiones algorítmicas. La IA Explicable proporciona métodos para comprender cómo y por qué un modelo de IA llega a determinadas conclusiones.</p>
    `,
    date: "5 Abr 2025",
    author: "Carlos Sánchez",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    relatedPosts: [1, 6]
  },
  {
    id: 3,
    title: "Implementando ChatGPT en tu Estrategia de Formación",
    excerpt: "Guía práctica sobre cómo integrar modelos de lenguaje avanzados como ChatGPT en los programas de formación corporativa.",
    content: `
      <p>Los modelos de lenguaje como ChatGPT están revolucionando la formación empresarial al ofrecer experiencias de aprendizaje interactivas y personalizadas. Esta guía explora cómo implementar efectivamente estas tecnologías en tu estrategia formativa.</p>
      
      <h2>Creación de Tutores Virtuales Personalizados</h2>
      <p>ChatGPT puede funcionar como un tutor virtual disponible las 24 horas, respondiendo preguntas específicas y proporcionando explicaciones adaptadas al nivel de conocimiento de cada empleado. Esta disponibilidad constante acelera el proceso de aprendizaje y reduce la frustración.</p>
      
      <h2>Generación de Contenido Formativo</h2>
      <p>Utiliza ChatGPT para crear materiales de formación personalizados, incluyendo estudios de caso, escenarios de práctica y evaluaciones. La capacidad del modelo para generar contenido relevante y específico del sector ahorra tiempo y recursos en el desarrollo de programas formativos.</p>
      
      <h2>Simulación de Conversaciones y Situaciones</h2>
      <p>Una aplicación particularmente valiosa es la simulación de diálogos o escenarios que los empleados podrían encontrar en su trabajo diario. Por ejemplo, los representantes de atención al cliente pueden practicar la gestión de reclamaciones con un ChatGPT configurado para imitar las interacciones con clientes.</p>
      
      <h2>Análisis de Necesidades Formativas</h2>
      <p>ChatGPT puede ayudar a identificar lagunas de conocimiento mediante conversaciones con los empleados. Al analizar estas interacciones, los departamentos de formación pueden detectar áreas que requieren atención adicional y ajustar los programas en consecuencia.</p>
      
      <h2>Consideraciones de Implementación</h2>
      <p>Para una implementación exitosa, es esencial establecer límites claros sobre el uso de ChatGPT, garantizar la precisión de la información proporcionada y complementar estas interacciones con supervisión humana cuando sea necesario.</p>
    `,
    date: "2 Abr 2025",
    author: "Ana Martínez",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    relatedPosts: [1, 5]
  },
  {
    id: 4,
    title: "El Futuro del Aprendizaje: IA y Realidad Virtual",
    excerpt: "Exploramos cómo la combinación de inteligencia artificial y tecnologías inmersivas está creando nuevas posibilidades en la educación empresarial.",
    content: `
      <p>La convergencia de la inteligencia artificial y la realidad virtual está abriendo nuevas fronteras en la formación empresarial, creando experiencias de aprendizaje inmersivas que mejoran significativamente la retención y aplicación del conocimiento.</p>
      
      <h2>Entornos de Aprendizaje Adaptables</h2>
      <p>La combinación de IA y RV permite crear entornos de formación que se adaptan dinámicamente al comportamiento del usuario. A medida que el empleado interactúa con el entorno virtual, la IA ajusta la dificultad, introduce nuevos desafíos o proporciona asistencia adicional según sea necesario.</p>
      
      <h2>Formación Basada en Escenarios</h2>
      <p>Los escenarios de formación en RV potenciados por IA ofrecen un nivel de realismo sin precedentes. Los empleados pueden practicar habilidades en situaciones que replican con precisión su entorno de trabajo, con personajes virtuales que responden de manera natural gracias a algoritmos de IA avanzados.</p>
      
      <h2>Análisis Cognitivo y Biométrico</h2>
      <p>Las tecnologías de RV equipadas con sensores pueden recopilar datos sobre respuestas cognitivas y biométricas durante las sesiones de formación. La IA analiza estos datos para proporcionar información sobre el nivel de atención, compromiso y estrés del alumno, permitiendo personalizar aún más la experiencia.</p>
      
      <h2>Colaboración Virtual Mejorada</h2>
      <p>Los espacios de trabajo virtuales facilitados por IA permiten a equipos geográficamente dispersos colaborar como si estuvieran en la misma habitación. Estos entornos pueden incluir asistentes virtuales que facilitan las reuniones, proporcionan recursos relevantes y documentan las decisiones importantes.</p>
      
      <h2>Escalabilidad y Accesibilidad</h2>
      <p>A medida que disminuyen los costos del hardware de RV y aumenta la eficiencia de los algoritmos de IA, estas soluciones formativas se vuelven más accesibles para organizaciones de todos los tamaños, democratizando el acceso a experiencias de aprendizaje de alta calidad.</p>
    `,
    date: "28 Mar 2025",
    author: "Miguel López",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    relatedPosts: [3, 5]
  },
  {
    id: 5,
    title: "Casos de Éxito: Empresas que Revolucionaron su Formación con IA",
    excerpt: "Analizamos ejemplos reales de organizaciones que han transformado sus programas formativos mediante la aplicación de soluciones basadas en IA.",
    content: `
      <p>Numerosas empresas están reportando mejoras significativas en sus programas de formación tras la implementación de soluciones basadas en inteligencia artificial. Estos casos de éxito ilustran el potencial transformador de la IA en el desarrollo del talento.</p>
      
      <h2>Banco Global XYZ: Formación Personalizada a Escala</h2>
      <p>Este banco multinacional implementó una plataforma de aprendizaje impulsada por IA que analiza las fortalezas, debilidades y objetivos profesionales de cada empleado para crear planes de desarrollo personalizados. El resultado fue un aumento del 40% en la finalización de cursos y una mejora del 25% en las evaluaciones de rendimiento post-formación.</p>
      
      <h2>Manufacturera Innovación: Formación Técnica con Realidad Aumentada</h2>
      <p>Esta empresa industrial combinó IA y realidad aumentada para crear un sistema de formación que guía a los técnicos a través de procedimientos complejos de mantenimiento. Los nuevos técnicos alcanzaron niveles de competencia en la mitad del tiempo que con métodos tradicionales, y los errores durante el mantenimiento se redujeron en un 60%.</p>
      
      <h2>Retail Future: Asistentes Virtuales para Formación en Ventas</h2>
      <p>Esta cadena minorista desarrolló asistentes virtuales basados en IA que simulan interacciones con clientes para formar a su personal de ventas. El sistema puede representar diferentes tipos de clientes y escenarios, proporcionando retroalimentación inmediata sobre el enfoque del vendedor. Tras la implementación, las ventas por empleado aumentaron un 15%.</p>
      
      <h2>Tech Solutions Inc.: Codificación Colaborativa con IA</h2>
      <p>Esta empresa tecnológica implementó un entorno de aprendizaje donde los desarrolladores junior trabajan junto a asistentes de IA que sugieren mejoras de código, identifican errores potenciales y explican conceptos complejos. El tiempo de incorporación de nuevos desarrolladores se redujo en un 35%, y la calidad del código mejoró significativamente.</p>
      
      <h2>Factores Comunes de Éxito</h2>
      <p>Estos casos revelan factores clave para una implementación exitosa: compromiso de la dirección, integración con flujos de trabajo existentes, enfoque en problemas específicos de negocio, y una combinación equilibrada de tecnología y elemento humano.</p>
    `,
    date: "25 Mar 2025",
    author: "Laura González",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    relatedPosts: [3, 6]
  },
  {
    id: 6,
    title: "Guía para Evaluar Soluciones de IA para Formación",
    excerpt: "Criterios clave a considerar al seleccionar herramientas de inteligencia artificial para programas de formación en tu organización.",
    content: `
      <p>Elegir la solución de IA adecuada para formación empresarial puede ser un desafío debido a la proliferación de ofertas en el mercado. Esta guía proporciona criterios esenciales para evaluar y seleccionar la tecnología que mejor se adapte a las necesidades específicas de tu organización.</p>
      
      <h2>Alineación con Objetivos de Aprendizaje</h2>
      <p>Antes de evaluar cualquier tecnología, define claramente los objetivos de aprendizaje que deseas alcanzar. La solución seleccionada debe demostrar capacidad para satisfacer estos objetivos específicos, ya sea mejorar habilidades técnicas, desarrollar competencias blandas o transmitir conocimientos específicos del sector.</p>
      
      <h2>Capacidad de Personalización</h2>
      <p>Evalúa hasta qué punto la solución puede adaptarse a las necesidades individuales de los alumnos. Las mejores plataformas utilizan datos de rendimiento para ajustar dinámicamente el contenido, la dificultad y el ritmo según el progreso y preferencias de cada empleado.</p>
      
      <h2>Integración con Sistemas Existentes</h2>
      <p>La solución debe integrarse sin problemas con los sistemas de gestión del aprendizaje (LMS) existentes y otras herramientas empresariales. Una integración deficiente puede resultar en silos de datos, duplicación de esfuerzos y una experiencia fragmentada para los usuarios.</p>
      
      <h2>Escalabilidad y Accesibilidad</h2>
      <p>Considera si la solución puede escalar eficientemente a medida que crece tu organización y si es accesible para empleados con diferentes niveles de conocimiento tecnológico y posibles diversidades funcionales.</p>
      
      <h2>Métricas y Análisis</h2>
      <p>Las capacidades analíticas son cruciales para medir el impacto de la formación. Busca plataformas que ofrezcan métricas detalladas sobre participación, progreso y, lo más importante, transferencia de conocimientos y habilidades al entorno laboral real.</p>
      
      <h2>Consideraciones Éticas y de Privacidad</h2>
      <p>Evalúa cómo la solución maneja los datos de los empleados, su transparencia algorítmica y su adherencia a estándares éticos en IA. Estos aspectos son cada vez más importantes tanto para el cumplimiento normativo como para la confianza de los empleados.</p>
    `,
    date: "20 Mar 2025",
    author: "David Fernández",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    relatedPosts: [2, 5]
  }
];

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const id = parseInt(postId || "1");
  
  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
        <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <MainNavigation />
        </header>
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-8">Artículo no encontrado</h1>
          <p className="mb-8">Lo sentimos, el artículo que buscas no está disponible.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al blog</span>
          </Link>
        </main>
      </div>
    );
  }
  
  const relatedArticles = post.relatedPosts ? post.relatedPosts.map(id => 
    blogPosts.find(post => post.id === id)
  ).filter(Boolean) : [];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary mb-8 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al blog</span>
          </Link>
          
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-80 mb-10">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="flex justify-between items-center border-t border-gray-200 mt-10 pt-6">
              <Button variant="outline">
                <Share2 size={18} />
                Compartir artículo
              </Button>
              
              <Link to="/formulario">
                <Button>Consulta con nuestros expertos</Button>
              </Link>
            </div>
          </div>
          
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((related) => related && (
                  <Card key={related.id} className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                    <div className="overflow-hidden h-40">
                      <img 
                        src={related.imageUrl} 
                        alt={related.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Link to={`/blog/${related.id}`}>
                        <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{related.title}</h3>
                      </Link>
                      <p className="text-gray-600 line-clamp-2">{related.excerpt}</p>
                      
                      <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{related.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{related.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          <div className="text-center mt-16 py-8">
            <h3 className="text-xl font-bold mb-4">¿Te interesa mejorar la formación en tu empresa?</h3>
            <p className="mb-6">Descubre cómo nuestras soluciones de IA pueden transformar el aprendizaje en tu organización</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/checkout">
                <Button size="lg">Comienza ahora</Button>
              </Link>
              <Link to="/formulario">
                <Button variant="outline" size="lg">Solicita una demo</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
