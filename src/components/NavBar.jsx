// import { useState } from "react";

// export function NavBar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full overflow-hidden z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">

//       <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2">
//         <h1 className="font-semibold text-xl tracking-tight text-white">
//           Joshua <span className="opacity-70">SMC</span>
//         </h1>

//         {/* NAV DESKTOP */}
//         <nav className="hidden font-semibold md:flex gap-8 text-white/80 font-medium">
//           <a href="#hero" className="hover:text-white transition">Home</a>
//           <a href="#about" className="hover:text-white transition">About</a>
//           <a href="#certifications" className="hover:text-white transition">Certifications</a>
//           <a href="#projects" className="hover:text-white transition">Projects</a>
//           <a href="#services" className="hover:text-white transition">Services</a>
//         </nav>

//         {/* BOTÓN MOBILE (onClick) */}
//         <button
//           className="md:hidden text-white text-2xl"
//           onClick={() => setOpen(!open)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* NAV MÓVIL DESPLEGABLE */}
//       {open && (
//         <div className="md:hidden bg-black/80 backdrop-blur-xl border-b border-white/10 overflow-hidden">
//           <nav className="flex flex-col gap-4 px-6 py-4 text-white/90 font-medium">
//             <a href="#hero" onClick={() => setOpen(false)} className="hover:text-white">Home</a>
//             <a href="#about" onClick={() => setOpen(false)} className="hover:text-white">About</a>
//             <a href="#certifications" onClick={() => setOpen(false)} className="hover:text-white">Certifications</a>
//             <a href="#projects" onClick={() => setOpen(false)} className="hover:text-white">Projects</a>
//             <a href="#services" onClick={() => setOpen(false)} className="hover:text-white">Services</a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      
      {/* CONTENEDOR */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-0.5 md:px-6 md:py-2">
        
        {/* LOGO */}
        <h1 className="font-semibold text-xl tracking-tight text-white select-none">
          Joshua <span className="opacity-70">SMC</span>
        </h1>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex gap-8 text-white/80 font-medium">
          <a href="#hero" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#certifications" className="hover:text-white transition">Certifications</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#services" className="hover:text-white transition">Services</a>
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
          ${open ? "max-h-64 py-4 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col gap-4 px-6 text-white/90 font-medium">
          <a href="#hero" onClick={() => setOpen(false)} className="hover:text-white">Home</a>
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-white">About</a>
          <a href="#certifications" onClick={() => setOpen(false)} className="hover:text-white">Certifications</a>
          <a href="#projects" onClick={() => setOpen(false)} className="hover:text-white">Projects</a>
          <a href="#services" onClick={() => setOpen(false)} className="hover:text-white">Services</a>
        </nav>
      </div>
    </header>
  );
}
