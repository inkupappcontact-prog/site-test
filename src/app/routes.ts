import { createBrowserRouter } from "react-router";
import { Root } from "./components/Layout";
import { Home } from "./pages/Home";
import { LeParc } from "./pages/LeParc";
import { NosAnes } from "./pages/NosAnes";
import { Boutique } from "./pages/Boutique";
import { Dons } from "./pages/Dons";
import { InfosPratiques } from "./pages/InfosPratiques";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "le-parc", Component: LeParc },
      { path: "nos-anes", Component: NosAnes },
      { path: "boutique", Component: Boutique },
      { path: "dons", Component: Dons },
      { path: "infos-pratiques", Component: InfosPratiques },
    ],
  },
]);
