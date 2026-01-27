import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import NotFoundPage from "./Pages/NotFound/NotFound.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import LojinhaDoCa from "./Pages/LojinhaDoCa/LojinhaDoCa.jsx";
import Financeiro from "./Pages/Financeiro/Financeiro.jsx";
import SemanaDaGeologiaPage from "./Pages/SemanaDaGeologia/SeamanaDaGeologiaPage.jsx";
import EventosEscolaresPage from "./Pages/EventosEscolaresPage/EventosEscolaresPage.jsx";
import Eventos from "./Pages/Eventos/Eventos.jsx"
import Estagios from "./Pages/Estagios/Estagios.jsx";
import Noticias from "./Pages/GuiadoEstudante/GuiadoEstudante.jsx";
import Contato from "./Pages/Contato/Contato.jsx";
import Gestoes from "./Pages/Gestoes/Gestoes.jsx";
import AtasdeReuniao from "./Pages/AtasdeReuniao/AtasdeReuniao.jsx";
import InformesCurso from "./Pages/InformesCurso/InformesCurso.jsx";
import FormularioCurso from "./Pages/FormularioCurso/FormularioCurso.jsx";
import { AppProvider } from "./Context/AppProvider.jsx";
import SemanaDaGeologiaInfo from "./Pages/SemanaDaGeologiaInfo/SemanaDaGeologiaInfo.jsx";


createRoot(document.getElementById("root")).render(
  <AppProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route> {/* Geral */}
        <Route path="/contato" element={<Contato />}></Route> {/* Sobre */}
        <Route path="/gestoes" element={<Gestoes />}></Route> {/* Sobre */}
        <Route path="/lojinha-do-ca" element={<LojinhaDoCa />}></Route> {/* Sobre */}
        <Route path="/eventos" element={<Eventos/>}></Route> {/* Formulários */}
        <Route path="/formularios-curso" element={<FormularioCurso />}></Route> {/* Formulários */}
        <Route path="/financeiro" element={<Financeiro />}></Route> {/* Transparencia */}
        <Route path="/atas-de-reuniao" element={<AtasdeReuniao />}></Route> {/* Transparencia */}
        <Route path="/semana-da-geologia" element={<SemanaDaGeologiaPage />}></Route> {/* Eventos */}
        <Route path="/semana-da-geologia/:ano" element={<SemanaDaGeologiaInfo />}></Route> {/* Eventos */}
        <Route path="/eventos-escolares" element={<EventosEscolaresPage />}></Route> {/* Eventos */}
        <Route path="/estagios" element={<Estagios/>}></Route> {/* Informes */}
        <Route path="/informes-curso" element={<InformesCurso />}></Route> {/* Informes */}
        <Route path="/guia-do-estudante" element={<Noticias/>}></Route> {/* Informes */}
        <Route path="*" element={<NotFoundPage />}></Route> {/* Geral */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </AppProvider>
);
