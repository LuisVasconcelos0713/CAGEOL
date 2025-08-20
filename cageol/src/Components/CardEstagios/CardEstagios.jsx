import { Briefcase, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const CardEstagios = ({ empresa, area, descricao, contato }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-[var(--color-backgroundPrimary)] text-[var(--color-textPrimary)] border border-[var(--color-textGeneral)] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-[354px] w-full"
    >
      <h2 className="text-2xl font-semibold mb-1">{empresa}</h2>

      <div className="flex items-center text-sm text-[var(--color-textGeneral)] mb-3">
        <Briefcase size={18} className="mr-1.5" />
        <span className="tracking-wide font-medium">{area}</span>
      </div>

      <p className="text-sm text-[var(--color-textGeneral)] mb-5 leading-relaxed">
        {descricao}
      </p>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={`mailto:${contato}`}
        className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-[var(--color-button)] text-[var(--color-textSecondary)] px-5 py-2.5 rounded-xl transition-transform duration-200"
      >
        <Mail size={16} />
        <span>Entrar em contato</span>
      </motion.a>
    </motion.div>
  );
};

export default CardEstagios;
