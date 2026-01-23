import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../Context/AppContext";
import Loading from "../../Components/Loading/Loading";


  const AboutCASection = () => {
    const {BASE_URL} = useContext(AppContext)
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
      await axios.get(`${BASE_URL}/Home`).then((res) => setData(res.data)).finally(() => setLoading(false))
    }

    useEffect(() => {
      getData()
    },[])

  return (
    <div>
      <section className="bg-backgroundPrimary py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Coluna de Texto */}
            <div className="text-left">
              {/* RECOMMENDATION: Apply 'font-roxborough' or your chosen heading font class here. */}
              <h2 className="text-3xl lg:text-4xl font-bold text-textPrimary mb-4">
                Sobre o Centro Acadêmico
              </h2>
              {/* Usando #76461B (Walnut Wood) como cor de destaque */}
              <div className="w-24 h-1 bg-button mb-6"></div>
              {/* RECOMMENDATION: Apply 'font-poppins' or your chosen body font class here. */}
              <p className="text-lg text-textGeneral leading-relaxed mb-4">
                O Centro Acadêmico de Geologia da UFG tem como objetivo representar os estudantes do curso, 
                promovendo a integração acadêmica e social, defendendo seus interesses e fortalecendo o diálogo com a universidade. 
               
              </p>
              <p className="text-lg text-textGeneral leading-relaxed">
                Atua na organização de atividades científicas, culturais e de apoio estudantil, 
                buscando ampliar a formação e garantir espaço de participação ativa na vida acadêmica.
              </p>
              <Link
                to="/gestoes"
                className="inline-flex items-center mt-8 font-semibold text-button hover:text-textPrimary transition-colors"
              >
                Conheça a gestão atual
                <FiArrowRight className="ml-2" />
              </Link>
            </div>

            {data.length > 0 ? (
              <>
                <div className="flex justify-center">
                  <img
                    src={data[0].Imagem}
                    alt="Gestão atual do CAGEOL"
                    className="rounded-lg shadow-2xl object-cover w-full h-full max-h-[450px]"
                  />
                </div>
              </>
              ) : (
              <Loading/>
              )}
            
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutCASection;
