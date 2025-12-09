import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, BarChart3, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function ChangeManagement() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-background" />
          <img 
            src="/images/hero-bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              Change <span className="font-bold text-primary">Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Navigating the human side of AI transformation. We help your organization adapt, adopt, and thrive in the era of artificial intelligence.
            </p>
            <Button size="lg" className="gap-2 text-lg px-8">
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Change Management Matters for AI</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Implementing AI isn't just a technical upgrade; it's a cultural shift. Without a structured approach to change management, even the most powerful tools can fail to deliver value due to low adoption and resistance.
                </p>
                <p>
                  Our comprehensive Change Management services ensure your workforce is ready, willing, and able to leverage new AI capabilities to drive business outcomes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg border border-border/50">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">People-First</h3>
                <p className="text-sm text-muted-foreground">Focusing on user needs, fears, and motivations.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border/50">
                <BarChart3 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Data-Driven</h3>
                <p className="text-sm text-muted-foreground">Measuring adoption and sentiment to guide strategy.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border/50">
                <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Sustainable</h3>
                <p className="text-sm text-muted-foreground">Building long-term capabilities, not just quick fixes.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border/50 flex items-center justify-center bg-primary/5">
                <span className="text-4xl font-bold text-primary">95%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Change Management Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Readiness Assessment",
                description: "We analyze your organization's current state, identifying cultural barriers and adoption risks before deployment."
              },
              {
                title: "Stakeholder Engagement",
                description: "Mapping and mobilizing key influencers and sponsors to champion the change from within."
              },
              {
                title: "Communication Strategy",
                description: "Crafting clear, consistent messaging that articulates the 'why' and 'how' of AI transformation to every employee."
              },
              {
                title: "Training & Enablement",
                description: "Customized learning paths to upskill your workforce, ensuring they have the confidence to use new tools."
              },
              {
                title: "Resistance Management",
                description: "Proactively identifying and addressing pushback with empathy and clear value demonstration."
              },
              {
                title: "Adoption Measurement",
                description: "Tracking usage metrics and feedback loops to continuously refine the adoption strategy."
              }
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl opacity-90 mb-8">
            Don't let culture be the bottleneck to your AI success. Partner with us to drive meaningful, lasting change.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-primary font-bold px-8">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
