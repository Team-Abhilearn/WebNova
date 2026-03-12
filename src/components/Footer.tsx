import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="font-display text-xl font-bold gradient-text">WebNova</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building powerful digital experiences with modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Home", "About", "Services", "Projects", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Website Development", "Full Stack Development", "E-commerce Solutions", "Responsive Design", "Maintenance"].map((s) => (
                <li key={s} className="hover:text-primary transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
            <a href="mailto:abhilearn25@gmail.com"><li>Contact: abhilearn25@gmail.com</li></a> 
             
              <li>Punjab, India</li>
            </ul>
          </div>

        </div>
        

        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          Copyright © 2026 WebNova. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
