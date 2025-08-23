import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";
import { motion } from "framer-motion";
const sobreImageUrl =
  "https://images.unsplash.com/photo-1741639309920-451e9a913d06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const AboutCASection = () => {
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
                O Centro Acadêmico de Geologia (CAGEOL) é a entidade que
                representa todos os estudantes do curso de Geologia da UFG.
                Nossa missão é promover a integração, defender os interesses
                discentes e organizar eventos que enriqueçam a vida acadêmica e
                profissional dos futuros geólogos.
              </p>
              <p className="text-lg text-textGeneral leading-relaxed">
                Atuamos como a principal ponte entre os alunos e a coordenação
                do curso, buscando sempre melhorias e um ambiente universitário
                mais participativo e dinâmico.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center mt-8 font-semibold text-button hover:text-textPrimary transition-colors"
              >
                Conheça a gestão atual
                <FiArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Coluna da Imagem */}
            <div className="flex justify-center">
              <img
                src={sobreImageUrl}
                alt="Gestão atual do CAGEOL"
                className="rounded-lg shadow-2xl object-cover w-full h-full max-h-[450px]"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutCASection;
