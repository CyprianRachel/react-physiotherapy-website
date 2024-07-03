import FIZJOTERAPIAORTOPEDYCZNA from "../assets/fizjoterapia-ortopedyczna.png";
import INTEGRACJA_SENSORYCZNA from "../assets/IN-MOTION-5.png";
import FIZJOTERAPIA_DZIECI_I_MLODZIERZY from "../assets/IN-MOTION-27.png";

export const HEROCATEGORIES = [
  {
    id: 1,
    categoryTitle: "Fizjoterapia ortopedyczna",
    description:
      "W naszym gabinecie świadczymy usługi kompleksowej <strong>fizjoterapii ortopedycznej</strong>...",
    path: "/fizjoterpia-ortopedyczna",
    image: FIZJOTERAPIAORTOPEDYCZNA,
    orangeStyle: { top: "auto", bottom: -32, right: 16, left: "auto" },
    whiteStyle: { top: "auto", bottom: 100, right: 100, left: "auto" },
  },
  {
    id: 2,
    categoryTitle: "Fizjoterapia dzieci i młodzieży",
    description:
      "W naszym gabinecie świadczymy usługi kompleksowej <strong>fizjoterapii dzieci i młodzieży</strong>...",
    path: "/fizjoterapia-dzieci-i-mlodziezy",
    image: FIZJOTERAPIA_DZIECI_I_MLODZIERZY,
    orangeStyle: { top: "auto", bottom: -32, right: -16, left: "auto" },
    whiteStyle: { top: "auto", bottom: 70, right: 110, left: "auto" },
  },
  {
    id: 3,
    categoryTitle: "Integracja sensoryczna",
    description:
      "W naszym gabinecie świadczymy usługi <strong>terapii integracji sensorycznej</strong>...",
    image: INTEGRACJA_SENSORYCZNA,
    orangeStyle: { top: "auto", bottom: -48, right: 50, left: "auto" },
    whiteStyle: { top: "auto", bottom: 80, right: 30, left: "auto" },
    path: "/integracja-sensoryczna",
  },
];
