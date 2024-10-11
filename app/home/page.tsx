import Welcome from "@/components/home/welcome";
import Carousel from "@/components/home/carousel";
import Cards from "@/components/home/cards";
import About from "@/components/home/about";
import ListedButton from "@/components/home/listed-button";
import Navbar from "@/components/nav";

export default function Home() {
  return (
    <main>
      <Navbar />
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
