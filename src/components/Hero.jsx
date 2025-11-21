import { Github, Linkedin, Mail } from "lucide-react";
import profileImg from "../assets/imagen-profile.webp";
import cvPDF from "../assets/cv-joshua-smc.pdf";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Fondo cálido principal */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a120b]  via-[#46301e] to-black " />

      {/* Glow central cálido */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 md:w-[650px] h-[450px]
        bg-orange-300/60 blur-[180px] rounded-full animate-glowPulse"
      />

      {/* Contenido animado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}            
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 px-6 flex flex-col md:flex-row items-center gap-10 md:gap-18"
      >

        {/* Iconos sociales */}
        <div className="flex flex-row md:flex-col gap-6 pb-6 md:mr-6 text-white text-3xl order-3 md:order-1">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=joshuasmcleish@gmail.com"
            aria-label="Enviar email"
            className="hover:text-neutral-400 transition-transform duration-500 hover:-translate-y-1"
          >
            <Mail className="w-7 h-7 md:w-8 md:h-8" />
          </a>

          <a
            href="https://github.com/JoshuaSMC"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-neutral-400 transition-transform duration-500 hover:-translate-y-1"
          >
            <Github className="w-7 h-7 md:w-8 md:h-8" />
          </a>

          <a
            href="https://linkedin.com/in/joshua-sanchez-mc-leish-746142399"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-neutral-400 transition-transform duration-500 hover:-translate-y-1"
          >
            <Linkedin className="w-7 h-7 md:w-8 md:h-8" />
          </a>
        </div>

        {/* Texto principal */}
        <div className="max-w-xl text-center md:text-left mt-20 md:mt-0 order-1 md:order-2">
          <h2 className="text-5xl sm:text-6xl md:text-5xl font-bold text-white/90 drop-shadow-lg leading-tight">
            Hey, soy{" "}
            <span
              className="
                text-6xl sm:text-7xl md:text-6xl font-bold 
                text-transparent bg-clip-text 
                bg-[linear-gradient(135deg,#d2d2d2_10%,#c3c3c3_20%,#bebebe_40%,#ffffff_50%,#bebebe_60%,#b8b8b8_80%,#c3c3c3_90%,#d2d2d2_100%)]
                bg-[length:300%_100%]
                animate-[gradient_3s_linear_infinite]
              "
            >
              Joshua
            </span>
          </h2>

          <p className="py-6 text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed">
            Frontend Developer | Estudiante Full Stack  
            <br />
            Creador de experiencias digitales modernas, cálidas y con estilo propio.
          </p>

          {/* Botones */}
          <div className="flex items-center justify-center md:justify-start gap-6 sm:gap-8">
            <a
              href="#projects"
              className="
                px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white 
                bg-white/10 border border-white/20 backdrop-blur-xl
                transition-transform duration-500 
                hover:bg-white/20 hover:translate-x-1.5 
                hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]
              "
            >
              Ver Proyectos
            </a>

            <a
              href={cvPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white 
                bg-[linear-gradient(135deg,#808080,#a5a2a2,#cac5c5,#a5a2a2,#6c6b6b)]
                bg-[length:200%_100%]
                transition-transform duration-500 
                hover:translate-x-1.5 shadow-md
                animate-[gradient_3s_ease_infinite]
              "
            >
              CV
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div
          className="
            w-[14rem] h-[17rem] sm:w-[16rem] sm:h-[19rem] md:w-[18rem] md:h-[21rem]
            rounded-[2rem] overflow-hidden border border-white/20 
            shadow-[0_0_80px_rgba(255,255,255,0.25)] backdrop-blur-xl
            transition-transform duration-500 hover:scale-105 
            order-2 md:order-3
          "
        >
          <img
            src={profileImg}
            alt="Foto de perfil"
            width="300"
            height="350"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

      </motion.div>
    </section>
  );
};




