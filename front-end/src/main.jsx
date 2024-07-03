import "./styles/theme.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage.jsx";
import { FizjoterapiaOrtopedyczna } from "./views/FizjoterapiaOrtopedyczna/FizjoterapiaOrtopedyczna.jsx";
import { IntegracjaSensoryczna } from "./views/IntegracjaSensoryczna/IntegracjaSensoryczna.jsx";
import { FizjoterapiaDzieciIMlodzierzy } from "./views/FizjoterapiaDzieciIMlodzierzy/FizjoterapiaDzieciIMlodzierzy.jsx";
import { Kontakt } from "./views/Kontakt/Kontakt.jsx";

const router = createBrowserRouter([
  {
    path: "/fizjoterpia-ortopedyczna",
    element: <FizjoterapiaOrtopedyczna />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/integracja-sensoryczna",
    element: <IntegracjaSensoryczna />,
  },
  {
    path: "/fizjoterapia-dzieci-i-mlodziezy",
    element: <FizjoterapiaDzieciIMlodzierzy />,
  },
  {
    path: "/kontakt",
    element: <Kontakt />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
