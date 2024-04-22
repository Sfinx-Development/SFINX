import { PortfolieInterface } from "./src/contexts/portfolioContext";

export const portfolieList: PortfolieInterface[] = [
  {
    id: 1,
    name: "Webshop",
    type: "Webshop",
    url: ["https://i.imgur.com/Y0HEktb.png", "https://i.imgur.com/KSbsIhH.png"],
    description: "En e-shop där man kan sälja samt hantera produkter.",
  },
  {
    id: 2,
    name: "Calendar",
    type: "Online Calendar",
    url: ["https://i.imgur.com/V4zBTxl.png"],
    description:
      "En kalender där du kan hantera din 'todos'-lista. Vi integrerade även ett hjälpmedel som läser upp dina todos.",
  },
  {
    id: 3,
    name: "Test Your App",
    type: "Mobile app",
    url: ["https://i.imgur.com/EuK2GBb.jpg"],
    description:
      "En app för apputvecklare att arbeta agilt. Samla testare och få feedback.",
  },
  {
    id: 4,
    name: "Where's the sun",
    type: "Mobile app",
    url: ["https://i.imgur.com/kW51MSz.jpg"],
    description: "Se om det finns soliga platser nära dig just nu!",
  },
  {
    id: 5,
    name: "CY Virtual Workplace",
    type: "E service",
    url: ["https://i.imgur.com/kasditC.png", "https://i.imgur.com/foyOhB3.png"],
    description:
      "En arbetsplats remote för alla typer av team och projektarbete!",
  },
];
