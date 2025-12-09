import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Target, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function PeopleSuccessAcademy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-background" />
          <img 
            src="/images/hero-bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              People Success <span className="font-bold text-primary">Academy</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Empowering your workforce with the skills, mindset, and tools to thrive in an AI-driven world.
            </p>
            <Button size="lg" className="gap-2 text-lg px-8">
              Explore Courses <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Bridging the AI Skills Gap</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  The rapid evolution of AI technology has created a significant skills gap in the modern workforce. The People Success Academy is designed to close that gap.
                </p>
                <p>
                  We offer a comprehensive curriculum that goes beyond technical training to cover the human skills—critical thinking, adaptability, and ethical reasoning—that are essential for success in the age of AI.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg border border-border/50">
                <GraduationCap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert-Led</h3>
                <p className="text-sm text-muted-foreground">Curriculum designed by industry leaders and AI practitioners.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border/50">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Role-Based</h3>
                <p className="text-sm text-muted-foreground">Tailored learning paths for executives, managers, and individual contributors.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border/50">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Practical</h3>
                <p className="text-sm text-muted-foreground">Hands-on workshops and real-world use cases.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border/50 flex items-center justify-center bg-primary/5">
                <span className="text-4xl font-bold text-primary">10k+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Tracks */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Learning Tracks</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Literacy for All",
                description: "Foundational knowledge to demystify AI and build confidence across the entire organization.",
                icon: Users
              },
              {
                title: "AI Leadership",
                description: "Strategic frameworks for executives to lead AI transformation and drive business value.",
                icon: Target
              },
              {
                title: "Prompt Engineering",
                description: "Advanced techniques for maximizing the output and utility of Generative AI tools.",
                icon: Zap
              }
            ].map((track, index) => (
              <div key={index} className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <track.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{track.title}</h3>
                <p className="text-muted-foreground mb-6">{track.description}</p>
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Invest in Your People</h2>
          <p className="text-xl opacity-90 mb-8">
            Equip your team with the skills they need to succeed today and tomorrow.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-primary font-bold px-8">
              Schedule a Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
