const highlightChapa = (text, chapa) => {
  if (!text || !chapa) return text;

  const parts = text.split(new RegExp(`(${chapa})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === chapa.toLowerCase() ? (
      <strong key={index} className="font-semibold text-textGeneral">
        {part}
      </strong>
    ) : (
      part
    )
  );
}


const GestoesContainer = ({ children, title, introduce ,chapa ,description, year, achievements, achievementsText, closignPhrase}) => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-5">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-textGeneral mb-4">
          {title}
        </h1>

        <h2 className="text-xl text-gray-700 mb-6">
          {highlightChapa(introduce, chapa)}
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {highlightChapa(description, chapa)}
        </p>
      </div>

      <div className="mt-16 flex justify-center flex-row flex-wrap gap-8 justify-items-center">
        {children}
      </div>
        <div className="text-center max-w-3xl mx-auto mt-6">
            <h2 className="text-2xl text-backgroundSecondary mb-6 font-bold">
            {highlightChapa(achievements, chapa)}
            </h2>

            <p className="text-backgroundSecondary leading-relaxed font-semibold">
            {highlightChapa(achievementsText, chapa)}
            </p>
            <h2 className="text-2xl text-backgroundSecondary my-6 font-bold">
            {highlightChapa(closignPhrase, chapa)}
            </h2>
            <hr className="mt-24 bg-button"></hr>
        </div>

     
    </section>
  );
};

export default GestoesContainer;
