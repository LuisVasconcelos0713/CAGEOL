import { useContext, useEffect, useState } from "react";
import HeaderText from "../../Components/HeaderText/HeaderText";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import FinanceiroItens from "./FinanceiroItens";
import { FileStack } from "lucide-react";

const Financeiro = () => {
  const { BASE_URL } = useContext(AppContext);
  const [form, setForm] = useState([]);

  const getFormData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/Financeiro`);
      setForm(res.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    getFormData();
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#442D1C] pb-20">
      <HeaderText 
        title="Financeiro" 
        subtitle="Transparência e clareza na gestão administrativa da nossa instituição." 
        background={true} 
      />

      <main className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          
          {/* Seção 1 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1.5 bg-[#76461B] rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Relatórios Semestrais</h2>
            </div>
            <div className="space-y-1">
              {form.map((data, index) => (
                <FinanceiroItens 
                  key={index}
                  Titulo={data.TituloRSemestral} 
                  Link={data.LinkPDFSemestral} 
                />
              ))}
            </div>
          </section>

          {/* Seção 2 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1.5 bg-[#C4A484] rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Gastos de Eventos</h2>
            </div>
            <div className="space-y-1">
              {form.map((data, index) => (
                <FinanceiroItens 
                  key={index}
                  Titulo={data.TituloREventos} 
                  Link={data.LinkPDFEventos} 
                />
              ))}
            </div>
          </section>

        </div>

        {/* Botão de Ação Inferior */}
        <section className="mt-20 flex justify-center">
          <button className="flex items-center gap-3 bg-[#76461B] text-[#F4F1EA] px-8 py-4 rounded-2xl font-bold shadow-lg shadow-[#76461B]/20 hover:bg-[#5a3514] hover:-translate-y-1 transition-all duration-300">
            <FileStack size={20} />
            Ver todos os documentos
          </button>
        </section>
      </main>
    </div>
  );
};

export default Financeiro;
