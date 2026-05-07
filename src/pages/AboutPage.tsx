import { Info, HelpCircle, Film, Tv, Trophy, Globe, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.enum(["feedback", "bug", "content", "other"]),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

const features = [
  { icon: Film, title: "Movies", desc: "Browse thousands of titles across every genre" },
  { icon: Tv, title: "TV Shows", desc: "Discover trending series and hidden gems" },
  { icon: Trophy, title: "Top Lists", desc: "Curated rankings updated regularly" },
  { icon: Globe, title: "Global Coverage", desc: "Content from streaming platforms worldwide" },
];

const faqs = [
  {
    q: "Is this service free to use?",
    a: "Yes! Browsing our catalog, creating a watchlist, and reading reviews is completely free. We help you find where to stream content across various platforms.",
  },
  {
    q: "How do I create a watchlist?",
    a: "Sign up for a free account, then click the bookmark icon on any movie or show to add it to your personal watchlist. Access it anytime from the Watchlist page.",
  },
  {
    q: "Where does the content data come from?",
    a: "We aggregate information from multiple trusted sources to provide accurate ratings, streaming availability, and content details across platforms.",
  },
  {
    q: "Can I filter content by genre or streaming provider?",
    a: "Absolutely. Use the Movies or TV Shows pages to filter by genre, year, rating, and streaming provider. You can also sort results by rating, year, or title.",
  },
  {
    q: "How often are ratings and listings updated?",
    a: "Our catalog is refreshed regularly to reflect new releases, rating changes, and updated streaming availability.",
  },
  {
    q: "Do you offer a mobile app?",
    a: "Currently we're a web-based platform optimized for all screen sizes. A dedicated mobile app is on our roadmap.",
  },
  {
    q: "How do I report incorrect information?",
    a: "If you spot an error in our listings, please reach out through the contact section and we'll investigate promptly.",
  },
];

const AboutPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "feedback", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      setForm({ name: "", email: "", subject: "feedback", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container py-12 md:py-20 space-y-16">
      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <Info className="w-4 h-4" />
          About Us
        </div>
        <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Your Ultimate Streaming Guide
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We make it easy to discover movies and TV shows across every streaming platform. 
          Whether you're looking for the latest blockbuster or a hidden indie gem, our curated 
          lists, real-time ratings, and powerful filters help you find exactly what to watch next.
        </p>
      </motion.section>

      {/* Features Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border text-center"
          >
            <f.icon className="w-8 h-8 text-primary" />
            <h3 className="font-semibold text-foreground">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <div className="flex items-center gap-2 text-center justify-center">
          <HelpCircle className="w-5 h-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="max-w-2xl mx-auto space-y-6"
      >
        <div className="flex items-center gap-2 justify-center">
          <Mail className="w-5 h-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Get in Touch
          </h2>
        </div>
        <p className="text-center text-muted-foreground">
          Have feedback or found an issue? We'd love to hear from you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-xl bg-card border border-border">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                placeholder="Your name"
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <select
              id="subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="feedback">General Feedback</option>
              <option value="bug">Report a Bug</option>
              <option value="content">Content Issue</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={5}
              placeholder="Tell us what's on your mind..."
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              {errors.message ? <p className="text-destructive">{errors.message}</p> : <span />}
              <span>{form.message.length}/1000</span>
            </div>
          </div>
          <Button type="submit" disabled={submitting} className="w-full">
            <Send className="w-4 h-4" />
            {submitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </motion.section>
    </main>
    <Footer />
  </div>
  );
};

export default AboutPage;
