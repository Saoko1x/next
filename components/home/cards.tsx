"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useEffect, useState } from "react";

type ImageCard = {
  id: number;
  title: string;
  imageUrl: string;
};

function ImageCard({ card }: { card: ImageCard }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="w-[250px] cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-40 object-cover rounded-md"
              width={400}
              height={300}
            />
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{card.title}</DialogTitle>
          <DialogDescription>Click outside to close</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={card.imageUrl}
            alt={card.title}
            className="w-full rounded-md"
            width={400}
            height={300}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Home() {
  const [cards, setCards] = useState<ImageCard[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?count=8&client_id=8_NZFlEANzFsg0bpZDHqBzfkcw9soNyc9PzWSrspHUU`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setCards(
          data.map((item: any, index: number) => ({
            id: index + 1,
            title: item.alt_description || `Image ${index + 1}`,
            imageUrl: item.urls.regular,
          }))
        );
      } catch (error) {
        console.error("Error fetching images:", error);
        // You might want to set some error state here
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8" id="cards">
      <div className="w-full max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Image Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <ImageCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
