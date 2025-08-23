import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./Components/Navbar/Navbar.jsx";
import NotFoundPage from "./Pages/NotFound/NotFound.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import LojinhaDoCa from "./Pages/LojinhaDoCa/LojinhaDoCa.jsx";
import TransparenciaPage from "./Pages/TransparenciaPage/TransparenciaPage.jsx";
import SemanaDaGeologiaPage from "./Pages/SemanaDaGeologia/SeamanaDaGeologiaPage.jsx";
import EventosEscolaresPage from "./Pages/EventosEscolaresPage/EventosEscolaresPage.jsx";
import Formulario from "./Pages/Formularios/Formularios.jsx"
import Estagios from "./Pages/Estagios/Estagios.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/lojinha-do-ca" element={<LojinhaDoCa />}></Route>
      <Route path="/transparencia" element={<TransparenciaPage />}></Route>
      <Route path="/semana-da-geologia" element={<SemanaDaGeologiaPage />}></Route>
      <Route path="/eventos-escolares" element={<EventosEscolaresPage />}></Route>
      <Route path="/formularios" element={<Formulario/>}></Route>
      <Route path="/formularios" element={<Formulario/>}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
