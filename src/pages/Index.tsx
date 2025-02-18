
import { Brain, ChevronRight, BarChart, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
            Transform Your Business with AI
          </span>
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            AI Training Solutions for Modern Businesses
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Empower your team with cutting-edge AI training programs designed to elevate your business operations and drive innovation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button className="group" size="lg">
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
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive AI training solutions tailored to your needs
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
                  <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
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
            <p className="mt-4 text-lg text-gray-600">
              Experience the advantages of professional AI training
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
              Contact us today to discuss how we can help your organization leverage AI effectively.
            </p>
            <Button className="mt-8" size="lg">
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
  },
  {
    title: "Performance Analytics",
    description: "Track and measure the impact of AI implementation with comprehensive analytics and reporting.",
    icon: BarChart,
  },
  {
    title: "Team Workshops",
    description: "Interactive workshops to build your team's confidence and expertise in AI technologies.",
    icon: Users,
  },
];

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Streamline operations and reduce manual work through AI automation.",
  },
  {
    title: "Expert Guidance",
    description: "Learn from industry experts with proven track records in AI implementation.",
  },
  {
    title: "Competitive Edge",
    description: "Stay ahead of the competition with cutting-edge AI technologies.",
  },
  {
    title: "Scalable Solutions",
    description: "Solutions that grow with your business needs and adapt to changes.",
  },
  {
    title: "ROI Focused",
    description: "Training programs designed to deliver measurable business results.",
  },
  {
    title: "Ongoing Support",
    description: "Continuous assistance and updates to ensure long-term success.",
  },
];

export default Index;
