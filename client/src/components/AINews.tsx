import { motion } from "framer-motion";
import { ExternalLink, Calendar, Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AINews() {
  const newsItems = [
    {
      title: "AI Adoption Surges in Enterprise",
      source: "AWS Research",
      date: "Nov 28, 2025",
      summary: "Research shows that between 2024 and 2025, 50% of businesses will have adopted AI solutions, marking a significant shift in operational strategy.",
      category: "Adoption"
    },
    {
      title: "Agentic AI Systems on the Rise",
      source: "StartUs Insights",
      date: "Nov 13, 2025",
      summary: "Agentic AI is expected to expand from near-zero adoption in 2024 to influencing 15% of enterprise decisions by 2028.",
      category: "Technology"
    },
    {
      title: "Generative AI: Beyond the Hype",
      source: "Menlo Ventures",
      date: "Dec 9, 2025",
      summary: "AI is spreading across enterprises at a pace with no precedent in modern software history, moving from experimentation to core business value.",
      category: "Strategy"
    },
    {
      title: "AI as a True Partner",
      source: "Microsoft",
      date: "Dec 8, 2025",
      summary: "Emerging trends suggest AI will become a true partner by 2026—boosting teamwork, security, and infrastructure efficiency.",
      category: "Future of Work"
    }
  ];

  return (
    <section className="py-24 bg-white/5 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="border-primary/50 text-primary">
                Latest Updates
              </Badge>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              AI Industry <span className="text-primary">Insights</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-right hidden md:block"
          >
            <p className="text-muted-foreground">
              Curated news and breakthroughs <br /> shaping the future of work.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="text-xs font-normal">
                      {item.category}
                    </Badge>
                    <Newspaper className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-6 flex-grow line-clamp-3">
                    {item.summary}
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-muted-foreground mt-auto pt-4 border-t border-border/50">
                    <span className="font-medium text-foreground/80">{item.source}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
