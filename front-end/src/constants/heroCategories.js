import FIZJOTERAPIAORTOPEDYCZNA from "../assets/fizjoterapia-ortopedyczna.png";
import INTEGRACJA_SENSORYCZNA from "../assets/IN-MOTION-5.png";
import FIZJOTERAPIA_DZIECI_I_MLODZIERZY from "../assets/IN-MOTION-27.png";

export const HEROCATEGORIES = [
  {
    id: 1,
    categoryTitle: "<h3>Fizjoterapia <span>ortopedyczna</span></h3>",
    path: "/fizjoterpia-ortopedyczna",
    image: FIZJOTERAPIAORTOPEDYCZNA,
    orangeStyle: { top: "auto", bottom: -60, right: -40, left: "auto" },
    whiteStyle: { top: "auto", bottom: 80, right: -20, left: "auto" },
    position: "bottom right",
  },
  {
    id: 2,
    categoryTitle: "<h3>Fizjoterapia <span>dzieci i&nbspmłodzieży</span></h3>",
    path: "/fizjoterapia-dzieci-i-mlodziezy",
    image: FIZJOTERAPIA_DZIECI_I_MLODZIERZY,
    orangeStyle: { top: "auto", bottom: -60, right: -40, left: "auto" },
    whiteStyle: { top: "auto", bottom: 80, right: -20, left: "auto" },
    position: "bottom right",
  },
  {
    id: 3,
    categoryTitle: "<h3>Integracja <span>sensoryczna</span></h3>",
    image: INTEGRACJA_SENSORYCZNA,
    orangeStyle: { top: "auto", bottom: -60, right: -40, left: "auto" },
    whiteStyle: { top: "auto", bottom: 80, right: -20, left: "auto" },
    path: "/integracja-sensoryczna",
    position: "bottom",
  },
];
