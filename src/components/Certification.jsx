import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import logo from "../assets/logo-digital-house.png";

const certifications = [
  "Web Designer",
  "Diseño Web: HTML y CSS",
  "Metodologías Agile & Scrum",
  "Learning Agility",
  "Programación imperativa con JavaScript",
  "JavaScript para DOM",
  "Diseño UX/UI",
  "React.js",
  "Professional Developer (en curso)",
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 px-6 md:px-20 bg-transparent"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-center">
        Formación & Certificaciones
      </h2>

      {/* Logo de institución */}
      <div className="pb-8 pt-7 flex items-center justify-center">
        <img
          src={logo}
          alt="Digital House"
          className="h-4 md:h-5 object-contain opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Tarjetas de certificaciones */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {certifications.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 8px rgba(59,130,246,0.35)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="
              flex items-center gap-3
              p-3 rounded-xl
              border border-blue-400/30
              backdrop-blur-xl
              bg-sky-500/5
              shadow-[0_0_20px_rgba(37,99,235,0.15)]
              min-h-[70px]
              transition-all
            "
          >
            <CheckCircle2 className="w-5 h-5 text-blue-300 flex-shrink-0" />
            <p className="text-blue-100 text-sm md:text-base font-medium text-left">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
