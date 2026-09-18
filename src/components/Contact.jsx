import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Github, MapPin } from "lucide-react";

const whatsappMessage = "Hola Joshua, vi tu portfolio y me gustaría charlar.";

const channels = [
  {
    label: "joshuasmcleish@gmail.com",
    href: "mailto:joshuasmcleish@gmail.com",
    icon: Mail,
  },
  {
    label: "Escribime por WhatsApp",
    href: `https://wa.me/5493512351618?text=${encodeURIComponent(whatsappMessage)}`,
    icon: MessageCircle,
  },
  {
    label: "linkedin.com/in/joshua-sanchez-mc-leish",
    href: "https://linkedin.com/in/joshua-sanchez-mc-leish-746142399",
    icon: Linkedin,
  },
  {
    label: "github.com/JoshuaSMC",
    href: "https://github.com/JoshuaSMC",
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 text-white overflow-hidden bg-[#0a0705]"
    >
      {/* Línea divisoria sutil: marca el arranque de la sección sin un
          corte duro de color */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Glow cálido ambiental */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 50% 35%, color-mix(in srgb, var(--color-gold) 18%, transparent) 0%, color-mix(in srgb, var(--color-gold) 6%, transparent) 45%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight mb-4"
        >
          Hablemos
        </motion.h2>

        <p className="text-white/70 text-lg mb-3 flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4 text-gold-light" />
          Córdoba, Argentina · disponible para trabajo remoto
        </p>

        <p className="text-white/60 max-w-xl mx-auto mb-12">
          Si estás armando un equipo backend o querés charlar sobre un proyecto,
          escribime. Respondo por cualquiera de estos canales.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 text-left">
          {channels.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-2xl p-[1px]
                         bg-gradient-to-br from-gold/40 via-gold/10 to-transparent
                         hover:from-gold-light/70 hover:via-gold-light/25
                         transition-all duration-300"
            >
              <div
                className="flex items-center gap-3 p-4 rounded-2xl
                           bg-[#0c0a08]/90 backdrop-blur-xl
                           shadow-[0_0_20px_color-mix(in_srgb,var(--color-gold)_6%,transparent)]
                           group-hover:shadow-[0_0_32px_color-mix(in_srgb,var(--color-gold)_18%,transparent)]
                           transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-gold-light flex-shrink-0" />
                <span className="text-white/85 text-sm break-all">{label}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
