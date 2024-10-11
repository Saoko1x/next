import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Acerca de Nosotros
            </h2>
            <p className="text-lg text-gray-600">
              Somos una empresa innovadora dedicada a crear soluciones
              tecnológicas que mejoran la vida de las personas. Con años de
              experiencia y un equipo apasionado, nos esforzamos por superar las
              expectativas en cada proyecto que emprendemos.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Más de 10 años de experiencia en el sector</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Equipo de expertos altamente cualificados</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Compromiso con la innovación y la calidad</span>
              </li>
            </ul>
            <Button variant="default">Leer más</Button>
          </div>
          <div className="mt-10 md:mt-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Nuestro equipo trabajando"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
