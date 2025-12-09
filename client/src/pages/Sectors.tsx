import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Factory, Sprout, Radio, Zap, Truck, ShoppingBag, Landmark, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

export default function Sectors() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const sectors = [
    {
      name: "Manufacturing & Industrial",
      description: "Optimizing production lines and predictive maintenance with AI-driven insights.",
      icon: <Factory className="w-8 h-8 text-accent" />
    },
    {
      name: "Agriculture & Food",
      description: "Enhancing yield prediction and supply chain efficiency through data analytics.",
      icon: <Sprout className="w-8 h-8 text-accent" />
    },
    {
      name: "Telecommunications",
      description: "Improving network reliability and customer experience with real-time telemetry.",
      icon: <Radio className="w-8 h-8 text-accent" />
    },
    {
      name: "Utilities & Energy",
      description: "Balancing grid loads and forecasting demand with advanced machine learning models.",
      icon: <Zap className="w-8 h-8 text-accent" />
    },
    {
      name: "Transport",
      description: "Streamlining logistics and fleet management for maximum operational efficiency.",
      icon: <Truck className="w-8 h-8 text-accent" />
    },
    {
      name: "Ecommerce & Retail",
      description: "Personalizing customer journeys and optimizing inventory with predictive AI.",
      icon: <ShoppingBag className="w-8 h-8 text-accent" />
    },
    {
      name: "Finance",
      description: "Detecting fraud and automating risk assessment with secure AI frameworks.",
      icon: <Landmark className="w-8 h-8 text-accent" />
    },
    {
      name: "Life Sciences",
      description: "Accelerating drug discovery and clinical trials through data-driven innovation.",
      icon: <HeartPulse className="w-8 h-8 text-accent" />
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-background/50">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="container relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="text-accent font-medium tracking-wider uppercase text-sm">Sectors</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-white">
              Industry-Specific <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-primary">AI Transformation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              We bring deep domain expertise to every engagement, tailoring our AI solutions to the unique challenges and opportunities of your sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-6 p-4 bg-background/50 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors">
                  {sector.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {sector.description}
                </p>
                <div className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform cursor-pointer">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Don't see your sector?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Our AI methodologies are adaptable across industries. Let's discuss how we can apply our "What if? We can." approach to your specific challenges.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-accent hover:bg-accent/90 text-white font-bold transition-all hover:scale-105">
              Contact us to discuss your needs <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
