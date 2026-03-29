"use client";

import { Section } from "@/components/layout/Section";
import { StaggerContainer } from "../../motion/StraggerContainer";
import { FadeIn } from "../../motion/FadeIn";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react"; // Cambiado por Lucide para consistencia
import { Separator } from "@/components/ui/separator";

type Testimonial = {
  id: number;
  comment: string;
  name: string;
  username?: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    comment:
      "La cabaña superó todas nuestras expectativas. El lugar es mágico, la atención impecable y las vistas al río son increíbles. Volveremos sin duda.",
    name: "María López",
    username: "Huésped verificado",
    avatar: "https://i.pravatar.cc/150?u=maria",
  },
  {
    id: 2,
    comment:
      "Un paraíso escondido. La piscina, el jardín y la tranquilidad que se respira hacen que sea el lugar ideal para desconectar. Todo perfecto.",
    name: "Carlos Rodríguez",
    username: "Huésped verificado",
    avatar: "https://i.pravatar.cc/150?u=carlos",
  },
  {
    id: 3,
    comment:
      "Nos sentimos como en casa. La cabaña es hermosa, muy limpia y con todos los detalles. El desayuno casero estaba delicioso. Recomendado 100%.",
    name: "Laura Fernández",
    username: "Huésped verificado",
    avatar: "https://i.pravatar.cc/150?u=laura",
  },
];

const Testimonials = () => {
  return (
    <Section id="testimonials" height="content" className="bg-secondary/30">
      <div className="mx-auto max-w-7xl flex flex-col gap-12">
        {/* Título y descripción */}
        <div className="text-center flex flex-col gap-4">
          <FadeIn>
            <span className="text-accent font-semibold tracking-widest uppercase text-sm">
              Experiencias Reales
            </span>
            <h2 className="text-primary mt-2">
              Lo que dicen nuestros huéspedes
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              La mayor satisfacción es saber que quienes nos visitan encuentran
              la paz que venían a buscar.
            </p>
          </FadeIn>
        </div>

        {/* Carousel de reseñas */}
        <StaggerContainer>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <FadeIn delay={index * 0.1} className="h-full">
                    <div className="bg-card p-8 rounded-[--radius] h-full flex flex-col border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group">
                      {/* Icono de comillas decorativo */}
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                          <Quote className="size-6 fill-current" />
                        </div>
                      </div>

                      {/* Comentario */}
                      <p className="text-lg italic leading-relaxed text-foreground/80 grow mb-8">
                        `&quot;`{testimonial.comment}`&quot;`
                      </p>

                      <Separator className="mb-6 opacity-50" />

                      {/* Usuario */}
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden border-2 border-accent/20">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-primary text-base">
                            {testimonial.name}
                          </span>
                          <span className="text-xs text-accent font-medium uppercase tracking-wider">
                            {testimonial.username}
                          </span>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navegación estilizada */}
            <div className="flex justify-center md:justify-end gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 border-primary/20 hover:bg-primary hover:text-white" />
              <CarouselNext className="static translate-y-0 border-primary/20 hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </StaggerContainer>
      </div>
    </Section>
  );
};

export default Testimonials;
