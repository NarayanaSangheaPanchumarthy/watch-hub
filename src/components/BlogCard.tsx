import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Article, authors } from "@/data/mockData";

interface BlogCardProps {
  article: Article;
  featured?: boolean;
}

const BlogCard = ({ article, featured = false }: BlogCardProps) => {
  const author = authors.find((a) => a.id === article.authorId);

  if (featured) {
    return (
      <Link
        to={`/blog/${article.slug}`}
        className="group block glass-card rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="aspect-[16/9] md:aspect-auto overflow-hidden">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <Badge variant="secondary" className="w-fit mb-3 text-xs">
              {article.category}
            </Badge>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {article.title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-3 mt-auto">
              {author && (
                <Link
                  to={`/author/${author.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <img src={author.avatar} alt={author.name} className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-sm font-medium text-foreground">{author.name}</span>
                </Link>
              )}
              <span className="text-muted-foreground text-xs flex items-center gap-1">
                <Clock className="w-3 h-3" /> {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group block glass-card rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">{article.category}</Badge>
          <span className="text-muted-foreground text-xs">{article.publishedAt}</span>
        </div>
        <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {author && (
              <>
                <img src={author.avatar} alt={author.name} className="w-6 h-6 rounded-full object-cover" />
                <span className="text-xs text-muted-foreground">{author.name}</span>
              </>
            )}
          </div>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" /> {article.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
