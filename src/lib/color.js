// Deriva una versión translúcida de un color-token (ej. "var(--color-gold)")
// sin depender de su valor RGB — así el acento sigue viniendo de la misma
// fuente de verdad que el resto del sitio (ver @theme en src/index.css).
export const withAlpha = (color, alpha) =>
  `color-mix(in srgb, ${color} ${alpha * 100}%, transparent)`;
