import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Download } from "lucide-react";

export default function WhitePapers() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const whitePapers = [
    {
      title: "The Future of AI in Enterprise",
      description: "A comprehensive guide to how AI is reshaping business operations and strategy in 2025 and beyond.",
      date: "October 2024",
      readTime: "15 min read"
    },
    {
      title: "Workplace Signals: Decoding Employee Sentiment",
      description: "Learn how to leverage objective telemetry and subjective sentiment to build actionable roadmaps.",
      date: "September 2024",
      readTime: "12 min read"
    },
    {
      title: "AI Governance Frameworks",
      description: "Best practices for implementing secure, ethical, and compliant AI systems in large organizations.",
      date: "August 2024",
      readTime: "20 min read"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              White Papers
            </h1>
            <p className="text-xl text-muted-foreground">
              In-depth analysis, research, and insights on AI transformation, workplace signals, and data strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {whitePapers.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span>{paper.date}</span>
                      <span>•</span>
                      <span>{paper.readTime}</span>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {paper.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {paper.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                      Download PDF <Download className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
