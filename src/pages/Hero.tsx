import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Scene3D } from "@/components/Scene3D";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: Github, href: "https://github.com/Sudharsan-336", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sudharsan336", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/classy_sudhan", label: "Instagram" },
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
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 pt-8 pb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I'm <span className="text-primary font-semibold">Sudharsan R</span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base lg:text-lg text-foreground mb-8 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Turning ideas into functional and efficient solutions using programming skills.
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
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                About Me
              </motion.h2>
              <motion.p 
                className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Third-year engineering student specializing in Computer Science and Business Systems (CSBS) with a strong foundation in{" "}
                <span className="text-primary font-semibold">Java</span>,{" "}
                <span className="text-primary font-semibold">MySQL</span>,{" "}
                <span className="text-primary font-semibold">HTML</span>,{" "}
                <span className="text-primary font-semibold">CSS</span>, and Web Development. Seeking an entry-level software development opportunity to apply technical skills, problem-solving abilities, logical thinking, and continuous learning in a growth-oriented organization.
              </motion.p>
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
                  className="relative glass-card p-3 rounded-full transition-all duration-300"
                  whileHover={{
                    y: -12,
                    rotate: [0, -6, 6, 0],
                    scale: 1.16,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1
                  }}
                  transition={{ 
                    delay: 1.2 + index * 0.12,
                    type: "spring",
                    stiffness: 260,
                    damping: 18
                  }}
                >
                  <motion.span
                    className="absolute inset-1 rounded-full bg-gradient-to-br from-primary/40 via-transparent to-primary/40 blur-md opacity-60"
                    animate={{
                      opacity: [0.35, 0.7, 0.35],
                      scale: [0.9, 1.12, 0.9],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror",
                      delay: index * 0.25,
                    }}
                  />
                  <motion.span
                    className="absolute inset-0 rounded-full border border-primary/50"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.3,
                    }}
                  />
                  <motion.div
                    className="relative z-10 flex items-center justify-center text-primary"
                    animate={{
                      scale: [1, 1.07, 1],
                      filter: ["drop-shadow(0 0 0px rgba(59,130,246,0))", "drop-shadow(0 0 10px rgba(59,130,246,0.35))", "drop-shadow(0 0 0px rgba(59,130,246,0))"],
                    }}
                    transition={{
                      duration: 2.1,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      delay: index * 0.18,
                    }}
                  >
                    <social.icon size={24} />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
