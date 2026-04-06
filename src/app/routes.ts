import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import Home from "./pages/Home";
import Insurances from "./pages/insurances";
import Claims from "./pages/claims";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "insurances", Component: Insurances },
      { path: "claims", Component: Claims },
      { path: "contact", Component: Contact },
    ],
  },
]);
