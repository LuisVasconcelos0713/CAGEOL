// src/components/CardItemLojinha.js

import { FaWhatsapp } from 'react-icons/fa'; // Importando o ícone do WhatsApp

const CardItemLojinha = ({ imageUrl, productName, description, price, whatsappNumber }) => {

  // Formata o preço para o padrão brasileiro (R$ XX,XX)
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  // Cria a mensagem que será enviada no WhatsApp.
  // O encodeURIComponent garante que caracteres especiais funcionem no link.
  const message = encodeURIComponent(
    `Olá! Tenho interesse no produto "${productName}" no valor de ${formattedPrice}. Poderia me dar mais detalhes?`
  );

  // Monta o link final do WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    // Card Container - Usando a paleta de cores da sua marca
    // RECOMENDAÇÃO: Aplique aqui a classe da sua fonte principal (ex: font-poppins)
    <div className="rounded-lg shadow-xl overflow-hidden flex flex-col max-w-sm mx-auto transition-transform duration-300">
      
      {/* Imagem do Produto */}
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={`Imagem do produto ${productName}`} 
          className="w-full h-100 object-cover hover:scale-110" // object-cover evita distorção da imagem
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6 flex flex-col flex-grow">
        {/* RECOMENDAÇÃO: Aplique aqui a classe da sua fonte de títulos (ex: font-roxborough) */}
        <h3 className="text-2xl font-bold text-textPrimary mb-2">{productName}</h3>
        
        <p className="text-textGeneral text-base mb-4 flex-grow">
          {description}
        </p>

        {/* Preço */}
        <p className="text-3xl font-bold text-textPrimary mb-5">
          {formattedPrice}
        </p>

        {/* Botão de Ação para o WhatsApp */}
        <a 
          href={whatsappLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto bg-[#246422] text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-transparent hover:text-[#246422] hover:shadow-lg"
        >
          <FaWhatsapp className="mr-3" size={22} />
          Comprar no WhatsApp
        </a>
      </div>
    </div>
  );
};

export default CardItemLojinha;