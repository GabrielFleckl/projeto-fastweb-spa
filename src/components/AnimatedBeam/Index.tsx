import React, { forwardRef, useRef } from "react";

import { FaUser } from "react-icons/fa";
import { LuSmartphone } from "react-icons/lu";

import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FaGear } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 cursor-pointer items-center justify-center rounded-full bg-green-900 p-3 backdrop-blur-2xl transition-all hover:ring-1 hover:ring-primary/40 hover:bg-[#292929] hover:text-primary",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

function AnimatedBeamMobile({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center rounded-lg  ",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="size-14">
            <FaUser className="text-2xl" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <LuSmartphone className="text-4xl" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref} className="size-16">
            <FaMoneyCheckDollar className="text-5xl" />
          </Circle>
          <Circle ref={div2Ref} className="size-16">
            <FaChartPie className="text-5xl" />
          </Circle>
          <Circle ref={div3Ref} className="size-16">
            <MdSupportAgent className="text-5xl" />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <FaGear className="text-4xl" />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#0f5f2c"
        gradientStopColor="#127D39"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#0f5f2c"
        gradientStopColor="#127D39"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#0f5f2c"
        gradientStopColor="#127D39"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#0f5f2c"
        gradientStopColor="#127D39"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#0f5f2c"
        gradientStopColor="#127D39"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
        gradientStartColor="#0f5f2c"
        gradientStopColor="#127D39"
      />
    </div>
  );
}

export default AnimatedBeamMobile;
