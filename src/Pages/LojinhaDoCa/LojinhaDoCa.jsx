import { useContext, useEffect, useState } from "react";
import CardItemLojinha from "../../Components/CardItemLojinha/CardItemLojinha";
import axios from "axios";
import HeaderText from "../../Components/HeaderText/HeaderText";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../../Context/AppContext";
import { ShoppingBag } from "lucide-react";
import Loading from "../../Components/Loading/Loading";
import NotFoundCard from "../../Components/NotFoundCard/NotFoundCard";

const VENDEDOR_WHATSAPP = "5562998072555";

const LojinhaDoCa = () => {
  const { BASE_URL } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/Vendas`);
      setProducts(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

   const driveToDirectImage = (url) => {
    if (!url) return "";

    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (!match) return url;

    const fileId = match[1];
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
  };


  return (
    <div className="bg-[#FDFCF9] min-h-screen pb-20">
      <HeaderText
        title="Nossa Lojinha"
        subtitle="Produtos exclusivos, feitos de geólogo para geólogo."
        background={true}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16">
        {loading ? (
          <Loading></Loading>
        ) : products.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {products.map((product) => (
              <CardItemLojinha
                key={product.id}
                productName={product.Produto}
                description={product.Descricao}
                price={product.Preco}
                imageUrl={driveToDirectImage(product.ImagemUrl)}
                whatsappNumber={VENDEDOR_WHATSAPP}
              />
            ))}
          </motion.div>
        ) : (
          <NotFoundCard text={"Sem produtos no catálogo no momento!"} icon={ShoppingBag} ></NotFoundCard>
        )}
      </div>
    </div>
  );
};

export default LojinhaDoCa;