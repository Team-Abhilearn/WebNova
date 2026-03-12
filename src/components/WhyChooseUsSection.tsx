import { motion } from "framer-motion";
import { Zap, Code2, Search, Smartphone, BadgeDollarSign } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Delivery", desc: "We ship quality code on tight deadlines." },
  { icon: Code2, title: "Clean Code", desc: "Well-structured, maintainable, and scalable." },
  { icon: Search, title: "SEO Friendly", desc: "Built-in optimization for search engines." },
  { icon: Smartphone, title: "Mobile Responsive", desc: "Perfect experience on every screen size." },
  { icon: BadgeDollarSign, title: "Affordable Pricing", desc: "Premium quality at competitive rates." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We combine skill, speed, and strategy to deliver the best results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-semibold mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-xs">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
