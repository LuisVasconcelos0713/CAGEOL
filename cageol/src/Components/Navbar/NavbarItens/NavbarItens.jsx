import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router"; 
import { FiChevronDown } from "react-icons/fi"; 

const NavbarItens = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  // Usando #84592B (Toasted Caramel) para o link ativo
  const activeStyle = { color: '#84592B', fontWeight: '600' };

  return (
    // RECOMMENDATION: Apply 'font-poppins' or your chosen body font class here.
    <nav className="hidden md:flex items-center gap-8 font-medium text-lg">
      <NavLink to="/lojinha-do-ca" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="text-[#442D1C] hover:text-[#84592B] transition-colors">
        Lojinha do C.A.
      </NavLink>

      {/* Eventos com dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="flex items-center gap-1 text-textPrimary hover:text-button transition-colors cursor-pointer"
        >
          Eventos
          <FiChevronDown size={20} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Dropdown Menu - Usando #E6DAC8 (Creamed Oat) para o fundo */}
        {dropdownOpen && (
          <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-backgroundPrimary border border-white rounded-lg shadow-xl z-50 overflow-hidden">
            <li>
              <NavLink to="/semana-da-geologia" onClick={() => setDropdownOpen(false)} className="block px-5 py-3 text-textPrimary hover:bg-button/20 transition-colors">
                Semana da Geologia
              </NavLink>
            </li>
            <li>
              <NavLink to="/eventos-escolares" onClick={() => setDropdownOpen(false)} className="block px-5 py-3 text-textPrimary hover:bg-button/20 transition-colors border-t border-gray-100">
                Eventos Escolares
              </NavLink>
            </li>
          </ul>
        )}
      </div>

      <NavLink to="/transparencia" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="text-textPrimary hover:text-button transition-colors">
        Transparência
      </NavLink>
      <NavLink to="/informes" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="text-textPrimary hover:text-button transition-colors">
        Informes
      </NavLink>
      <NavLink to="/arquivos" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="text-textPrimary hover:text-button transition-colors">
        Arquivos
      </NavLink>
      <NavLink to="/formularios" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="text-textPrimary hover:text-button transition-colors">
        Formulários
      </NavLink>
    </nav>
  );
};

export default NavbarItens;