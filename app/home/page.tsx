import Welcome from "@/components/home/welcome";
import Carousel from "@/components/home/carousel";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Cards from "@/components/home/cards";
import About from "@/components/home/about";
import ListedButton from "@/components/home/listed-button";

export default function Home() {
  const navItems = [
    { name: "Inicio", link: "#welcome" },
    { name: "Carrousel", link: "#carousel" },
    { name: "Propiedades", link: "#cards" },
    { name: "Nosotros", link: "#about" },
    { name: "GIF", link: "#listed-button" },
    { name: "Skills", link: "/skills" },
  ];
  return (
    <main>
      <FloatingNav navItems={navItems} />
      <Welcome />
      <h1 className="flex text-center justify-center ">
        Todas las imagenes vienen de la API de Unsplash
      </h1>
      <Carousel />
      <Cards />
      <About />
      <ListedButton />
    </main>
  );
}
