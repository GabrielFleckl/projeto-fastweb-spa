import CardPrice from "@/components/CardPrice/Index";
import CardBusiness from "@/components/CardBusiness/Index";

import Heading from "@/components/Heading";
import Container from "@/components/Container";

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
  }
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
          <Heading>Planos | Para você</Heading>
        </div>

        <section className="mt-2 mb-10 flex flex-col gap-8 md:flex-row md:items-end">
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

        <div className="flex flex-col items-center justify-center gap-3">
          <Heading> <span className="text-blue-400">Planos | Para sua empresa</span></Heading>
        </div>

        <section className="mt-2 flex flex-col gap-8 w-full md:flex-row md:items-end">
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
      </section>
    </Container>
  );
}

export default Price;
