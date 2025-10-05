import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Scene3D } from "@/components/Scene3D";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      <Scene3D />
      
      {/* Gradient Blur Effects */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 gradient-text leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full Stack Developer
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm <span className="text-primary font-semibold">Your Name</span>
            </motion.p>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Crafting beautiful, performant web experiences with modern technologies.
              Passionate about clean code, innovative solutions, and continuous learning.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-12 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/contact">
                <Button size="lg" className="glow-border hover:scale-105 transition-transform w-full sm:w-auto">
                  Hire Me <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/resume">
                <Button variant="outline" size="lg" className="glass-card hover:scale-105 transition-transform w-full sm:w-auto">
                  Download Resume <Download className="ml-2" />
                </Button>
              </Link>
            </motion.div>

            {/* About Section */}
            <motion.div
              className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text">About Me</h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
                A passionate developer with expertise in React, Node.js, and modern web technologies.
                I've delivered 50+ projects, contributed to open-source communities, and maintain a
                strong presence on coding platforms. My work focuses on creating intuitive user
                experiences backed by robust, scalable architectures.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">50+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary">5+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">100+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Problems Solved</div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-full hover:scale-110 hover:glow-border transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <social.icon size={24} className="text-primary" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
