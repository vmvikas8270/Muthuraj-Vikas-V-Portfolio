import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "B.Tech - Computer Science and Business Systems (CSBS)",
    institution: "RMD Engineering College",
    affiliation: "Anna University Affiliated",
    duration: "2024 - 2028 (Expected)",
    current: true,
  },
  {
    icon: BookOpen,
    degree: "Health Science Courses",
    institution: "Previously Completed",
    affiliation: "",
    duration: "Completed",
    current: false,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.2 }}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 w-8 h-8 rounded-full flex items-center justify-center ${
                    item.current ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    <item.icon size={16} />
                  </div>

                  <div className={`p-6 rounded-xl border ${
                    item.current ? "bg-card border-primary/20 shadow-soft" : "bg-muted/30 border-border"
                  }`}>
                    {item.current && (
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                        Currently Pursuing
                      </span>
                    )}
                    <h3 className="font-display text-xl font-semibold mb-2">{item.degree}</h3>
                    <p className="text-muted-foreground mb-1">{item.institution}</p>
                    {item.affiliation && (
                      <p className="text-sm text-muted-foreground mb-2">{item.affiliation}</p>
                    )}
                    <p className="text-sm font-medium text-primary">{item.duration}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
