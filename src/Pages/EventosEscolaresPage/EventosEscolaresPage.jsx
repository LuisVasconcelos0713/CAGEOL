import axios from "axios";
import { useContext, useEffect, useState } from "react";
import HeaderText from "../../Components/HeaderText/HeaderText";
import { motion } from "framer-motion";
import { AppContext } from "../../Context/AppContext";

const EventosEscolaresPage = () => {
  const { BASE_URL } = useContext(AppContext)
  const [eventosEscolaresData, setEventosEscolaresData] = useState([]);

  const getEventosEscolaresData = async () => {
    await axios
      .get(`${BASE_URL}/EventosEscolares`)
      .then((res) => setEventosEscolaresData(res.data))
      .then(console.log("Deu certo"));
  };

  useEffect(() => {
    getEventosEscolaresData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div className="bg-[#F4F1EA]">
        {/* Cabeçalho da Página */}
        <HeaderText
          title="Eventos Escolares"
          subtitle="Levando a geologia para a comunidade e inspirando futuros cientistas."
          background={true}
        />

        {/* Conteúdo Principal */}
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-20 px-4"
        >
          <div className="max-w-6xl mx-auto">
            {/* Texto Introdutório */}
            <motion.div
              variants={itemVariants}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold text-[#442D1C] mb-4">
                Nossa Missão na Comunidade
              </h2>
              <p className="text-lg text-[#584738] leading-relaxed">
                O CAGEOL acredita na importância da extensão universitária. Por
                isso, realizamos visitas, palestras e oficinas em escolas de
                Goiânia e região, com o objetivo de popularizar a ciência
                geológica e despertar a curiosidade dos jovens estudantes.
              </p>
            </motion.div>

            {/* Grade de Cartões com efeito cascata */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {eventosEscolaresData.map((evento) => (
                <motion.div
                  key={evento.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={evento.ImagemUrl}
                      alt={`Evento na ${evento.Local}`}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-sm text-[#76461B] font-semibold mb-1">
                      {evento.Data}
                    </span>
                    <h3 className="text-xl font-bold text-[#442D1C] mb-2">
                      {evento.Local}
                    </h3>
                    <p className="text-[#584738] flex-grow">
                      {evento.Descricao}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default EventosEscolaresPage;
