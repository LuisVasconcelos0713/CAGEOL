import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="bg-[#F4F1EA] min-h-screen flex flex-col items-center justify-center">
      <div className="text-[#442D1C] font-bold text-6xl mb-6">404</div>
      <div className="text-[#442D1C] text-2xl mb-4 text-center">
        Oops! Página não encontrada.
      </div>
      <p className="text-[#442D1C] text-lg mb-8 text-center">
        A página que você procura não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="bg-[#5f3c23] hover:bg-[#84592B] text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default NotFoundPage;
