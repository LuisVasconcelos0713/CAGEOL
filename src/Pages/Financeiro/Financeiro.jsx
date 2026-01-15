import { useContext, useEffect, useState } from "react";
import HeaderText from "../../Components/HeaderText/HeaderText";
import { AppContext } from "../../Context/Appcontext";
import axios from "axios";
import FinanceiroItens from "./FinanceiroItens";

const Financeiro = () => {
  const {BASE_URL} = useContext(AppContext)
  const [form,SetForm] = useState([])

  const getFormData = async () => {
    axios.get(`${BASE_URL}/Financeiro`).then(res => SetForm(res.data))
  }

  useEffect(() => {
    getFormData()
  },[])

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#442D1C]">
      <HeaderText title={"Financeiro"} subtitle={"Aqui você encontra todas as informações financeiras e administrativas da nossa instituição de forma clara e acessível."} background={true}></HeaderText>
      <div className="max-w-5xl mx-auto font-semibold">
        
        <section className="mt-2">
          <h2 className="text-2xl font-semibold text-[#442D1C] mb-2 mt-12">
              Relatórios Semestrais - CAGEOL
          </h2>
          {form.map((data) => (
            <FinanceiroItens Titulo={data.TituloRSemestral} Link={data.LinkPDFSemestral}></FinanceiroItens>  
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#442D1C] mb-2">
            Relatório de Gastos - Eventos
          </h2>
          {form.map((data) => (
            <FinanceiroItens Titulo={data.TituloREventos} Link={data.LinkPDFEventos}></FinanceiroItens>
          ))}
        </section>

        <section className="mt-12">
          <button className="bg-[#76461B] text-[#F4F1EA] px-6 py-3 rounded-lg shadow hover:brightness-120 hover:cursor-pointer transition">
            Ver todos os documentos
          </button>
        </section>

      </div>
    </div>
  );
};

export default Financeiro;
