import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import stellarJetsHero from "../assets/stellar-jets-hero.jpg";
import stellarJetsFlightDetail from "../assets/stellar-jets-flight-detail.jpg";
import stellarJetsDestinos from "../assets/stellar-jets-destinos.jpg";
import stellarJetsItinerary from "../assets/stellar-jets-itinerary.jpg";
import atelierDentalHome from "../assets/atelier-dental-home.jpg";
import atelierDentalAdmin from "../assets/atelier-dental-admin.jpg";
import tasksApiSwagger from "../assets/tasks-api-swagger.jpg";
import tasksApiGrafana from "../assets/tasks-api-grafana.jpg";

const projects = [
  {
    title: "Stellar Jets",
    subtitle: "Plataforma de reservas de vuelos",
    description:
      "Plataforma full stack de reservas de vuelos con gestión de usuarios, favoritos, reseñas y categorías. API REST desarrollada con Java y Spring Boot, integrada con frontend en React. Incluye autenticación mediante JWT, control de acceso por roles y panel de administración.",
    stack: ["Java", "Spring Boot", "React", "MySQL", "Spring Security", "JWT", "Selenium"],
    images: [stellarJetsHero, stellarJetsFlightDetail, stellarJetsDestinos, stellarJetsItinerary],
    links: [
      { label: "Demo", url: "https://stellarjets.netlify.app", kind: "demo" },
      { label: "Repositorio", url: "https://github.com/JoshuaSMC/flight-booking-platform-spring-react", kind: "repo" },
    ],
  },
  {
    title: "Dental Clinic Management System",
    subtitle: "Gestión de pacientes, turnos y roles",
    description:
      "Sistema full stack para gestión de pacientes, odontólogos, turnos y administración de roles (RBAC). Incluye autenticación JWT, autorización basada en roles, y más de 54 pruebas automatizadas (testing de API y funcional con Selenium).",
    stack: ["Java", "Spring Boot", "React", "MySQL", "Spring Security", "JUnit 5", "Tailwind CSS", "Swagger"],
    images: [atelierDentalHome, atelierDentalAdmin],
    links: [
      { label: "Demo", url: "https://atelier-dental.netlify.app", kind: "demo" },
      { label: "Repositorio", url: "https://github.com/JoshuaSMC/dental-clinic-management-spring-react", kind: "repo" },
    ],
  },
  {
    title: "Backend Infrastructure & DevOps",
    subtitle: "De una API a producción, de forma automática",
    description:
      "Solución completa de DevOps para llevar una API backend a producción. API construida con Java 21 y Spring Boot 3, dockerizada y publicada en GHCR. Infraestructura en AWS con Terraform (ECS Fargate, ALB, VPC), pipeline CI/CD con GitHub Actions y monitoreo con Prometheus y Grafana.",
    stack: ["Docker", "AWS", "Terraform", "GitHub Actions", "Prometheus", "Grafana", "Java", "Spring Boot"],
    images: [tasksApiGrafana, tasksApiSwagger],
    links: [
      { label: "API en funcionamiento", url: "https://tasks-api-f4b9.onrender.com/api/tasks", kind: "demo" },
      { label: "Repo: API", url: "https://github.com/JoshuaSMC/tasks-api-spring-boot-docker", kind: "repo" },
      { label: "Repo: Infraestructura", url: "https://github.com/JoshuaSMC/infrastructure-as-code-terraform-aws", kind: "repo" },
      { label: "Repo: CI/CD", url: "https://github.com/JoshuaSMC/devops-pipeline-github-actions-grafana", kind: "repo" },
    ],
  },
];

function ImageCarousel({ images, title }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full aspect-video rounded-xl bg-black/30 overflow-hidden group">
      <img
        src={images[current]}
        alt={`Captura de ${title}`}
        loading="lazy"
        width="1200"
        height="675"
        className="w-full h-full object-contain"
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Captura anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full
                       bg-black/50 text-white/80 opacity-0 group-hover:opacity-100
                       hover:text-white transition-opacity duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente captura"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full
                       bg-black/50 text-white/80 opacity-0 group-hover:opacity-100
                       hover:text-white transition-opacity duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Ver captura ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: index * 0.15 }}
      className="group relative rounded-2xl p-[1px]
                 bg-gradient-to-br from-gold/40 via-gold/10 to-transparent
                 hover:from-gold-light/60 hover:via-gold-light/20
                 transition-all duration-500
                 hover:-translate-y-1"
    >
      <div
        className="flex flex-col md:flex-row text-left rounded-2xl overflow-hidden
                   bg-[#0d0b08]/95 backdrop-blur-xl
                   shadow-[0_0_20px_color-mix(in_srgb,var(--color-gold)_6%,transparent)]
                   group-hover:shadow-[0_0_36px_color-mix(in_srgb,var(--color-gold)_16%,transparent)]
                   transition-all duration-500"
      >
        {/* Columna de imagen */}
        <div className="p-7 pb-0 md:pb-7 md:w-1/2 md:flex-shrink-0">
          <ImageCarousel images={project.images} title={project.title} />
        </div>

        {/* Columna de contenido */}
        <div className="flex flex-col flex-1 p-7">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-sm text-gold-lighter/80 mt-1">{project.subtitle}</p>
          <p className="text-sm opacity-80 mt-3 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-1.5 mt-5 pt-4 border-t border-white/10">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity duration-300"
              >
                {link.kind === "repo" ? (
                  <Github className="w-4 h-4 flex-shrink-0" />
                ) : (
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center text-center
                py-24
                bg-gradient-to-b from-black/40 via-black/70 to-black/90
                backdrop-blur-md overflow-hidden px-4 md:px-6"
    >
      {/* Glow sutil detrás del título */}
      <div className="absolute top-[6%] left-1/2 -translate-x-1/2
                      w-[500px] h-[500px] bg-white/5
                      rounded-full blur-3xl pointer-events-none" />

      {/* Título animado */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-4 tracking-tight
                   bg-clip-text text-transparent
                   bg-[linear-gradient(135deg,#ffffff_0%,#c3c3c3_50%,#ffffff_100%)]"
      >
        Proyectos Destacados
      </motion.h2>

      {/* LISTA DE PROYECTOS */}
      <div className="flex flex-col gap-8 w-full max-w-6xl mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* Link a GitHub */}
      <a
        href="https://github.com/JoshuaSMC"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 mt-16 px-6 py-3 rounded-full text-sm
                   border border-white/15 text-white/80
                   hover:bg-white/5 hover:text-white transition-colors duration-300"
      >
        <Github className="w-4 h-4" />
        Ver más proyectos en GitHub
      </a>

      {/* Fade-out inferior */}
      <div className="absolute bottom-0 left-0 w-full h-[150px]
                      bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
    </section>
  );
}



