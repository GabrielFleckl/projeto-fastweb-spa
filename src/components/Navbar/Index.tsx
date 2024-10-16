import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Settings } from "lucide-react";
import { AiOutlineUser } from "react-icons/ai";

import { Link } from "react-router-dom";

import logo from "@/assets/logo.png";

function Navbar() {
  
  return (
    <section >
      <header className="m-auto mt-3 flex w-full items-center justify-between gap-1 px-8 py-4 lg:w-[85%] lg:px-1">
        <ul>
          <img
            src={logo}
            className="w-full min-w-[130px] max-w-[170px] object-cover"
            alt=""
          />
        </ul>

        <ul className="hidden items-center justify-center rounded-lg bg-green-700/60 py-1 text-lg font-medium text-white backdrop-blur-sm dark:bg-primary/30 md:flex lg:w-[50%] lg:gap-2 lg:px-5">
          <li className="cursor-pointer rounded px-2 py-1 transition-all duration-200 hover:text-primary">
            
            <a href="#price">Planos</a>
          </li>
          <li className="cursor-pointer rounded px-2 py-1 transition-all duration-200 hover:text-primary">
            <a href="#services">Serviços</a>
          </li>
          <li className="cursor-pointer rounded px-2 py-1 transition-all duration-200 hover:text-primary">
            Speedtest
          </li>
          <li className="cursor-pointer rounded px-2 py-1 transition-all duration-200 hover:text-primary">
            Contato
          </li>
          <li className="cursor-pointer rounded px-2 py-1 transition-all duration-200 hover:text-primary">
            Trabalhe conosco
          </li>
        </ul>

        <ul className="hidden items-center gap-2 md:flex">
          <li>
            <Link to={"/"} target="_blank">
              <Button className="h-[44px] w-full items-center gap-2 py-1">
                <AiOutlineUser className="text-xl" /> Area do cliente
              </Button>
            </Link>
          </li>
        </ul>

        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger>
              {" "}
              <Button>
                <Settings className="text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="my-5 flex gap-2">
                <Link to={"/"} target="_blank" className="w-full">
                  <Button className="min-w-full"> Area do cliente</Button>
                </Link>
              </div>
              <ul className="flex flex-col justify-center gap-2 text-lg font-medium tracking-wide">
                <li>
                  <Link to={"/"} target="_blank">
                    <Button className="w-full">Inicio</Button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} target="_blank">
                    <Button className="w-full">Serviços</Button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} target="_blank">
                    <Button className="w-full">Speedtest</Button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} target="_blank">
                    <Button className="w-full">Contato</Button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} target="_blank">
                    <Button className="w-full">Trabalhe conosco</Button>
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
