import { motion } from "framer-motion";
import { withAlpha } from "../lib/color";

const GOLD = "var(--color-gold)";

const steps = [
  {
    number: "01",
    title: "Charlamos",
    description: "Entendés el alcance real del proyecto antes de que arranque nada.",
  },
  {
    number: "02",
    title: "Propuesta clara",
    description: "Tiempos y entregables definidos, sin sorpresas después.",
  },
  {
    number: "03",
    title: "Desarrollo con avances",
    description: "No hay silencio de tres semanas: vas viendo progreso real.",
  },
  {
    number: "04",
    title: "Entrega y acompañamiento",
    description: "No te suelto la mano el día que se sube a producción.",
  },
];

export default function Process() {
  return (
    <section className="relative py-20 px-6 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-semibold tracking-wide uppercase mb-12"
          style={{ color: GOLD }}
        >
          Cómo trabajo
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold border mx-auto md:mx-0 mb-3"
                style={{
                  borderColor: withAlpha(GOLD, 0.5),
                  background: withAlpha(GOLD, 0.12),
                  color: GOLD,
                }}
              >
                {step.number}
              </div>
              <h3 className="text-base font-semibold mb-1.5">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
