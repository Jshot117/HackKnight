import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { SchedulePage } from "./pages/SchedulePage.jsx";
import { PrizesPage } from "./pages/PrizesPage.jsx";
import { RegistrationPage } from "./pages/RegistrationPage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";

export const router = createBrowserRouter([
    {path: "/", element: <HomePage />},
    {path: "/about", element: <AboutPage />},
    {path: "/schedule", element: <SchedulePage />},
    {path: "/prizes", element: <PrizesPage />},
    {path: "/register", element: <RegistrationPage />}
])