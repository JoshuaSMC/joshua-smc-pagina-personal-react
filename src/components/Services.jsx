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
    <section
      id="services"
      className="py-24 relative bg-[#0d0d0e] text-white overflow-hidden"
    >
      {/* Glow sutil de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_75%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight"
        >
          Servicios
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="
                backdrop-blur-xl bg-white/5 
                border border-white/10 
                p-7 rounded-2xl 
                shadow-[0_0_20px_rgba(255,255,255,0.04)]
                hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]
                transition-all duration-300
              "
            >
              {/* Ícono */}
              <div className="mb-5">{service.icon}</div>

              {/* Título del servicio */}
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              {/* Descripción */}
              <p className="text-white/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


