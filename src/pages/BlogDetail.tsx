import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Badge } from "@/components/ui/badge";
import { articles, authors } from "@/data/mockData";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const author = authors.find((a) => a.id === article.authorId);
  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  const bodyParagraphs = article.body.split("\n").filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[360px] overflow-hidden">
          <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-4 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
                <Badge variant="secondary" className="mb-3">{article.category}</Badge>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  {article.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Meta bar */}
        <div className="border-b border-border/50">
          <div className="container max-w-3xl py-4 flex flex-wrap items-center gap-4">
            {author && (
              <Link to={`/author/${author.id}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <img src={author.avatar} alt={author.name} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-medium text-foreground">{author.name}</p>
                  <p className="text-xs text-muted-foreground">{author.role}</p>
                </div>
              </Link>
            )}
            <div className="flex items-center gap-4 ml-auto text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{article.publishedAt}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="container max-w-3xl py-10"
        >
          <div className="prose prose-invert prose-lg max-w-none">
            {bodyParagraphs.map((p, i) => {
              if (p.startsWith("## ")) {
                return <h2 key={i} className="font-display text-2xl font-bold text-foreground mt-8 mb-4">{p.replace("## ", "")}</h2>;
              }
              return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border/50">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
            ))}
          </div>
        </motion.article>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-t border-border/50 py-12">
            <div className="container">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">More Articles</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((a) => (
                  <BlogCard key={a.id} article={a} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
