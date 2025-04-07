
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
            El Futur de la Formació en IA És Aquí
          </span>
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Solucions de Formació en IA per a <span className="text-primary">Empreses Modernes</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Transforma les operacions del teu negoci amb els nostres <span className="text-primary font-medium">programes de formació en IA d'avantguarda</span>. Ens especialitzem en ajudar organitzacions a aprofitar el poder de la intel·ligència artificial mitjançant solucions de formació integrals i personalitzades que impulsen la innovació i el creixement.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button className="group bg-primary hover:bg-primary/90" size="lg">
              Comença Ara
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Més Informació
            </Button>
          </div>
        </motion.div>
      </section>

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
              El Nostre Procés de Formació
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Un enfocament sistemàtic per transformar el teu negoci mitjançant la implementació d'IA
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
              Els Nostres Serveis
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Oferim un conjunt integral de solucions de formació en IA dissenyades per satisfer les teves necessitats específiques de la indústria i els objectius empresarials. Els nostres programes dirigits per experts asseguren que el teu equip es mantingui al capdavant en el panorama d'IA en ràpida evolució.
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
              Plans de Preus Transparents
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Escull el pla perfecte per a les necessitats del teu negoci
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
                      Més Popular
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
                      Comença Ara
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
              Històries d'Èxit
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Descobreix com les empreses s'han transformat amb les nostres solucions de formació en IA
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
                    <p className="mt-2 text-sm text-gray-600">Millora d'Eficiència</p>
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
              Per Què Triar TechAssistant
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Uneix-te a centenars d'empreses que han transformat les seves operacions a través dels nostres programes de formació en IA integrals. El nostre enfocament combina experiència, innovació i implementació pràctica.
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
              <span className="text-primary">Tecnologia Blockchain</span> per a l'Excel·lència en Formació d'IA
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Descobreix com integrar la tecnologia blockchain amb les nostres solucions de formació d'IA pot revolucionar les operacions del teu negoci i les estratègies de gestió de dades.
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
                Com el Blockchain <span className="text-cyan-500">Transforma</span> la Formació en IA
              </h3>
              <p className="text-gray-600 mb-6">
                El nostre enfocament innovador combina el poder de la tecnologia blockchain amb metodologies avançades de formació en IA per crear un ecosistema segur, transparent i eficient per a les necessitats d'intel·ligència empresarial.
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
                  Full de Ruta d'<span className="text-cyan-500">Implementació</span> del Blockchain
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
                  <p className="text-gray-600 text-sm mb-4">Les empreses que implementen les nostres solucions de formació d'IA millorades amb blockchain informen:</p>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Millora en Seguretat de Dades</span>
                      <span className="font-bold text-primary">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "87%" }}></div>
                    </div>
                    
                    <div className="flex justify-between mb-2 mt-4">
                      <span className="text-gray-600">Eficiència Operativa</span>
                      <span className="font-bold text-primary">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    
                    <div className="flex justify-between mb-2 mt-4">
                      <span className="text-gray-600">Reducció de Costos</span>
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
              Preparat per <span className="text-primary">Transformar el teu Negoci</span>?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fes el primer pas cap a l'<span className="text-primary font-medium">excel·lència en IA</span>. El nostre equip d'experts està preparat per ajudar-te a desenvolupar un programa de formació personalitzat que satisfaci les teves necessitats i objectius específics.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span>contacte@techassistant.ai</span>
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
              Contacta'ns
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const trainingProcess = [
  {
    title: "Avaluació",
    description: "Analitzem les necessitats del teu negoci i les capacitats actuals d'IA per crear un pla de formació personalitzat.",
  },
  {
    title: "Planificació",
    description: "Desenvolupem un currículum estructurat adaptat al nivell d'habilitat i objectius empresarials del teu equip.",
  },
  {
    title: "Implementació",
    description: "Sessions de formació pràctiques amb exercicis pràctics i aplicacions al món real.",
  },
  {
    title: "Avaluació",
    description: "Mesurem el progrés i ajustem el programa per garantir resultats òptims i ROI.",
  },
];

const pricingPlans = [
  {
    title: "Inicial",
    description: "Perfecte per a petits equips que comencen amb IA",
    price: 999,
    featured: false,
    features: [
      "Fins a 5 membres d'equip",
      "Mòduls bàsics de formació en IA",
      "Informes de progrés mensuals",
      "Suport per correu electrònic",
      "Accés a recursos d'aprenentatge",
    ],
  },
  {
    title: "Professional",
    description: "Ideal per a negocis en creixement",
    price: 1999,
    featured: true,
    features: [
      "Fins a 15 membres d'equip",
      "Mòduls avançats de formació en IA",
      "Informes de progrés setmanals",
      "Suport prioritari",
      "Itineraris d'aprenentatge personalitzats",
      "Sessions de tutoria individuals",
    ],
  },
  {
    title: "Empresarial",
    description: "Solució completa per a grans organitzacions",
    price: 4999,
    featured: false,
    features: [
      "Membres d'equip il·limitats",
      "Accés complet al currículum d'IA",
      "Seguiment diari del progrés",
      "Suport dedicat 24/7",
      "Desenvolupament de contingut personalitzat",
      "Formació in situ disponible",
    ],
  },
];

const successStories = [
  {
    company: "TechCorp Solutions",
    industry: "Desenvolupament de Software",
    improvement: 85,
    testimonial: "El programa de formació de TechAssistant ens va ajudar a implementar solucions d'IA que van reduir el nostre cicle de desenvolupament en un 60% i van millorar significativament la qualitat del codi.",
  },
  {
    company: "Global Logistics Inc.",
    industry: "Gestió de la Cadena de Subministrament",
    improvement: 75,
    testimonial: "Després d'implementar solucions d'IA apreses a través de TechAssistant, hem vist una millora del 75% en les prediccions de temps d'entrega i en la gestió d'inventari.",
  },
  {
    company: "FinanceFirst",
    industry: "Serveis Financers",
    improvement: 90,
    testimonial: "El programa de formació en IA va transformar el nostre procés d'avaluació de riscos, el que va portar a un 90% més de rapidesa en l'anàlisi i prediccions més precises.",
  },
  {
    company: "HealthCare Plus",
    industry: "Sanitat",
    improvement: 80,
    testimonial: "La formació de TechAssistant ens va ajudar a implementar eines de diagnòstic d'IA, el que va resultar en un 80% més de rapidesa en l'avaluació de pacients i una millor precisió.",
  },
];

const services = [
  {
    title: "Programes Personalitzats de Formació en IA",
    description: "Solucions de formació a mida dissenyades específicament per a les necessitats del teu negoci i els requisits de la teva indústria.",
    icon: Brain,
    features: [
      "Desenvolupament de currículum personalitzat",
      "Exercicis pràctics",
      "Estudis de casos específics de la indústria",
    ],
  },
  {
    title: "Analítica de Rendiment",
    description: "Segueix i mesura l'impacte de la implementació d'IA amb analítiques i informes integrals.",
    icon: BarChart,
    features: [
      "Seguiment del progrés en temps real",
      "Benchmarking de rendiment",
      "Eines de mesurament de ROI",
    ],
  },
  {
    title: "Tallers d'Equip",
    description: "Tallers interactius per construir la confiança i l'experiència del teu equip en tecnologies d'IA.",
    icon: Users,
    features: [
      "Sessions de formació en viu",
      "Exercicis en grup",
      "Aprenentatge col·laboratiu",
    ],
  },
];

const benefits = [
  {
    title: "Major Eficiència",
    description: "Optimitza les operacions i redueix el treball manual mitjançant l'automatització d'IA, estalviant fins a un 40% en costos operacionals.",
  },
  {
    title: "Orientació Experta",
    description: "Aprèn d'experts de la indústria amb historials provats en implementació d'IA en diversos sectors.",
  },
  {
    title: "Avantatge Competitiu",
    description: "Mantén-te al capdavant de la competència amb tecnologies d'IA d'avantguarda i estratègies d'implementació.",
  },
  {
    title: "Solucions Escalables",
    description: "Els nostres programes de formació creixen amb el teu negoci, adaptant-se a nous reptes i oportunitats.",
  },
  {
    title: "Enfocament en ROI",
    description: "Programes de formació dissenyats per oferir resultats empresarials mesurables i millores tangibles.",
  },
  {
    title: "Suport Continu",
    description: "Accés a assistència contínua, actualitzacions i recursos per garantir l'èxit a llarg termini.",
  },
];

const blockchainBenefits = [
  {
    title: "Seguretat i Privacitat de Dades Millorades",
    description: "La seguretat criptogràfica del blockchain garanteix que les teves dades de formació en IA romanen a prova de manipulacions i confidencials, protegint la intel·ligència empresarial sensible i la informació dels clients.",
    icon: Lock
  },
  {
    title: "Procedència de Dades Transparent",
    description: "Estableix una propietat clara i un historial dels conjunts de dades de formació d'IA, assegurant el compliment dels requisits normatius i creant confiança amb les parts interessades a través de registres immutables.",
    icon: FileText
  },
  {
    title: "Formació Descentralitzada de Models d'IA",
    description: "Distribueix els teus processos de formació d'IA a través d'una xarxa blockchain segura, reduint els punts únics de fallada i creant una infraestructura de formació més resilient i escalable.",
    icon: Database
  },
  {
    title: "Automatització amb Contractes Intel·ligents",
    description: "Aprofita els contractes intel·ligents de blockchain per automatitzar fluxos de treball complexos de formació d'IA, reduint la càrrega administrativa i assegurant una execució consistent dels processos empresarials.",
    icon: Zap
  }
];

const blockchainRoadmap = [
  {
    title: "Avaluació i Desenvolupament d'Estratègia",
    description: "Anàlisi integral de la teva infraestructura existent i desenvolupament d'una estratègia d'integració de blockchain a mida."
  },
  {
    title: "Implementació de Prova de Concepte",
    description: "Desplegament a petita escala de formació d'IA millorada amb blockchain en un entorn controlat per demostrar valor."
  },
  {
    title: "Integració Empresarial",
    description: "Integració a escala completa de la tecnologia blockchain amb els teus sistemes existents de formació d'IA i processos empresarials."
  },
  {
    title: "Optimització Contínua",
    description: "Refinament continu del teu ecosistema blockchain-IA per maximitzar l'eficiència, la seguretat i el retorn de la inversió."
  }
];

export default Index;

