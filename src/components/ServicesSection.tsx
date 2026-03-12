import { motion } from "framer-motion";
import { Globe, Layers, ShoppingCart, Smartphone, Wrench } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Custom-built websites that are fast, secure, and scalable for any business." },
  { icon: Layers, title: "Full Stack Development", desc: "End-to-end solutions with modern frontend and robust backend technologies." },
  { icon: ShoppingCart, title: "E-commerce Solutions", desc: "Online stores with seamless checkout, inventory management, and payments." },
  { icon: Smartphone, title: "Responsive Web Design", desc: "Pixel-perfect designs that look stunning on every device and screen size." },
  { icon: Wrench, title: "Website Maintenance", desc: "Ongoing support, updates, and performance optimization for your site." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From concept to deployment, we offer a full range of web development services.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-7 group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
