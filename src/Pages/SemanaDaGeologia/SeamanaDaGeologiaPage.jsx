import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { FiCamera } from "react-icons/fi";
import { motion } from "framer-motion"; // Importe o motion do framer-motion
import HeaderText from "../../Components/HeaderText/HeaderText";
import axios from "axios";
import { AppContext } from "../../Context/AppContext";

const SemanaDaGeologiaPage = () => {
    const { BASE_URL } = useContext(AppContext)
    const [semanasAnteriores,setSemanasAnteriores] = useState([])

    const getSemanasAnteriores = async () => {
        await axios.get(`${BASE_URL}/SemanaDaGeo`)
        .then(res => setSemanasAnteriores(res.data))
        .then(console.log("Deu bom!"))
    }  

    useEffect(() => {
        getSemanasAnteriores()
    },[])

    // Variants para o efeito de cascata
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 1 // 1 segundo entre cada filho
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };
    
    return (
    <div>
      <div className="bg-[#F4F1EA]">
        {/* Cabeçalho da Página */}
        <HeaderText title={"Semana da Geologia"} subtitle={"O maior evento do CAGEOL. Reviva os melhores momentos e fique por dentro das próximas edições."} background={true}></HeaderText>

        {/* Conteúdo Principal */}
        <motion.main 
          className="py-20 px-4"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {semanasAnteriores.map((evento, index) => (
            <motion.div 
              key={evento.Ano} 
              className="max-w-6xl mx-auto mb-20"
              variants={itemVariants}
            >
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}
              >
                {/* Coluna da Imagem - a ordem alterna a cada item do map */}
                <div
                  className={`flex justify-center ${
                    index % 2 !== 0 ? "md:order-last" : ""
                  }`}
                >
                  <img
                    src={evento.ImagemUrl}
                    alt={`Foto da Semana da Geologia de ${evento.Ano}`}
                    className="rounded-lg shadow-2xl object-cover w-full h-[400px]"
                  />
                </div>

                {/* Coluna do Texto */}
                <div className="text-left">
                  <span className="text-sm font-bold text-[#76461B]">
                    {evento.Ano}
                  </span>
                  <h2 className="text-3xl font-bold text-[#442D1C] mt-1 mb-4">
                    {evento.Tema}
                  </h2>
                  <p className="text-[#584738] text-lg leading-relaxed mb-6">
                    {evento.Descricao}
                  </p>
                  <a
                    href="https://drive.google.com/drive/folders/1J2q-JrKQnrim1AavD5AQxY_R8oU5tDMW"
                    className="inline-flex items-center gap-2 bg-[#76461B] text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
                  >
                    <FiCamera />
                    Ver Galeria de Fotos
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.main>
      </div>
    </div>
  );
};

export default SemanaDaGeologiaPage;