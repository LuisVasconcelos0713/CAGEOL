// =======================================================================
// src/components/Footer.js
// =======================================================================
import React from 'react';
import { Link } from 'react-router';
// Importando ícones da biblioteca react-icons
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  // Pega o ano atual dinamicamente para o aviso de copyright
  const currentYear = new Date().getFullYear();

  return (
    // RECOMMENDATION: Apply 'font-poppins' or your chosen body font class here.
    <footer className="bg-textPrimary text-backgroundPrimary pt-12 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Coluna 1: Logo e Sobre */}
          <div className="col-span-1 lg:col-span-1">
            {/* RECOMMENDATION: Apply 'font-roxborough' or your chosen heading font class here. */}
            <h2 className="font-bold text-2xl mb-2">CAGEOL</h2>
            <p className="text-sm opacity-80">
              Centro Acadêmico de Geologia da Universidade Federal de Goiás. Representando e integrando os estudantes.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            {/* RECOMMENDATION: Apply 'font-roxborough' or your chosen heading font class here. */}
            <h3 className="font-semibold text-lg mb-4 tracking-wider">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="hover:text-white transition-colors duration-300">Sobre o C.A.</Link></li>
              <li><Link to="/lojinha-do-ca" className="hover:text-white transition-colors duration-300">Lojinha do C.A</Link></li>
              <li><Link to="/eventos" className="hover:text-white transition-colors duration-300">Eventos</Link></li>
              <li><Link to="/transparencia" className="hover:text-white transition-colors duration-300">Transparência</Link></li>
              <li><Link to="/informes" className="hover:text-white transition-colors duration-300">Informes</Link></li>
              <li><Link to="/formularios" className="hover:text-white transition-colors duration-300">Formulários</Link></li>
              <li><Link to="/estagios" className="hover:text-white transition-colors duration-300">Estágios</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            {/* RECOMMENDATION: Apply 'font-roxborough' or your chosen heading font class here. */}
            <h3 className="font-semibold text-lg mb-4 tracking-wider">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-button" size={20} />
                <a href="mailto:contato.cageol@ufg.br" className="hover:text-white transition-colors duration-300">
                  contato.cageol@ufg.br
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-3 text-button" size={20} />
                <span>(62) 9XXXX-XXXX</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            {/* RECOMMENDATION: Apply 'font-roxborough' or your chosen heading font class here. */}
            <h3 className="font-semibold text-lg mb-4 tracking-wider">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-backgroundPrimary hover:text-button transition-colors duration-300">
                <FaInstagram size={28} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-backgroundPrimary hover:text-button transition-colors duration-300">
                <FaFacebook size={28} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-backgroundPrimary hover:text-button transition-colors duration-300">
                <FaTwitter size={28} />
              </a>
            </div>
          </div>
          
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="border-t border-[#F4F1EA] border-opacity-20 mt-8 pt-6 text-center text-sm">
          <p className="opacity-70">
            &copy; {currentYear} CAGEOL - Centro Acadêmico de Geologia UFG. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;