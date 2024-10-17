import { FaFacebookSquare } from "react-icons/fa";

import { Link } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function SubNavbar() {
  return (
    <>
      <header id="top" className="hidden w-full items-center justify-center bg-primary/30 border-b border-primary/10 py-2 backdrop-blur-sm md:flex">

        <div className="m-auto flex w-full items-center justify-between px-4 md:px-8 lg:w-[85%] lg:px-0">

          <div className="text-center md:text-left">
            <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground md:text-lg">
              <BsTelephoneFill className="text-lg text-primary" /> 51 3582-5072
            </p>
          </div>
          <div>
            <ul className="flex justify-center gap-1 md:justify-end">
              <li className="p-1">
                <Link target="_blank" to={"/"}>
                  <FaWhatsapp className="text-xl text-foreground transition-all hover:text-primary md:text-[26px]" />
                </Link>
              </li>
              <li className="p-1">
                <Link target="_blank" to={"/"}>
                  <FaInstagram className="text-xl text-foreground transition-all hover:text-primary md:text-[26px]" />
                </Link>
              </li>
              <li className="p-1">
                <Link target="_blank" to={"/"}>
                  <FaFacebookSquare className="text-xl text-foreground transition-all hover:text-primary md:text-[26px]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default SubNavbar;
