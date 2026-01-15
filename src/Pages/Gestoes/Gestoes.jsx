import HeaderText from "../../Components/HeaderText/HeaderText";
import GestoesContainer from "../../Components/GestoesContainer/GestoesContainer";
import GestoesCard from "../../Components/GestoesCard/GestoesCard";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";

const Gestoes = () => {
  const { BASE_URL } = useContext(AppContext);
  const [dataForm, setDataForm] = useState([]);
  const [dataFormHeader, setDataFormHeader] = useState([]);

  const getFormData = async () => {
    axios.get(`${BASE_URL}/Gestoes`).then(res => setDataForm(res.data));
  };

  const getFormDataHeader = async () => {
    axios.get(`${BASE_URL}/GestaoTitulo`).then(res => setDataFormHeader(res.data));
  };

  useEffect(() => {
    getFormData();
    getFormDataHeader();
  }, []);

  const driveToDirectImage = (url) => {
    if (!url) return "";

    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (!match) return url;

    const fileId = match[1];
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
  };

  // 🔥 ORDENA AS CHAPAS PELO ANO (MAIS ATUAL PRIMEIRO)
  const sortedHeaders = [...dataFormHeader].sort(
    (a, b) => Number(b.Ano) - Number(a.Ano)
  );

  return (
    <div>
      <HeaderText
        title="Gestoes"
        subtitle="Econtre aqui todas as Gestões do CAGEOL!"
        background={true}
      />

      {sortedHeaders.map((dataHeader) => (
        <GestoesContainer
          key={dataHeader.Ano}
          title={dataHeader.Titulo}
          introduce={dataHeader.Apresentacao}
          chapa={dataHeader.ChapaNome}
          description={dataHeader.Descricao}
          year={dataHeader.Ano}
          achievements={dataHeader.Realizacoes}
          achievementsText={dataHeader.RealizacoesTexto}
          closignPhrase={dataHeader.FraseFinalizacao}
        >
          {dataForm
            .filter((data) => Number(data.Ano) === Number(dataHeader.Ano))
            .map((data) => (
              <GestoesCard
                key={data.id || data.Nome}
                nome={data.Nome}
                cargo={data.Cargo}
                descricao={data.Descricao}
                imagem={driveToDirectImage(data.Imagem)}
              />
            ))}
        </GestoesContainer>
      ))}
    </div>
  );
};

export default Gestoes;
