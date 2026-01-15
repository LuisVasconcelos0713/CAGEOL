import { motion } from "framer-motion";

const HeaderText = ({
  title = "Título padrão",
  subtitle = "Subtítulo padrão",
  background = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const heroImageUrl =
  "https://images.unsplash.com/photo-1484352491158-830ef5692bb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  return background ? (
    <header className="relative bg-[#442D1C] text-[#F4F1EA] py-24 md:py-32 text-center overflow-hidden">
      {/* Gradiente de fundo */}
       <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={heroImageUrl}
          alt="Paisagem geológica"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-textPrimary opacity-90"></div>
      </div>
      
      <motion.div
        className="relative max-w-4xl mx-auto px-6 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          whileHover={{ scale: 1.01 }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="mt-8 mx-auto w-24 h-1 bg-[#F4A261] rounded-full"
        />
      </motion.div>
    </header>
  ) : (
    <motion.div
      className="max-w-6xl mx-auto pt-9 px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="text-center mb-16"
        variants={itemVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#442D1C] mb-4 leading-tight"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h1>
        
        {/*<motion.div
          variants={itemVariants}
          className="w-20 h-1 bg-[#76461B] mx-auto mb-6 rounded-full"
        />*/}

        <motion.p
          className="text-lg md:text-xl text-[#584738] mt-2 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="mt-8 mx-auto w-24 h-1 bg-[#F4A261] rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeaderText;
