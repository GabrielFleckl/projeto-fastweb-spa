import { Button } from "@/components/ui/button";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrMenu } from "react-icons/gr";

import logo from "@/assets/logo.png";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

function Navbar() {
  return (
    <section>
      <header className="m-auto mt-3 flex w-full items-center justify-between gap-1 px-8 py-4 lg:w-[85%] lg:px-1">
        <ul>
          <img
            src={logo}
            className="w-full min-w-[130px] max-w-[170px] object-cover"
            alt=""
          />
        </ul>

        <ul className="hidden items-center justify-center rounded-lg bg-green-700/60 py-1 text-lg font-medium text-white backdrop-blur-sm dark:bg-primary/30 md:flex lg:gap-2 lg:px-5">
          <li className="cursor-pointer rounded px-2 py-1 transition-all duration-200 hover:text-primary">
            <a href="#price">Planos</a>
          </li>
          <li className="cursor-pointer rounded px-2 py-1 transition-all duration-200 hover:text-primary">
            <a href="#services">Serviços</a>
          </li>

          <li className="cursor-pointer rounded px-2 py-1 transition-all duration-200 hover:text-primary">
            <Dialog>
              <DialogTrigger>Contato</DialogTrigger>
              <DialogContent className="border border-primary/50 bg-[#1C1917]/70 pt-5 backdrop-blur-sm">
                <DialogHeader>
                  <DialogTitle>Contato</DialogTitle>
                </DialogHeader>
                <div>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-3">
                      <FaPhoneAlt className="text-primary" /> 51 3582-5072
                    </li>
                    <li className="flex items-center gap-3">
                      <FaMapMarkerAlt className="text-primary" /> R. Florença,
                      703 - Canudos, Novo Hamburgo - RS
                    </li>
                    <li className="flex items-center gap-3">
                      <MdEmail className="text-lg text-primary" />{" "}
                      Contato@gigawebtecnologia.com.br
                    </li>
                  </ul>
                </div>
              </DialogContent>
            </Dialog>
          </li>
          <li className="cursor-pointer rounded px-2 py-1 transition-all duration-200 hover:text-primary">
            <Dialog>
              <DialogTrigger className="text-nowrap">
                Trabalhe Conosco
              </DialogTrigger>
              <DialogContent className="border border-primary/50 bg-[#1C1917]/70 pt-5 backdrop-blur-sm">
                <DialogHeader>
                  <DialogTitle> Trabalhe na Gigaweb!</DialogTitle>
                  <DialogDescription>
                    {" "}
                    Venha fazer parte da nossa equipe
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <p className="mb-5 text-muted-foreground">
                    Tem interesse em alguma de nossas vagas ? Envie seu
                    currículo para o email abaixo:
                  </p>
                  <ul className="flex flex-col gap-2 text-primary">
                    <li className="flex cursor-pointer items-center gap-3">
                      <MdEmail className="text-lg" />{" "}
                      vagas@gigawebtecnologia.com.br
                    </li>
                  </ul>
                </div>
              </DialogContent>
            </Dialog>
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
          <Drawer>
            <DrawerTrigger>
              <Button>
                <GrMenu className="text-2xl text-white" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="px-5">
              <ul className="flex flex-col justify-center gap-2 py-5 text-lg font-medium tracking-wide">
                <li>
                  <Link to={"/"} target="_blank" className="w-full">
                    <Button className="min-w-full"> Area do cliente</Button>
                  </Link>
                </li>

                <li>
                  <Dialog>
                    <DialogTrigger className="w-full">
                      <Button className="w-full">Contato</Button>
                    </DialogTrigger>
                    <DialogContent className="rounded-lg border border-primary/50 bg-[#1C1917]/70 pt-5 backdrop-blur-sm">
                      <DialogHeader>
                        <DialogTitle>Contato</DialogTitle>
                      </DialogHeader>
                      <div>
                        <ul className="flex flex-col gap-2">
                          <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-primary" /> 51 3582-5072
                          </li>
                          <li className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-primary" /> R.
                            Florença, 703 - Canudos, Novo Hamburgo - RS
                          </li>
                          <li className="flex items-center gap-3">
                            <MdEmail className="text-lg text-primary" />{" "}
                            Contato@gigawebtecnologia.com.br
                          </li>
                        </ul>
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
                <li>
                  <Dialog>
                    <DialogTrigger className="w-full text-nowrap">
                      <Button className="w-full">Trabalhe Conosco</Button>
                    </DialogTrigger>
                    <DialogContent className="rounded-lg border border-primary/50 bg-[#1C1917]/70 pt-5 backdrop-blur-sm">
                      <DialogHeader>
                        <DialogTitle> Trabalhe na Gigaweb!</DialogTitle>
                        <DialogDescription>
                          {" "}
                          Venha fazer parte da nossa equipe
                        </DialogDescription>
                      </DialogHeader>
                      <div>
                        <p className="mb-5 text-muted-foreground">
                          Tem interesse em alguma de nossas vagas ? Envie seu
                          currículo para o email abaixo:
                        </p>
                        <ul className="flex flex-col gap-2 text-primary">
                          <li className="flex cursor-pointer items-center gap-3">
                            <MdEmail className="text-lg" />{" "}
                            vagas@gigawebtecnologia.com.br
                          </li>
                        </ul>
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
              </ul>
            </DrawerContent>
          </Drawer>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
