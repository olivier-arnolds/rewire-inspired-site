import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Laptop, Award, BrainCircuit, Microscope, CheckCircle2, GraduationCap } from "lucide-react";
import { Link } from "wouter";
import LayoutComponent from "@/components/Layout";

export default function TrainingEnablement() {
  return (
    <LayoutComponent>
      <div className="min-h-screen bg-background text-foreground pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background" />
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Platform Enablement
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Training & <span className="text-primary">Enablement</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Our tailored training programs empower your teams to confidently leverage engagement platforms, interpret results, and translate insights into meaningful action.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 text-lg px-8">
                    Start Your Journey <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Enablement Overview */}
        <section className="py-20 bg-card/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Hands-On Guidance</h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Whether you’re launching your first survey, refining a mature engagement strategy, or reimagining your approach amid AI-driven change, our experts provide hands-on guidance every step of the way with clarity, care, and a genuine commitment to your success.
                  </p>
                  <p>
                    We also offer dedicated training on the pillars of Customer Success ensuring your teams have the knowledge and confidence to build lasting, trusted relationships that drive real results.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg">
                  <Laptop className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Platform Mastery</h3>
                  <p className="text-muted-foreground mb-6">
                    Empower your teams to confidently leverage engagement platforms and interpret results.
                  </p>
                  <ul className="space-y-3">
                    {["Survey Launch Support", "Result Interpretation", "Action Planning"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Train the Trainer Section */}
        <section className="py-20">
          <div className="container">
            <div className="bg-gradient-to-br from-card to-background border border-border rounded-3xl p-8 md:p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
              
              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <GraduationCap className="w-4 h-4" />
                    People Success Academy
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Train the Trainer</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    We offer a ‘train the trainer’ experience within our People Success Academy. This program teaches managers how to guide their own teams with confidence, clarity, and practical skill.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8">
                    Managers learn how to turn engagement insights into simple actions, how to introduce new practices in a way that feels natural, and how to support their teams as they experiment and grow.
                  </p>
                  <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border/50">
                    <h4 className="font-bold mb-2">Practical & Grounded</h4>
                    <p className="text-sm text-muted-foreground">
                      Managers practice facilitation, receive direct coaching, and apply the tools they learn inside their own teams. This gives them the capability to drive progress without relying on long preparations or heavy program support.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                     <img 
                      src="/images/webinar-session.jpg" 
                      alt="Train the trainer session" 
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl border border-border shadow-xl max-w-xs">
                    <p className="font-medium italic">
                      "The result is a group of managers who know how to lead meaningful conversations, build ownership, and create lasting improvement."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Think Like a People Scientist */}
        <section className="py-20 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                  <Microscope className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Think Like a People Scientist</h2>
                <p className="text-xl text-muted-foreground">
                  Our ‘Think like a People Scientist’ programme gives you as HR professional and/or other leaders & managers the mindset and tools to decode human behaviour at work.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-background p-8 rounded-xl border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-primary" />
                    What You'll Learn
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Designing your employee listening strategy to measure what matters",
                      "Identifying the levers that boost engagement and productivity",
                      "Decoding the data in your employee listening results",
                      "Leading a positive employee experience through change and disruption",
                      "Driving a positive employee experience through the manager’s perspective"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <p className="text-lg leading-relaxed">
                    Through immersive training and hands-on workshops, we can help you explore what truly drives a positive employee experience.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Whether you're navigating culture shifts, embarking on AI transformation or designing better ways of working, this programme is your gateway to thinking with rigour, empathy, and impact.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" size="lg" className="w-fit">
                      Learn More About This Programme
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Strengthen Your Organization?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              If you want to strengthen how your organization understands people and creates a positive employee experience, we invite you to connect with us.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2 text-lg px-8">
                Connect With Us <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </LayoutComponent>
  );
}
