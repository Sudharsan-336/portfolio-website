import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  { name: "Java", level: 85, color: "from-green-500 to-emerald-500" },
  { name: "MySQL", level: 85, color: "from-purple-500 to-pink-500" },
  { name: "HTML", level: 90, color: "from-cyan-500 to-blue-500" },
  { name: "CSS", level: 90, color: "from-blue-500 to-purple-500" },
  { name: "Git and GitHub", level: 90, color: "from-pink-500 to-rose-500" },
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
      className="space-y-2 rounded-2xl p-4 md:p-5 bg-background/40 backdrop-blur-sm border border-border/40 shadow-sm"
      whileHover={{ scale: 1.02, y: -3 }}
      whileTap={{ scale: 0.99 }}
    >
      <motion.div
        className="flex justify-between items-center"
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          delay: index * 0.12,
          repeatType: "mirror",
        }}
      >
        <span className="text-lg font-medium tracking-wide">{name}</span>
        <motion.span
          className="text-primary font-bold"
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
        >
          {level}%
        </motion.span>
      </motion.div>
      <div className="h-3 bg-muted rounded-full overflow-hidden relative">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
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
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text pb-2">My Skills</h1>
          <p className="text-xl text-muted-foreground pt-1">Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          className="glass-card p-8 md:p-12 rounded-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} color={skill.color} index={index} />
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
