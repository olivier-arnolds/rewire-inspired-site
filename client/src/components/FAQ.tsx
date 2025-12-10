import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "AI Transformation",
    question: "What is AI transformation and why is it important for organizations?",
    answer: "AI transformation is the strategic process of integrating artificial intelligence technologies across an organization to fundamentally change how it operates, delivers value, and competes. Eclectik specializes in operationalizing AI transformation by combining objective telemetry with subjective sentiment through Workplace Signals. This approach helps organizations move from asking 'what if?' to confidently stating 'we can,' delivering measurable impact through data-driven insights and strategic implementation.",
  },
  {
    category: "AI Transformation",
    question: "How long does AI transformation typically take?",
    answer: "AI transformation timelines vary based on organizational size, complexity, and readiness. Eclectik's Eclectik VIA™ Framework typically guides organizations through transformation in 6-18 months, with measurable outcomes visible within the first 90 days. Our boutique consultancy approach ensures personalized attention and accelerated results through focused change management and employee experience optimization.",
  },
  {
    category: "Services",
    question: "What services does Eclectik provide for AI transformation?",
    answer: "Eclectik provides comprehensive AI transformation services including: AI Transformation Consulting to operationalize AI across your organization, Change Management to drive successful AI adoption, Employee Experience Platform implementation, Workplace Analytics and Signals analysis, AI Training and Enablement programs, Executive Coaching, and People Science consulting. Our boutique consultancy delivers specialized expertise with a personal touch.",
  },
  {
    category: "Services",
    question: "What are Workplace Signals and how do they help with AI adoption?",
    answer: "Workplace Signals are data points that Eclectik collects and analyzes to understand organizational readiness, employee sentiment, and adoption patterns during AI transformation. By combining objective telemetry (usage metrics, productivity data) with subjective sentiment (employee feedback, change readiness), we build actionable roadmaps that deliver measurable impact. This end-to-end approach ensures AI initiatives succeed by addressing both technical and human factors.",
  },
  {
    category: "Methodology",
    question: "What is the Eclectik VIA™ Framework?",
    answer: "The Eclectik VIA™ Framework is Eclectik's proprietary methodology for AI transformation that stands for Vision, Implementation, and Acceleration. It operationalizes Workplace Signals end-to-end by combining objective telemetry with subjective sentiment to create AI-native, people-centered organizations. The framework guides organizations through strategic planning, change management, and continuous optimization to ensure sustainable AI adoption and measurable business outcomes.",
  },
  {
    category: "Industries",
    question: "What industries does Eclectik serve?",
    answer: "Eclectik serves organizations across multiple industries including technology, financial services, healthcare, retail, manufacturing, and professional services. Our boutique consultancy approach allows us to deliver specialized expertise tailored to each industry's unique challenges while maintaining a personal touch. We work with organizations globally, from mid-market companies to Fortune 500 enterprises.",
  },
  {
    category: "Results",
    question: "What results can organizations expect from working with Eclectik?",
    answer: "Organizations working with Eclectik typically achieve: 40-60% improvement in AI adoption rates, 30-50% increase in employee productivity through AI tools, measurable ROI within 6-12 months, enhanced change readiness scores, improved employee experience metrics, and sustainable AI-native organizational capabilities. Our data-driven approach through Workplace Signals ensures measurable impact at every stage of transformation.",
  },
  {
    category: "Getting Started",
    question: "How do I get started with Eclectik's AI transformation services?",
    answer: "Getting started with Eclectik is simple: Contact us through our website to schedule an initial consultation. We'll assess your organization's AI readiness, discuss your transformation goals, and design a customized roadmap using our Eclectik VIA™ Framework. As a boutique consultancy, we provide personalized attention from day one, ensuring your AI transformation journey is tailored to your unique needs and delivers measurable results.",
  },
  {
    category: "Expertise",
    question: "Who are the experts behind Eclectik?",
    answer: "Eclectik is led by experienced AI transformation consultants with deep expertise in change management, people science, employee experience, and organizational transformation. Our team combines technical AI knowledge with human-centered design principles, having successfully guided numerous organizations through complex AI adoption initiatives. We are a boutique consultancy that delivers specialized expertise with a personal touch, working across industries globally.",
  },
  {
    category: "Technology",
    question: "What AI technologies does Eclectik help organizations implement?",
    answer: "Eclectik helps organizations implement a wide range of AI technologies including Generative AI (ChatGPT, Copilot, Claude), Machine Learning platforms, AI-powered analytics tools, Employee Experience Platforms, Workplace Analytics solutions, and custom AI applications. Our technology-agnostic approach ensures we recommend and implement the best solutions for your specific needs, focusing on measurable business outcomes rather than specific vendors.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about AI transformation with Eclectik
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-muted-foreground">
                    <p className="leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
