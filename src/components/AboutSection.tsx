import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Shield, TrendingUp, Briefcase, Languages } from "lucide-react";

const interests = [
  { icon: Code, label: "Full Stack Development" },
  { icon: Database, label: "Data Visualization" },
  { icon: Shield, label: "Cyber Security" },
  { icon: TrendingUp, label: "Statistics" },
  { icon: Briefcase, label: "Business Management" },
  { icon: Languages, label: "Japanese Language" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate B.Tech Computer Science and Business Systems (CSBS) student at RMD Engineering College, affiliated with Anna University. My journey in tech is driven by curiosity and a desire to build meaningful solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm actively exploring Full Stack Development, Data Visualization, and Cyber Security while strengthening my foundation in statistics and business management. Additionally, I'm learning Japanese language, embracing continuous growth both technically and personally.
              </p>
              <p className="text-muted-foreground">
                I believe in learning by doing and am excited to contribute to real-world projects that make an impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {interests.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-4 bg-card rounded-xl shadow-soft border border-border card-hover"
                >
                  <item.icon className="text-primary mb-2" size={24} />
                  <p className="text-sm font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
