import { useContext, useEffect, useState } from "react";
import HeaderText from "../../Components/HeaderText/HeaderText";
import axios from "axios";
import { AppContext } from "../../Context/AppContext";
import Loading from "../../Components/Loading/Loading";

const Contato = () => {

  const {BASE_URL} = useContext(AppContext)
  const [dataForm,setDataForm] = useState([])
  const getdataForm = async () => {
    axios.get(`${BASE_URL}/Contato`).then(res => setDataForm(res.data))
  }

  useEffect(() => {
    getdataForm()
  },[])


  if(dataForm.length === 0) return <Loading></Loading>

  return (
    <div>
      <HeaderText
        title="Contato"
        subtitle="Encontre aqui todo o contato necessário do CAGEOL!"
        background={true}
      />
      
      {/* Área de contato */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col mlg:flex-row gap-6">
          
          {/* WhatsApp */}
          <div className="flex-1 bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-black mb-2">
              WhatsApp
            </h2>
            <p className="font-medium text-button mb-3">
              {dataForm[0].Numero}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Dúvidas urgentes sobre o curso, reclamações que precisem de ação
              imediata ou sugestões relacionadas a problemas atuais que afetam a
              turma.
            </p>
          </div>

          {/* Email geral */}
          <div className="flex-1 bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-black mb-2">
              E-mail
            </h2>
            <p className="font-medium text-button mb-3">
              {dataForm[0].Email}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Assuntos formais, comunicações oficiais, projetos e registros que
              não exijam resposta imediata.
            </p>
          </div>

          {/* Coordenação */}
          <div className="flex-1 bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-black mb-2">
              Coordenação
            </h2>
            <p className="font-medium text-button mb-3 break-all">
              {dataForm[0].EmailCordenacao}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Assuntos acadêmicos e administrativos formais, como matrículas,
              histórico escolar, trancamento, dúvidas sobre a matriz curricular
              e requerimentos.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contato;
