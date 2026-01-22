import HeaderText from "../../Components/HeaderText/HeaderText";

const GuiadoEstudante = () => {
  return (
    <div className="w-full">
      <HeaderText
        title="Guia do Estudante"
        subtitle="Informações essenciais para quem está iniciando no curso de Geologia da UFG"
        background={true}
      />

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-24 text-gray-700">

    {/* INTRODUÇÃO */}
    <section className="space-y-6">
        <h2 className="text-4xl font-bold text-textGeneral">
        Entrei na faculdade, e agora?
        </h2>

        <p className="text-lg leading-relaxed">
        Bem-vindo(a) ao curso de Geologia na Universidade Federal de Goiás (UFG)!
        Parabéns pela conquista! Você agora faz parte de uma das melhores
        universidades do país e de um curso fascinante que explora os mistérios
        do nosso planeta.
        </p>

        <p className="text-lg leading-relaxed">
        Este manual será seu guia inicial na universidade e no curso de Geologia.
        As aulas começam no dia <strong>06 de março</strong>, marcando o início de
        uma jornada cheia de desafios e realizações, com conteúdos incríveis e
        vivências práticas únicas.
        </p>

        <p className="text-lg leading-relaxed">
        Lembre-se: o respeito mútuo é essencial para uma convivência harmoniosa.
        Juntos, construiremos um ambiente acolhedor e inclusivo.
        </p>

        <p className="text-lg font-medium">
        Mais uma vez, parabéns e bem-vindo(a) ao curso de Geologia na UFG!
        </p>
    </section>

    {/* SUMÁRIO */}
    <section className="border-l-4 border-button pl-6">
    <h3 className="text-2xl font-bold text-textGeneral mb-4">
        Navegue pelo Guia
    </h3>

    <ul className="space-y-3 text-lg">
        <li>
        <a
            href="#matricula"
            className="hover:underline hover:text-button transition-colors"
        >
            → Matrícula
        </a>
        </li>

        <li>
        <a
            href="#sigaa"
            className="hover:underline hover:text-button transition-colors"
        >
            → SIGAA
        </a>
        </li>

        <li>
        <a
            href="#beneficios"
            className="hover:underline hover:text-button transition-colors"
        >
            → Benefícios e serviços
        </a>
        </li>
    </ul>
    </section>

    {/* MATRÍCULA */}
    <section id="matricula" className="space-y-6">
        <h2 className="text-3xl font-bold text-textGeneral">
        Conquistei minha vaga. Qual o próximo passo?
        </h2>

        <h3 className="text-2xl font-semibold">
        Matrícula
        </h3>

        <p className="text-lg leading-relaxed">
        O vínculo do candidato com a Universidade é formalizado por meio da
        matrícula. Essa etapa é obrigatória para os calouros e deve ser realizada
        conforme os documentos exigidos no edital, de acordo com o grupo pelo qual
        o estudante se inscreveu no processo seletivo.
        </p>

        <p className="text-lg leading-relaxed">
        É fundamental acompanhar os prazos divulgados pela universidade, pois a
        não realização da matrícula dentro do período estipulado pode resultar na
        perda da vaga.
        </p>
    </section>

    {/* SIGAA */}
    <section id="sigaa" className="space-y-6">
        <h3 className="text-2xl font-semibold">
        SIGAA
        </h3>

        <p className="text-lg leading-relaxed">
        Após obter o número de matrícula, o estudante deve realizar o autocadastro
        no SIGAA e aguardar o início das aulas. No primeiro semestre, a matrícula
        nas disciplinas é feita pelas unidades acadêmicas.
        </p>

        <p className="text-lg leading-relaxed">
        A partir do segundo semestre, o estudante deve acompanhar o calendário
        acadêmico e realizar sua matrícula diretamente no sistema.
        </p>

        <p className="text-lg leading-relaxed">
        Guarde seu usuário e senha, pois eles serão utilizados ao longo de toda a
        trajetória acadêmica.
        </p>

        <a
        href="https://bioparasitohospedeiro.iptsp.ufg.br/p/38289-orientacao-para-cadastro-no-sigaa-e-matricula-online"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-semibold text-button hover:underline"
        >
        Acessar o SIGAA
        </a>
    </section>

    {/* BENEFÍCIOS */}
    <section id="beneficios" className="space-y-12">
  <h2 className="text-3xl font-bold text-textGeneral">
    O que a UFG tem para me oferecer?
  </h2>

  <div className="grid gap-8">

    {/* CARD PADRÃO */}
    {[
      {
        title: "E-mail institucional",
        content: (
          <p className="text-lg leading-relaxed">
            O aluno pode solicitar a criação do e-mail institucional acessando o
            SIGAA, concordando com o termo de uso e aguardando a liberação, que
            ocorre em até 24 horas.
          </p>
        )
      },
      {
        title: "Passe Livre Estudantil",
        content: (
          <p className="text-lg leading-relaxed">
            O benefício pode ser solicitado pelo site do{" "}
            <a
              href="https://www.juventude.go.gov.br/"
              className="underline font-medium"
            >
              SITPASS
            </a>.
          </p>
        )
      },
      {
        title: "Restaurante Universitário",
        content: (
          <p className="text-lg leading-relaxed">
            O RU oferece café da manhã (R$ 2,50), almoço (R$ 4,00) e jantar
            (R$ 4,00). No campus de Aparecida são servidos café e almoço.
            Estudantes com bolsa de isenção não pagam.
          </p>
        )
      },
      {
        title: "Bolsas e auxílios",
        content: (
          <>
            <p className="text-lg leading-relaxed">
              Bolsa Moradia, Casa do Estudante Universitário (CEU), Alimentação e
              Bolsa Acolhe.
            </p>

            <a
              href="https://prae.ufg.br/p/29469-programas-e-bolsas"
              className="inline-block mt-2 font-semibold text-button hover:underline"
            >
              Ver todas as bolsas disponíveis
            </a>
          </>
        )
      }
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3 shadow-sm"
      >
        <h4 className="text-xl font-semibold">{item.title}</h4>
        {item.content}
      </div>
    ))}

    {/* TRANSPORTE – MESMO CARD, SÓ COM DESTAQUE SUAVE */}
    <div className="bg-white text-gray-800 rounded-2xl p-6 space-y-4 shadow-md">
      <h4 className="text-xl font-semibold">Transporte</h4>

      <a
        href="https://www.rmtcgoiania.com.br/linhas-e-trajetos/area-sul/?buscar=555"
        target="_blank"
        rel="noopener noreferrer"
        className="underline font-medium"
      >
        Linha 555 – Campus Aparecida de Goiânia
      </a>

      <p className="opacity-90">
        Trajeto: <strong>Terminal Araguaia → UFG FCT Aparecida</strong>
      </p>

      <div className="bg-[#5C4033] text-white rounded-xl p-4">
        <h5 className="font-semibold text-base mb-3">Horários</h5>

        <ul className="text-base font-semibold">
          <li>07h19 → 07h55</li>
          <li>09h22 → 09h55</li>
          <li>11h42 → 12h10</li>
          <li>12h37 → 13h05</li>
          <li>14h21 → 15h10</li>
          <li>16h38 → 17h10</li>
          <li>17h37 → 18h10</li>
        </ul>
      </div>
    </div>

  </div>
</section>

    </main>

    </div>
  );
};

export default GuiadoEstudante;
