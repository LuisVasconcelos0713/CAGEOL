import { useEffect, useState } from "react";
import HeaderText from "../../Components/HeaderText/HeaderText";
import axios from "axios";
import FormularioCard from "../../Components/FormularioCard/FormularioCard";
import Estagios from "../Estagios/Estagios";

const Formularios = () => {
  const [forms, setForms] = useState([]);
  const BASE_URL =
    "https://opensheet.elk.sh/1f3-kCM5h9FOEAjkRLJ24HdNhRdHOr7eaII7wpRz6pO0";

  const getFormsData = async () => {
    await axios
      .get(`${BASE_URL}/Formularios`)
      .then((res) => setForms(res.data))
      .then(console.log(forms));
  };

  useEffect(() => {
    getFormsData();
  },[]);

  return (
    <div>
      <HeaderText
        title="Formulários"
        subtitle="Encontre aqui nossos formulários!"
        background="true"
      ></HeaderText>
      <div className="flex flex-wrap items-center justify-center gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {forms.map((form, index) => (
          <FormularioCard Titulo={form.Titulo} Descricao={form.Descricao} DataValidade={form.Validade} Link={form.Link} id={index} ></FormularioCard>
        ))}
      </div>
      <div className="flex items-center justify-center w-full mt-22">
        <div className="w-[50%] h-1 rounded-4xl bg-button"></div>
      </div>
      <Estagios></Estagios>
    </div>
  );
};

export default Formularios;
