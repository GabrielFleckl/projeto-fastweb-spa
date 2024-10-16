import { Button } from "@/components/ui/button";
import AnimatedBeamMobile from "@/components/AnimatedBeam/Index";
import { IoMdDownload } from "react-icons/io";

function MobileApp() {
  return (
    <>
      <section className="m-auto mb-20 mt-10 flex h-full w-[90%] items-center justify-center gap-4 rounded-lg bg-[#1C1917]/30 p-10 backdrop-blur-sm">
        <div className="flex w-full flex-col items-center justify-center gap-4 md:items-start">
          <h1 className="rounded-lg text-center text-2xl font-semibold uppercase tracking-widest text-green-500 md:text-start md:text-3xl">
            BAIXE NOSSO APLICATIVO
          </h1>
          <p className="text-md text-center tracking-wide text-white md:text-start md:text-xl">
            Faça o download abaixo e tenha acesso a todas as informações do seu
            plano!
          </p>
          <Button size={"lg"}>
            {" "}
            Baixar agora <IoMdDownload className="ml-2 w-full text-xl" />{" "}
          </Button>
        </div>

        <AnimatedBeamMobile className="hidden md:flex" />
      </section>
    </>
  );
}

export default MobileApp;
