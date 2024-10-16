import Heading from "@/components/Heading";
import MarqueeReviews from "@/components/Marquee";

function Reviews() {
  return (
    <section className="mt-10 mb-20 flex h-full w-full flex-col items-center justify-start gap-8 rounded-lg py-5">
      <div className="m-auto w-full px-8 lg:w-full lg:px-8 xl:w-[80%] xl:px-0">
        <Heading>Mais de 10.000 Clientes Satisfeitos</Heading>
        <p className="text-center font-medium text-lg text-foreground md:w-1/2 w-full m-auto">
          Vamos ouvir o que nossos clientes têm a dizer sobre sua satisfação com
          nossos serviços e produtos.
        </p>
      </div>

      <div className="w-full">
        <MarqueeReviews />
      </div>
    </section>
  );
}

export default Reviews;
