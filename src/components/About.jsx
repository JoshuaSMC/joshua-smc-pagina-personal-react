import { motion } from "framer-motion";

const goals = [
  "Consolidarme como Full Stack Developer",
  "Formarme en Data Analyst",
  "Aprender nuevas tecnologías y frameworks",
  "Crear proyectos funcionales y estéticos",
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 relative flex items-center justify-center"
    >
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0e0e0e] to-black opacity-70" />

      {/* Glow azul suave (como pediste) */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[450px] h-[450px] bg-blue-500/20 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Título principal */}
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
          Sobre mí
        </h2>

        {/* Texto About */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <p className="text-white/80 text-lg leading-relaxed">
            Soy Joshua, un Frontend Developer con pasión por construir interfaces
            modernas, limpias y funcionales. Actualmente me desarrollo para ser Full
            Stack, ampliando mis capacidades técnicas.
          </p>

          <p className="text-white/80 text-lg leading-relaxed">
            Disfruto aprender, crear y aportar soluciones reales con diseño y
            código. Me enfoco en la estética, la experiencia del usuario y los
            detalles que hacen que una interfaz se sienta premium.
          </p>

          <p className="text-white/80 text-lg leading-relaxed">
            Me gustaría crecer como profesional mientras desarrollo proyectos
            que combinan creatividad, tecnología y propósito.
          </p>
        </div>

        {/* Contenedor Skills + Objetivos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10">
          {/* Habilidades */}
          <div>
            <h3 className="text-3xl font-semibold text-white mb-8 text-center lg:text-left">
              Habilidades
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Tarjetas */}
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Frontend
                </h4>
                <p className="text-white/80">HTML, CSS, JavaScript, React</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Diseño UI/UX
                </h4>
                <p className="text-white/80">Layouts, accesibilidad, prototipos</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Herramientas
                </h4>
                <p className="text-white/80">Git, GitHub, VSCode, Netlify</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">
                  En aprendizaje
                </h4>
                <p className="text-white/80">Java, bases de datos</p>
              </div>
            </div>
          </div>

          {/* Objetivos */}
          <div>
            <h3 className="text-3xl font-semibold text-white mb-8 text-center lg:text-left">
              Mis Objetivos
            </h3>

            <div className="relative border-l border-white/20 ml-8 space-y-12">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <div className="absolute left-[-10px] top-2 w-4 h-4 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.6)]"></div>

                  <p className="text-white/90 text-lg font-light">
                    {goal}
                  </p>
                </motion.div>
              ))}

              {/* Meta final */}
              <motion.div
                className="relative pl-8 pt-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="absolute left-[-14px] w-6 h-6 rounded-full bg-blue-400/70 shadow-[0_0_20px_rgba(96,165,250,0.8)]"></div>
                <p className="text-blue-300 text-lg -m-1 font-medium">
                  Una carrera sólida en tecnología 🚀
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
