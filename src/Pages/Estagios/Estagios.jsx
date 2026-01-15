import { useContext, useEffect, useState } from "react";
import CardEstagios from "../../Components/CardEstagios/CardEstagios";
import GeneralContainer from "../../Components/GeneralContainer/GeneralContainer";
import HeaderText from "../../Components/HeaderText/HeaderText";
import axios from "axios";
import { AppContext } from "../../Context/AppContext";

const Estagios = () => {
  const { BASE_URL } = useContext(AppContext)
  const [estagios, setEstagios] = useState([]);

  const getEstagios = async () => {
    await axios
      .get(`${BASE_URL}/estagios`)
      .then((res) => setEstagios(res.data))
  };

  useEffect(() => {
    getEstagios();
  }, []);

  return (
    <GeneralContainer>
      <HeaderText
        title={"Estágios"}
        subtitle={"Encontre aqui as vagas de estágios disponíveis!"}
        background={true}
      ></HeaderText>
      <div className="flex flex-wrap items-center justify-center gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {estagios.length >= 0 ? (
          estagios.map((estagio) => (
            <CardEstagios
              empresa={estagio.Empresa}
              area={estagio.Area}
              descricao={estagio.Descricao}
              contato={estagio.Contato}
              img={estagio.Img}
              instagram={estagio.Instagram}
              linkedin={estagio.Linkedin}
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
