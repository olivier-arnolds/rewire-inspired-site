import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import DownloadGate from "@/components/DownloadGate";

export default function WhitePapers() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const whitePapers = [
    {
      title: "The Role of the Employee Experience Platform in Enterprise AI Transformation",
      description: "Discover how EX platforms are becoming the critical infrastructure for successful AI adoption and workforce transformation.",
      date: "February 2025",
      readTime: "15 min read",
      image: "/images/whitepapers/ex-platform-ai-cover.png",
      fileUrl: "/documents/ex-platform-ai-report.pdf",
      fileName: "ex-platform-ai-transformation-report.pdf"
    },
    {
      title: "The State of Enterprise AI 2025 Report",
      description: "A comprehensive analysis of the current state of AI adoption in business for 2025, exploring how organizations are moving from pilot to production.",
      date: "2025",
      readTime: "20 min read",
      image: "/images/whitepapers/enterprise-ai-2025-cover.png",
      fileUrl: "https://cdn.openai.com/pdf/7ef17d82-96bf-4dd1-9df2-228f7f377a29/the-state-of-enterprise-ai_2025-report.pdf",
      fileName: "the-state-of-enterprise-ai_2025-report.pdf"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background pt-32 lg:pt-40 pb-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whitePapers.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col overflow-hidden">
                  <div className="relative h-64 w-full overflow-hidden bg-black/20">
                    <img 
                      src={paper.image} 
                      alt={paper.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  </div>
                  
                  <CardHeader className="flex-grow relative z-10 -mt-12">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors backdrop-blur-md border border-white/10">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span>{paper.date}</span>
                      <span>•</span>
                      <span>{paper.readTime}</span>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {paper.title}
                    </CardTitle>
                    <CardDescription className="text-base line-clamp-3">
                      {paper.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="mt-auto">
                    <DownloadGate 
                      title={paper.title}
                      fileName={paper.fileName}
                      fileUrl={paper.fileUrl}
                      trigger={
                        <Button variant="outline" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                          Download PDF <Download className="w-4 h-4" />
                        </Button>
                      }
                    />
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
