"use client";

import { motion } from "framer-motion";
import { Waves, MapPin, Phone, Mail } from "lucide-react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { useLenis } from "lenis/react";
import { sections } from "@/lib/sections";

export function FooterSection() {
  const lenis = useLenis();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <footer className="bg-primary text-white/90">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Columna 1: Logo + Descripción */}
          <motion.div variants={fadeInUp} className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Waves className="size-7 text-accent" strokeWidth={1.5} />
              <h4 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                AGUAYRIO
              </h4>
            </div>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
              Un refugio donde el río encuentra tu descanso. Naturaleza, confort
              y serenidad en un solo lugar.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/60 hover:text-accent transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <BsInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-accent transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <BsWhatsapp size={20} />
              </a>
            </div>
          </motion.div>

          {/* Columna 2: Enlaces rápidos */}
          <motion.div variants={fadeInUp} className="md:col-span-3">
            <h4 className="text-white text-xl font-semibold mb-6 tracking-tight">
              Explorar
            </h4>
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      lenis?.scrollTo(`#${section.id}`, {
                        offset: -96,
                        duration: 1.2,
                      });
                    }}
                    className="text-white/70 hover:text-accent transition-colors duration-300 text-base"
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Contacto */}
          <motion.div variants={fadeInUp} className="md:col-span-4">
            <h4 className="text-white text-xl font-semibold mb-6 tracking-tight">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <MapPin
                  size={18}
                  className="text-accent flex-shrink-0"
                  strokeWidth={1.5}
                />
                <span className="text-white/70 text-base">
                  Entre Ríos, Argentina
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone
                  size={18}
                  className="text-accent flex-shrink-0"
                  strokeWidth={1.5}
                />
                <a
                  href="tel:+5493451234567"
                  className="text-white/70 hover:text-accent transition-colors duration-300"
                >
                  +54 9 345 1234567
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail
                  size={18}
                  className="text-accent flex-shrink-0"
                  strokeWidth={1.5}
                />
                <a
                  href="mailto:hola@aguayrio.com"
                  className="text-white/70 hover:text-accent transition-colors duration-300"
                >
                  hola@aguayrio.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Separador y Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/20"
        >
          <p className="text-white/50 text-sm text-center">
            © 2026 Aguayrio. Todos los derechos reservados.
            <br className="md:hidden" />
            <span className="hidden md:inline"> — </span>
            Diseñado con dedicación para tu descanso. by TUWEBHOY
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
