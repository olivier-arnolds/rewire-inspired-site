import { ArrowRight, CheckCircle2, BarChart3, Users, Clock, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CaseStudyAdoption() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Copilot Adoption & Culture
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              SACE: Giving Employees Control of Their Time and Wellbeing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              How Italy's financial services firm used Copilot and Viva to transition from a traditional "command and control" culture to a flexible, outcome-based workplace—saving hours per week and boosting satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Users className="w-4 h-4 text-primary" />
                <span>1,000+ Employees</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Zap className="w-4 h-4 text-primary" />
                <span>Financial Services</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Clock className="w-4 h-4 text-primary" />
                <span>4-Day Workweek Trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 border-y border-white/5 bg-white/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">91%</div>
              <div className="text-sm text-muted-foreground">Monthly Active Copilot Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50%</div>
              <div className="text-sm text-muted-foreground">Reduction in Email Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">60x</div>
              <div className="text-sm text-muted-foreground">Faster Risk Analysis (6h to 6m)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">89%</div>
              <div className="text-sm text-muted-foreground">Say Copilot Saves Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Narrative */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Challenge */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">1</div>
                  The Challenge
                </h2>
                <div className="prose prose-invert max-w-none text-muted-foreground">
                  <p className="text-lg mb-4">
                    Until recently, SACE's culture was traditional and hierarchical, typical of many state-run institutions. Employees spent excessive time on low-value transactional tasks, approvals, and "controlling" activities rather than outcomes.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong>Rote Work:</strong> Risk analysts spent hours just locating documents before starting actual analysis.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong>Meeting Overload:</strong> Large, unproductive meetings and excessive email management (7.2 hours/week).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong>Lack of Autonomy:</strong> A "command and control" structure with 7 hierarchy layers stifled agility and psychological safety.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">2</div>
                  The Solution
                </h2>
                <div className="prose prose-invert max-w-none text-muted-foreground">
                  <p className="text-lg mb-6">
                    SACE launched a radical "Flex4Future" transformation, decentralizing decision-making and betting on wellbeing and productivity. They deployed <strong>Microsoft Copilot</strong> alongside the <strong>Viva Suite</strong> (Insights, Glint, Pulse, Engage) to drive adoption and measure impact.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-white mb-2">Data-Driven Cohorts</h4>
                        <p className="text-sm">Used Viva Insights to identify 300 "early adopters" based on work patterns (e.g., heavy email users) to pilot the technology first.</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-white mb-2">The "Time Back" Deal</h4>
                        <p className="text-sm">Leadership made a clear promise: "All the time you free up using technology is yours—to learn, rest, or give back, as long as you deliver outcomes."</p>
                      </CardContent>
                    </Card>
                  </div>

                  <p className="mb-4">
                    <strong>Adoption Strategy:</strong>
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span><strong>Viva Engage Community:</strong> Created a "Prompt of Fame" where employees shared their best Copilot prompts, driving bottom-up adoption.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span><strong>Feedback Loops:</strong> Used Viva Glint and Pulse to gather real-time feedback from the pilot group, allowing them to fix "teething issues" before full rollout.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span><strong>Targeted Use Cases:</strong> Focused on high-pain tasks like loan application reviews, where Copilot could summarize financial statements instantly.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Impact */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">3</div>
                  The Impact
                </h2>
                <div className="prose prose-invert max-w-none text-muted-foreground">
                  <p className="text-lg mb-6">
                    The cultural shift has been profound. SACE moved from 7 hierarchy layers to just 3, and is now trialing a 4-day workweek for all 1,000 employees—made possible by the efficiency gains from AI.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="font-bold text-white mb-1">Weekend Work Halved</div>
                      <div className="text-sm">Employees working on weekends dropped from 27% to 15%.</div>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="font-bold text-white mb-1">Meeting Efficiency</div>
                      <div className="text-sm">Large meetings dropped from 44% to 39%, with fewer attendees on average.</div>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="font-bold text-white mb-1">Manager Connection</div>
                      <div className="text-sm">Employees with low manager 1:1 time dropped from 69% to 49%.</div>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="font-bold text-white mb-1">Process Speed</div>
                      <div className="text-sm">Commercial investigations cut from 90 mins to 20 mins.</div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-white my-8">
                    "It’s impossible to achieve in four days what we used to accomplish in five without the use of technology... The winning formula has been: all the time freed up by leveraging AI tools is given back to you."
                    <footer className="text-sm text-muted-foreground mt-2 not-italic font-medium">
                      — Gianfranco Chimirri, Chief People Officer, SACE
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30">Microsoft Copilot</span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30">Viva Insights</span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30">Viva Glint</span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30">Viva Engage</span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30">Viva Pulse</span>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-primary/20 to-purple-500/20 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Ready to transform your culture?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Learn how Eclectik can help you replicate SACE's success with our Copilot Adoption & Change Management services.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full group">
                      Schedule a Consultation <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Related Case Study */}
              <div className="pt-8 border-t border-white/10">
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Read Next</h4>
                <Link href="/case-studies/copilot-impact">
                  <div className="group cursor-pointer">
                    <div className="aspect-video rounded-lg bg-white/5 mb-3 overflow-hidden relative">
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                         <span className="text-white font-bold">Copilot ROI Case Study</span>
                       </div>
                    </div>
                    <h5 className="font-bold group-hover:text-primary transition-colors">
                      Enhancing Recruitment with Copilot365
                    </h5>
                    <p className="text-xs text-muted-foreground mt-1">
                      How a Fortune 500 staffing firm achieved 30% retention improvement.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
