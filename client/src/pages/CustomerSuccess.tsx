import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, BarChart3, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CustomerSuccess() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Customer Success
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We help you unlock the full value of your technology investments by focusing on adoption, engagement, and measurable business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Customer Success?</h2>
              <div className="prose prose-invert max-w-none text-muted-foreground">
                <p className="mb-4">
                  Technology is only as good as the people using it. Our Customer Success practice ensures that your teams not only adopt new tools but thrive with them. We bridge the gap between technical implementation and human adoption.
                </p>
                <p className="mb-4">
                  From onboarding to ongoing optimization, we partner with you to drive usage, gather feedback, and demonstrate ROI. Our approach is data-driven, people-centric, and aligned with your strategic goals.
                </p>
              </div>
              
              <div className="mt-8 grid gap-4">
                {[
                  "Accelerate user adoption and proficiency",
                  "Maximize return on technology investment",
                  "Reduce churn and improve employee satisfaction",
                  "Align technology with business objectives"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid gap-6"
            >
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <CardContent className="p-6 flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 h-fit">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strategic Alignment</h3>
                    <p className="text-muted-foreground text-sm">
                      We align your success metrics with business goals to ensure every initiative drives tangible value.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <CardContent className="p-6 flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 h-fit">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Adoption & Change Management</h3>
                    <p className="text-muted-foreground text-sm">
                      Proven methodologies to manage resistance, build champions, and foster a culture of continuous learning.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <CardContent className="p-6 flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 h-fit">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
                    <p className="text-muted-foreground text-sm">
                      Leverage usage analytics and feedback loops to optimize performance and identify new opportunities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready to elevate your success?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how our Customer Success services can transform your organization's relationship with technology.
          </p>
          <Button size="lg" className="gap-2" asChild>
            <a href="/contact">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
