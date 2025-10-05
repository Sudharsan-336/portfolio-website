import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Building Scalable React Applications",
    description: "Best practices for structuring large-scale React applications with TypeScript",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    title: "Modern CSS Techniques with Tailwind",
    description: "Exploring advanced Tailwind CSS patterns and custom configurations",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
  },
  {
    title: "Understanding Server Components in Next.js",
    description: "A deep dive into React Server Components and their benefits",
    date: "Mar 5, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    title: "GraphQL vs REST: When to Use What",
    description: "Comparing API architectures and choosing the right one for your project",
    date: "Feb 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
];

export default function Articles() {
  return (
    <div className="min-h-screen py-32 px-4 relative">
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">Featured Articles</h1>
          <p className="text-xl text-muted-foreground">Thoughts on development and technology</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="glass-card border-border overflow-hidden group h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl gradient-text group-hover:glow-text transition-all">
                    {article.title}
                  </CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full group/btn">
                    Read Article
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
