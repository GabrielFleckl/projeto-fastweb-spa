import wifi from "@/assets/wifi.svg";
import torrent from "@/assets/torrent.svg";
import telefonia from "@/assets/telefonia.svg";
import smartphone from "@/assets/smartphone.svg";
import Heading from "@/components/Heading";

import WordRotate from "@/components/ui/word-rotate";
import Container from "@/components/Container";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function Services() {
  return (
    <Container>
      <section id="services" className="mb-20 mt-10 flex flex-col gap-2">
        <div className="flex flex-col items-center justify-center gap-1">
          <Heading>SERVIÇOS</Heading>
        </div>
        <div className="hidden flex-col items-center justify-center md:flex">
          <WordRotate
            className="text-4xl font-medium tracking-widest text-foreground"
            words={[
              "Internet Fibra óptica",
              "Wifi Premium",
              "Roteador Adicional",
              "Planos Corporativos",
              "IP Fixo",
              "100% download & Upload",
            ]}
            duration={2000}
          />
          <ul className="flex items-center justify-center gap-4">
            <li className="relative flex w-[130px] flex-col items-center justify-center gap-3 lg:w-3/4">
              <img className="size-[200px] lg:w-3/4" src={wifi} alt="" />
            </li>
            <li className="flex w-[130px] flex-col items-center justify-center gap-3 lg:w-3/4">
              <img className="size-[200px] lg:w-3/4" src={torrent} alt="" />
            </li>
            <li className="flex w-[130px] flex-col items-center justify-center gap-3 lg:w-3/4">
              <img className="size-[200px] lg:w-3/4" src={telefonia} alt="" />
            </li>
            <li className="flex w-[130px] flex-col items-center justify-center gap-3 lg:w-3/4">
              <img className="size-[200px] lg:w-3/4" src={smartphone} alt="" />
            </li>
          </ul>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{ loop: true }}
          className="pointer-events-auto m-auto mt-5 grid w-3/4 place-items-center md:hidden"
        >
          <CarouselContent>
            <CarouselItem>
              <li className="relative flex flex-col items-center justify-center gap-3">
                <img src={smartphone} alt="" />
                <p className="font-base text-center text-lg tracking-widest text-foreground">
                  Wifi Premium
                </p>
              </li>
            </CarouselItem>
            <CarouselItem>
              <li className="flex flex-col items-center justify-center gap-3">
                <img src={torrent} alt="" />
                <p className="font-base text-center text-lg tracking-widest text-foreground">
                  Ponto Adicional
                </p>
              </li>
            </CarouselItem>
            <CarouselItem>
              <li className="flex flex-col items-center justify-center gap-3">
                <img src={telefonia} alt="" />
                <p className="font-base text-center text-lg tracking-widest text-foreground">
                  Planos Corporativos
                </p>
              </li>
            </CarouselItem>
            <CarouselItem>
              <li className="flex flex-col items-center justify-center gap-3">
                <img src={wifi} alt="" />
                <p className="font-base text-center text-lg tracking-widest text-foreground">
                  IP fixo
                </p>
              </li>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
    </Container>
  );
}

export default Services;
