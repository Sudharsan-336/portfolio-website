import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Award, Code2, Trophy } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    icon: Github,
    stats: "500+ Contributions",
    link: "https://github.com",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "LeetCode",
    icon: Code2,
    stats: "1000+ Problems Solved",
    link: "https://leetcode.com",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "SkillRack",
    icon: Award,
    stats: "Top 10% Rank",
    link: "#",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "CodeChef",
    icon: Trophy,
    stats: "4 Star Rating",
    link: "https://codechef.com",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Profiles() {
  return (
    <div className="min-h-screen py-32 px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-float" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">Coding Profiles</h1>
          <p className="text-xl text-muted-foreground">My presence across coding platforms</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="glass-card border-border overflow-hidden group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${profile.color}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <profile.icon size={32} className="text-white" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-2xl gradient-text group-hover:glow-text transition-all">
                        {profile.name}
                      </CardTitle>
                      <p className="text-muted-foreground">{profile.stats}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${profile.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 glass-card p-8 rounded-3xl text-center"
        >
          <h2 className="text-2xl font-bold mb-4 gradient-text">Competitive Programming Stats</h2>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1500+</div>
              <div className="text-muted-foreground">Problems Solved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Contests</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">Top 5%</div>
              <div className="text-muted-foreground">Global Rank</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
