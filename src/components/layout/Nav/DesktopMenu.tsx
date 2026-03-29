"use client";
import React from "react";
import { NavSection } from "@/lib/sections";
import { cn } from "@/lib/utils";
import { Waves } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLenis } from "lenis/react";

interface DesktopMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  sections,
  activeSection,
}) => {
  const lenis = useLenis();

  return (
    <div className="fixed top-0 left-0 w-full h-[--navbar-height] z-100 hidden lg:flex items-center justify-center px-6 pointer-events-none ">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-7xl mx-auto flex items-center justify-between px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md pointer-events-auto shadow-2xl shadow-black/5"
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-white hover:text-accent transition-colors duration-300"
        >
          <div className="p-2 bg-accent/20 rounded-lg group-hover:bg-accent group-hover:text-white transition-all">
            <Waves className="size-5" strokeWidth={2.5} />
          </div>
          <span className="text-xl text-primary font-bold tracking-tighter uppercase">
            AGUAY
            <span className="text-accent group-hover:text-white transition-colors">
              RIO
            </span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex items-center gap-2">
            {sections.map((s) => {
              const isActive = activeSection === s.id;
              return (
                <li key={s.id} className="relative">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      lenis?.scrollTo(`#${s.id}`, {
                        offset: -80,
                        duration: 1.5,
                      });
                    }}
                    className={cn(
                      "relative px-5 py-2 cursor-pointer text-sm font-bold tracking-wide uppercase transition-colors duration-300 z-10",
                      isActive
                        ? "text-foreground"
                        : "text-foreground/60 hover:text-foreground/80",
                    )}
                  >
                    {s.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-accent/20 rounded-full -z-10 border border-accent/30"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Botón de Reserva Rápida (Desktop Highlight) */}
        <div className="hidden lg:block">
          <button
            onClick={() => lenis?.scrollTo("#contact")}
            className="px-6 py-2.5 bg-secondary text-primary text-xs font-bold uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
          >
            Reservar Ahora
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DesktopMenu;
