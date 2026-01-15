import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";
import { FiChevronDown } from "react-icons/fi";

const NavbarItens = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const sobreRef = useRef(null)
  const formulariosRef = useRef(null);
  const transparenciaRef = useRef(null)
  const eventosRef = useRef(null);
  const informesRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (eventosRef.current && eventosRef.current.contains(e.target)) ||
        (formulariosRef.current && formulariosRef.current.contains(e.target)) ||
        (informesRef.current && informesRef.current.contains(e.target)) ||
        (sobreRef.current && sobreRef.current.contains(e.target)) || 
        (transparenciaRef.current && transparenciaRef.current.contains(e.target))

      ) {
        return;
      }
      setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeStyle = { color: "#84592B", fontWeight: "600" };

  return (
    <nav className="hidden md:flex items-center gap-8 font-medium text-lg">
      
      {/* Dropdown - Sobre nós*/}
      <div className="relative" ref={sobreRef}>
        <button
          onClick={() =>
            setOpenDropdown(openDropdown === "sobre" ? null : "sobre")
          }
          className="flex items-center gap-1 text-textPrimary hover:text-button transition-colors cursor-pointer"
        >
          Sobre nós
          <FiChevronDown
            size={20}
            className={`transition-transform ${
              openDropdown === "sobre" ? "rotate-180" : ""
            }`}
          />
        </button>

        {openDropdown === "sobre" && (
          <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-backgroundPrimary border border-white rounded-lg shadow-xl z-50 overflow-hidden">
            <li>
              <NavLink
                to="/contato"
                onClick={() => setOpenDropdown(null)}
                className="block px-5 py-3 text-textPrimary hover:bg-button/20 transition-colors"
              >
                Contato
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gestoes"
                onClick={() => setOpenDropdown(null)}
                className="block px-5 py-3 text-textPrimary hover:bg-button/20 transition-colors border-t border-gray-100"
              >
                Gestões
              </NavLink>
            </li>
             <li>
              <NavLink
                to="/lojinha-do-ca"
                onClick={() => setOpenDropdown(null)}
                className="block px-5 py-3 text-textPrimary hover:bg-button/20 transition-colors border-t border-gray-100"
              >
                Lojinha
              </NavLink>
            </li>
          </ul>
        )}
      </div>


     

      {/* Dropdown - FORMULÁRIOS */}
      <div className="relative" ref={formulariosRef}>
        <button
          onClick={() =>
            setOpenDropdown(openDropdown === "formularios" ? null : "formularios")
          }
          className="flex items-center gap-1 text-textPrimary hover:text-button transition-colors cursor-pointer"
        >
          Formulários
          <FiChevronDown
            size={20}
            className={`transition-transform ${
              openDropdown === "formularios" ? "rotate-180" : ""
            }`}
          />
        </button>
        {openDropdown === "formularios" && (
          <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-backgroundPrimary border border-white rounded-lg shadow-xl z-50 overflow-hidden">
            <li>
              <NavLink
                to="/eventos"
                onClick={() => setOpenDropdown(null)}
                className="block px-5 py-3 text-textPrimary hover:bg-button/20 transition-colors"
              >
              Eventos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formularios-curso"
                onClick={() => setOpenDropdown(null)}
                className="block px-5 py-3 text-textPrimary hover:bg-button/20 transition-colors"
              >
              Curso
              </NavLink>
            </li>
          </ul>
        )}
      </div>

      {/* Dropdown - Transparência*/}
      <div className="relative" ref={transparenciaRef}>
        <button
          onClick={() =>
            setOpenDropdown(openDropdown === "transparencia" ? null : "transparencia")
          }
          className="flex items-center gap-1 text-textPrimary hover:text-button transition-colors cursor-pointer"
        >
          Transparencia
          <FiChevronDown
            size={20}
            className={`transition-transform ${
              openDropdown === "transparencia" ? "rotate-180" : ""
            }`}
          />
        </button>

        {openDropdown === "transparencia" && (
          <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-backgroundPrimary border border-white rounded-lg shadow-xl z-50 overflow-hidden">
            <li>
              <NavLink
                to="/financeiro"
                onClick={() => setOpenDropdown(null)}
                className="block px-5 py-3 text-textPrimary hover:bg-button/20 transition-colors"
              >
              Financeiro
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/atas-de-reuniao"
                onClick={() => setOpenDropdown(null)}
                className="block px-5 py-3 text-textPrimary hover:bg-button/20 transition-colors border-t border-gray-100"
              >
                Ata de reunião (C.A)
              </NavLink>
            </li>
          </ul>
        )}
      </div>


      {/* Dropdown - EVENTOS */}
      <div className="relative" ref={eventosRef}>
        <button
          onClick={() =>
            setOpenDropdown(openDropdown === "eventos" ? null : "eventos")
          }
          className="flex items-center gap-1 text-textPrimary hover:text-button transition-colors cursor-pointer"
        >
          Eventos
          <FiChevronDown
            size={20}
            className={`transition-transform ${
              openDropdown === "eventos" ? "rotate-180" : ""
            }`}
          />
        </button>

        {openDropdown === "eventos" && (
          <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-backgroundPrimary border border-white rounded-lg shadow-xl z-50 overflow-hidden">
            <li>
              <NavLink
                to="/semana-da-geologia"
                onClick={() => setOpenDropdown(null)}
                className="block px-5 py-3 text-textPrimary hover:bg-button/20 transition-colors"
              >
                Semana da Geologia
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/eventos-escolares"
                onClick={() => setOpenDropdown(null)}
                className="block px-5 py-3 text-textPrimary hover:bg-button/20 transition-colors border-t border-gray-100"
              >
               Escolares
              </NavLink>
            </li>
          </ul>
        )}
      </div>

      {/* Dropdown - INFORMES */}
      <div className="relative" ref={informesRef}>
        <button
          onClick={() =>
            setOpenDropdown(openDropdown === "informes" ? null : "informes")
          }
          className="flex items-center gap-1 text-textPrimary hover:text-button transition-colors cursor-pointer"
        >
          Informes
          <FiChevronDown
            size={20}
            className={`transition-transform ${
              openDropdown === "informes" ? "rotate-180" : ""
            }`}
          />
        </button>
        {openDropdown === "informes" && (
          <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-backgroundPrimary border border-white rounded-lg shadow-xl z-50 overflow-hidden">
            <li>
              <NavLink
                to="/estagios"
                onClick={() => setOpenDropdown(null)}
                className="block px-5 py-3 text-textPrimary hover:bg-button/20 transition-colors border-t border-gray-100"
              >
                Estágios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/informes-curso"
                onClick={() => setOpenDropdown(null)}
                className="block px-5 py-3 text-textPrimary hover:bg-button/20 transition-colors"
              >
                Curso
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/guia-do-estudante"
                onClick={() => setOpenDropdown(null)}
                className="block px-5 py-3 text-textPrimary hover:bg-button/20 transition-colors border-t border-gray-100"
              >
                Guia do estudante
              </NavLink>
            </li>
            
          </ul>
        )}
      </div>

    </nav>
  );
};

export default NavbarItens;
