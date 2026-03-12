import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import AbhilearnImg from "../Images/abhilearn.png"
import ZomatoImg from "../Images/zomato-front.png"
import NetflixImg from "../Images/netflix-clone.png"

type Category = "All" | "Full Stack" | "Clone Projects";

interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  category: Category;
  liveUrl: string;
  
}

const projects: Project[] = [
  {
    name: "Abhilearn",
    description: "Abhilearn is a website that provides college previous year question papers (PYQs) in one place, completely free for students.",
    image: AbhilearnImg,
    technologies: ["HTML", "CSS" ,"Supabase", "Express Js", "Javascript"],
    liveUrl: "https://abhilearn.in",
   
    category: "Full Stack"
  },
  {
    name: "Zomato-Clone",
    description: "The Zomato Frontend Clone is a web project that replicates the user interface of the Zomato food delivery platform.",
    image: ZomatoImg,
    technologies: ["HTML", "CSS"],
    liveUrl: "https://zomato-phi.vercel.app/",
   
    category: "Clone Projects"
  },
  {
    name: "Netflix-Clone",
    description: "The Netflix Frontend Clone is a web project that replicates the user interface of the Netflix streaming platform. It focuses on recreating the layout and design to display movies and shows using modern frontend technologies.",
    image: NetflixImg,
    technologies: ["HTML", "CSS"],
    liveUrl: "https://netflix-clone-responsive-brown.vercel.app/?_vercel_share=AxiRnZCs1TA9tBdVUYfRMrCVvvYC2TZD",
    
    category: "Clone Projects"
  },
];

const categories: Category[] = ["All", "Full Stack", "Clone Projects"];

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our recent work across various domains and technologies.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card overflow-hidden group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button variant="hero" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                      </a>
                    </Button>
                    
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
