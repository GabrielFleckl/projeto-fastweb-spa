import Container from "@/components/Container";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { GoDotFill } from "react-icons/go";

import { BsTelephoneFill } from "react-icons/bs";

function FAQ() {
  return (
    <Container>
      <section className="m-auto w-full mb-20">
        <h1 className="mb-3 text-center text-3xl font-semibold tracking-widest text-primary md:text-start">
          Perguntas Frequentes
        </h1>
        <Accordion
          className="rounded-lg bg-background/10 border border-gray-900/90 px-5 py-5 text-foreground backdrop-blur-sm"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold tracking-wide">
              Como fazer o teste de velocidade corretamente?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base font-semibold">
              A velocidade da internet pode variar dependendo de alguns fatores,
              como o número de dispositivos conectados, a distância do roteador,
              e até o horário do dia, já que em horários de pico o tráfego pode
              ser maior.
              <br />
              <br />
              Em redes cabeadas, no caso um cabo de rede do seu aparelho até a
              entrada LAN do roteador,a velocidade mostrada é mais próxima da real,
              enquanto no Wi-Fi pode haver oscilações mas caso faça o teste no
              Wi-Fi deve ser feito no seu Wi-Fi 5G de frente para seu roteador
              (aparelho com antenas).
              <br />
              <br />
              <p className="text-primary">Caso tenha duvidas ainda entre em contato!</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold tracking-wide">
              Como mudar a senha ou nome do meu Wi-Fi?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base font-semibold">
              Para mudar a senha ou nome do seu Wi-Fi entre em contato com nosso
              suporte técnico. <br />{" "}
              <span className="flex items-center gap-2 text-primary">
                <BsTelephoneFill /> 51 3582-5072
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold tracking-wide">
              O que fazer se a internet cair?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base font-semibold">
              Se a internet cair, o primeiro passo é reiniciar o modem e o
              roteador. Desligue-os da tomada por 30 segundos e ligue-os
              novamente. Se o problema persistir, verifique se os cabos estão
              conectados corretamente e tente usar um cabo Ethernet para
              descartar problemas no Wi-Fi. Se ainda assim não funcionar, entre
              em contato com o suporte técnico.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold tracking-wide">
              Por que o Wi-Fi não pega bem em todos os cômodos?
            </AccordionTrigger>
            <AccordionContent className="text-justify text-base font-semibold">
              O sinal Wi-Fi pode ser bloqueado por paredes grossas, móveis, ou
              interferências de outros dispositivos eletrônicos. Para melhorar a
              cobertura, posicione o roteador em um local central da casa, mais
              elevado. Outra opção é usar repetidores de sinal ou sistemas mesh,
              que expandem a cobertura do Wi-Fi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-bold tracking-wide">
              O que influencia na qualidade do sinal de internet?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-5">
              <p className="font-semibold">
                A qualidade do sinal pode ser influenciada por:
              </p>
              <ul className="flex w-full flex-col gap-8 text-base font-semibold md:gap-2">
                <li className="flex flex-col items-start gap-2">
                  <span className="flex items-center gap-1 text-primary">
                    <GoDotFill className="min-w-5 text-lg text-primary md:min-w-10" />{" "}
                    Distância do roteador:
                  </span>{" "}
                  <p className="ml-6">
                    mais longe você estiver, mais fraco será o sinal.
                  </p>
                </li>

                <li className="flex flex-col items-start gap-2">
                  <span className="flex items-center gap-1 text-primary">
                    <GoDotFill className="min-w-5 text-lg text-primary md:min-w-10" />{" "}
                    Obstáculos físicos:
                  </span>{" "}
                  <p className="ml-6">
                    Paredes, portas e até mesmo grandes móveis podem reduzir a
                    força do sinal.
                  </p>
                </li>
                <li className="flex flex-col items-start gap-2">
                  <span className="flex items-center gap-1 text-primary">
                    <GoDotFill className="min-w-5 text-lg text-primary md:min-w-10" />{" "}
                    Interferências:
                  </span>{" "}
                  <p className="ml-6">
                    Aparelhos como micro-ondas, telefones sem fio, e outros
                    roteadores próximos podem interferir.
                  </p>
                </li>
                <li className="flex flex-col items-start gap-2">
                  <span className="flex items-center gap-1 text-primary">
                    <GoDotFill className="min-w-5 text-lg text-primary md:min-w-10" />{" "}
                    Número de dispositivos conectados:
                  </span>{" "}
                  <p className="ml-6">
                    Muitos dispositivos usando a rede ao mesmo tempo podem
                    sobrecarregar a conexão.
                  </p>
                </li>
                <li className="flex flex-col items-start gap-2">
                  <span className="flex items-center gap-1 text-primary">
                    <GoDotFill className="min-w-5 text-lg text-primary md:min-w-10" />{" "}
                    Uso de Wi-Fi em 2,4 GHz ou 5 GHz:
                  </span>{" "}
                  <p className="ml-6">
                    A frequência de 5 GHz oferece uma conexão mais rápida, mas
                    com alcance menor, enquanto 2,4 GHz tem maior alcance, porém
                    menor velocidade.
                  </p>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </Container>
  );
}

export default FAQ;
