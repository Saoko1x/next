"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

function GifDisplay() {
  const searchParams = useSearchParams();
  const gifUrl = searchParams.get("url");
  const gifId = searchParams.get("id");

  return (
    <>
      {gifUrl && gifId && (
        <div className="flex justify-center">
          <Image
            src={gifUrl}
            alt={`GIF ${gifId}`}
            width={300}
            height={300}
            className="rounded-lg"
            unoptimized
          />
        </div>
      )}
    </>
  );
}

export default function SelectedGifPage() {
  return (
    <div className="container mx-auto px-4 py-8" id="listed-button">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">GIF Seleccionado</h1>
        <Link href="/listado">
          <Button>Volver al listado</Button>
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <GifDisplay />
      </Suspense>
    </div>
  );
}
