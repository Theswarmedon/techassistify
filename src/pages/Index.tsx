import { Brain, ChevronRight, BarChart, Users, Zap, CheckCircle2, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-red-600">
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
          <span className="bg-secondary/10 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
            El Futur de la Formació en IA és Aquí
          </span>
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-red-600 sm:text-6xl">
            Solucions de Formació en IA per a <span className="text-red-600">Empreses Modernes</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-red-600 max-w-3xl mx-auto">
            Transforma les operacions del teu negoci amb els nostres <span className="text-red-600 font-medium">programes de formació en IA d'última generació</span>. Ens especialitzem en ajudar les organitzacions a aprofitar el poder de la intel·ligència artificial mitjançant solucions de formació integrals i personalitzades que impulsen la innovació i el creixement.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button className="group bg-primary hover:bg-primary/90 text-red-600" size="lg">
              Començar
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-red-600">
              Saber-ne més
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
            <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
              El Nostre Procés de Formació
            </h2>
            <p className="mt-4 text-lg text-red-600 max-w-2xl mx-auto">
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
                    <span className="text-red-600 font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-red-600 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-red-600">{step.description}</p>
                </div>
                {index < trainingProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-red-600" />
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
            <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
              Els Nostres Serveis
            </h2>
            <p className="mt-4 text-lg text-red-600 max-w-2xl mx-auto">
              Oferim una suite completa de solucions de formació en IA dissenyades per satisfer les necessitats específiques del teu sector i els objectius empresarials. Els nostres programes dirigits per experts asseguren que el teu equip es mantingui al capdavant en el panorama de la IA en ràpida evolució.
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
                    <service.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-600 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-red-600">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span className="text-red-600">{feature}</span>
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
            <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
              Plans de Preus Transparents
            </h2>
            <p className="mt-4 text-lg text-red-600 max-w-2xl mx-auto">
              Tria el pla perfecte per a les necessitats del teu negoci
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
                    <CardTitle className="text-red-600">{plan.title}</CardTitle>
                    <CardDescription className="text-red-600">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-red-600">${plan.price}</span>
                      <span className="text-red-600">/mes</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-red-600" />
                          <span className="text-red-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full ${plan.featured ? 'bg-primary text-red-600' : 'text-red-600'}`}>
                      Començar
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
            <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
              Històries d'Èxit
            </h2>
            <p className="mt-4 text-lg text-red-600 max-w-2xl mx-auto">
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
                    <span className="text-red-600 font-bold">{story.improvement}%</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-red-600">{story.company}</h3>
                    <p className="text-red-600">{story.industry}</p>
                  </div>
                </div>
                <p className="text-red-600 mb-4">{story.testimonial}</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-primary rounded-full transition-all duration-1000" 
                        style={{ width: `${story.improvement}%` }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-red-600">Millora de l'Eficiència</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
              Per què Triar TechAssistant
            </h2>
            <p className="mt-4 text-lg text-red-600 max-w-2xl mx-auto">
              Uneix-te a centenars d'empreses que han transformat les seves operacions a través dels nostres programes complets de formació en IA. El nostre enfocament combina experiència, innovació i implementació pràctica.
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
                <h3 className="text-lg font-semibold text-red-600 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-red-600">{benefit.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
              Preparat per <span className="text-red-600">Transformar el teu Negoci</span>?
            </h2>
            <p className="mt-4 text-lg text-red-600">
              Fes el primer pas cap a <span className="text-red-600 font-medium">l'excel·lència en IA</span>. El nostre equip d'experts està preparat per ajudar-te a desenvolupar un programa de formació personalitzat que satisfaci les teves necessitats i objectius específics.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-center gap-2 text-red-600">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-red-600" />
                </div>
                <span>contact@techassistant.ai</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-red-600">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-red-600" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-red-600">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-red-600" />
                </div>
                <span>123 Innovation Drive, Silicon Valley, CA 94025</span>
              </div>
            </div>
            <Button className="mt-8 bg-primary hover:bg-primary/90 text-red-600" size="lg">
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
    description: "Analitzem les necessitats del teu negoci i les capacitats actuals en IA per crear un pla de formació personalitzat.",
  },
  {
    title: "Planificació",
    description: "Desenvolupem un currículum estructurat adaptat al nivell d'habilitat del teu equip i als objectius empresarials.",
  },
  {
    title: "Implementació",
    description: "Sessions de formació pràctica amb exercicis i aplicacions del món real.",
  },
  {
    title: "Avaluació",
    description: "Mesurem el progrés i ajustem el programa per garantir resultats òptims i ROI.",
  },
];

const pricingPlans = [
  {
    title: "Iniciació",
    description: "Perfecte per a petits equips que comencen amb IA",
    price: 999,
    featured: false,
    features: [
      "Fins a 5 membres de l'equip",
      "Mòduls bàsics de formació en IA",
      "Informes mensuals de progrés",
      "Suport per correu electrònic",
      "Accés a recursos d'aprenentatge",
    ],
  },
  {
    title: "Professional",
    description: "Ideal per a empreses en creixement",
    price: 1999,
    featured: true,
    features: [
      "Fins a 15 membres de l'equip",
      "Mòduls avançats de formació en IA",
      "Informes setmanals de progrés",
      "Suport prioritari",
      "Rutes d'aprenentatge personalitzades",
      "Sessions de mentoria 1-a-1",
    ],
  },
  {
    title: "Empresa",
    description: "Solució completa per a grans organitzacions",
    price: 4999,
    featured: false,
    features: [
      "Membres il·limitats de l'equip",
      "Accés complet al currículum d'IA",
      "Seguiment diari del progrés",
      "Suport 24/7 dedicat",
      "Desenvolupament de contingut personalitzat",
      "Formació presencial disponible",
    ],
  },
];

const successStories = [
  {
    company: "TechCorp Solutions",
    industry: "Desenvolupament de Software",
    improvement: 85,
    testimonial: "El programa de formació de TechAssistant ens ha ajudat a implementar solucions d'IA que han reduït el nostre cicle de desenvolupament en un 60% i han millorat significativament la qualitat del codi.",
  },
  {
    company: "Global Logistics Inc.",
    industry: "Gestió de la Cadena de Subministrament",
    improvement: 75,
    testimonial: "Després d'implementar les solucions d'IA apreses amb TechAssistant, hem vist una millora del 75% en les prediccions de temps d'entrega i la gestió d'inventari.",
  },
  {
    company: "FinanceFirst",
    industry: "Serveis Financers",
    improvement: 90,
    testimonial: "El programa de formació en IA ha transformat el nostre procés d'avaluació de riscos, aconseguint un anàlisi un 90% més ràpid i prediccions més precises.",
  },
  {
    company: "HealthCare Plus",
    industry: "Sanitat",
    improvement: 80,
    testimonial: "La formació de TechAssistant ens ha ajudat a implementar eines de diagnòstic amb IA, resultant en un cribratge de pacients un 80% més ràpid i amb més precisió.",
  },
];

const services = [
  {
    title: "Programes de Formació en IA Personalitzats",
    description: "Solucions de formació adaptades específicament a les necessitats del teu negoci i els requisits del sector.",
    icon: Brain,
    features: [
      "Desenvolupament de currículum personalitzat",
      "Exercicis pràctics",
      "Casos d'estudi específics del sector",
    ],
  },
  {
    title: "Analítiques de Rendiment",
    description: "Seguiment i mesura de l'impacte de la implementació d'IA amb analítiques i informes complets.",
    icon: BarChart,
    features: [
      "Seguiment del progrés en temps real",
      "Avaluació comparativa del rendiment",
      "Eines de mesura del ROI",
    ],
  },
  {
    title: "Tallers d'Equip",
    description: "Tallers interactius per construir la confiança i experiència del teu equip en tecnologies d'IA.",
    icon: Users,
    features: [
      "Sessions de formació en directe",
      "Exercicis en grup",
      "Aprenentatge col·laboratiu",
    ],
  },
];

const benefits = [
  {
    title: "Eficiència Millorada",
    description: "Optimitza les operacions i redueix el treball manual mitjançant l'automatització amb IA, estalviant fins a un 40% en costos operatius.",
  },
  {
    title: "Guia Expert",
    description: "Aprèn d'experts del sector amb historial provat en implementació d'IA en diversos sectors.",
  },
  {
    title: "Avantatge Competitiu",
    description: "Mantén-te per davant de la competència amb tecnologies i estratègies d'implementació d'IA d'última generació.",
  },
  {
    title: "Solucions Escalables",
    description: "Els nostres programes de formació creixen amb el teu negoci, adaptant-se a nous reptes i oportunitats.",
  },
  {
    title: "Enfocament en el ROI",
    description: "Programes de formació dissenyats per oferir resultats empresarials mesurables i millores tangibles.",
  },
  {
    title: "Suport Continu",
    description: "Accés a assistència contínua, actualitzacions i recursos per garantir l'èxit a llarg termini.",
  },
];

export default Index;
