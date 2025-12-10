import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Brain, Database, Cpu, Network, Code, BarChart3, ChevronRight, LineChart, Target, Zap, Users, Mail, Linkedin, Instagram, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const whatIfs = [
    {
      question: "What if we could see the ROI of AI before we scale?",
      answer: "We can: model value with real collaboration telemetry and Copilot usage to predict ROI/TCO and guide rollout.",
      icon: <LineChart className="w-12 h-12 text-primary mb-6" />,
      color: "text-primary"
    },
    {
      question: "What if we knew which roles unlock disproportionate AI value?",
      answer: "We can: cluster signals (meeting load, authoring, cross-team work) to find 'value pockets' and prioritize investments.",
      icon: <Target className="w-12 h-12 text-secondary mb-6" />,
      color: "text-secondary"
    },
    {
      question: "What if we pinpointed productivity bottlenecks undermining transformation?",
      answer: "We can: surface friction (after-hours spikes, long meetings, handoff delays) and design targeted fixes.",
      icon: <Zap className="w-12 h-12 text-accent mb-6" />,
      color: "text-accent"
    },
    {
      question: "What if we could forecast adoption trajectory for the next wave?",
      answer: "We can: use leading indicators (trial usage, feature breadth, prompt diversity) to predict curves and focus enablement.",
      icon: <BarChart3 className="w-12 h-12 text-chart-4 mb-6" />,
      color: "text-chart-4"
    },
    {
      question: "What if we could connect sentiment to measurable business outcomes?",
      answer: "We can: link engagement drivers to observable behavior changes (cycle-time, rework, focus time).",
      icon: <Users className="w-12 h-12 text-primary mb-6" />,
      color: "text-primary"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % whatIfs.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Data & AI Strategy",
      description: "Our artificial intelligence strategies aren't about keeping up with your competition. We operationalize data and AI opportunities to make you the pacesetter.",
      icon: <Brain className="w-8 h-8 text-primary" />,
      image: "/images/service-strategy.jpg"
    },
    {
      title: "Customized AI",
      description: "We build bespoke AI solutions tailored to your specific business challenges, leveraging cutting-edge models and architectures.",
      icon: <Code className="w-8 h-8 text-secondary" />,
      image: "/images/service-genai.jpg"
    },
    {
      title: "Data Management",
      description: "Build a solid foundation for your AI initiatives with robust data governance, quality, and architecture frameworks.",
      icon: <Database className="w-8 h-8 text-accent" />,
      image: "/images/bg-texture.jpg"
    },
    {
      title: "ML Ops",
      description: "Streamline your machine learning lifecycle from development to deployment and monitoring with industry-standard MLOps practices.",
      icon: <Cpu className="w-8 h-8 text-chart-3" />,
      image: "/images/bg-texture.jpg"
    },
    {
      title: "Generative AI",
      description: "Unlock new creative and productive potentials with state-of-the-art Generative AI implementation and fine-tuning.",
      icon: <Network className="w-8 h-8 text-chart-4" />,
      image: "/images/service-genai.jpg"
    }
  ];

  const sectors = [
    "Manufacturing & Industrial", "Agriculture & Food", "Telecommunications", 
    "Utilities & Energy", "Transport", "Ecommerce & Retail", 
    "Finance", "Consumer Goods", "Life Sciences"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-abstract-ai.png" 
            alt="AI Neural Network Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
        </div>

        <div className="container relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="mb-6 flex items-center gap-3">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Workplace Signals & AI Transformation</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-white" style={{fontSize: '70px'}}>
              We use Workplace Signals to answer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-pulse">"what if?"</span> <br />
              with <span className="text-white">"we can".</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Eclectik operationalizes Workplace Signals end-to-end, combining objective telemetry with subjective sentiment to build actionable roadmaps that deliver measurable impact.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-background font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(76,201,240,0.5)]">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/case-studies/copilot-impact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all">
                  View Case Studies
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Main Composite Image - Bottom Right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-20 right-10 z-20 hidden lg:block"
        >
          <img 
            src="/images/main-composite-final.png" 
            alt="Eclectik AI Transformation" 
            className="w-[240px] h-auto object-contain"
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Sector Navigation Bar */}
      <div className="border-y border-white/10 bg-black/50 backdrop-blur-md overflow-x-auto">
        <div className="container">
          <div className="flex whitespace-nowrap">
            {sectors.map((sector, index) => (
              <a 
                key={index} 
                href="#" 
                className="px-6 py-4 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 transition-colors border-r border-white/5 last:border-r-0"
              >
                {sector}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic What If Carousel Section */}
      <section className="py-32 relative overflow-hidden bg-white/5">
        <div className="absolute inset-0 bg-[url('/images/bg-texture.jpg')] bg-cover bg-center opacity-10" />
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Asking the right questions</h2>
              <p className="text-xl text-muted-foreground">Turning uncertainty into actionable strategy.</p>
            </div>

            <div className="relative min-h-[400px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full"
                >
                  <div className="bg-background/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl">
                    <div className="flex justify-center">
                      {whatIfs[currentIndex].icon}
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl mb-8 leading-tight">
                      <span className="font-bold">"What if</span> {whatIfs[currentIndex].question.replace("What if ", "").replace('"', '')}"
                    </h3>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-8" />
                    
                    <p className={`text-xl md:text-3xl leading-relaxed ${whatIfs[currentIndex].color}`}>
                      <span className="font-bold">We can</span> {whatIfs[currentIndex].answer.replace("We can: ", "").replace("We can ", "")}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                {whatIfs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-primary w-8" 
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Partners Section */}
      <section className="relative py-20 overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          {/* Abstract shapes/beacon effect */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
            <div className="absolute inset-0 border-[40px] border-primary rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute inset-[100px] border-[40px] border-secondary rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
            <div className="absolute inset-[200px] border-[40px] border-accent rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }} />
          </div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Content & Form */}
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
                The information to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">accelerate transformation.</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-12">
                Subscribe to Eclectik's newsletter and get the insights that matter.
              </p>

              <form className="space-y-8 mb-16">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                    Email*
                  </label>
                  <div className="relative">
                    <Input 
                      type="email" 
                      id="email" 
                      placeholder="your@email.com" 
                      className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-6 text-lg focus-visible:ring-0 focus-visible:border-primary transition-colors"
                    />
                    <Button 
                      type="submit" 
                      variant="ghost" 
                      className="absolute right-0 top-1/2 -translate-y-1/2 hover:bg-transparent hover:text-primary p-0 flex items-center gap-2 font-medium"
                    >
                      Submit <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox id="consent" className="mt-1 border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="consent"
                      className="text-sm text-muted-foreground leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to receiving news from Eclectik and consent to Eclectik storing and processing my submitted information to provide said news.*
                    </label>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground/60 leading-relaxed">
                  You can unsubscribe from these communications at any time. For more information on how we are committed to protecting your privacy, please review our <a href="#" className="underline hover:text-primary">Privacy Policy</a>.
                </p>
              </form>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Get in touch.</h2>
                
                <div className="flex flex-col gap-4">
                  <a href="mailto:info@eclectik.com" className="text-xl text-primary hover:text-white transition-colors inline-flex items-center gap-2 border-b border-primary/30 pb-1 w-fit">
                    <Mail className="w-5 h-5" /> info@eclectik.com
                  </a>
                  
                  <div className="flex gap-6 mt-4">
                    <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-all">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-secondary transition-all">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-accent transition-all">
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Certifications & Partners (Visual Balance) */}
            <div className="hidden lg:flex flex-col justify-end h-full min-h-[600px] pb-20 pl-20 border-l border-white/5">
              <div className="space-y-12 opacity-70">
                <div className="space-y-4">
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Certifications</h3>
                  <div className="flex gap-8 items-center flex-wrap">
                    <img src="/images/iso-logo-final.png" alt="ISO Certified" className="h-24 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                    <img src="/images/white-microsoft-startups-logo-final.png" alt="Microsoft for Startups Founders Hub" className="h-24 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Partners</h3>
                  <div className="flex gap-6 items-center flex-wrap">
                    <img src="/images/microsoft-certified-white.png" alt="Microsoft Certified Partner" className="h-20 w-auto opacity-90 hover:opacity-100 transition-opacity" />

                    <img src="/images/ipsos-grey.png" alt="Ipsos" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                    <img src="/images/softwareone-grey.png" alt="SoftwareOne" className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                    <img src="/images/brand-compliance-logo-final.png" alt="Brand Compliance" className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                    <img src="/images/hibob-grey.png" alt="HiBob" className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Software/Platforms</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                    <div className="flex flex-col items-center gap-2 group">
                      <img src="/images/copilot.png" alt="Copilot" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-muted-foreground text-center">Copilot</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group">
                      <img src="/images/fabric.png" alt="Fabric" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-muted-foreground text-center">Fabric</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group">
                      <img src="/images/viva-insights.svg" alt="Viva Insights" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-muted-foreground text-center">Viva Insights</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group">
                      <img src="/images/viva-engage.svg" alt="Viva Engage" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-muted-foreground text-center">Viva Engage</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group">
                      <img src="/images/glint.svg" alt="Viva Glint" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-muted-foreground text-center">Viva Glint</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group">
                      <img src="/images/pulse.png" alt="Viva Pulse" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-muted-foreground text-center">Viva Pulse</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group">
                      <img src="/images/onelake.png" alt="OneLake" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-muted-foreground text-center">OneLake</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group">
                      <img src="/images/data-factory.png" alt="Data Factory" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-muted-foreground text-center">Data Factory</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group">
                      <img src="/images/databases.png" alt="Databases" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-muted-foreground text-center">Databases</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white/5">
        <div className="container">
          <p className="text-center text-xl font-medium mb-12 text-white/80">We are Data & AI partner to the leaders of tomorrow.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder logos using text for now, would be images in production */}
            {["Eneco", "ASML", "Booking.com", "Roche", "Bol.com", "Philips"].map((client, i) => (
              <div key={i} className="h-16 flex items-center justify-center border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 hover:border-primary/30 transition-all cursor-pointer group">
                <span className="font-bold text-lg group-hover:text-primary transition-colors">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="container">
          <div className="mb-20 max-w-3xl">
            <span className="text-primary font-medium tracking-wider uppercase text-sm block mb-4">Data & AI Services</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Create exponential value through new, AI-powered revenue streams and business models.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Service Navigation */}
            <div className="lg:col-span-4 space-y-2">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border ${index === 0 ? 'bg-white/10 border-primary/50 shadow-[0_0_30px_rgba(76,201,240,0.1)]' : 'bg-transparent border-transparent hover:bg-white/5'}`}
                >
                  <div className="flex items-center gap-4">
                    {index === 0 && <div className="text-primary">{service.icon}</div>}
                    <h3 className={`text-xl font-bold ${index === 0 ? 'text-white' : 'text-muted-foreground'}`}>{service.title}</h3>
                    {index === 0 && <ArrowRight className="ml-auto w-5 h-5 text-primary" />}
                  </div>
                </div>
              ))}
            </div>

            {/* Active Service Content */}
            <div className="lg:col-span-8">
              <div className="relative rounded-3xl overflow-hidden aspect-video group">
                <img 
                  src={services[0].image} 
                  alt={services[0].title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
                  <div className="mb-6 p-4 bg-background/30 backdrop-blur-md rounded-2xl inline-block border border-white/10">
                    {services[0].icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">{services[0].title}</h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {services[0].description}
                  </p>
                  <Button className="rounded-full bg-white text-black hover:bg-white/90 font-bold px-8">
                    More about {services[0].title} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study / Impact Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-main.jpg" alt="Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-secondary font-medium tracking-wider uppercase text-sm block mb-4">AI in Supply Chain</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              What if we could use AI to reduce working capital by <span className="text-secondary">18%</span>?
            </h2>
            <div className="flex items-end gap-4">
              <h3 className="text-4xl font-bold text-white">We Can.</h3>
              <a href="#" className="text-secondary hover:text-white transition-colors flex items-center gap-2 mb-1">
                Explore Supply Chain Optimization Engine <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-32 bg-background">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold">Upcoming events</h2>
            <a href="#" className="text-primary hover:text-white transition-colors flex items-center gap-2">
              View all events <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Event */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-6">
                <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all" />
                <img 
                  src="/images/service-strategy.jpg" 
                  alt="Event" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border border-white/10">
                  Event
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                AI that actually works: proven strategies from leading companies
              </h3>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <span>Frankfurt, March 5, 2026</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span className="text-white font-medium border-b border-white/30 pb-0.5 group-hover:border-primary transition-colors">Read</span>
              </div>
            </div>

            {/* Secondary Events */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Data Leadership Roundtables", date: "Amsterdam, Feb 5, 2026", image: "/images/bg-texture.jpg" },
                { title: "Leading with AI: Essential Training", date: "Amsterdam, Nov 24, 2025", image: "/images/service-genai.jpg" }
              ].map((event, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border border-white/10">
                      Event
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{event.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
