import { Github, Code2, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold gradient-text">MVV</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vmvikas8270"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://leetcode.com/u/MUTHURAJ_VIKAS_V2002/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors"
            >
              <Code2 size={18} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-accent" /> by Muthuraj Vikas V © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
