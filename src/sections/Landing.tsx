import { Button } from "@/components/ui/button";
import { Orbit } from "@/components/OrbitingCircles/Index";
import Container from "@/components/Container";

function Landing() {
  return (
    <Container>
      <main className="m-auto flex flex-col-reverse items-center justify-between py-4 md:flex-row lg:h-[80vh]">
        <div className="m-auto flex w-full flex-col gap-7 text-center md:text-left">
          <h1 className="w-full text-3xl font-bold text-primary md:text-4xl lg:w-[90%] lg:text-4xl">
            Transforme Sua Navegação com a Internet Líder em Velocidade!
          </h1>

          <p className="w-full text-sm font-semibold text-foreground md:text-base lg:w-[80%]">
            Serviço de internet com a velocidade que você precisa e o suporte
            que você merece.
          </p>
          <Button className="w-full md:w-3/4 lg:w-[30%]" size={"lg"}>
            <a href="#price">Conheça nossos planos</a>
          </Button>
        </div>

        <div>
          <Orbit />
        </div>
      </main>
    </Container>
  );
}

export default Landing;
