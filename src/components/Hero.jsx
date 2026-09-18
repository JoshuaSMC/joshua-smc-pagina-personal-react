import { Github, Linkedin, Mail } from "lucide-react";
import profileImg from "../assets/imagen-profile.webp";
import cvPDF from "../assets/cv-joshua-smc.pdf";
import { motion } from "framer-motion";

// Bandas concéntricas del anillo: de adentro hacia afuera, con una
// hendidura oscura (al estilo división de Cassini) y textura de grano fino.
const RING_TILT = -18;
const RING_BANDS = Array.from({ length: 26 }, (_, i) => {
  const t = i / 25; // 0 = borde interno, 1 = borde externo
  const rx = 250 + t * 200;
  const ry = rx * 0.238;
  const inGap = t > 0.58 && t < 0.66;
  const shade = (i * 47) % 5; // variación pseudo-aleatoria estable
  const color = inGap
    ? "#0a0603"
    : shade === 0
    ? "#f0d9a8"
    : shade === 1
    ? "#c9a15f"
    : shade === 2
    ? "#8a6a3a"
    : shade === 3
    ? "#e2c084"
    : "#a67c3d";
  const opacity = inGap ? 0.55 : 0.25 + ((i * 13) % 10) / 22;
  const width = inGap ? 9 : 2 + ((i * 7) % 3);
  return { rx, ry, color, opacity, width };
});

function RingBands({ clipId }) {
  const bands = (
    <g transform={`translate(300 280) rotate(${RING_TILT})`}>
      {RING_BANDS.map((band, i) => (
        <ellipse
          key={i}
          cx="0"
          cy="0"
          rx={band.rx}
          ry={band.ry}
          stroke={band.color}
          strokeOpacity={band.opacity}
          strokeWidth={band.width}
        />
      ))}
    </g>
  );
  // El clipPath va en un <g> sin transform propio: si compartiera el
  // transform con las elipses, el recorte se rotaría junto con ellas.
  return clipId ? <g clipPath={`url(#${clipId})`}>{bands}</g> : bands;
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Fondo negro real, con un azul muy oscuro de ambiente */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 30%, #050b16 0%, #03060c 40%, #000000 75%)",
        }}
      />

      {/* Planeta con anillo, recortado en la esquina — sutil, no decorativo */}
      <svg
        className="absolute -top-[12%] -right-[10%] w-[52vw] max-w-[260px] md:top-[5%] md:-right-[16%] md:w-[62vw] md:max-w-[700px] h-auto opacity-[0.85] pointer-events-none overflow-visible"
        viewBox="0 0 600 600"
        fill="none"
      >
        <defs>
          {/* Lineal, no radial: ilumina parejo todo el borde izquierdo del
              planeta (como luz de costado), y cae rápido hacia el centro —
              un degradado radial da un solo punto brillante, no una franja */}
          <linearGradient
            id="planetBody"
            gradientUnits="userSpaceOnUse"
            x1="90"
            y1="70"
            x2="430"
            y2="410"
          >
            <stop offset="0%" stopColor="#8a7048" />
            <stop offset="16%" stopColor="#5c4322" />
            <stop offset="34%" stopColor="#1c1108" />
            <stop offset="100%" stopColor="#0a0603" />
          </linearGradient>
          {/* Luz ambiente en el cielo, detrás del planeta */}
          <radialGradient id="skyGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff6df" stopOpacity="1" />
            <stop offset="25%" stopColor="#ffd68f" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#e9a555" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e9b877" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sunCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="45%" stopColor="#fff0cc" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffd98f" stopOpacity="0" />
          </radialGradient>
          {/* Línea metálica fina en el borde, más blanca que todo lo demás */}
          <radialGradient id="rimLine" cx="19%" cy="18%" r="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="35%" stopColor="#fff6e4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffe9bd" stopOpacity="0.15" />
          </radialGradient>
          <filter id="skyBlur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter id="sunCoreBlur" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          {/* Recorta el anillo a su mitad "de adelante": el rectángulo está
              rotado igual que el anillo, para que el corte siga su ángulo
              en vez de ser una línea horizontal fija */}
          <clipPath id="ringFrontClip">
            <rect
              x="-700"
              y="0"
              width="1400"
              height="700"
              transform="translate(300 280) rotate(-18)"
            />
          </clipPath>
          {/* Mitad complementaria ("de atrás"): sin esto, el recorte de
              adelante es un plano entero y duplica el anillo lejos del
              planeta, dibujando dos copias superpuestas de ese lado */}
          <clipPath id="ringBackClip">
            <rect
              x="-700"
              y="-700"
              width="1400"
              height="700"
              transform="translate(300 280) rotate(-18)"
            />
          </clipPath>
        </defs>

        {/* Mitad de atrás del anillo, más transparente — recortada a su
            propia mitad, para no duplicarse con la de adelante */}
        <g opacity="0.3">
          <RingBands clipId="ringBackClip" />
        </g>

        {/* El "sol": al 75% de opacidad, un poco más afuera del planeta */}
        <g opacity="0.75">
          <circle cx="155" cy="175" r="150" fill="url(#skyGlow)" filter="url(#skyBlur)" />
          <circle cx="155" cy="175" r="55" fill="url(#sunCore)" filter="url(#sunCoreBlur)" />
        </g>

        {/* Planeta: opaco, tapa al sol donde se cruzan; franja clara angosta
            en el borde, el resto queda igual de oscuro que antes */}
        <circle cx="300" cy="280" r="200" fill="url(#planetBody)" />

        {/* Línea metálica fina en el borde, dando toda la vuelta — más
            transparente que antes */}
        <circle
          cx="300"
          cy="280"
          r="200"
          stroke="url(#rimLine)"
          strokeWidth="2.5"
          opacity="0.35"
        />

        {/* Mitad de adelante del anillo, más transparente, encima del planeta */}
        <g opacity="0.3">
          <RingBands clipId="ringFrontClip" />
        </g>
      </svg>

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
          <h1 className="text-5xl sm:text-6xl md:text-5xl font-bold text-white/90 drop-shadow-lg leading-tight">
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
          </h1>

          <p className="py-6 text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed">
            Backend Developer Junior | Java + Spring Boot
            <br />
            Construyo sistemas que crecen sin romperse.
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




