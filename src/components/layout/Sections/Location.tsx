"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Section } from "../Section";

const LocationSection = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.009010765898!2d-58.383009062734985!3d-34.60393365439598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1774529675557!5m2!1ses-419!2sar";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const infoItems = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Av. Principal 123, Barrio Norte, Ciudad Destino.",
    },
    { icon: Phone, title: "Teléfono", content: "+54 11 1234-5678" },
    { icon: Mail, title: "Email", content: "hola@aguayrio.com" },
    {
      icon: Clock,
      title: "Horarios",
      content: "Check-in: 15:00 | Check-out: 11:00",
    },
  ];

  return (
    <Section id="location" className="bg-background">
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Columna de Información */}
          <div className="flex flex-col gap-10">
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-4">
                Nuestra Ubicación
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Un refugio en el corazón de la ciudad, donde la serenidad del
                río se encuentra con la comodidad urbana.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-6">
              {infoItems.map((item, index) => (
                <div key={index} className="flex items-start gap-5 group">
                  <div className="p-3 bg-white rounded-[1rem] shadow-sm border border-border/50 text-accent transition-all duration-300 group-hover:shadow-md">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="p-6 bg-secondary rounded-[1rem] border border-border/30"
            >
              <p className="text-sm font-medium text-foreground/70 italic leading-relaxed">
                “A solo 200 metros del malecón y rodeado de naturaleza. El lugar
                perfecto para desconectar sin alejarte de todo.”
              </p>
            </motion.div>
          </div>

          {/* Columna del Mapa */}
          <motion.div
            variants={fadeIn}
            className="w-full h-[400px] lg:h-[500px] rounded-[1rem] overflow-hidden shadow-md border border-border/50 transition-all duration-300 hover:shadow-xl"
          >
            <iframe
              title="Ubicación de Aguayrio"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.15] contrast-[1.05] hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default LocationSection;
