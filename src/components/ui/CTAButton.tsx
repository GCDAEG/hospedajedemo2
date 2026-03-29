"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; // Usamos lucide para consistencia

interface CTAButtonBaseProps {
  ctaRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
  buttonClassName?: string;
  href?: string;
}

// 1. Variante Hero: Botón con mayor jerarquía y presencia
export function HeroCTAButton({
  ctaRef,
  className = "",
  buttonClassName = "",
  href = "https://wa.me/549...?",
}: CTAButtonBaseProps) {
  return (
    <div ref={ctaRef} className={`flex w-full justify-center ${className}`}>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group relative inline-flex items-center gap-3
          bg-accent text-white
          px-8 py-4 rounded-[--radius]
          font-bold text-lg tracking-wide
          shadow-lg shadow-accent/20
          overflow-hidden
          ${buttonClassName}
        `}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.03,
          backgroundColor: "oklch(70% 0.120 190)", // Un tono más claro del verde agua
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Efecto de brillo sutil al pasar el mouse */}
        <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />

        <MessageCircle className="text-2xl animate-pulse" />
        <span className="relative">RESERVAR AHORA</span>
      </motion.a>
    </div>
  );
}

// 2. Variante Simple: Para cards de habitaciones o servicios
export function SimpleCTAButton({
  className = "",
  buttonClassName = "",
  href = "https://wa.me/549...?",
}: CTAButtonBaseProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center gap-2
        bg-primary text-white
        px-6 py-3 rounded-[--radius]
        font-semibold text-sm md:text-base
        transition-all duration-300
        hover:bg-primary/90
        w-full sm:w-auto
        ${className} ${buttonClassName}
      `}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <MessageCircle size={18} />
      Consultar Disponibilidad
    </motion.a>
  );
}

/* Nota: Para el efecto 'shimmer', asegúrate de tener este keyframe en tu tailand.config o globals.css:
  @keyframes shimmer {
    100% { transform: translateX(100%); }
  }
*/
