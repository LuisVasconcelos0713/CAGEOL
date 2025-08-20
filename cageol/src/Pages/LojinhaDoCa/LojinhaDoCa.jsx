import { useEffect, useState } from "react";
import CardItemLojinha from "../../Components/CardItemLojinha/CardItemLojinha";
import axios from "axios";
import HeaderText from "../../Components/HeaderText/HeaderText";
import { motion } from "framer-motion";
const VENDEDOR_WHATSAPP = "5562912345678"; // <-- TROQUE PELO SEU NÚMERO
const BASE_URL =
  "https://opensheet.elk.sh/1f3-kCM5h9FOEAjkRLJ24HdNhRdHOr7eaII7wpRz6pO0";
const LojinhaDoCa = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios.get(`${BASE_URL}/Vendas`).then((res) => setProducts(res.data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    // Usando a cor de fundo principal da sua identidade visual
    <div className="bg-backgroundPrimary min-h-screen">
      <HeaderText
        title={"Nossa Lojinha"}
        subtitle={"Produtos feitos de geólogo para geólogo!"}
        background={true}
      ></HeaderText>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Grade de Produtos */}
        <motion.div
          initial={{ opacity: 0, y: 54 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {products.length >= 0 ? (
            products.map((product) => (
              <CardItemLojinha
                key={product.id}
                productName={product.Produto}
                description={product.Descricao}
                price={product.Preco}
                imageUrl={product.ImagemUrl}
                whatsappNumber={VENDEDOR_WHATSAPP}
              />
            ))
          ) : (
            <div>Sem produtos no momento!</div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LojinhaDoCa;
