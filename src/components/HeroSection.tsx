import { motion } from "framer-motion";
import { Github, Code2, Sparkles, Shield, Database, BarChart3, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-placeholder.png";

const skills = [
  { icon: Code2, label: "Full Stack Developer", className: "badge-blue" },
  { icon: BarChart3, label: "Data Visualization", className: "badge-purple" },
  { icon: Shield, label: "Cyber Security", className: "badge-pink" },
  { icon: Database, label: "DBMS", className: "badge-orange" },
  { icon: Languages, label: "Learning Japanese", className: "badge-green" },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Floating decorative elements */}
      <div className="floating-dot w-4 h-4 bg-primary top-32 left-20" style={{ animationDelay: "0s" }} />
      <div className="floating-dot w-6 h-6 bg-secondary top-48 right-32" style={{ animationDelay: "1s" }} />
      <div className="floating-dot w-3 h-3 bg-accent top-64 left-1/3" style={{ animationDelay: "2s" }} />
      <div className="floating-dot w-8 h-8 bg-primary/30 bottom-32 left-16" style={{ animationDelay: "3s" }} />
      <div className="floating-dot w-5 h-5 bg-accent/50 bottom-48 right-20" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              Open to Opportunities
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hello, I'm
              <br />
              <span className="gradient-text">Muthuraj Vikas V</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              B.Tech CSBS Student | Full Stack Learner | Data & Security Enthusiast
            </p>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`${skill.className} px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 shadow-soft`}
                >
                  <skill.icon size={16} />
                  {skill.label}
                </motion.span>
              ))}
            </div>

            <p className="text-muted-foreground mb-8">
              Passionate about building innovative solutions with modern technologies
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#skills">
                <Button size="lg" className="shadow-button">
                  View Skills
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/vmvikas8270"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://leetcode.com/u/MUTHURAJ_VIKAS_V2002/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Code2 size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full scale-110 blur-3xl" />
              
              {/* Profile image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-card shadow-card">
                <img
                  src={profileImage}
                  alt="Muthuraj Vikas V"
                  className="w-full h-full object-cover"
                  key={profileImage}
                />
              </div>

              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/20" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-accent/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
