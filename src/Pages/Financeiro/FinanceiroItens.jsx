
import { FileText, ExternalLink } from "lucide-react";

const FinanceiroItens = ({ Titulo, Link }) => {
  if (!Titulo || !Link) return null; // Evita renderizar itens vazios

  return (
    <a 
      href={Link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex items-center justify-between p-4 mb-3 rounded-xl border border-gray-200 bg-white/50 hover:bg-white hover:border-[#76461B]/30 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg bg-[#76461B]/10 text-[#76461B]">
          <FileText size={20} />
        </div>
        <span className="font-medium text-[#584738] group-hover:text-[#76461B] transition-colors">
          {Titulo}
        </span>
      </div>
      <div>
          <ExternalLink size={16} className="text-gray-400 group-hover:text-[#76461B] transition-colors ml-4" />
      </div>
    </a>
  );
};

export default FinanceiroItens;