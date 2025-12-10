import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, Target, Zap, CheckCircle2, MessageSquare, Lightbulb, PenTool, Layout, PlayCircle } from "lucide-react";
import { Link } from "wouter";
import LayoutComponent from "@/components/Layout";

export default function PeopleSuccessAcademy() {
  return (
    <LayoutComponent>
      <div className="min-h-screen bg-background text-foreground pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                People Success Labs©
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                When Engagement Insights <br />
                <span className="text-primary">Do Not Turn Into Action</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Most companies are quick to measure engagement, yet only a small fraction take consistent, effective action on the results. Employees feel disenchanted by the lack of action, managers feel stuck, and you run the risk of losing credibility when the feedback loop is left unclosed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 text-lg px-8">
                    Start the Conversation <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 bg-card/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Manager Impact</h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Managers account for around <strong className="text-foreground">70% of the variance in employee engagement</strong>. Which means that unless managers have the skills and support to act on feedback, surveys won’t shift performance.
                  </p>
                  <p>
                    That’s why our People Science team created <strong className="text-foreground">People Success Labs©</strong> to give managers the skills and the space to positively impact engagement. Each People Success Lab is directly linked to a proven driver of engagement and designed to help managers sustainably improve team performance.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                  <img 
                    src="/images/webinar-session.jpg" 
                    alt="Interactive online webinar session with happy participants" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">A Practical Way to Turn Insight Into Better Performance</h3>
                  <ul className="space-y-4">
                    {[
                      "Helps managers move swiftly towards meaningful actions.",
                      "Gives managers the support they need to have a positive impact.",
                      "Brings together People Science and manager development."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Delivering Real Progress</h2>
              <p className="text-xl text-muted-foreground">
                People Success Academy helps you deliver real progress without heavy preparation and at manageable cost.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Co-design",
                  description: "We offer proven, templated Success Labs that can be tailored to your specific context. Together we co-design these webinars/sessions, and help you plan their rollout.",
                  icon: PenTool
                },
                {
                  title: "Analysis",
                  description: "We analyze your employee survey to ascertain where the biggest opportunities are for manager development.",
                  icon: BarChart3
                },
                {
                  title: "Identification",
                  description: "We help you identify the populations that will get the greatest value from People Success Labs.",
                  icon: Target
                },
                {
                  title: "Delivery",
                  description: "We deliver the People Success Labs to Managers in cohorts – and support you to sustain and measure learning.",
                  icon: PlayCircle
                }
              ].map((step, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-8 opacity-50" />
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                "People Success Labs helped our managers turn engagement results into real progress that teams could feel in their daily work. The sessions gave them simple practices they could apply immediately, and the impact started to spread across departments. We now see stronger ownership, better communication, and lasting improvements in team performance."
              </blockquote>
              <div className="text-lg font-bold text-primary">
                What Clients See in Practice
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="bg-gradient-to-r from-primary/20 to-purple-900/20 rounded-3xl p-12 text-center border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start the Conversation That Moves Your People Forward</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't let another engagement survey go to waste. Equip your managers with the tools they need to drive real change.
              </p>
              <Link href="/contact">
                <Button size="lg" className="gap-2 text-lg px-8">
                  Get Started <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </LayoutComponent>
  );
}
