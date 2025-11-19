 import { motion } from "framer-motion"; 
 import climaImg from "../assets/aplicacion-clima.png"
 import ecommerceImg from "../assets/e-commerce-vintage.png"
 import peliculasImg from "../assets/buscador-de-peliculas.png" 


 const projects = [
   {
     title: "Aplicación Clima",
     description: "App con React que permite consultar el clima actual de una ciudad del mundo, mediante una API.",
     image: climaImg,
     link: "https://applicacion-de-clima-react.netlify.app/",
   },
   {
     title: "E-commerce Vintage",
     description: "App con React que permite ver productos, agregar o quitar al carrito y simular una compra.",
     image: ecommerceImg,
     link: "https://carrito-compras-final-react.netlify.app/",
   },
   {
     title: "Buscador de Películas",
     description: "App con React que permite buscar películas, ver detalles y explorar títulos.",
     image: peliculasImg,
     link: "https://app-de-peliculas-react.netlify.app/",
   },
 ];

 export default function Projects() {
   return (
     <section
       className="relative flex flex-col items-center justify-center text-center 
                  min-h-[140vh] pt-[20vh] pb-[40vh] px-0 bg-gradient-to-b 
                  from-black/40 via-black/70 to-black/90 backdrop-blur-md overflow-hidden md:px-6"
     >
       {/* Glow sutil detrás del título */}
       <div id="projects" className="scroll-mt-8 absolute top-[10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

       <motion.h2
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.7 }}
         className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text 
                    text-transparent bg-[linear-gradient(135deg,#ffffff_0%,#c3c3c3_50%,#ffffff_100%)]"
       >
         Proyectos Destacados
       </motion.h2>

       <div className="grid grid-cols-1 px-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 w-full max-w-6xl mt-10">
         {projects.map((project, index) => (
           <motion.div
             key={index}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.9, delay: index * 0.2 }}
             className="rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.03)]
                        bg-gradient-to-tr from-[#6a6050ff]/15 via-[#645d50ff]/30 to-[#6a6050ff]/10 backdrop-blur p-6 hover:-translate-y-3 
                        hover:shadow-[0_0_40px_rgba(255,255,255,0.09)]
                        transition-all duration-500"
           >
             <img
               src={project.image}
               alt={project.title}
               loading="lazy"
               className="rounded-xl w-full h-56 object-cover mb-4 transition-transform duration-500"
             />
             <div className="flex flex-col gap-2">
               <h3 className="text-xl font-semibold">{project.title}</h3>
               <p className="text-sm opacity-80">{project.description}</p>
               <a
                 href={project.link}
                 target="_blank"
                 className="underline text-sm mt-3 hover:opacity-80 transition-opacity duration-300"
               >
                 Ver Proyecto →
               </a> 
             </div>
           </motion.div>
         ))}
       </div>

       {/* Fade-out inferior para suavizar la transición con la siguiente sección */}
       <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />

       {/* Animación del gradiente */}
       <style>{`
         @keyframes gradient {
           0% { background-position: 0% 50%; }
           100% { background-position: 100% 50%; }
         }
       `}</style>
     </section>
   );
 }



