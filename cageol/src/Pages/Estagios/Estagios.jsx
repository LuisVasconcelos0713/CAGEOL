import { useEffect, useState } from "react";
import CardEstagios from "../../Components/CardEstagios/CardEstagios";
import GeneralContainer from "../../Components/GeneralContainer/GeneralContainer";
import HeaderText from "../../Components/HeaderText/HeaderText";
import axios from "axios";

const Estagios = () => {
  const BASE_URL =
    "https://opensheet.elk.sh/1f3-kCM5h9FOEAjkRLJ24HdNhRdHOr7eaII7wpRz6pO0";

  const [estagios, setEstagios] = useState([]);

  const getEstagios = async () => {
    await axios
      .get(`${BASE_URL}/estagios`)
      .then((res) => setEstagios(res.data))
      .then(console.log("Deu certo!", estagios));
  };

  useEffect(() => {
    getEstagios();
  }, []);

  console.log(estagios);

  return (
    <GeneralContainer>
      <HeaderText
        title={"Estágios"}
        subtitle={"Encontre aqui as vagas de estágios disponíveis!"}
        background={true}
      ></HeaderText>
      <div className="flex flex-wrap gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {estagios.length >= 0 ? (
          estagios.map((estagio) => (
            <CardEstagios
              empresa={estagio.Empresa}
              area={estagio.Area}
              descricao={estagio.Descricao}
              contato={estagio.Contato}
            ></CardEstagios>
          ))
        ) : (
          <h1>Sem estágios publicados atualmente!</h1>
        )}
      </div>
    </GeneralContainer>
  );
};

export default Estagios;
