import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Clock, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Full Stack Web Application",
    description: "A comprehensive web application showcasing modern development practices",
    tags: ["React", "Node.js", "MongoDB"],
    status: "Coming Soon",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with charts and graphs",
    tags: ["Python", "D3.js", "Pandas"],
    status: "Coming Soon",
  },
  {
    title: "Security Analysis Tool",
    description: "A tool for basic security assessment and vulnerability scanning",
    tags: ["Python", "Linux", "Security"],
    status: "Coming Soon",
  },
  {
    title: "DSA Problem Solutions",
    description: "Collection of algorithmic solutions and problem-solving approaches",
    tags: ["Java", "C++", "Algorithms"],
    status: "In Progress",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft border border-border card-hover group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Rocket className="text-primary" size={24} />
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-warning/10 text-warning rounded-full">
                    <Clock size={12} />
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center text-muted-foreground mt-8 italic"
          >
            ✨ Exciting projects are in the works — stay tuned!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
