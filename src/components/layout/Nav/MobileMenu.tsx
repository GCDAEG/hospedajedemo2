"use client";
import React, { useEffect, useRef, useState } from "react";
import { NavSection } from "@/lib/sections";
import Link from "next/link";
import { Waves, X, Menu } from "lucide-react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ sections, activeSection }) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  // Bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const handleScroll = (id: string) => {
    setOpen(false);
    // Pequeño delay para que la animación de cierre comience antes del scroll
    setTimeout(() => {
      lenis?.scrollTo(`#${id}`, { offset: -72, duration: 1.5 });
    }, 300);
  };

  return (
    <div className="w-full h-(--navbar-height) flex items-center justify-between lg:hidden bg-background/80 backdrop-blur-md sticky top-0 z-100">
      {/* Barra Superior */}
      <div className="flex w-full justify-between px-4 items-center h-full  ">
        <Link
          href="/"
          className="font-bold flex items-center gap-2 text-primary"
          onClick={() => setOpen(false)}
        >
          <Waves className="size-6 text-accent" strokeWidth={2.5} />
          <span className="text-xl tracking-tighter font-bold">AGUAYRIO</span>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          className="relative z-110 text-primary hover:bg-transparent"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="size-8" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu className="size-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </div>

      {/* Overlay del Menú */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/95 backdrop-blur-xl z-105 flex flex-col justify-center px-8"
          >
            {/* Decoración de fondo */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

            <nav className="relative z-10">
              <ul className="flex flex-col gap-6">
                {sections.map((sec, i) => (
                  <motion.li
                    key={sec.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <button
                      onClick={() => handleScroll(sec.id)}
                      className={cn(
                        "text-4xl font-bold tracking-tighter transition-all flex items-center gap-4",
                        activeSection === sec.id
                          ? "text-accent translate-x-4"
                          : "text-white/60 hover:text-white",
                      )}
                    >
                      {activeSection === sec.id && (
                        <motion.div
                          layoutId="activeDot"
                          className="w-2 h-2 rounded-full bg-accent"
                        />
                      )}
                      {sec.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer del Menú */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-20 pt-8 border-t border-white/10"
            >
              <p className="text-white/40 text-sm tracking-widest uppercase mb-4">
                Reservas
              </p>
              <a
                href="https://wa.me/..."
                className="text-white text-xl font-medium hover:text-accent transition-colors"
              >
                +54 9 11 1234 5678
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
