import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const FormularioCard = ({ Titulo, Descricao, Link, DataValidade }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group flex flex-col bg-[var(--color-backgroundPrimary)] border border-gray-100/50 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 max-w-[360px] w-full relative overflow-hidden"
    >
      {/* Detalhe estético no topo (opcional) */}
      <div className="absolute top-0 left-0 w-full group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex-1">
        {/* Título */}
        <h2 className="text-2xl font-bold text-textPrimary mb-3 tracking-tight">
          {Titulo}
        </h2>

        {/* Descrição */}
        <p className="text-sm text-textGeneral opacity-80 mb-6 leading-relaxed">
          {Descricao}
        </p>
      </div>

      {/* Data de validade com Badge */}
      {DataValidade && (
        <div className="flex items-center gap-2 mb-6 w-fit px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100">
          <Calendar size={14} className="text-gray-400" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
            Expira em: <span className="text-[#6b4028]">{DataValidade}</span>
          </span>
        </div>
      )}

      {/* Botão */}
      <motion.a
        whileTap={{ scale: 0.97 }}
        href={Link}
        target="_blank"
        rel="noopener noreferrer"
        className="group/btn flex items-center justify-center gap-3 w-full bg-button text-textSecondary py-4 rounded-2xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
      >
        <span>Preencher Formulário</span>
        <ArrowRight 
          size={18} 
          className="group-hover/btn:translate-x-1 transition-transform duration-300" 
        />
      </motion.a>
    </motion.div>
  );
};

export default FormularioCard;