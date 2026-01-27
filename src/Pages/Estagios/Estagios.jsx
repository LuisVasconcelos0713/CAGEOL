import { useContext, useEffect, useState } from "react";
import CardEstagios from "../../Components/CardEstagios/CardEstagios";
import GeneralContainer from "../../Components/GeneralContainer/GeneralContainer";
import HeaderText from "../../Components/HeaderText/HeaderText";
import axios from "axios";
import { AppContext } from "../../Context/AppContext";
import Loading from "../../Components/Loading/Loading";
import NotFoundCard from "../../Components/NotFoundCard/NotFoundCard";
import { ClipboardList } from "lucide-react";

const Estagios = () => {
  const { BASE_URL } = useContext(AppContext)
  const [estagios, setEstagios] = useState([]);
  const [loading, setLoading] = useState(true);


  const getEstagios = async () => {
    await axios
      .get(`${BASE_URL}/estagios`)
      .then((res) => setEstagios(res.data))
      .finally(() => setLoading(false))
  };

  useEffect(() => {
    getEstagios();
  }, []);

  const driveToDirectImage = (url) => {
    if (!url) return "";

    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (!match) return url;

    const fileId = match[1];
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
  };

  if(estagios === 0) return <Loading></Loading>

  return (
    <GeneralContainer>
      <HeaderText
        title={"Estágios"}
        subtitle={"Encontre aqui as vagas de estágios disponíveis!"}
        background={true}
      ></HeaderText>
      <div className="flex flex-wrap items-center justify-center gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {loading ? (<Loading></Loading>) : (estagios.length > 0 ) ? (
          estagios.map((estagio) => (
            <CardEstagios
              empresa={estagio.Empresa}
              area={estagio.Area}
              descricao={estagio.Descricao}
              contato={estagio.Contato}
              img={driveToDirectImage(estagio.Img)}
              instagram={estagio.Instagram}
              linkedin={estagio.Linkedin}
            ></CardEstagios>
          ))
        ) : (<NotFoundCard text={"Sem estágios publicados no momento!"} icon={ClipboardList}></NotFoundCard>)}
      </div>
    </GeneralContainer>
  );
};

export default Estagios;
