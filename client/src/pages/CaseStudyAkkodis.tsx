import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, CheckCircle2, TrendingUp, Users, DollarSign, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function CaseStudyAkkodis() {
  return (
    <Layout>
    <div className="min-h-screen bg-background text-foreground pt-32 lg:pt-40">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Case Study
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              AKKODiS Reinvents Work Through Field-Led AI Transformation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              How a 6,500-person engineering consultancy turned Japan's demographic challenge into a culture of innovation with Microsoft Power Platform and Copilot.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Microsoft Power Platform</span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Microsoft 365 Copilot</span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Citizen Development</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Story */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  The Challenge
                </h2>
                <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
                  <p className="mb-4">
                    AKKODiS Consulting, a leading technology and engineering consultancy with 6,500 employees across Japan, faced an urgent challenge: Japan's aging demographic and shrinking workforce meant they could no longer rely on traditional workforce growth to stay competitive.
                  </p>
                  <p className="mb-4">
                    With limited talent pools and the need to maintain productivity without increasing headcount, AKKODiS needed to fundamentally reimagine how work gets done—not just for their clients, but for their own organization first.
                  </p>
                  <p className="italic border-l-4 border-primary pl-4 py-2 bg-primary/5">
                    "With Japan's population declining, companies can no longer rely on traditional workforce growth to stay competitive. To maximize their potential and compete globally, they must raise labor productivity and empower more people to innovate."
                    <span className="block mt-2 text-sm not-italic">— Kenichiro Kawasaki, CEO, AKKODiS Consulting</span>
                  </p>
                </div>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-primary" />
                  The Solution: Field-Led Transformation
                </h2>
                <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
                  <p className="mb-4">
                    Instead of a traditional top-down IT transformation, AKKODiS embraced a bold, field-led innovation model. They deployed Microsoft Power Platform, Microsoft 365 Copilot, and Copilot Studio across the entire organization, democratizing access to automation, app development, and AI-powered insights.
                  </p>
                  <p className="mb-4">
                    The key insight: trust the people closest to the work to lead transformation. Field engineers and consultants who understand client challenges at the most practical level became the drivers of change.
                  </p>
                  
                  <div className="bg-card/30 border border-border/50 rounded-xl p-6 my-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Key Technologies Deployed:</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <div className="font-medium text-foreground">Power Apps</div>
                          <div className="text-sm">Low-code app development for everyone</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <div className="font-medium text-foreground">Power Automate</div>
                          <div className="text-sm">Workflow automation at scale</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <div className="font-medium text-foreground">Microsoft 365 Copilot</div>
                          <div className="text-sm">AI-powered productivity boost</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <div className="font-medium text-foreground">Copilot Studio</div>
                          <div className="text-sm">Custom AI agents and automation</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="italic border-l-4 border-primary pl-4 py-2 bg-primary/5">
                    "The field understands challenges at the most practical level. Transformation is most sustainable when it's driven by those who experience the work firsthand."
                    <span className="block mt-2 text-sm not-italic">— Kenichiro Kawasaki, CEO</span>
                  </p>
                </div>
              </motion.div>

              {/* Impact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  Measurable Impact
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-3xl font-bold text-foreground">15,800</div>
                      </div>
                      <p className="text-muted-foreground">
                        Hours saved annually through automated workflows
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <DollarSign className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-3xl font-bold text-foreground">$380K</div>
                      </div>
                      <p className="text-muted-foreground">
                        Annual cost savings from efficiency improvements
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-3xl font-bold text-foreground">18%</div>
                      </div>
                      <p className="text-muted-foreground">
                        Increase in productivity across the organization
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-3xl font-bold text-foreground">+13 pts</div>
                      </div>
                      <p className="text-muted-foreground">
                        Year-over-year increase in client Net Promoter Score
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-card/30 border border-border/50 rounded-xl p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Real-World Use Cases:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-green-500/10 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground mb-1">Invoice Searchability</div>
                        <p className="text-sm text-muted-foreground">Simple but powerful: making invoices instantly searchable saved hours of manual lookup time.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-green-500/10 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground mb-1">Automated Budgeting Workflow</div>
                        <p className="text-sm text-muted-foreground">Power Apps + Power Automate eliminated the stress of chasing manager approvals—better for efficiency and morale.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-green-500/10 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground mb-1">Client Feedback App</div>
                        <p className="text-sm text-muted-foreground">Standardized response processes boosted client satisfaction, reflected in a 13-point NPS increase.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-green-500/10 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground mb-1">95% Active Copilot Usage</div>
                        <p className="text-sm text-muted-foreground">Within six months, 95% of employees were monthly active Copilot users—a testament to genuine adoption.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Culture Shift */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  The Real Transformation: Culture
                </h2>
                <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
                  <p className="mb-4">
                    Beyond the metrics, the most profound impact was cultural. Employees who had never coded before began designing applications and automating workflows. The shift from "IT-dependent transformation" to "everyone-driven innovation" created a culture of ownership.
                  </p>
                  <p className="mb-4">
                    Senior employees turned deep expertise into digital solutions, while younger talent leveraged AI to automate and innovate faster. Everyone, from sales to HR, became active problem-solvers.
                  </p>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 my-6">
                    <p className="text-lg italic text-foreground mb-2">
                      "It's not just engineers driving change anymore. Everyone, from sales to HR, is building solutions to everyday challenges. It's changed our culture from one of 'IT-dependent transformation' to 'everyone-driven innovation.'"
                    </p>
                    <p className="text-sm text-muted-foreground">— Risa Kawaguchi, Business Manager, AKKODiS Consulting</p>
                  </div>

                  <p>
                    Employees are no longer waiting for transformation to happen to them—they are driving it themselves. This bottom-up innovation model has become AKKODiS's competitive advantage, both internally and in how they serve clients.
                  </p>
                </div>
              </motion.div>

              {/* Looking Forward */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-6">What's Next</h2>
                <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
                  <p className="mb-4">
                    With low-code and AI tools embedded across the company, AKKODiS is now exploring agent-based AI to automate low-risk decisions and deepen its citizen-developer community.
                  </p>
                  <p className="italic border-l-4 border-primary pl-4 py-2 bg-primary/5">
                    "Our goal is to create a responsible AI ecosystem where human judgment, ethical oversight, and technology work hand in hand."
                    <span className="block mt-2 text-sm not-italic">— Kenichiro Kawasaki, CEO</span>
                  </p>
                  <p className="mt-4">
                    By transforming from the field up, AKKODiS isn't just adapting to Japan's demographic shift—they're showing the way forward for organizations worldwide.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm sticky top-32"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Company Profile</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-muted-foreground mb-1">Company</div>
                    <div className="font-medium text-foreground">AKKODiS Consulting</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Industry</div>
                    <div className="font-medium text-foreground">Engineering & Consulting</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Size</div>
                    <div className="font-medium text-foreground">6,500 employees</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Location</div>
                    <div className="font-medium text-foreground">Japan</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Source</div>
                    <a 
                      href="https://www.microsoft.com/en/customers/story/25896-akkodis-consulting-microsoft-power-platform" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Microsoft Customer Story
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Power Platform</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Copilot</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Power Apps</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Power Automate</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Copilot Studio</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Learn how Eclectik can help you operationalize AI transformation and build a culture of innovation—from the field up.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/white-papers">
                <Button size="lg" variant="outline">
                  Explore Resources
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
