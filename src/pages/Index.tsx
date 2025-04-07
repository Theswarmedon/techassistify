import { Brain, ChevronRight, BarChart, Users, Zap, CheckCircle2, ArrowRight, Mail, Phone, MapPin, Lock, Database, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <img 
            src="/lovable-uploads/9a34caea-fc56-4824-8161-ef0275cc4256.png" 
            alt="TechAssistant Logo" 
            className="w-48 h-32 mx-auto mb-8 object-contain"
          />
          <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
            El Futuro de la Formación en IA Está Aquí
          </span>
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Soluciones de Formación en IA para <span className="text-primary">Empresas Modernas</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Transforma las operaciones de tu negocio con nuestros <span className="text-primary font-medium">programas de formación en IA de vanguardia</span>. Nos especializamos en ayudar a organizaciones a aprovechar el poder de la inteligencia artificial mediante soluciones de formación integrales y personalizadas que impulsan la innovación y el crecimiento.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button className="group bg-primary hover:bg-primary/90" size="lg">
              Comienza Ahora
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Más Información
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Rest of the code remains the same, just with Spanish translations */}
      {/* Training Process Section */}
      <section className="py-24 bg-sky-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestro Proceso de Formación
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Un enfoque sistemático para transformar tu negocio mediante la implementación de IA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {trainingProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < trainingProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos un conjunto integral de soluciones de formación en IA diseñadas para satisfacer tus necesidades específicas de la industria y los objetivos empresariales. Nuestros programas dirigidos por expertos aseguran que tu equipo se mantenga a la vanguardia en el panorama de IA en rápida evolución.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Planes de Precios Transparentes
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Escoge el plan perfecto para las necesidades de tu negocio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`relative ${plan.featured ? 'border-primary shadow-lg' : ''}`}>
                  {plan.featured && (
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                      Más Popular
                    </span>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-600">/mes</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full ${plan.featured ? 'bg-primary' : ''}`}>
                      Comienza Ahora
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-sky-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Historias de Éxito
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre cómo las empresas se han transformado con nuestras soluciones de formación en IA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {successStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">{story.improvement}%</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{story.company}</h3>
                    <p className="text-gray-600">{story.industry}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{story.testimonial}</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-primary rounded-full transition-all duration-1000" 
                        style={{ width: `${story.improvement}%` }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Mejora de Eficiencia</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-sky-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Por Qué Elegir TechAssistant
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Únete a cientos de empresas que han transformado sus operaciones a través de nuestros programas de formación en IA integrales. Nuestro enfoque combina experiencia, innovación e implementación práctica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="text-primary">Tecnología Blockchain</span> para la Excelencia en Formación de IA
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre cómo integrar la tecnología blockchain con nuestras soluciones de formación de IA puede revolucionar las operaciones de tu negocio y las estrategias de gestión de datos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:pr-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Cómo el Blockchain <span className="text-cyan-500">Transforma</span> la Formación en IA
              </h3>
              <p className="text-gray-600 mb-6">
                Nuestro enfoque innovador combina el poder de la tecnología blockchain con metodologías avanzadas de formación en IA para crear un ecosistema seguro, transparente y eficiente para las necesidades de inteligencia empresarial.
              </p>
              
              <div className="space-y-6">
                {blockchainBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        <span className="text-cyan-500">{benefit.title}</span>
                      </h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-sky-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Hoja de Ruta de <span className="text-cyan-500">Implementación</span> del Blockchain
                </h3>
                
                <div className="space-y-4 mt-6">
                  {blockchainRoadmap.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{step.title}</h4>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </div>
                      {index < blockchainRoadmap.length - 1 && (
                        <div className="absolute left-5 top-10 h-full w-0.5 bg-primary/20"></div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <span className="text-cyan-500">Potencial de ROI</span>
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">Las empresas que implementan nuestras soluciones de formación de IA mejoradas con blockchain informan:</p>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Mejora en Seguridad de Datos</span>
                      <span className="font-bold text-primary">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "87%" }}></div>
                    </div>
                    
                    <div className="flex justify-between mb-2 mt-4">
                      <span className="text-gray-600">Eficiencia Operativa</span>
                      <span className="font-bold text-primary">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    
                    <div className="flex justify-between mb-2 mt-4">
                      <span className="text-gray-600">Reducción de Costos</span>
                      <span className="font-bold text-primary">42%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "42%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 text-center">
            <Button className="bg-primary hover:bg-primary/90" size="lg">
              Programa una Consulta de Blockchain
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ¿Preparado para <span className="text-primary">Transformar tu Negocio</span>?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Da el primer paso hacia la <span className="text-primary font-medium">excelencia en IA</span>. Nuestro equipo de expertos está preparado para ayudarte a desarrollar un programa de formación personalizado que satisfaga tus necesidades y objetivos específicos.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span>contacto@techassistant.ai</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span>123 Innovation Drive, Silicon Valley, CA 94025</span>
              </div>
            </div>
            <Button className="mt-8 bg-primary hover:bg-primary/90" size="lg">
              Contáctanos
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const trainingProcess = [
  {
    title: "Evaluación",
    description: "Analizamos las necesidades de tu negocio y las capacidades actuales de IA para crear un plan de formación personalizado.",
  },
  {
    title: "Planificación",
    description: "Desarrollamos un currículum estructurado adaptado al nivel de habilidad y objetivos empresariales de tu equipo.",
  },
  {
    title: "Implementación",
    description: "Sesiones de formación prácticas con ejercicios prácticos y aplicaciones del mundo real.",
  },
  {
    title: "Evaluación",
    description: "Medimos el progreso y ajustamos el programa para garantizar resultados óptimos y ROI.",
  },
];

const pricingPlans = [
  {
    title: "Inicial",
    description: "Perfecto para pequeños equipos que comienzan con IA",
    price: 999,
    featured: false,
    features: [
      "Hasta 5 miembros de equipo",
      "Módulos básicos de formación en IA",
      "Informes de progreso mensuales",
      "Soporte por correo electrónico",
      "Acceso a recursos de aprendizaje",
    ],
  },
  {
    title: "Profesional",
    description: "Ideal para negocios en crecimiento",
    price: 1999,
    featured: true,
    features: [
      "Hasta 15 miembros de equipo",
      "Módulos avanzados de formación en IA",
      "Informes de progreso semanales",
      "Soporte prioritario",
      "Itinerarios de aprendizaje personalizados",
      "Sesiones de tutoría individuales",
    ],
  },
  {
    title: "Empresarial",
    description: "Solución completa para grandes organizaciones",
    price: 4999,
    featured: false,
    features: [
      "Miembros de equipo ilimitados",
      "Acceso completo al currículum de IA",
      "Seguimiento diario del progreso",
      "Soporte dedicado 24/7",
      "Desarrollo de contenido personalizado",
      "Formación in situ disponible",
    ],
  },
];

const successStories = [
  {
    company: "TechCorp Solutions",
    industry: "Desarrollo de Software",
    improvement: 85,
    testimonial: "El programa de formación de TechAssistant nos ayudó a implementar soluciones de IA que redujeron nuestro ciclo de desarrollo en un 60% y mejoraron significativamente la calidad del código.",
  },
  {
    company: "Global Logistics Inc.",
    industry: "Gestión de la Cadena de Suministro",
    improvement: 75,
    testimonial: "Después de implementar soluciones de IA aprendidas a través de TechAssistant, hemos visto una mejora del 75% en las predicciones de tiempo de entrega y en la gestión de inventario.",
  },
  {
    company: "FinanceFirst",
    industry: "Servicios Financieros",
    improvement: 90,
    testimonial: "El programa de formación en IA transformó nuestro proceso de evaluación de riesgos, lo que llevó a un 90% más de rapidez en el análisis y predicciones más precisas.",
  },
  {
    company: "HealthCare Plus",
    industry: "Sanitat",
    improvement: 80,
    testimonial: "La formación de TechAssistant nos ayudó a implementar herramientas de diagnóstico de IA, lo que resultó en un 80% más de rapidez en la evaluación de pacientes y una mejor precisión.",
  },
];

const services = [
  {
    title: "Programas Personalizados de Formación en IA",
    description: "Soluciones de formación a medida diseñadas específicamente para las necesidades de tu negocio y los requisitos de tu industria.",
    icon: Brain,
    features: [
      "Desarrollo de currículum personalizado",
      "Ejercicios prácticos",
      "Estudios de casos específicos de la industria",
    ],
  },
  {
    title: "Analítica de Rendimiento",
    description: "Sigue y mide el impacto de la implementación de IA con analíticas e informes integrales.",
    icon: BarChart,
    features: [
      "Seguimiento del progreso en tiempo real",
      "Benchmarking de rendimiento",
      "Herramientas de medición de ROI",
    ],
  },
  {
    title: "Talleres de Equipo",
    description: "Talleres interactivos para construir la confianza y la experiencia de tu equipo en tecnologías de IA.",
    icon: Users,
    features: [
      "Sesiones de formación en vivo",
      "Ejercicios en grupo",
      "Aprendizaje colaborativo",
    ],
  },
];

const benefits = [
  {
    title: "Mayor Eficiencia",
    description: "Optimiza las operaciones y reduce el trabajo manual mediante la automatización de IA, ahorrando hasta un 40% en costos operacionales.",
  },
  {
    title: "Orientación Experta",
    description: "Aprende de expertos de la industria con historiales probados en implementación de IA en diversos sectores.",
  },
  {
    title: "Ventaja Competitiva",
    description: "Mantente a la vanguardia de la competencia con tecnologías de IA de vanguardia y estrategias de implementación.",
  },
  {
    title: "Soluciones Escalables",
    description: "Nuestros programas de formación crecen con tu negocio, adaptándose a nuevos retos y oportunidades.",
  },
  {
    title: "Enfoque en ROI",
    description: "Programas de formación diseñados para ofrecer resultados empresariales medibles y mejoras tangibles.",
  },
  {
    title: "Soporte Continuo",
    description: "Acceso a asistencia continua, actualizaciones y recursos para garantizar el éxito a largo plazo.",
  },
];

const blockchainBenefits = [
  {
    title: "Seguridad y Privacidad de Datos Mejoradas",
    description: "La seguridad criptográfica del blockchain garantiza que tus datos de formación en IA permanecen a prueba de manipulaciones y confidenciales, protegiendo la inteligencia empresarial sensible y la información de los clientes.",
    icon: Lock
  },
  {
    title: "Procedencia de Datos Transparente",
    description: "Establece una propiedad clara y un historial de los conjuntos de datos de formación de IA, asegurando el cumplimiento de los requisitos normativos y creando confianza con las partes interesadas a través de registros inmutables.",
    icon: FileText
  },
  {
    title: "Formación Descentralizada de Modelos de IA",
    description: "Distribuye tus procesos de formación de IA a través de una red blockchain segura, reduciendo los puntos únicos de fallo y creando una infraestructura de formación más resiliente y escalable.",
    icon: Database
  },
  {
    title: "Automatización con Contratos Inteligentes",
    description: "Aprovecha los contratos inteligentes de blockchain para automatizar flujos de trabajo complejos de formación de IA, reduciendo la carga administrativa y asegurando una ejecución consistente de los procesos empresariales.",
    icon: Zap
  }
];

const blockchainRoadmap = [
  {
    title: "Evaluación y Desarrollo de Estrategia",
    description: "Análisis integral de tu infraestructura existente y desarrollo de una estrategia de integración de blockchain a medida."
  },
  {
    title: "Implementación de Prueba de Concepto",
    description: "Despliegue a pequeña escala de formación de IA mejorada con blockchain en un entorno controlado para demostrar valor."
  },
  {
    title: "Integración Empresarial",
    description: "Integración a escala completa de la tecnología blockchain con tus sistemas existentes de formación de IA y procesos empresariales."
  },
  {
    title: "Optimización Continua",
    description: "Refinamiento continuo de tu ecosistema blockchain-IA para maximizar la eficiencia, la seguridad y el retorno de la inversión."
  }
];

export default Index;
