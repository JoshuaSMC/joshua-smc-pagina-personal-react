import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { withAlpha } from "../lib/color";

const GOLD = "var(--color-gold)";
const BLUE = "var(--color-blue)";

const services = [
  {
    eyebrow: "Backend",
    title: "APIs que no se caen cuando crece tu negocio",
    description:
      "Diseño APIs con Java y Spring Boot pensadas para el día en que tengas diez veces más usuarios, no solo para el día de hoy.",
    accent: GOLD,
    kind: "api",
  },
  {
    eyebrow: "Datos",
    title: "Tus datos, ordenados y seguros",
    description:
      "Modelo la base de datos para que cada consulta tenga sentido y nada se rompa cuando el sistema crece.",
    accent: BLUE,
    kind: "database",
  },
  {
    eyebrow: "Seguridad",
    title: "Acceso controlado, sin sorpresas",
    description:
      "Autenticación y permisos por rol para que cada usuario vea solo lo que tiene que ver, ni más ni menos.",
    accent: GOLD,
    kind: "auth",
  },
  {
    eyebrow: "DevOps",
    title: "De tu código a producción, sin fricción",
    description:
      "Dockerizo, despliego en AWS y automatizo el proceso para que publicar un cambio no dependa de hacerlo a mano.",
    accent: BLUE,
    kind: "devops",
  },
  {
    eyebrow: "Full Stack",
    title: "Un sistema completo, no piezas sueltas",
    description:
      "Backend en Java conectado a un frontend en React cuando el proyecto lo necesita: una sola solución, no dos mitades separadas.",
    accent: GOLD,
    kind: "fullstack",
  },
];

function MockupBody({ kind, accent }) {
  if (kind === "api") {
    return (
      <div className="space-y-2.5">
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="text-white/40">GET /api/flights</span>
          <span
            className="ml-auto px-1.5 py-0.5 rounded text-[10px]"
            style={{ background: withAlpha(accent, 0.18), color: accent }}
          >
            200
          </span>
        </div>
        <div className="rounded-lg bg-white/[0.03] border border-white/5 p-3 space-y-1.5">
          <div className="h-2 w-3/4 rounded bg-white/10" />
          <div className="h-2 w-1/2 rounded bg-white/10" />
          <div className="h-2 w-2/3 rounded" style={{ background: withAlpha(accent, 0.4) }} />
          <div className="h-2 w-1/3 rounded bg-white/10" />
        </div>
      </div>
    );
  }

  if (kind === "database") {
    return (
      <div className="space-y-1.5">
        {[62, 84, 48, 70].map((w, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 rounded-md bg-white/[0.03] border border-white/5 px-3 py-2.5"
          >
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: withAlpha(accent, 0.9) }}
            />
            <div className="h-2 rounded bg-white/10" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    );
  }

  if (kind === "auth") {
    return (
      <div className="space-y-2">
        {["Admin", "Editor", "Viewer"].map((role, i) => (
          <div
            key={role}
            className="flex items-center justify-between rounded-md bg-white/[0.03] border border-white/5 px-3 py-2.5"
          >
            <span className="text-[11px] text-white/50">{role}</span>
            <div
              className="w-8 h-4 rounded-full relative"
              style={{ background: i === 2 ? "rgba(255,255,255,0.08)" : withAlpha(accent, 0.35) }}
            >
              <div
                className="absolute top-0.5 w-3 h-3 rounded-full bg-white/90 transition-all"
                style={{ left: i === 2 ? "2px" : "18px" }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "devops") {
    return (
      <div className="flex items-center">
        {["Build", "Test", "Deploy"].map((step, i) => (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center border"
                style={{ borderColor: withAlpha(accent, 0.5), background: withAlpha(accent, 0.12) }}
              >
                <Check className="w-3.5 h-3.5" style={{ color: accent }} />
              </div>
              <span className="text-[10px] text-white/40">{step}</span>
            </div>
            {i < 2 && (
              <div
                className="h-px flex-1 mx-1 mb-4"
                style={{ background: withAlpha(accent, 0.3) }}
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2.5">
      <div className="rounded-md bg-white/[0.03] border border-white/5 p-3 space-y-2">
        <div className="h-2 w-full rounded bg-white/10" />
        <div className="h-2 w-2/3 rounded bg-white/10" />
        <div className="h-2 w-1/2 rounded bg-white/10" />
      </div>
      <div className="rounded-md bg-white/[0.03] border border-white/5 p-3 space-y-2">
        <div className="h-2 w-full rounded" style={{ background: withAlpha(accent, 0.4) }} />
        <div className="h-2 w-2/3 rounded bg-white/10" />
        <div className="h-2 w-3/4 rounded bg-white/10" />
      </div>
    </div>
  );
}

function ServiceVisual({ accent, kind }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[4/3]">
      {/* Resplandor ambiente */}
      <div
        className="absolute inset-0 blur-3xl opacity-60"
        style={{
          background: `radial-gradient(circle at 50% 45%, ${withAlpha(accent, 0.35)}, transparent 70%)`,
        }}
      />

      {/* Mockup con bordes difuminados: sin recorte duro, se funde con el fondo */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          maskImage:
            "radial-gradient(ellipse 72% 68% at 50% 50%, black 42%, transparent 88%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 72% 68% at 50% 50%, black 42%, transparent 88%)",
        }}
      >
        <div className="w-[86%] rounded-xl bg-[#0c0c0e] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.55)] overflow-hidden">
          <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-white/5 bg-white/[0.02]">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          </div>
          <div className="p-4">
            <MockupBody kind={kind} accent={accent} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 relative text-white overflow-hidden">
      {/* Glow sutil, mismo fondo negro de la página */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_75%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold text-center mb-6 tracking-tight"
        >
          Servicios
        </motion.h2>

        <div className="mt-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 py-8 md:py-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 w-full">
                <ServiceVisual accent={service.accent} kind={service.kind} />
              </div>

              <div className="flex-1 w-full text-center md:text-left">
                <span
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: service.accent }}
                >
                  {service.eyebrow}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold mt-2 mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed max-w-md mx-auto md:mx-0">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
