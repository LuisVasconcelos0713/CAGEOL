import { useContext, useEffect, useState } from "react";
import HeaderText from "../../Components/HeaderText/HeaderText";
import axios from "axios";
import FormularioCard from "../../Components/FormularioCard/FormularioCard";
import { AppContext } from "../../Context/Appcontext";

const Eventos = () => {
  const {BASE_URL} = useContext(AppContext)
  const [forms, setForms] = useState([]);

  const getFormsData = async () => {
    await axios
      .get(`${BASE_URL}/Eventos`)
      .then((res) => setForms(res.data))
  };

  useEffect(() => {
    getFormsData();
  },[]);

  return (
    <div>
      <HeaderText
        title="Eventos"
        subtitle="Encontre aqui nossos eventos!"
        background="true"
      ></HeaderText>
      <div className="flex flex-wrap items-center justify-center gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {forms.map((form, index) => (
          <FormularioCard Titulo={form.Titulo} Descricao={form.Descricao} DataValidade={form.Validade} Link={form.Link} id={index} ></FormularioCard>
        ))}
      </div>
    
      </div>
  );
};

export default Eventos;
