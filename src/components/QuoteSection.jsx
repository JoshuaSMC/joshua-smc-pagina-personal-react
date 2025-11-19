import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import jupiterImg from "../assets/jupiter-texture.webp";

export default function QuoteSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="quote"
      ref={ref}
      className="relative min-h-screen py-32 flex items-center justify-center text-center overflow-hidden"
    >
      {/* Fondo con parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${jupiterImg})`,
          y,
        }}
      />

      {/* Overlay mejorado con gradiente y sombras */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 shadow-[inset_0_-60px_120px_rgba(0,0,0,0.8)] backdrop-blur-[0.5px]" />

      {/* Contenido */}
      <motion.div
        className="relative z-10 px-6 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(135deg,#d2d2d2ff_10%,#c8c8c8ff_30%,#ffffff_50%,#c8c8c8ff_80%,#d2d2d2ff_100%)] bg-[length:300%_100%] animate-[gradient_3s_linear_infinite] mb-6 leading-snug drop-shadow-[0_0_35px_rgba(255,255,255,0.35)]">
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

