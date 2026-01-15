const GestoesCard = ({ nome, cargo, descricao, imagem }) => {
  return (
    <article className="bg-white rounded-2xl w-72 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Imagem */}
      <div className="h-72 overflow-hidden">
        <img
          src={imagem}
          alt={`Foto de ${nome}`}
          className="w-full h-full object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-5 flex flex-col gap-2">
        <span className="inline-block text-sm font-semibold text-button bg-button/10 px-3 py-1 rounded-full w-fit">
          {cargo}
        </span>

        <h3 className="text-lg font-bold text-gray-900">{nome}</h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          {descricao}
        </p>
      </div>
    </article>
  );
};

export default GestoesCard;
