import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Github, Code2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const contactInfo = [{
  icon: Mail,
  label: "Email",
  value: "vmvikas2002@gmail.com",
  href: "mailto:vmvikas2002@gmail.com"
}, {
  icon: Phone,
  label: "Phone",
  value: "6379053683",
  href: "tel:6379053683"
}, {
  icon: Github,
  label: "GitHub",
  value: "vmvikas8270",
  href: "https://github.com/vmvikas8270"
}, {
  icon: Code2,
  label: "LeetCode",
  value: "MUTHURAJ_VIKAS_V2002",
  href: "https://leetcode.com/u/MUTHURAJ_VIKAS_V2002/"
}];
const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!"
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  return <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 50
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="font-display text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology!
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => <motion.a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} initial={{
                opacity: 0,
                x: -20
              }} animate={isInView ? {
                opacity: 1,
                x: 0
              } : {}} transition={{
                delay: 0.2 + index * 0.1
              }} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </motion.a>)}
              </div>
            </div>

            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            delay: 0.3
          }}>
              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ContactSection;