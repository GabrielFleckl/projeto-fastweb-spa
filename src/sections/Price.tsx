import CardPrice from "@/components/CardPrice/Index";
import CardBusiness from "@/components/CardBusiness/Index";

import Heading from "@/components/Heading";
import Container from "@/components/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockCard = [
  {
    title: "Start",
    mbps: "200",
    price: "119,90",
    list: [
      "3 user request",
      "10 downloads per day",
      "3 user request",
      "10 downloads per day",
    ],
    btnContent: "Contratar",
    btnURL: "https://www.google.com.br/",
    popular: false,
  },
  {
    title: "Plus",
    mbps: "300",
    price: "119,90",
    list: [
      "3 user request",
      "10 downloads per day",
      "3 user request",
      "10 downloads per day",
    ],
    btnContent: "Contratar",
    btnURL: "https://www.google.com.br/",
    popular: true,
  },
  {
    title: "Premium",
    mbps: "500",
    price: "119,90",
    list: [
      "3 user request",
      "10 downloads per day",
      "3 user request",
      "10 downloads per day",
    ],
    btnContent: "Contratar",
    btnURL: "https://www.google.com.br/",
    popular: false,
  },
];

const mockCardBusiness = [
  {
    title: "Plano Corporativo",
    description:
      "O plano perfeito para sua empresa, personalizado para sua necessidade está aqui.",
    list: [
      "3 user request",
      "10 downloads per day",
      "3 user request",
      "10 downloads per day",
    ],
    btnContent: "Faça seu orçamento aqui!",
    btnURL: "https://www.google.com.br/",
  },
];

function Price() {
  return (
    <Container id="price">
      <section className="m-auto mb-20 mt-10 flex flex-col justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <Heading>Planos</Heading>
        </div>

        <Tabs defaultValue="client">
          <TabsList className="m-auto flex max-w-80 items-center justify-center bg-transparent backdrop-blur-sm">
            <TabsTrigger className="text-lg hover:underline" value="client">
              Para você
            </TabsTrigger>
            <TabsTrigger
              className="text-lg hover:underline data-[state=active]:bg-blue-500"
              value="Enterprise"
            >
              Para sua empresa
            </TabsTrigger>
          </TabsList>
          <TabsContent value="client">
            <section className="mt-8 flex flex-col gap-8 md:flex-row md:items-end">
              {mockCard.map((item) => (
                <CardPrice
                  title={item.title}
                  mbps={item.mbps}
                  price={item.price}
                  list={item.list}
                  btnContent={item.btnContent}
                  btnURL={item.btnURL}
                  popular={item.popular}
                />
              ))}
            </section>
          </TabsContent>
          <TabsContent value="Enterprise">
            <section className="mt-8 flex flex-col gap-8 md:flex-row md:items-end">
              {mockCardBusiness.map((item) => (
                <CardBusiness
                  title={item.title}
                  description={item.description}
                  list={item.list}
                  btnContent={item.btnContent}
                  btnURL={item.btnURL}
                />
              ))}
            </section>
          </TabsContent>
        </Tabs>
      </section>
    </Container>
  );
}

export default Price;
