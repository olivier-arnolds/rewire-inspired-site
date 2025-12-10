import { motion } from "framer-motion";
import { ArrowRight, Brain, Users, LineChart, Lightbulb, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ServicesOverview() {
  const services = [
    {
      title: "Our Approach",
      description: "We connect people data to business outcomes. By linking employee sentiment to performance, retention, and customer metrics, we help organisations quantify the impact of engagement and culture.",
      icon: <Target className="w-8 h-8 text-primary" />,
      link: "/services/people-science"
    },
    {
      title: "Culture & Infectious Change",
      description: "Real change spreads person to person not top down. Using our Infectious Change approach, we pinpoint the cultural signals, influencers, and habits that drive momentum.",
      icon: <Zap className="w-8 h-8 text-secondary" />,
      link: "/services/change-management"
    },
    {
      title: "Listening Strategy and Design",
      description: "We help you to design purposeful, insight-driven programmes that align to your business goals and culture defining what to measure, when & how to listen, and how to respond.",
      icon: <Brain className="w-8 h-8 text-accent" />,
      link: "/services/people-science"
    },
    {
      title: "Employee Experience Insight",
      description: "We help you understand what employees think, feel, and experience. As experts in survey science, we reduce data overload and highlight the insights that drive the strongest impact.",
      icon: <Lightbulb className="w-8 h-8 text-chart-4" />,
      link: "/services/people-science"
    },
    {
      title: "Leadership & Manager Enablement",
      description: "We equip managers with the insight, confidence, and practical tools to interpret data, act with purpose, and spark positive energy across their teams.",
      icon: <Users className="w-8 h-8 text-primary" />,
      link: "/training/enablement"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">HR Tech Services</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We support you to help leaders cut through the complexity. By turning employee insight into clear, actionable direction we enable your organization to build momentum, strengthen culture, and perform at its best.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/30 border-border/50 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 group">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6 p-3 rounded-xl bg-primary/10 w-fit group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <Link href={service.link}>
                    <Button variant="ghost" className="w-fit p-0 hover:bg-transparent hover:text-primary group-hover:translate-x-2 transition-all">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 h-full flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to transform?</h3>
              <p className="text-muted-foreground mb-8">
                Move from reactive HR to predictive, strategic impact.
              </p>
              <Link href="/contact">
                <Button size="lg" className="w-full">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
