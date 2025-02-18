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
            The Future of AI Training is Here
          </span>
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            AI Training Solutions for <span className="text-primary">Modern Businesses</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Transform your business operations with our <span className="text-primary font-medium">cutting-edge AI training programs</span>. We specialize in helping organizations harness the power of artificial intelligence through comprehensive, tailored training solutions that drive innovation and growth.
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
              Our Training Process
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to transforming your business through AI implementation
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
              Transparent Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
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
                      Most Popular
                    </span>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-600">/month</span>
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
                      Get Started
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
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              See how businesses have transformed with our AI training solutions
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
                    <p className="mt-2 text-sm text-gray-600">Efficiency Improvement</p>
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
              Ready to <span className="text-primary">Transform Your Business</span>?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Take the first step towards <span className="text-primary font-medium">AI excellence</span>. Our team of experts is ready to help you develop a customized training program that meets your specific needs and objectives.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span>contact@techassistant.ai</span>
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
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const trainingProcess = [
  {
    title: "Assessment",
    description: "We analyze your business needs and current AI capabilities to create a customized training plan.",
  },
  {
    title: "Planning",
    description: "Develop a structured curriculum tailored to your team's skill level and business objectives.",
  },
  {
    title: "Implementation",
    description: "Hands-on training sessions with practical exercises and real-world applications.",
  },
  {
    title: "Evaluation",
    description: "Measure progress and adjust the program to ensure optimal results and ROI.",
  },
];

const pricingPlans = [
  {
    title: "Starter",
    description: "Perfect for small teams getting started with AI",
    price: 999,
    featured: false,
    features: [
      "Up to 5 team members",
      "Basic AI training modules",
      "Monthly progress reports",
      "Email support",
      "Access to learning resources",
    ],
  },
  {
    title: "Professional",
    description: "Ideal for growing businesses",
    price: 1999,
    featured: true,
    features: [
      "Up to 15 team members",
      "Advanced AI training modules",
      "Weekly progress reports",
      "Priority support",
      "Custom learning paths",
      "1-on-1 mentoring sessions",
    ],
  },
  {
    title: "Enterprise",
    description: "Comprehensive solution for large organizations",
    price: 4999,
    featured: false,
    features: [
      "Unlimited team members",
      "Full AI curriculum access",
      "Daily progress tracking",
      "24/7 dedicated support",
      "Custom content development",
      "On-site training available",
    ],
  },
];

const successStories = [
  {
    company: "TechCorp Solutions",
    industry: "Software Development",
    improvement: 85,
    testimonial: "TechAssistant's training program helped us implement AI solutions that reduced our development cycle by 60% and improved code quality significantly.",
  },
  {
    company: "Global Logistics Inc.",
    industry: "Supply Chain Management",
    improvement: 75,
    testimonial: "After implementing AI solutions learned through TechAssistant, we've seen a 75% improvement in delivery time predictions and inventory management.",
  },
  {
    company: "FinanceFirst",
    industry: "Financial Services",
    improvement: 90,
    testimonial: "The AI training program transformed our risk assessment process, leading to 90% faster analysis and more accurate predictions.",
  },
  {
    company: "HealthCare Plus",
    industry: "Healthcare",
    improvement: 80,
    testimonial: "TechAssistant's training helped us implement AI diagnostics tools, resulting in 80% faster patient screening and improved accuracy.",
  },
];

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
