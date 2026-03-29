"use client";
import React from "react";
import { Section } from "@/components/layout/Section";
import { SimpleCTAButton } from "@/components/ui/CTAButton";
import { Wifi, ParkingCircle, Waves, Coffee } from "lucide-react";

const services = [
  {
    title: "Piscina al aire libre",
    icon: <Waves className="size-8" />,
    description:
      "Disfrutá de nuestro solárium y una piscina cristalina diseñada para el relax total bajo el sol.",
  },
  {
    title: "Desayuno artesanal",
    icon: <Coffee className="size-8" />,
    description:
      "Comenzá el día con sabores caseros, panificados recién horneados y frutas de estación.",
  },
  {
    title: "Wi-Fi de alta velocidad",
    icon: <Wifi className="size-8" />,
    description:
      "Conectividad estable en todo el predio, ideal para quienes buscan un entorno de naturaleza sin desconectarse.",
  },
  {
    title: "Estacionamiento privado",
    icon: <ParkingCircle className="size-8" />,
    description:
      "Seguridad y comodidad para tu vehículo dentro de nuestras instalaciones durante toda tu estadía.",
  },
] as const;

const ServiceSection = () => {
  return (
    <Section id="services" height="content" className="bg-background">
      <div className="flex flex-col gap-16 md:gap-24">
        {/* Cabecera de Sección */}
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">
            Comodidades Premium
          </span>
          <h2 className="text-primary">Tu bienestar es nuestra prioridad</h2>
          <p className="text-lg text-muted-foreground">
            Diseñamos cada espacio para que tu única preocupación sea disfrutar
            del paisaje y el descanso que te merecés.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 w-full">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col items-center text-center p-8 rounded-[--radius] bg-card border border-border/50 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
            >
              {/* Contenedor de Icono con estilo orgánico */}
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-accent/10 rounded-full scale-125 blur-lg group-hover:bg-accent/20 transition-colors duration-500" />
                <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-secondary text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-1">
                  {service.icon}
                </div>
              </div>

              {/* Texto */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Llamado a la acción final */}
        <div className="relative overflow-hidden rounded-[--radius] bg-primary p-8 md:p-12 text-center flex flex-col items-center gap-8">
          {/* Decoración de fondo sutil */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-4">
            <h4 className="text-2xl md:text-3xl font-bold text-white">
              ¿Querés disfrutar de todo esto?
            </h4>
            <p className="text-white/70 max-w-xl mx-auto">
              Reservá ahora y asegurá tu lugar en este paraíso frente al río.
            </p>
          </div>

          <div className="relative z-10">
            <SimpleCTAButton className="bg-accent hover:bg-accent/90 text-white border-none scale-110" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServiceSection;
