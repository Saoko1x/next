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
  const cards = [
    {
      id: 1,
      title: "Mountain View",
      imageUrl:
        "https://utfs.io/f/pypyrj2zEPRNfcTLLGyC6s1S0R75wL3lAVCbqKGjiPoQx9zg",
    },
    {
      id: 2,
      title: "Beach Sunset",
      imageUrl:
        "https://utfs.io/f/pypyrj2zEPRNfcTLLGyC6s1S0R75wL3lAVCbqKGjiPoQx9zg",
    },
    {
      id: 3,
      title: "City Skyline",
      imageUrl:
        "https://utfs.io/f/pypyrj2zEPRNfcTLLGyC6s1S0R75wL3lAVCbqKGjiPoQx9zg",
    },
    {
      id: 4,
      title: "Forest Trail",
      imageUrl:
        "https://utfs.io/f/pypyrj2zEPRNfcTLLGyC6s1S0R75wL3lAVCbqKGjiPoQx9zg",
    },
    {
      id: 5,
      title: "Mountain View",
      imageUrl:
        "https://utfs.io/f/pypyrj2zEPRNfcTLLGyC6s1S0R75wL3lAVCbqKGjiPoQx9zg",
    },
    {
      id: 6,
      title: "Mountain View",
      imageUrl:
        "https://utfs.io/f/pypyrj2zEPRNfcTLLGyC6s1S0R75wL3lAVCbqKGjiPoQx9zg",
    },
    {
      id: 7,
      title: "Mountain View",
      imageUrl:
        "https://utfs.io/f/pypyrj2zEPRNfcTLLGyC6s1S0R75wL3lAVCbqKGjiPoQx9zg",
    },
    {
      id: 8,
      title: "Mountain View",
      imageUrl:
        "https://utfs.io/f/pypyrj2zEPRNfcTLLGyC6s1S0R75wL3lAVCbqKGjiPoQx9zg",
    },
  ];

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
