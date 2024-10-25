"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageCard {
  id: number;
  title: string;
  imageUrl: string;
}

export default function Carousel() {
  const [cards, setCards] = useState<ImageCard[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Verificar si ya hay imágenes en el localStorage
        const storedImages = localStorage.getItem("carouselImages");
        if (storedImages) {
          setCards(JSON.parse(storedImages));
          return;
        }

        // Si no hay imágenes almacenadas, hacer la llamada a la API
        const response = await fetch(
          `https://api.unsplash.com/photos/random?orientation=landscape&count=4&client_id=2QuecJhFV8ybA6XYOAvwiRoKhYQnhimrq-1ctxWQwXc`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        const newCards = data.map((item: any, index: number) => ({
          id: index + 1,
          title: item.alt_description || `Image ${index + 1}`,
          imageUrl: item.urls.regular,
        }));

        // Guardar las imágenes en localStorage
        localStorage.setItem("carouselImages", JSON.stringify(newCards));
        setCards(newCards);
      } catch (error) {
        console.error("Error fetching images:", error);
        // You might want to set some error state here
      }
    };

    fetchImages();
  }, []);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  return (
    <div className="relative" id="carousel">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {cards.map((item: any) => (
            <div key={item.id} className="flex-[0_0_100%] min-w-0 relative p-2">
              <Image
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-[400px] object-cover rounded-lg"
                width={400}
                height={300}
                objectFit="contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  );
}
