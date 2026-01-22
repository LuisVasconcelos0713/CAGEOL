import { Link } from "react-router";
import { motion } from "framer-motion";

const heroImageUrl =
  "https://images.unsplash.com/photo-1484352491158-830ef5692bb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut",
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section className="relative h-[100vh] min-h-[600px] flex items-center justify-center text-center text-white">
      {/* Imagem de Fundo */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={heroImageUrl}
          alt="Paisagem geológica"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-textPrimary opacity-70"></div>
      </div>

      {/* Conteúdo animado com variants */}
      <motion.div
        className="relative z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4 font-roxborough"
          variants={itemVariants}
        >
          Bem-vindo ao CAGEOL UFG
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 mb-8 font-poppins"
          variants={itemVariants}
        >
          Seu portal para eventos, informações e tudo sobre o curso de Geologia na Universidade Federal de Goiás.
        </motion.p>
        <motion.div
          className="flex flex-col xsm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <Link
            to="/eventos"
            className="bg-button hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-transform transform hover:scale-105"
          >
            Eventos
          </Link>
          <Link
            to="/estagios"
            className="bg-transparent border-2 border-backgroundPrimary text-backgroundPrimary hover:bg-backgroundPrimary hover:text-textPrimary font-semibold py-3 px-8 rounded-md shadow-lg transition-all"
          >
            Guia do Estudante
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
