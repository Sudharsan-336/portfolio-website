import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  { name: "React", level: 95, color: "from-cyan-500 to-blue-500" },
  { name: "TypeScript", level: 90, color: "from-blue-500 to-purple-500" },
  { name: "Node.js", level: 88, color: "from-green-500 to-emerald-500" },
  { name: "Next.js", level: 92, color: "from-purple-500 to-pink-500" },
  { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-teal-500" },
  { name: "GraphQL", level: 85, color: "from-pink-500 to-rose-500" },
  { name: "MongoDB", level: 87, color: "from-green-500 to-cyan-500" },
  { name: "PostgreSQL", level: 83, color: "from-blue-500 to-cyan-500" },
  { name: "AWS", level: 80, color: "from-orange-500 to-yellow-500" },
  { name: "Docker", level: 82, color: "from-blue-500 to-indigo-500" },
  { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
  { name: "Three.js", level: 78, color: "from-purple-500 to-indigo-500" },
];

const SkillBar = ({ name, level, color, index }: { name: string; level: number; color: string; index: number }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 200 + index * 100);
    return () => clearTimeout(timer);
  }, [level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium">{name}</span>
        <span className="text-primary font-bold">{level}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-white/20 animate-glow-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div className="min-h-screen py-32 px-4 relative">
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-float" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">My Skills</h1>
          <p className="text-xl text-muted-foreground">Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          className="glass-card p-8 md:p-12 rounded-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} {...skill} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {["Frontend", "Backend", "DevOps"].map((category, index) => (
            <div key={category} className="glass-card p-6 rounded-2xl text-center">
              <motion.div
                className="text-5xl font-bold gradient-text mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
              >
                {index === 0 ? "95" : index === 1 ? "88" : "82"}%
              </motion.div>
              <div className="text-muted-foreground">{category} Expertise</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
