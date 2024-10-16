import { Button } from "@/components/ui/button";
import { Orbit } from "@/components/OrbitingCircles/Index";
import Container from "@/components/Container";

function Landing() {
  return (
    <Container>
      <main className="m-auto flex flex-col-reverse items-center justify-between py-4 md:flex-row lg:h-[80vh]">
        <div className="m-auto flex w-full flex-col gap-7 text-center md:text-left">
          <h1 className="w-full text-3xl font-bold text-primary md:text-4xl lg:w-[90%] lg:text-5xl xl:w-[80%]">
            The Internet is Better When it's Fast
          </h1>

          <p className="w-full text-sm font-semibold text-foreground md:text-base lg:w-[90%] xl:w-[60%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <Button className="w-full md:w-3/4 lg:w-[30%]" size={"lg"}>
            Conheça nossos planos
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
