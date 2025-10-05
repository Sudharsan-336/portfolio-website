import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, FileText, Mail, BookOpen, Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/projects", label: "Projects", icon: Briefcase },
  { path: "/skills", label: "Skills", icon: Code },
  { path: "/resume", label: "Resume", icon: FileText },
  { path: "/contact", label: "Contact", icon: Mail },
  { path: "/articles", label: "Articles", icon: BookOpen },
  { path: "/profiles", label: "Profiles", icon: Github },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-card px-6 py-3 rounded-full glow-border"
        >
          <ul className="flex gap-6 items-center">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground glow-text"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <item.icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="glass-card glow-border"
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl"
        >
          <nav className="flex items-center justify-center h-full">
            <ul className="flex flex-col gap-4 items-center">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-8 py-4 rounded-2xl text-lg transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground glow-text scale-110"
                          : "text-muted-foreground hover:text-foreground hover:scale-105"
                      }`
                    }
                  >
                    <item.icon size={24} />
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </>
  );
};
