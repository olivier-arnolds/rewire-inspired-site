import { useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Calendar, Newspaper, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NewsModal from "@/components/NewsModal";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function News() {
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all approved news from database
  const { data: newsItems = [], isLoading } = trpc.news.getApproved.useQuery(
    { limit: 100 }, // Get all approved news
    { refetchOnWindowFocus: false }
  );

  // Fallback hardcoded news items if database is empty
  const fallbackNewsItems = [
    {
      title: "AI Adoption Surges in Enterprise",
      source: "AWS Research",
      date: "Nov 28, 2025",
      summary: "Research shows that between 2024 and 2025, 50% of businesses will have adopted AI solutions, marking a significant shift in operational strategy.",
      fullContent: "New research from AWS indicates a tipping point in enterprise AI adoption. The study reveals that 50% of businesses are projected to have fully integrated AI solutions into their core operations by the end of 2025. This surge is driven by the need for operational efficiency, personalized customer experiences, and data-driven decision-making. Companies that fail to adapt risk falling behind in an increasingly competitive landscape.",
      category: "Adoption",
      url: "https://aws.amazon.com/ai/"
    },
    {
      title: "Agentic AI Systems on the Rise",
      source: "StartUs Insights",
      date: "Nov 13, 2025",
      summary: "Agentic AI is expected to expand from near-zero adoption in 2024 to influencing 15% of enterprise decisions by 2028.",
      fullContent: "StartUs Insights reports a rapid emergence of Agentic AI systems—autonomous agents capable of planning and executing complex tasks with minimal human intervention. While adoption was near-zero in 2024, projections suggest these systems will influence 15% of all enterprise decisions by 2028. This shift represents a move from passive AI tools to active, decision-making partners in the workplace.",
      category: "Technology",
      url: "https://www.startus-insights.com/"
    },
    {
      title: "Generative AI: Beyond the Hype",
      source: "Menlo Ventures",
      date: "Dec 9, 2025",
      summary: "AI is spreading across enterprises at a pace with no precedent in modern software history, moving from experimentation to core business value.",
      fullContent: "Menlo Ventures' latest report highlights that Generative AI has moved beyond the initial hype cycle and is now delivering tangible business value. The adoption rate is unprecedented in the history of modern software, with enterprises moving quickly from experimental pilots to full-scale production deployments. Key areas of impact include coding assistance, content generation, and customer support automation.",
      category: "Strategy",
      url: "https://menlovc.com/"
    },
    {
      title: "AI as a True Partner",
      source: "Microsoft",
      date: "Dec 8, 2025",
      summary: "Emerging trends suggest AI will become a true partner by 2026—boosting teamwork, security, and infrastructure efficiency.",
      fullContent: "Microsoft's vision for the future of work positions AI not just as a tool, but as a collaborative partner. By 2026, AI agents are expected to work alongside human teams to enhance creativity, bolster security postures, and optimize infrastructure efficiency. This partnership model aims to augment human capabilities rather than replace them, fostering a more productive and innovative work environment.",
      category: "Future of Work",
      url: "https://www.microsoft.com/en-us/worklab"
    }
  ];

  // Use database news if available, otherwise use fallback
  const displayNews = newsItems.length > 0 ? newsItems : fallbackNewsItems;

  const handleNewsClick = (item: any) => {
    setSelectedNews(item);
    setIsModalOpen(true);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      <Helmet>
        <title>AI Industry Insights | Eclectik</title>
        <meta name="description" content="Stay updated with the latest AI industry news, trends, and breakthroughs shaping the future of work." />
      </Helmet>
      
      <NewsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        newsItem={selectedNews} 
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-40 lg:pt-48 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
          </div>
          
          <div className="container relative z-10">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="max-w-4xl"
            >
              <Link href="/">
                <Button variant="ghost" className="mb-6 gap-2 hover:gap-3 transition-all">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="border-primary/50 text-primary">
                  Latest Updates
                </Badge>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                AI Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Insights</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                Curated news and breakthroughs shaping the future of work. Stay informed with the latest developments in artificial intelligence and workplace transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* News Grid Section */}
        <section className="py-16 pb-24">
          <div className="container">
            {isLoading ? (
              <div className="text-center py-20">
                <Newspaper className="w-16 h-16 mx-auto mb-4 text-muted-foreground animate-pulse" />
                <p className="text-muted-foreground text-lg">Loading latest news...</p>
              </div>
            ) : displayNews.length === 0 ? (
              <div className="text-center py-20">
                <Newspaper className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground text-lg">No news available at the moment</p>
                <p className="text-sm text-muted-foreground mt-2">Check back soon for the latest AI industry insights.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayNews.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card 
                      className="h-full bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
                      onClick={() => handleNewsClick(item)}
                    >
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
                            <span>
                              {('publishedDate' in item && item.publishedDate)
                                ? new Date(item.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                                : ('date' in item ? item.date : 'N/A')}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}
