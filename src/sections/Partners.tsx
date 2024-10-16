import Container from "@/components/Container";

function Partners() {
  return (
    <Container>
      <section className="mb-20 mt-10 flex h-full w-full flex-col items-center justify-start rounded-lg border-2 border-primary/30 bg-[#1C1917]/30 px-10 py-5 backdrop-blur-sm">
        <h1 className="mb-2 rounded-lg px-10 py-1 text-center text-3xl font-semibold uppercase tracking-widest text-green-500">
          Parceiros
        </h1>
        <p className="text-lg font-medium text-white">Venha ser um parceiro GIGAWEB!</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-8 text-white">
          <ul className="flex w-full flex-col gap-5 md:flex-row">
            <li className="flex flex-col items-center justify-center gap-5 md:flex-row">
              <img
                src="https://picsum.photos/id/1/100/100"
                className="size-[75px] rounded-full"
                alt=""
              />
              <p className="text-center text-2xl font-semibold md:text-3xl">
                Lorem Ipsum
              </p>
            </li>
            <li className="flex flex-col items-center justify-center gap-5 md:flex-row">
              <img
                src="https://picsum.photos/id/1/100/100"
                className="size-[75px] rounded-full"
                alt=""
              />
              <p className="text-center text-2xl font-semibold md:text-3xl">
                Lorem Ipsum
              </p>
            </li>
            <li className="flex flex-col items-center justify-center gap-5 md:flex-row">
              <img
                src="https://picsum.photos/id/1/100/100"
                className="size-[75px] rounded-full"
                alt=""
              />
              <p className="text-center text-2xl font-semibold md:text-3xl">
                Lorem Ipsum
              </p>
            </li>
          </ul>

          <ul className="flex flex-col gap-5 md:flex-row">
            <li className="hidden flex-col items-center justify-center gap-5 md:flex md:flex-row">
              <img
                src="https://picsum.photos/id/1/100/100"
                className="size-[75px] rounded-full"
                alt=""
              />
              <p className="text-center text-2xl font-semibold md:text-3xl">
                Lorem Ipsum
              </p>
            </li>
            <li className="hidden flex-col items-center justify-center gap-5 md:flex md:flex-row">
              <img
                src="https://picsum.photos/id/1/100/100"
                className="size-[75px] rounded-full"
                alt=""
              />
              <p className="text-center text-2xl font-semibold md:text-3xl">
                Lorem Ipsum
              </p>
            </li>
          </ul>
        </div>
      </section>
    </Container>
  );
}

export default Partners;
