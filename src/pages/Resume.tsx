import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section className="relative overflow-hidden py-16 md:py-28 px-4 sm:px-6">
      <div className="pointer-events-none hidden lg:block absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[110px] animate-float" />
      <div
        className="pointer-events-none hidden md:block absolute bottom-10 left-6 md:left-20 w-64 md:w-80 h-64 md:h-80 bg-primary/10 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16 px-2"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text pb-2">My Resume</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground pt-1 max-w-2xl mx-auto">
            Download my professional resume
          </p>
        </motion.div>

        <div className="glass-card p-6 sm:p-8 md:p-10 rounded-3xl text-center space-y-6">
          <div className="inline-flex p-6 sm:p-8 rounded-full bg-primary/10 mx-auto">
            <FileText size={64} className="text-primary sm:hidden" />
            <FileText size={80} className="text-primary hidden sm:block" />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold">Professional Resume</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Get the full overview of my experience, education, and skills in a beautifully formatted PDF.
          </p>

          <Button
            size="lg"
            className="glow-border hover:scale-105 transition-transform mx-auto"
            asChild
          >
            <a href="/Sudharsan%20R-resume%202.pdf" download="Sudharsan R-resume 2.pdf">
              <Download className="mr-2" />
              Download Resume
            </a>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 md:mt-12 grid gap-6 md:grid-cols-2"
        >
          <motion.div 
            className="glass-card p-6 rounded-2xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Experience</h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="font-semibold">Java Development Intern</div>
                <div className="text-sm text-muted-foreground">InternPe • 28th July – 24th Aug 2025</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="font-semibold">Java Programming Intern</div>
                <div className="text-sm text-muted-foreground">Vault of Codes • 05th Nov – 05th Dec 2025</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="glass-card p-6 rounded-2xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Education</h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="font-semibold">B.Tech in Computer Science and Business System</div>
                <div className="text-sm text-muted-foreground">Panimalar Engineering College, Chennai • 2023 – 2027</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="font-semibold">HSC (Higher Secondary Certificate)</div>
                <div className="text-sm text-muted-foreground">Bharathidasan Matric Higher Secondary School, Kanchipuram • June 2022 – April 2023</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="font-semibold">SSLC (Secondary School Leaving Certificate)</div>
                <div className="text-sm text-muted-foreground">Bharathidasan Matric Higher Secondary School, Kanchipuram • June 2020 – April 2021</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <motion.div 
            className="glass-card p-6 rounded-2xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Certifications</h3>
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="font-semibold">Java Programming</div>
                <div className="text-sm text-muted-foreground">Udemy</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="font-semibold">SQL and Relational Databases</div>
                <div className="text-sm text-muted-foreground">Cognitive Class (IBM)</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="font-semibold">Technology Job Simulation</div>
                <div className="text-sm text-muted-foreground">Deloitte</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="font-semibold">Networking Basics</div>
                <div className="text-sm text-muted-foreground">Cisco</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
