// =======================================================================
// src/components/Footer.js
// =======================================================================
import React from 'react';
import { Link } from 'react-router';
// Importando ícones da biblioteca react-icons
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { MdRoom } from 'react-icons/md';

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
              <li><Link to="/contato" className="hover:text-white transition-colors duration-300">Contato</Link></li>
              <li><Link to="/gestoes" className="hover:text-white transition-colors duration-300">Gestões</Link></li>
              <li><Link to="/lojinha-do-ca" className="hover:text-white transition-colors duration-300">Lojinha do C.A</Link></li>
              <li><Link to="/eventos" className="hover:text-white transition-colors duration-300">Eventos</Link></li>
              <li><Link to="/formularios-curso" className="hover:text-white transition-colors duration-300">Curso - Formulários </Link></li>
              <li><Link to="/financeiro" className="hover:text-white transition-colors duration-300">Financeiro</Link></li>
              <li><Link to="/atas-de-reuniao" className="hover:text-white transition-colors duration-300">Atas de reunião</Link></li>
              <li><Link to="/semana-da-geologia" className="hover:text-white transition-colors duration-300">Semana da geologia</Link></li>
              <li><Link to="/eventos-escolares" className="hover:text-white transition-colors duration-300">Eventos Escolares</Link></li>
              <li><Link to="/estagios" className="hover:text-white transition-colors duration-300">Estágios</Link></li>
              <li><Link to="/informes-curso" className="hover:text-white transition-colors duration-300">Curso - Informes</Link></li>
              <li><Link to="/guia-do-estudante" className="hover:text-white transition-colors duration-300">Guia do estudante</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            {/* RECOMMENDATION: Apply 'font-roxborough' or your chosen heading font class here. */}
            <h3 className="font-semibold text-lg mb-4 tracking-wider">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-button" size={20} />
                <a href="mailto:cageol.ufg@gmail.com" className="hover:text-white transition-colors duration-300">
                  cageol.ufg@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-3 text-button" size={20} />
                <span>(62) 99807-2555</span>
              </li>
              <li className="flex items-center">
                <MdRoom className='text-xl mr-3 text-button'/>
                <span>Espaço estudantil, sala 02</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div className=''>
            {/* RECOMMENDATION: Apply 'font-roxborough' or your chosen heading font class here. */}
            <h3 className="font-semibold text-lg mb-4 tracking-wider">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/cageol.ufg?igsh=MWl2ZzhjdHk0dmY1Zg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-backgroundPrimary hover:text-button transition-colors duration-300">
                <FaInstagram size={28} />
              </a>
            </div>
          </div>
          
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="border-t border-[#F4F1EA] border-opacity-20 mt-8 pt-6 text-center text-sm">
          <p className="opacity-70">
            &copy; {currentYear} CAGEOL - Centro Acadêmico de Geologia UFG. Todos os direitos reservados.
          </p>
           <p className="text-xs opacity-70 mt-1">
              Desenvolvido por{" "}
              <a
                href="https://github.com/LuisVasconcelos0713"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                Luis Gustavo Vasconcelos - Vascore
              </a>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;