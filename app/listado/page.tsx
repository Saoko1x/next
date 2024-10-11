"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Asegúrate de reemplazar esto con tu propia API key de Giphy
const GIPHY_API_KEY = "HM1koDVmNfOizeRYAcMBgvYs0pc213Wp";

interface Gif {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

export default function GifsPage() {
  const [allGifs, setAllGifs] = useState<Gif[]>([]);
  const [displayedGifs, setDisplayedGifs] = useState<Gif[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchAllGifs();
  }, []);

  useEffect(() => {
    updateDisplayedGifs();
  }, [allGifs, offset]);

  const fetchAllGifs = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=10`
      );
      const data = await response.json();
      setAllGifs(data.data);
    } catch (error) {
      console.error("Error fetching gifs:", error);
    }
    setLoading(false);
  };

  const updateDisplayedGifs = () => {
    setDisplayedGifs(allGifs.slice(offset, offset + 3));
  };

  const handleNextPage = () => {
    if (offset < 7) {
      setOffset(offset + 3);
    }
  };

  const handlePrevPage = () => {
    if (offset > 0) {
      setOffset(offset - 3);
    }
  };

  const handleGifClick = (gif: Gif) => {
    router.push(`/home/?id=${gif.id}&url=${gif.images.fixed_height.url}`);
  };

  if (loading) {
    return <div className="text-center mt-8">Cargando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explorador de GIFs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {displayedGifs.map((gif) => (
          <div
            key={gif.id}
            className="cursor-pointer"
            onClick={() => handleGifClick(gif)}
          >
            <Image
              src={gif.images.fixed_height.url}
              alt={gif.title}
              width={200}
              height={200}
              className="rounded-lg"
              unoptimized
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <Button onClick={handlePrevPage} disabled={offset === 0}>
          Anterior
        </Button>
        <Button onClick={handleNextPage} disabled={offset >= 7}>
          Siguiente
        </Button>
      </div>
    </div>
  );
}
