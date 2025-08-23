import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FormularioCard = ({ Titulo, Descricao, Link, DataValidade }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[var(--color-backgroundPrimary)] text-[var(--color-textPrimary)] border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-[354px] w-full"
    >
      {/* Título */}
      <h2 className="text-2xl font-semibold mb-2">{Titulo}</h2>

      {/* Descrição */}
      <p className="text-sm text-[var(--color-textGeneral)] mb-4 leading-relaxed">
        {Descricao}
      </p>

      {/* Data de validade */}
      {DataValidade && (
        <p className="text-xs font-medium text-gray-500 italic mb-5">
          📅 Disponível até:{" "}
          <span className="text-[#6b4028]">{DataValidade}</span>
        </p>
      )}

      {/* Botão */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={Link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-[var(--color-button)] text-[var(--color-textSecondary)] px-5 py-2.5 rounded-xl transition-transform duration-200"
      >
        <ArrowRight size={16} />
        <span>Preencher Formulário</span>
      </motion.a>
    </motion.div>
  );
};

export default FormularioCard;
