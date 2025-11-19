import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
      <footer className="bg-[linear-gradient(to_bottom,#413933ff_0%,#716962ff_95%)] w-full text-white py-3 flex flex-col md:flex-row justify-between items-center px-8 border-white/10">
        <p className="text-white/80 text-sm">© 2025 Joshua Sanchez. Todos los derechos reservados.</p>
        <div className="flex gap-5 opacity-60 text-2xl mt-4 md:mt-0">
          <a href="https://github.com/JoshuaSMC" target="_blank" className="hover:scale-110 transition-transform">
            <Github />
          </a>
          <a href="https://linkedin.com/in/joshua-sanchez-mc-leish-746142399" target="_blank" className="hover:scale-110 transition-transform">
            <Linkedin />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=joshuasmcleish@gmail.com" className="hover:scale-110 transition-transform">
            <Mail />
          </a>
        </div>
      </footer>
  );
};
