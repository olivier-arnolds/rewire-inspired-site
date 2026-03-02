import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";
import { ArrowRight, Calendar, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";

const WEBINAR_IMAGE_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663219425815/2CVJJmcYxQipBBghkzRACY/Linkedin_ad_Eclectik_webinar_25March2026_c104b3a4.png";

export default function Webinar() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    linkedinUrl: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const registerMutation = trpc.webinar.register.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("You are registered! See you on March 25th.");
    },
    onError: (error) => {
      toast.error(error.message || "Registration failed. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error("Please agree to the privacy policy to continue.");
      return;
    }
    registerMutation.mutate({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      company: formData.company || undefined,
      jobTitle: formData.jobTitle || undefined,
      linkedinUrl: formData.linkedinUrl || undefined,
    });
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const inputClass =
    "bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-4 text-lg focus-visible:ring-0 focus-visible:border-primary transition-colors";

  return (
    <Layout>
      <Helmet>
        <title>Webinar: From Workplace Data to AI Advantage | Eclectik</title>
        <meta
          name="description"
          content="Register for Eclectik's webinar on March 25, 2026: From Workplace Data to AI Advantage. Learn how to turn workplace signals into measurable AI ROI."
        />
      </Helmet>

      <section className="relative min-h-screen flex items-center pt-32 lg:pt-40 overflow-hidden bg-background">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Column: Form */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="max-w-xl"
            >
              {/* Eyebrow */}
              <div className="mb-4 flex items-center gap-3">
                <div className="h-[1px] w-12 bg-primary" />
                <span className="text-primary font-medium tracking-wider uppercase text-sm">
                  Webinar Registration
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                From Workplace Data to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  AI Advantage
                </span>
              </h1>

              {/* Event details */}
              <div className="flex flex-wrap gap-6 mb-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">March 25, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">4:00 PM CET · 3:00 PM GMT · 10:00 AM EDT</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Online</span>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center"
                >
                  <div className="text-4xl mb-4">🎉</div>
                  <h2 className="text-2xl font-bold mb-2">You're registered!</h2>
                  <p className="text-muted-foreground">
                    Thank you for registering. We'll send you a confirmation and joining details to{" "}
                    <span className="text-primary font-medium">{formData.email}</span>.
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    See you on <strong>March 25, 2026</strong> at 4:00 PM CET.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-muted-foreground">
                        First Name*
                      </label>
                      <Input
                        type="text"
                        id="firstName"
                        placeholder="Jane"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-muted-foreground">
                        Last Name*
                      </label>
                      <Input
                        type="text"
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                      Work Email*
                    </label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className={inputClass}
                    />
                  </div>

                  {/* Company + Job Title */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-muted-foreground">
                        Company
                      </label>
                      <Input
                        type="text"
                        id="company"
                        placeholder="Your Company Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="jobTitle" className="text-sm font-medium text-muted-foreground">
                        Job Title
                      </label>
                      <Input
                        type="text"
                        id="jobTitle"
                        placeholder="HR Director"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="space-y-2">
                    <label htmlFor="linkedinUrl" className="text-sm font-medium text-muted-foreground">
                      LinkedIn Profile URL
                    </label>
                    <Input
                      type="url"
                      id="linkedinUrl"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={formData.linkedinUrl}
                      onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3 pt-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, consent: checked as boolean })
                      }
                      className="mt-1 border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      I agree to Eclectik storing and processing my information to send me webinar
                      details and related communications. View our{" "}
                      <a href="/privacy-policy" className="underline hover:text-primary">
                        Privacy Policy
                      </a>
                      .*
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={registerMutation.isPending}
                    className="w-full text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-background font-bold transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {registerMutation.isPending ? (
                      "Registering..."
                    ) : (
                      <>
                        Register for Free <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Right Column: Webinar Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <img
                src={WEBINAR_IMAGE_URL}
                alt="Webinar: From Workplace Data to AI Advantage – March 25, 2026"
                className="w-full max-w-lg rounded-2xl shadow-2xl object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
