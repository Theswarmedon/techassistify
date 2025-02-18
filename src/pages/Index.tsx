
import { Brain, ChevronRight, BarChart, Users, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
            className="w-32 h-32 mx-auto mb-8"
          />
          <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
            The Future of AI Training is Here
          </span>
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            AI Training Solutions for Modern Businesses
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Transform your business operations with our cutting-edge AI training programs. We specialize in helping organizations harness the power of artificial intelligence through comprehensive, tailored training solutions that drive innovation and growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button className="group bg-primary hover:bg-primary/90" size="lg">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </motion.div>
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
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive suite of AI training solutions designed to meet your specific industry needs and business objectives. Our expert-led programs ensure your team stays ahead in the rapidly evolving AI landscape.
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
              Why Choose TechAssistant
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations through our comprehensive AI training programs. Our approach combines expertise, innovation, and practical implementation.
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
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Take the first step towards AI excellence. Our team of experts is ready to help you develop a customized training program that meets your specific needs and objectives.
            </p>
            <Button className="mt-8 bg-primary hover:bg-primary/90" size="lg">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Custom AI Training Programs",
    description: "Tailored training solutions designed specifically for your business needs and industry requirements.",
    icon: Brain,
    features: [
      "Customized curriculum development",
      "Hands-on practical exercises",
      "Industry-specific case studies",
    ],
  },
  {
    title: "Performance Analytics",
    description: "Track and measure the impact of AI implementation with comprehensive analytics and reporting.",
    icon: BarChart,
    features: [
      "Real-time progress tracking",
      "Performance benchmarking",
      "ROI measurement tools",
    ],
  },
  {
    title: "Team Workshops",
    description: "Interactive workshops to build your team's confidence and expertise in AI technologies.",
    icon: Users,
    features: [
      "Live training sessions",
      "Group exercises",
      "Collaborative learning",
    ],
  },
];

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Streamline operations and reduce manual work through AI automation, saving up to 40% in operational costs.",
  },
  {
    title: "Expert Guidance",
    description: "Learn from industry experts with proven track records in AI implementation across various sectors.",
  },
  {
    title: "Competitive Edge",
    description: "Stay ahead of the competition with cutting-edge AI technologies and implementation strategies.",
  },
  {
    title: "Scalable Solutions",
    description: "Our training programs grow with your business, adapting to new challenges and opportunities.",
  },
  {
    title: "ROI Focused",
    description: "Training programs designed to deliver measurable business results and tangible improvements.",
  },
  {
    title: "Ongoing Support",
    description: "Access to continuous assistance, updates, and resources to ensure long-term success.",
  },
];

export default Index;
