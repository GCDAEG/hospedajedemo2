"use client";
import React from "react";
import Image from "next/image";
import { HeroCTAButton } from "@/components/ui/CTAButton";
import { MousePointer2 } from "lucide-react";
import { useLenis } from "lenis/react";

const HeroSection = () => {
  const lenis = useLenis();
  const handleScroll = (id: string) => {
    lenis?.scrollTo(`#${id}`, { offset: -64, duration: 1.2 });
  };
  return (
    <section
      id="hero"
      className="relative min-h-svh w-full flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Imagen de fondo con optimización de Next.js */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=2071&auto=format&fit=crop"
          alt="Vista panorámica del río al atardecer"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay dinámico: Más oscuro en mobile para legibilidad, gradiente lateral en desktop */}
        <div className="absolute inset-0 bg-black/50 md:bg-linear-to-r md:from-primary/90 md:via-primary/40 md:to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center md:items-start text-center md:text-start gap-8">
        {/* Badge con estilo Glassmorphism */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 text-accent text-xs md:text-sm font-bold tracking-[0.2em] uppercase animate-in fade-in slide-in-from-top-4 duration-1000">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Experiencia Ribereña
        </div>

        {/* Bloque de Títulos */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h1 className="text-white drop-shadow-2xl">
            AGUAY<span className="text-accent">RIO</span>
          </h1>

          <p className="text-slate-200 text-lg md:text-2xl font-light leading-relaxed max-w-xl text-balance">
            Donde el río encuentra su calma. Disfrutá de estadías exclusivas en
            un entorno natural diseñado para tu desconexión total.
          </p>
        </div>

        {/* Grupo de Acciones */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 w-full sm:w-auto">
          <div className="w-full sm:w-auto transform transition-all hover:scale-105">
            <HeroCTAButton />
          </div>

          <button
            onClick={() => handleScroll("gallery")}
            className="group flex relative items-center gap-2 text-white font-medium hover:text-accent transition-colors justify-center py-2 px-3"
          >
            <span className="w-10 hidden md:flex h-px bg-accent group-hover:w-14 transition-all" />
            <span className="h-px w-32 bg-accent flex md:hidden absolute bottom-full " />
            Ver Galería
          </button>
        </div>

        {/* Indicador de Scroll (Solo Desktop) */}
        <div className="absolute pt-3  w-full bottom-0 flex items-center justify-center md:justify-start gap-3 text-white/40 text-xs tracking-widest uppercase vertical-rl">
          <span className="w-px h-12 bg-white/20 mb-2 hidden md:flex" />
          <span className="h-px w-32 bg-white/20 flex md:hidden absolute bottom-full" />
          Deslizar para descubrir
        </div>
      </div>

      {/* Decoración radial sutil */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-accent/5 rounded-full blur-[120px] -z-1" />
    </section>
  );
};

export default HeroSection;
