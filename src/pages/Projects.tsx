import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    github: "#",
    live: "#",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses and sentiment analysis.",
    tech: ["React", "WebSocket", "OpenAI", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with kanban boards and team analytics.",
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio CMS",
    description: "Headless CMS for managing portfolio content with drag-and-drop builder.",
    tech: ["React", "GraphQL", "Strapi", "AWS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    github: "#",
    live: "#",
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-first fitness tracking app with workout plans and progress analytics.",
    tech: ["React Native", "Firebase", "Redux", "Chart.js"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    github: "#",
    live: "#",
  },
  {
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support and SEO optimization.",
    tech: ["Next.js", "MDX", "Vercel", "Tailwind"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-32 px-4 relative">
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">My Projects</h1>
          <p className="text-xl text-muted-foreground">A showcase of my recent work and experiments</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="glass-card border-border overflow-hidden group h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
