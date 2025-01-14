import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { SchedulePage } from "./pages/SchedulePage.jsx";
import { PrizesPage } from "./pages/PrizesPage.jsx";
import { RegistrationPage } from "./pages/RegistrationPage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { FAQPage } from "./pages/FAQPage.jsx";
import { SponsorsPage } from "./pages/SponsorsPage.jsx";
import { OurTeamPage } from "./pages/OurTeamPage.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/FAQ", element: <FAQPage /> },
  { path: "/sponsors", element: <SponsorsPage /> },
  { path: "/our_team", element: <OurTeamPage /> },
  { path: "/schedule", element: <SchedulePage /> },
  { path: "/prizes", element: <PrizesPage /> },
  { path: "/register", element: <RegistrationPage /> },
]);
