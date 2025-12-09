import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Laptop, Award } from "lucide-react";
import { Link } from "wouter";

export default function TrainingEnablement() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-background" />
          <img 
            src="/images/hero-bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              Training & <span className="font-bold text-primary">Enablement</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Equipping your teams with the practical skills and confidence to leverage AI tools effectively in their daily workflows.
            </p>
            <Button size="lg" className="gap-2 text-lg px-8">
              View Programs <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Beyond Theory to Practice</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Successful AI adoption requires more than just access to tools; it demands a shift in how people work. Our Training & Enablement programs are designed to bridge the gap between technology and application.
                </p>
                <p>
                  We focus on role-specific enablement, ensuring that every employee—from the C-suite to the front line—understands how to apply AI to drive productivity and innovation in their specific context.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg border border-border/50">
                <Laptop className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Hands-On</h3>
                <p className="text-sm text-muted-foreground">Interactive labs and real-time exercises.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border/50">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Collaborative</h3>
                <p className="text-sm text-muted-foreground">Peer learning and community building.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border/50">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Customized</h3>
                <p className="text-sm text-muted-foreground">Content tailored to your industry and tools.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border/50 flex items-center justify-center bg-primary/5">
                <span className="text-4xl font-bold text-primary">100%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Enablement Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Copilot Mastery",
                description: "Deep dive into Microsoft 365 Copilot, teaching users how to draft, analyze, and create with AI assistance.",
                icon: Laptop
              },
              {
                title: "Data Fluency",
                description: "Foundational data skills to help teams understand, interpret, and communicate with data effectively.",
                icon: BookOpen
              },
              {
                title: "AI Ethics & Governance",
                description: "Essential training on the responsible use of AI, covering privacy, bias, and security protocols.",
                icon: Award
              }
            ].map((program, index) => (
              <div key={index} className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Empower Your Workforce</h2>
          <p className="text-xl opacity-90 mb-8">
            Give your team the skills they need to turn AI potential into business performance.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-primary font-bold px-8">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
