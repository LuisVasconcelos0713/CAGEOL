import HeaderText from "../../Components/HeaderText/HeaderText";

const TransparenciaPage = () => {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#442D1C]">
      <HeaderText title={"Transparência"} subtitle={"Aqui você encontra todas as informações financeiras e administrativas da nossa instituição de forma clara e acessível."} background={true}></HeaderText>
      <div className="max-w-5xl mx-auto font-semibold">

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#442D1C] mb-2">
            Relatórios Financeiros
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-[#584738]">
            <li>
              <a href="#" className="underline hover:text-[#76461B]">
                Relatório Anual 2024
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-[#76461B]">
                Prestação de Contas - 1º Semestre 2025
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-[#76461B]">
                Balanço Patrimonial
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#442D1C] mb-2">
            Documentos Institucionais
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-[#584738]">
            <li>
              <a href="#" className="underline hover:text-[#76461B]">
                Estatuto Social
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-[#76461B]">
                Regimento Interno
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-[#76461B]">
                Códigos de Conduta
              </a>
            </li>
          </ul>
        </section>

        <div className="mt-12">
          <button className="bg-[#76461B] text-[#F4F1EA] px-6 py-3 rounded-lg shadow hover:brightness-120 hover:cursor-pointer transition">
            Ver todos os documentos
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransparenciaPage;
