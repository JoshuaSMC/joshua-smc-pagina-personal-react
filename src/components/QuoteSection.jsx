import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import jupiterImg from "../assets/jupiter-texture.webp";

export default function QuoteSection() {
  const ref = useRef(null);

  // Framer: Detecta el progreso del scroll sobre la sección
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax más suave (+ rendimiento)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      id="quote"
      ref={ref}
      className="relative min-h-screen py-32 flex items-center justify-center text-center overflow-hidden"
    >
      {/* Fondo Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${jupiterImg})`,
          y,
        }}
      />

      {/* Overlay mejorado */}
      <div className="
        absolute inset-0 
        bg-gradient-to-b 
        from-black/80 via-black/45 to-black/80
        shadow-[inset_0_-80px_120px_rgba(0,0,0,0.85)]
        backdrop-blur-[0.5px]
      " />

      {/* Texto */}
      <motion.div
        className="relative z-10 px-6 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2
          className="
            text-3xl md:text-6xl font-bold leading-snug
            text-transparent bg-clip-text
            bg-[linear-gradient(135deg,#e0e0e0_10%,#cfcfcf_30%,#ffffff_55%,#cfcfcf_80%,#e0e0e0_100%)]
            bg-[length:280%_100%]
            animate-[gradient_4s_linear_infinite]
            drop-shadow-[0_0_40px_rgba(255,255,255,0.35)]
          "
        >
          El desarrollo me enseñó que los límites se expanden cuando uno se anima a empezar.
        </h2>
      </motion.div>

      {/* Animación del gradiente */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}


