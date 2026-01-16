import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Globe, 
  Monitor, 
  GitBranch, 
  Brain,
  FileCode,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "C", "C++", "Python"],
    className: "badge-blue",
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript"],
    className: "badge-purple",
  },
  {
    title: "Technical Skills",
    icon: FileCode,
    skills: ["Data Structures & Algorithms", "DBMS"],
    className: "badge-pink",
  },
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: ["Windows", "Linux (Beginner)"],
    className: "badge-orange",
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["GitHub", "VS Code"],
    className: "badge-green",
  },
  {
    title: "Soft Skills",
    icon: Brain,
    skills: ["Logical Thinking", "Problem-Solving", "Teamwork"],
    className: "badge-blue",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft border border-border card-hover"
              >
                <div className={`inline-flex p-3 rounded-lg ${category.className} mb-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
