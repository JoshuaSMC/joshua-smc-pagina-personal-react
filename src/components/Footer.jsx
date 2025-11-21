import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-3 px-8 
      bg-[linear-gradient(to_bottom,#413933_0%,#716962_95%)]
      text-white flex flex-col md:flex-row justify-between items-center 
      border-white/10"
    >
      <p className="text-center text-white/80 md:text-white/80 text-sm">
        © 2025 Joshua Sanchez. Todos los derechos reservados.
      </p>

      <div className="flex gap-5 opacity-60 text-2xl mt-4 md:mt-0">
        <a
          href="https://github.com/JoshuaSMC"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:scale-110 transition-transform"
        >
          <Github />
        </a>

        <a
          href="https://linkedin.com/in/joshua-sanchez-mc-leish-746142399"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform"
        >
          <Linkedin />
        </a>

        <a
          href="mailto:joshuasmcleish@gmail.com"
          aria-label="Enviar correo"
          className="hover:scale-110 transition-transform"
        >
          <Mail />
        </a>
      </div>
    </footer>
  );
}
