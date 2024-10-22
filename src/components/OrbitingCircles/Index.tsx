import OrbitingCircles from "@/components/ui/orbiting-circles";
import { FaInstagram, FaWhatsapp, FaYoutube, FaFacebook } from "react-icons/fa";
import { BsFillSuitDiamondFill } from "react-icons/bs";
import { SiNetflix } from "react-icons/si";

import bgBlur from "@/assets/bg-blur.png";

export function Orbit() {
  return (
    <div className="relative m-auto flex h-[450px] w-[430px] flex-col items-center justify-center overflow-hidden">
      {/* Inner Circles */}

      <img
        src={bgBlur}
        className="absolute left-[50%] top-[50%] size-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        alt=""
      />

      <OrbitingCircles
        className="z-50 border-none bg-transparent "
        duration={25}
        delay={5}
        radius={100}
        fill="#16a34a90"
        stroke="6px"
      >
        <FaWhatsapp className="rounded-full bg-foreground p-[5px] text-5xl text-primary" />
      </OrbitingCircles>

      <OrbitingCircles
        className="z-10"
        duration={25}
        delay={18}
        radius={100}
        fill="transparent"
        stroke="5px"
      >
        <BsFillSuitDiamondFill className="rounded-full bg-foreground p-[5px] text-4xl text-primary" />
      </OrbitingCircles>

      <OrbitingCircles
        className="z-10"
        duration={25}
        delay={7}
        radius={150}
        stroke="2px"
        reverse
      >
        <FaInstagram className="rounded-full bg-foreground p-[5px] text-4xl text-primary" />
      </OrbitingCircles>

      <OrbitingCircles
        className="z-10"
        duration={25}
        delay={20}
        radius={150}
        stroke="2px"
        reverse
      >
        <BsFillSuitDiamondFill className="z-50 rounded-full bg-foreground p-[5px] text-3xl text-primary" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="z-10"
        radius={190}
        delay={20}
        duration={30}
        stroke="2px"
        reverse
      >
        <BsFillSuitDiamondFill className="z-50 rounded-full bg-foreground p-[5px] text-3xl text-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        className="z-10"
        radius={190}
        duration={30}
        delay={5}
        stroke="2px"
        reverse
      >
        <FaYoutube className="rounded-full bg-foreground p-[5px] text-4xl text-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        className="z-10"
        radius={190}
        duration={30}
        delay={12}
        stroke="2px"
        reverse
      >
        <SiNetflix className="rounded-full bg-foreground p-[5px] text-4xl text-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        className="z-10"
        radius={190}
        duration={30}
        delay={25}
        stroke="2px"
        reverse
      >
        <FaFacebook className="rounded-full bg-foreground p-[5px] text-4xl text-primary" />
      </OrbitingCircles>
    </div>
  );
}
