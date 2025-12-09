import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";
import { ArrowRight, Linkedin, Instagram, Youtube, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact | Eclectik</title>
        <meta name="description" content="Get in touch with Eclectik. Subscribe to our newsletter for insights that matter or contact us directly to start your AI transformation." />
      </Helmet>

      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="max-w-xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
                The information to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">accelerate transformation.</span>
              </h1>
              
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
            </motion.div>

            {/* Right Column: Certifications & Partners (Visual Balance) */}
            <div className="hidden lg:flex flex-col justify-end h-full min-h-[600px] pb-20 pl-20 border-l border-white/5">
              <div className="space-y-12 opacity-70">
                <div className="space-y-4">
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Certifications</h3>
                  <div className="flex gap-8 items-center">
                    <div className="border border-white/20 px-4 py-2 rounded text-sm font-mono">ISAE 3402</div>
                    <div className="border border-white/20 px-4 py-2 rounded text-sm font-mono">TISAX</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Partners</h3>
                  <div className="flex gap-8 items-center flex-wrap">
                    <img src="/images/microsoft-certified-white.png" alt="Microsoft Certified Partner" className="h-32 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                    <span className="text-lg font-bold border border-white/20 px-4 py-2 rounded">ISO Certified</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
