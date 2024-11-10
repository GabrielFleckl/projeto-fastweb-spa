import { BsGlobeAmericas } from "react-icons/bs";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="flex flex-col gap-4 border-t border-primary/30 bg-primary/10 backdrop-blur-xl">
      <div className="m-auto flex w-3/4 flex-col items-center justify-center py-5 md:flex-row md:justify-between md:py-16">
        <div className="mb-5 md:mb-0">
          <p className="flex items-center gap-4 text-6xl font-bold italic text-primary">
            FASTWEB <BsGlobeAmericas />{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-2">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" /> 51 3582-5072
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" /> Avenida São João, 300 -
              Vila Joana, Jundiaí - SP
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-lg text-primary" />{" "}
              Contato@fastweb.com.br
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-primary/10 py-2 font-thin">
        <div className="m-auto flex w-3/4 justify-between text-center">
          <p>
            &copy; Copyright Fastweb - {new Date().getFullYear()} | Todos os
            direitos reservados
          </p>
          <p className="hidden md:inline">
            Desenvolvido por:{" "}
            <a
              className="text-primary underline"
              target="_blank"
              href="https://github.com/GabrielFleckl"
            >
              {" "}
              G.G.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
