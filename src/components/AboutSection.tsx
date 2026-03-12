import { motion } from "framer-motion";
import Pfp from "../Images/people.png"

const features = [
  {
    pfp: "G",
    title: "Gurtej Singh",
    desc: "A full-stack developer skilled in frontend, backend, and database development, building complete and efficient web solutions.",
  },
  {
    pfp: "A",
    title: "Abhishek Pant",
    desc: "A developer experienced in frontend, backend, and AI prompting, creating modern and intelligent digital solutions.",
  },
  {
    pfp: "G",
    title: "Gaganpreet Singh",
    desc: "A full-stack developer specializing in frontend, backend, Supabase, and database design for scalable applications.",
  },
  {
    pfp: "J",
    title: "Jagpal Singh",
    desc: "A developer focused on SQL databases and AI technologies, working with data-driven systems and smart solutions.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">WebNova</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We are a passionate web development team dedicated to crafting exceptional digital
            experiences. From stunning frontends to robust backends, we bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 text-center transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                {f.pfp}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
