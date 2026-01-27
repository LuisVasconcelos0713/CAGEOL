import { useContext, useEffect, useState } from "react";
import HeaderText from "../../Components/HeaderText/HeaderText";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { FiDownload, FiChevronDown, FiFileText, FiExternalLink } from "react-icons/fi"; 

const SemanaDaGeologiaInfo = () => {
    const { BASE_URL } = useContext(AppContext);
    const { ano } = useParams();
    const [evento, setEvento] = useState(null);
    const [showResumoLinks, setShowResumoLinks] = useState(false);

    const getParamsData = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/SemanaDaGeoDetalhes`);
            const FindEvent = res.data.find(data => String(data.Ano) === String(ano));
            setEvento(FindEvent);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    const driveToDirectImage = (url) => {
        if (!url || url === "") return null;
        const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (!match) return url;
        const fileId = match[1];
        return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
    };

    useEffect(() => {
        getParamsData();
    }, [ano]);

    if (!evento) return <Loading />;

    // Mapeamento das logos baseado na sua planilha
    const patrocinadores = [evento.Patrocinio1IMG, evento.Patrocinio2IMG, evento.Patrocinio3IMG, evento.Patrocinio4IMG, evento.Patrocinio5IMG, evento.Patrocinio6IMG, evento.Patrocinio7IMG].filter(Boolean);
    const apoiadores = [evento.Apoio1IMG, evento.Apoio2IMG, evento.Apoio3IMG, evento.Apoio4IMG, evento.Apoio5IMG, evento.Apoio6IMG, evento.Apoio7IMG].filter(Boolean);

    return (
        <div className="min-h-screen bg-stone-50 pb-20">
            <HeaderText 
                title={`Semana da Geologia ${evento.Ano}`} 
                subtitle={evento.Tema} 
                background="True" 
            />

            <main className="max-w-6xl mx-auto px-4 py-12">
                {/* CARD PRINCIPAL */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-stone-200 mb-20">
                    
                    {/* Imagem do Evento */}
                    <div className="md:w-1/2 bg-stone-200 flex items-center justify-center overflow-hidden">
                        <img 
                            src={driveToDirectImage(evento.ImagemUrl)} 
                            alt={`Banner ${evento.Tema}`} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Conteúdo Informativo */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
                        <div className="inline-block px-3 py-1 bg-stone-100 text-[#8B5E3C] rounded-full text-sm font-bold mb-4 w-fit">
                            EDIÇÃO {evento.Ano}
                        </div>
                        
                        <h1 className="text-3xl font-extrabold text-stone-900 mb-4 leading-tight">
                            {evento.Tema}
                        </h1>

                        <div className="w-20 h-1.5 bg-[#F4A261] mb-6 rounded-full"></div>

                        <p className="text-stone-600 text-lg leading-relaxed mb-8">
                            {evento.Descricao}
                        </p>

                        {/* ÁREA DE DOWNLOADS (BASEADA NA PLANILHA) */}
                        <div className="space-y-4 pt-6 border-t border-stone-100 mt-auto">
                            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest">Documentos e Submissões</h4>
                            
                            {/* PDF Cronograma */}
                            <a href={evento.PDFAnaisSemanaDaGeologia} target="_blank" rel="noreferrer"
                               className="flex items-center justify-between bg-stone-200 hover:bg-stone-200 text-stone-800 p-4 rounded-xl transition-all group">
                                <div className="flex items-center gap-3">
                                    <FiFileText className="text-[#F4A261] text-xl" />
                                    <span className="font-semibold text-sm">Anais - Semana da Geologia</span>
                                </div>
                                <FiDownload className="text-stone-400 group-hover:text-stone-800 transition-colors" />
                            </a>
                            
                            <a href={evento.PDFCronogramaDeAtividades} target="_blank" rel="noreferrer"
                               className="flex items-center justify-between bg-stone-200 hover:bg-stone-200 text-stone-800 p-4 rounded-xl transition-all group">
                                <div className="flex items-center gap-3">
                                    <FiFileText className="text-[#F4A261] text-xl" />
                                    <span className="font-semibold text-sm">Cronograma de Atividades</span>
                                </div>
                                <FiDownload className="text-stone-400 group-hover:text-stone-800 transition-colors" />
                            </a>

                            {/* Menu Dropdown de Resumos */}
                            <div className="relative">
                                <button 
                                    onClick={() => setShowResumoLinks(!showResumoLinks)}
                                    className="w-full flex items-center justify-between bg-button hover:opacity-90 text-white p-4 rounded-xl transition-all shadow-md">
                                    <span className="font-semibold text-sm text-white">Submissão de Resumos</span>
                                    <FiChevronDown className={`transition-transform ${showResumoLinks ? 'rotate-180' : ''}`} />
                                </button>

                                {showResumoLinks && (
                                    <div className="mt-2 bg-white border border-stone-200 rounded-xl shadow-lg overflow-hidden flex flex-col animate-fadeIn">
                                        <a href={evento.PDFNormasParaSubmissao} target="_blank" rel="noreferrer" 
                                           className="p-4 hover:bg-stone-50 text-stone-700 text-sm border-b border-stone-100 flex justify-between items-center">
                                            Normas para Submissão <FiExternalLink className="text-stone-300"/>
                                        </a>
                                        <a href={evento.PDFTemplateResumo} target="_blank" rel="noreferrer" 
                                           className="p-4 hover:bg-stone-50 text-stone-700 text-sm border-b border-stone-100 flex justify-between items-center">
                                            Template do Resumo <FiExternalLink className="text-stone-300"/>
                                        </a>
                                        <a href={evento.PDFFormularioDeSubmissao} target="_blank" rel="noreferrer" 
                                           className="p-4 hover:bg-stone-50 text-stone-700 text-sm flex justify-between items-center">
                                            Formulário de Submissão <FiExternalLink className="text-stone-300"/>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEÇÃO DE LOGOS DINÂMICAS */}
                <div className="space-y-16">
                    {/* Patrocinadores */}
                    {patrocinadores.length > 0 && (
                        <section className="text-center">
                            <h2 className="text-stone-400 uppercase text-xs font-bold tracking-[0.2em] mb-10 flex items-center justify-center gap-4">
                                <span className="h-[1px] w-12 bg-stone-200"></span>
                                Patrocínio
                                <span className="h-[1px] w-12 bg-stone-200"></span>
                            </h2>
                            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                {patrocinadores.map((url, index) => (
                                    <img key={index} src={driveToDirectImage(url)} alt="Logo Patrocinador" className= "h-24 object-contain" />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Apoiadores e Organização */}
                        {/* Apoiadores */}
                        <div className="text-center">
                            <h3 className="text-stone-400 uppercase text-xs font-bold tracking-[0.2em] mb-8">Apoio</h3>
                            <div className="flex flex-wrap justify-center  items-center gap-8 opacity-60">
                                {apoiadores.map((url, index) => (
                                    <img key={index} src={driveToDirectImage(url)} alt="Logo Apoio" className="h-24 object-contain" />
                                ))}
                            </div>
                        </div>

                        {/* Organização (Exemplo estático ou vindo de outro campo) */}
                        <div className="text-center">
                            <h3 className="text-stone-400 uppercase text-xs font-bold tracking-[0.2em] ">Organização</h3>
                            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                                <img src={driveToDirectImage(evento.LogoCageol)} alt="Logo Organização" className="h-35 mt-4 object-contain" />
                            </div>
                            <div className="flex flex-wrap justify-center items-center">
                                <h3 className="text-stone-400 uppercase text-xs font-bold tracking-[0.2em] mt-5 max-w-67">Comissão organizadora da VII Semana da Geologia UFG</h3>
                            </div>
                        </div>
                </div>
            </main>
        </div>
    );
}

export default SemanaDaGeologiaInfo;