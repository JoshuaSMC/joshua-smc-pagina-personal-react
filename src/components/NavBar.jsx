import { useState } from "react";

const links = [
  { href: "#hero", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#certifications", label: "Formación" },
  { href: "#projects", label: "Proyectos" },
  { href: "#services", label: "Servicios" },
  { href: "#contact", label: "Contacto" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">

      {/* CONTENEDOR */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-0.5 md:px-6 md:py-2">

        {/* LOGO */}
        <p className="font-semibold text-xl tracking-tight text-white select-none">
          Joshua <span className="opacity-70">SMC</span>
        </p>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex gap-8 text-white/80 font-medium">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-white transition">
              {label}
            </a>
          ))}
        </nav>

        {/* BOTÓN MOBILE */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {/* NAV MÓVIL CON ANIMACIÓN */}
      <div
        className={`
          md:hidden bg-black/80 backdrop-blur-xl border-b border-white/10
          transition-all duration-300 overflow-hidden
          ${open ? "max-h-80 py-4 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col gap-4 px-6 text-white/90 font-medium">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
