import { motion } from "framer-motion";
import { Layers, Monitor, Wand2, RefreshCcw, Laptop } from "lucide-react";

const services = [
  {
    title: "End-to-End Web Development",
    icon: <Laptop className="w-8 h-8 text-white/90" />,
    description:
      "Diseño y desarrollo como Frontend de sitios completos para pymes, portfolios o proyectos que necesitan presencia digital efectiva.",
  },
  {
    title: "Responsive UI/UX Design",
    icon: <Wand2 className="w-8 h-8 text-white/90" />,
    description:
      "Diseños adaptables y limpios, ajustados al estilo visual que requiera cada proyecto: minimalista, elegante o corporativo.",
  },
  {
    title: "Frontend Development with React",
    icon: <Monitor className="w-8 h-8 text-white/90" />,
    description:
      "Componentes reutilizables, interacción clara y estructura moderna usando React y Tailwind.",
  },
  {
    title: "Websites for Pymes & Professionals",
    icon: <Layers className="w-8 h-8 text-white/90" />,
    description:
      "Sitios profesionales pensados para comunicar productos, servicios o identidad visual de forma clara y atractiva.",
  },
  {
    title: "Improvements & Redesigns",
    icon: <RefreshCcw className="w-8 h-8 text-white/90" />,
    description:
      "Mejoras visuales, ajustes de estilo, refactorizaciones ligeras y optimización de experiencia general.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative bg-[#0d0d0e] text-white">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-center mb-14 tracking-wide"
        >
          Servicios
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-white/10 transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

