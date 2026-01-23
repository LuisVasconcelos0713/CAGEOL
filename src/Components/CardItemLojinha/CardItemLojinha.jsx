import { FaWhatsapp } from 'react-icons/fa';
import { motion } from "framer-motion";

const CardItemLojinha = ({ imageUrl, productName, description, price, whatsappNumber }) => {
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const message = encodeURIComponent(
    `Olá! Tenho interesse no produto "${productName}" no valor de ${formattedPrice}. Poderia me dar mais detalhes?`
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-white rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col h-full border border-gray-100 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
    >
      {/* Container da Imagem */}
      <div className="relative overflow-hidden aspect-[4/5]">
        <img 
          src={imageUrl} 
          alt={productName} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Badge de Preço Flutuante */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm">
          <span className="text-[#246422] font-bold text-lg">{formattedPrice}</span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-[#442D1C] mb-3 group-hover:text-[#76461B] transition-colors">
          {productName}
        </h3>
        
        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Botão Estilizado */}
        <a 
          href={whatsappLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="relative overflow-hidden group/btn flex items-center justify-center gap-3 bg-[#246422] text-white py-4 rounded-2xl font-bold transition-all duration-300 hover:bg-[#1a4a19] active:scale-95 shadow-md hover:shadow-[#246422]/20"
        >
          <FaWhatsapp size={22} className="animate-pulse" />
          <span>Pedir no WhatsApp</span>
        </a>
      </div>
    </motion.div>
  );
};

export default CardItemLojinha;