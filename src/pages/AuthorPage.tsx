import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Badge } from "@/components/ui/badge";
import { authors, articles } from "@/data/mockData";
import { ArrowLeft, FileText, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const AuthorPage = () => {
  const { id } = useParams();
  const author = authors.find((a) => a.id === id);

  if (!author) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Author Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const authorArticles = articles.filter((a) => a.authorId === author.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-xl p-6 md:p-8 mb-10"
          >
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-24 h-24 rounded-full object-cover ring-2 ring-primary/30"
              />
              <div className="flex-1">
                <h1 className="font-display text-3xl font-bold text-foreground mb-1">{author.name}</h1>
                <Badge variant="secondary" className="mb-3">{author.role}</Badge>
                <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">{author.bio}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><FileText className="w-4 h-4" />{author.articleCount} articles</span>
                  {author.socials.twitter && (
                    <span className="flex items-center gap-1 text-primary">
                      <Twitter className="w-4 h-4" />{author.socials.twitter}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Articles by {author.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {authorArticles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <BlogCard article={article} />
              </motion.div>
            ))}
          </div>

          {authorArticles.length === 0 && (
            <p className="text-muted-foreground text-center py-12">No articles yet.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthorPage;
