
import { useState } from "react";
import LogoNavbar from "./NavbarItens/LogoNavbar";
import NavbarItens from "./NavbarItens/NavbarItens";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Usando #F4F1EA (Porcelain Mist) como cor de fundo da Navbar
    <header className="bg-[#F4F1EA] shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-12 h-20">
          <LogoNavbar />
          <div className="hidden md:flex">
            <NavbarItens />
          </div>
          
          {/* Botão Hambúrguer */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#442D1C] hover:text-[#84592B]"
            >
              <span className="sr-only">Abrir menu</span>
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Móvel */}
      {isOpen && (
        <div className="md:hidden bg-[#F4F1EA] pb-4">
          <nav className="flex flex-col items-center space-y-4 font-medium mt-7 flex-wrap h-60">
            <NavLink to="/contato" onClick={() => setIsOpen(false)} className="text-[#442D1C] hover:text-[#84592B]">Contato</NavLink>
            <NavLink to="/gestoes" onClick={() => setIsOpen(false)} className="text-[#442D1C] hover:text-[#84592B]">Gestões</NavLink>
            <NavLink to="/lojinha-do-ca" onClick={() => setIsOpen(false)} className="text-[#442D1C] hover:text-[#84592B]">Lojinha</NavLink>
            <NavLink to="/eventos" onClick={() => setIsOpen(false)} className="text-[#442D1C] hover:text-[#84592B]">Eventos</NavLink>
            <NavLink to="/formularios-curso" onClick={() => setIsOpen(false)} className="text-[#442D1C] hover:text-[#84592B]">Curso - Formulario</NavLink>
            <NavLink to="/financeiro" onClick={() => setIsOpen(false)} className="text-[#442D1C] hover:text-[#84592B]">financeiro</NavLink>
            <NavLink to="/atas-de-reuniao" onClick={() => setIsOpen(false)} className="text-[#442D1C] hover:text-[#84592B]">Atas de reuniões</NavLink>
            <NavLink to="/semana-da-geologia" onClick={() => setIsOpen(false)} className="text-[#442D1C] hover:text-[#84592B]">Semana da geologia</NavLink>
            <NavLink to="/eventos-escolares" onClick={() => setIsOpen(false)} className="text-[#442D1C] hover:text-[#84592B]">Eventos escolares</NavLink>
            <NavLink to="/estagios" onClick={() => setIsOpen(false)} className="text-[#442D1C] hover:text-[#84592B]">Estagios</NavLink>
            <NavLink to="/informes-curso" onClick={() => setIsOpen(false)} className="text-[#442D1C] hover:text-[#84592B]">Curso - Informes</NavLink>
            <NavLink to="/guia-do-estudante" onClick={() => setIsOpen(false)} className="text-[#442D1C] hover:text-[#84592B]">Guia do estudante</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;