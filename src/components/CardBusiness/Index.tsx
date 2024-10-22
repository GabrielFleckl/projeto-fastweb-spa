import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import confetti from "canvas-confetti";

import clsx from "clsx";
import { Check } from "lucide-react";

type CardBusinessProps = {
  title: string;
  description: string;
  btnContent: string;
  btnURL: string;
  list: string[];
};

function CardBusiness({
  title,
  btnContent,
  description,
  btnURL,
  list = [],
}: CardBusinessProps) {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000;
    const colors = ["#3B82F6", "#306dcf", "#508ff5", "#2a77f1"];

    const frame = (): void => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();

    setTimeout(() => {
      window.open(btnURL, "_blank");
    }, 4000);
  };

  return (
    <Card
      className={clsx(
        `relative m-auto flex h-full w-full min-w-[150px] flex-col items-start justify-center border-2 border-blue-500 bg-[#1C1917] dark:bg-[#1C1917]/40 dark:backdrop-blur-sm `,
      )}
    >
      <CardHeader className="flex w-full flex-col gap-3">
        <CardTitle className="text-center text-4xl font-medium text-blue-500 md:text-start lg:text-5xl">
          {title}
        </CardTitle>
        <CardDescription className="md:w-3/4 w-full text-center text-xl font-medium text-blue-500 md:text-start md:text-3xl">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="font-regular flex flex-col items-center gap-2 text-nowrap pl-1 text-[0.8em] tracking-widest text-white md:items-start">
          {list.map((item) => (
            <li className="flex w-full items-center gap-2 text-wrap text-lg lg:text-nowrap">
              {" "}
              <Check className="text-blue-500" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="relative w-full self-center">
        <Button
          onClick={handleClick}
          className="m-auto h-auto w-full text-wrap rounded-xl text-sm text-white md:text-base lg:text-nowrap"
          variant={"corp"}
        >
          {btnContent}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardBusiness;
