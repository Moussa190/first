import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx"; 
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Team from "./components/team/Team.jsx";
import Contact from "./components/contact/Contact.jsx";
import Impressum from "./pages/policy/Impressum.jsx";
import Datenschutzerklaerung from "./pages/policy/Datenschutzerklaerung.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
        {
        path: "/datenschutzerklaerung",
        element: <Datenschutzerklaerung />,
      },
        {
        path: "/impressum",
        element: <Impressum />,
      }


      
      
      
      
    ],
  },
]);

export default router;