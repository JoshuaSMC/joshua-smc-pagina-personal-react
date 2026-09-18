import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import logo from "../assets/logo-digital-house.png";

const formacion = [
  {
    program: "Professional Developer",
    institution: "Digital House",
    dates: "Enero 2025 – Mayo 2026",
    description:
      "Desarrollo de aplicaciones full stack con énfasis en backend: Java, Spring Boot, React, JavaScript, MySQL, testing, AWS y metodologías ágiles. Programa desarrollado en el marco de Certified Tech Developer, junto a Globant y Mercado Libre.",
  },
  {
    program: "Especialización Backend Developer (en curso)",
    institution: "Digital House",
    dates: "Abril 2026 – Presente",
    description:
      "Profundización en microservicios, arquitectura backend, seguridad, tecnologías cloud y Go. Parte del mismo programa Certified Tech Developer (Globant + Mercado Libre).",
  },
  {
    program: "Web Designer",
    institution: "Digital House",
    dates: "Abril 2025 – Octubre 2025",
    description:
      "Formación enfocada en diseño y desarrollo de interfaces web, aplicando HTML, CSS y principios de experiencia de usuario.",
  },
  {
    program: "Bachiller en Programación",
    institution: "Instituto Jose Peña",
    dates: "Diciembre 2019",
    description: "Bases de algoritmos, programación y resolución de problemas.",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 px-6 md:px-20 bg-transparent"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 text-center">
        Formación &amp; Certificaciones
      </h2>
      <p className="text-blue-light/70 text-sm text-center mb-4">
        Con el respaldo de Certified Tech Developer · Globant &amp; Mercado Libre
      </p>

      {/* Logo de institución */}
      <div className="pb-10 pt-7 flex items-center justify-center">
        <img
          src={logo}
          alt="Digital House"
          width="423"
          height="32"
          className="h-4 md:h-5 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Timeline de formación */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {formacion.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="
              group relative rounded-2xl p-[1px]
              bg-gradient-to-br from-blue/40 via-blue/10 to-transparent
              hover:from-blue-lighter/70 hover:via-blue-lighter/25
              transition-all duration-300
            "
          >
            <div
              className="
                h-full rounded-2xl p-5
                bg-[#080b14]/90 backdrop-blur-xl
                shadow-[0_0_20px_color-mix(in_srgb,var(--color-blue)_6%,transparent)]
                group-hover:shadow-[0_0_32px_color-mix(in_srgb,var(--color-blue)_18%,transparent)]
                transition-all duration-300
              "
            >
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-blue-light flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-white font-semibold">
                      {item.program} <span className="text-white/50 font-normal">· {item.institution}</span>
                    </h3>
                    <span className="text-blue-light/80 text-xs font-medium whitespace-nowrap">
                      {item.dates}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
