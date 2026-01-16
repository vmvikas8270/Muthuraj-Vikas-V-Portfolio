import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, BarChart3, Shield, Puzzle } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Building responsive web applications with modern frontend and backend technologies",
    status: "Learning",
    className: "badge-blue",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Creating insightful visual representations of complex data sets",
    status: "Learning",
    className: "badge-purple",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Understanding security principles and protecting digital assets",
    status: "Learning",
    className: "badge-pink",
  },
  {
    icon: Puzzle,
    title: "Problem Solving & DSA",
    description: "Solving algorithmic challenges and building strong programming foundations",
    status: "Practicing",
    className: "badge-orange",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            What I'm <span className="gradient-text">Building Skills In</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Currently learning and developing expertise in these areas
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft border border-border card-hover text-center"
              >
                <div className={`inline-flex p-4 rounded-full ${service.className} mb-4`}>
                  <service.icon size={28} className="text-white" />
                </div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                  {service.status}
                </span>
                <h3 className="font-display text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
