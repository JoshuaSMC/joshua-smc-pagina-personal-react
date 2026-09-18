import { motion } from "framer-motion";

const experience = [
  {
    role: "Desarrollador de Software Freelance",
    dates: "Noviembre 2025 – Presente",
    description:
      "Colaboré con una empresa de marketing resolviendo problemas concretos: seguridad de acceso, gestión de reservas y procesos que antes se hacían a mano. Ahora empiezo a tomar proyectos a través de plataformas freelance.",
  },
  {
    role: "Desarrollador Web Freelance",
    dates: "Abril 2024 – Junio 2024",
    description:
      "Ayudé a negocios que recién empezaban a tener su primera página web, como tiendas de ropa que hasta entonces solo vendían por redes sociales.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 relative flex items-center justify-center"
    >
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0e0e0e] to-black opacity-70" />

      {/* Glow cálido, mismo dorado apagado que el Hero */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2
        w-[260px] h-[260px] md:w-[450px] md:h-[450px]
        bg-gold/[0.12] blur-[100px] md:blur-[160px] rounded-full"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
          Sobre mí
        </h2>

        {/* Texto */}
        <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
          <p className="text-white/80 text-lg leading-relaxed">
            Antes de escribir código, me interesa entender la lógica detrás de un
            problema y cómo se conectan las piezas, porque recién ahí un sistema
            empieza a tener sentido. Creo que desarrollar no es solo resolver un
            problema puntual, sino construir soluciones que sigan teniendo sentido
            cuando las necesidades cambien.
          </p>

          <p className="text-white/80 text-lg leading-relaxed">
            Siempre me gustó pensar en sistemas. Por eso elegí el backend: una
            aplicación puede tener una buena interfaz, pero es en el backend donde
            realmente cobra vida. Mi enfoque principal está en Java y Spring Boot,
            aunque también trabajo con React y JavaScript cuando el proyecto lo
            requiere.
          </p>
        </div>

        {/* Grid habilidades y objetivos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10">
          
          {/* Habilidades */}
          <div>
            <h3 className="text-3xl font-semibold text-white mb-8 text-center lg:text-left">
              Habilidades
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Tarjeta */}
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">Backend &amp; Testing</h4>
                <p className="text-white/80">Java, Spring Boot, Spring Security, REST APIs, JPA / Hibernate, MySQL, JUnit 5, Selenium</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">DevOps &amp; Cloud</h4>
                <p className="text-white/80">Docker, AWS, GitHub Actions, Terraform, CloudFormation, Prometheus, Grafana</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">Frontend</h4>
                <p className="text-white/80">React, JavaScript, TypeScript, Tailwind CSS</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">En curso / profundizando</h4>
                <p className="text-white/80">Microservicios, arquitectura backend avanzada, seguridad, Go, bases de datos NoSQL</p>
              </div>

            </div>
          </div>

          {/* Experiencia */}
          <div>
            <h3 className="text-3xl font-semibold text-white mb-8 text-center lg:text-left">
              Experiencia
            </h3>

            <ul className="relative border-l border-white/20 ml-8 space-y-10">
              {experience.map((item, index) => (
                <motion.li
                  key={index}
                  className="relative pl-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <div className="absolute left-[-10px] top-2 w-4 h-4 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
                  <p className="text-white/90 text-lg font-medium">{item.role}</p>
                  <p className="text-gold-light/80 text-sm mt-0.5">{item.dates}</p>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">{item.description}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

