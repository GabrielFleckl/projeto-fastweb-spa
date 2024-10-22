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

type cardPriceProps = {
  title: string;
  mbps: string;
  price: string;
  btnContent: string;
  btnURL: string;
  list: string[];
  popular: boolean;
};

function CardPrice({
  title,
  mbps,
  price,
  btnContent,
  btnURL,
  list = [],
  popular,
}: cardPriceProps) {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000;
    const colors = ["#1B6D38", "#248f49", "#16552c", "#158d3f"];

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
        `relative flex size-full min-w-[150px] flex-col items-start justify-center bg-[#1C1917] transition-all duration-300 dark:bg-[#1C1917]/40 dark:backdrop-blur-sm  md:hover:scale-[1.04]`,
        popular && `h-[480px] border-2 border-primary/50 pt-5`,
      )}
    >
      <CardHeader className="flex w-full flex-col gap-3">
        {popular && (
          <h1 className="absolute left-0 top-0 w-full rounded-t-lg bg-primary/50 py-1 text-center text-2xl font-medium uppercase tracking-wide text-white backdrop-blur-sm">
            MAIS POPULAR
          </h1>
        )}
        <CardTitle className="text-4xl font-medium text-green-500 dark:text-primary lg:text-5xl">
          {title}
        </CardTitle>
        <CardDescription className="text-3xl font-medium text-green-500 dark:text-primary lg:text-4xl">
          {mbps}Mbps
        </CardDescription>
        <CardDescription className="text-2xl font-medium text-white lg:text-3xl">
          R$ {price}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col items-center gap-2 text-nowrap text-[0.8em] font-thin tracking-widest text-white md:items-start">
          {list.map((item) => (
            <li className="flex w-full items-center gap-2 text-wrap text-base lg:text-nowrap">
              {" "}
              <Check className="text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="relative w-full self-center">
        <Button
          onClick={handleClick}
          className="m-auto h-auto w-full text-wrap rounded-xl text-sm text-white md:text-base lg:text-nowrap"
        >
          {btnContent}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardPrice;
