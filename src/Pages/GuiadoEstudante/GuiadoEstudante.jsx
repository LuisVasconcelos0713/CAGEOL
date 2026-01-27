import HeaderText from "../../Components/HeaderText/HeaderText";
import { ArrowRight, Info, Bus, GraduationCap, MapPin, Mail, Wallet, Utensils } from "lucide-react"; // Opcional: ícones para dar vida ao design
import { AppContext } from "../../Context/AppContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";

const GuiadoEstudante = () => {

  const { BASE_URL } = useContext(AppContext);
  const [dataForm, setDataForm] = useState([]);
  
    const getFormData = async () => {
      axios.get(`${BASE_URL}/GuiaDoEstudante`).then(res => setDataForm(res.data))
    };
  
  
    useEffect(() => {
      getFormData();
    }, []);

    if(!dataForm || dataForm.length === 0){
      return <Loading></Loading>
    }

    const guia = dataForm[0]

  return (
    <div className="w-full bg-[#FCF9F6]">
      <HeaderText
        title="Guia do Estudante"
        subtitle="Informações essenciais para quem está iniciando no curso de Geologia da UFG"
        background={true}
      />

      <main className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-24 text-stone-700">

        {/* INTRODUÇÃO */}
         <section className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-[#8B5E3C] rounded-full hidden md:block" />
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
              Entrei na faculdade, <br />
              <span className="text-[#8B5E3C]">e agora?</span>
            </h2>
            <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-stone-600">
              <p>
                Bem-vindo(a) ao curso de <strong>Geologia na UFG</strong>! Você agora faz parte de uma comunidade que explora a história e os mistérios do nosso planeta.
              </p>
              {guia.DataInicioVeteranos ? 
              <p>
              Este guia foi feito para te acompanhar nos primeiros passos na universidade e no curso de Geologia. As aulas para os <strong>calouros</strong> têm início em{" "}
              <span className="text-[#8B5E3C] font-bold underline decoration-wavy underline-offset-4">
                {guia.DataInicioCalouros}
              </span>.
              enquanto os <strong>veteranos</strong> iniciam o semestre em{" "}
              <span className="text-[#8B5E3C] font-bold underline decoration-wavy underline-offset-4">
                {guia.DataInicioVeteranos}
              </span>.
              dando início a mais uma etapa cheia de aprendizados e vivências práticas.
            </p>
            : <p className="text-lg leading-relaxed">
              Este guia foi feito para te acompanhar nos primeiros passos na universidade e no curso de Geologia. 
              As aulas começam no dia {" "}
              <span className="text-[#8B5E3C] font-bold underline decoration-wavy underline-offset-4">
                {guia.DataInicioCalouros}
              </span>, dando início a uma jornada cheia de descobertas, 
              desafios e experiências práticas que vão marcar sua trajetória acadêmica.
              </p>
              }
             
            </div>
          </div>
        </section> 
       

        {/* SUMÁRIO */}
        <section className="border-l-4 border-[#8B5E3C] bg-stone-100 p-8 rounded-r-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-[#5C4033] mb-4">
            Navegue pelo Guia
          </h3>

          <ul className="flex flex-col gap-3 text-lg">
            <li>
              <a href="#matricula" className="flex items-center gap-2 hover:translate-x-2 transition-transform hover:text-[#8B5E3C]">
                <ArrowRight className="w-5 h-5" /> Matrícula
              </a>
            </li>
            <li>
              <a href="#sigaa" className="flex items-center gap-2 hover:translate-x-2 transition-transform hover:text-[#8B5E3C]">
                <ArrowRight className="w-5 h-5" /> SIGAA
              </a>
            </li>
            <li>
              <a href="#beneficios" className="flex items-center gap-2 hover:translate-x-2 transition-transform hover:text-[#8B5E3C]">
                <ArrowRight className="w-5 h-5" /> Benefícios e serviços
              </a>
            </li>
          </ul>
        </section>

        {/* MATRÍCULA */}
        <section id="matricula" className="flex flex-col gap-6 bg-white p-10 rounded-[2rem] border border-stone-200 shadow-sm">
          <h2 className="text-3xl font-bold text-[#5C4033] flex items-center gap-3">
            <div className="bg-stone-100 hidden sm:block p-3 h-fit rounded-xl">
                  <GraduationCap className="text-[#8B5E3C]  w-6 h-6" />
                </div>
            <p className="text-2xl xsm:text-3xl">Conquistei minha vaga. Qual o próximo passo?</p>
          </h2>

          <h3 className="text-xl xsm:text-2xl font-semibold text-stone-800">
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
        <section id="sigaa" className="flex flex-col gap-6 bg-white p-10 rounded-[2rem] border border-stone-200 shadow-sm">
          <h3 className="text-2xl xsm:text-3xl font-bold text-[#5C4033]">
            SIGAA
          </h3>

          <div className="flex flex-col gap-4 text-lg leading-relaxed">
            <p>
              Após obter o número de matrícula, o estudante deve realizar o autocadastro
              no SIGAA e aguardar o início das aulas. No primeiro semestre, a matrícula
              nas disciplinas é feita pelas unidades acadêmicas.
            </p>
            <p>
              A partir do segundo semestre, o estudante deve acompanhar o calendário
              acadêmico e realizar sua matrícula diretamente no sistema.
            </p>
            <p className="bg-[#DDB892]/20 p-4 rounded-xl border-l-4 border-[#DDB892]">
              Guarde seu usuário e senha, pois eles serão utilizados ao longo de toda a
              trajetória acadêmica.
            </p>
          </div>

          <a
            href="https://bioparasitohospedeiro.iptsp.ufg.br/p/38289-orientacao-para-cadastro-no-sigaa-e-matricula-online"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-8 py-3 bg-[#8B5E3C] text-white font-bold rounded-full hover:bg-[#5C4033] transition-colors shadow-md"
          >
            Acessar o SIGAA
          </a>
        </section>

        {/* BENEFÍCIOS */}
        <section id="beneficios" className="flex flex-col gap-10">
          <h2 className="text-3xl font-bold text-[#5C4033]">
            O que a UFG tem para me oferecer?
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-6">
              {/* CARD: E-mail institucional */}
              <div className="flex-1 xxsm:min-w-[300px] bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex gap-4">
                <div className="bg-stone-100 p-3 h-fit rounded-xl">
                  <Mail className="text-[#8B5E3C] w-6 h-6" />
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-xl font-bold text-[#5C4033]">E-mail institucional</h4>
                  <p className="text-lg leading-relaxed">
                    O aluno pode solicitar a criação do e-mail institucional acessando o
                    SIGAA, concordando com o termo de uso e aguardando a liberação, que
                    ocorre em até 24 horas.
                  </p>
                </div>
              </div>

              {/* CARD: Passe Livre Estudantil */}
              <div className="flex-1 xxsm:min-w-[300px] bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex gap-4">
                <div className="bg-stone-100 p-3 h-fit rounded-xl">
                  <Wallet className="text-[#8B5E3C] w-6 h-6" />
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-xl font-bold text-[#5C4033]">Passe Livre Estudantil</h4>
                  <p className="text-lg leading-relaxed">
                    O benefício pode ser solicitado pelo site do{" "}
                    <a href="https://www.juventude.go.gov.br/" className="underline font-bold text-[#8B5E3C]">
                      SITPASS
                    </a>.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              {/* CARD: Restaurante Universitário */}
              <div className="flex-1 xxsm:min-w-[300px] bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex gap-4">
                <div className="bg-stone-100 p-3 h-fit rounded-xl">
                  <Utensils className="text-[#8B5E3C] w-6 h-6" />
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-xl font-bold text-[#5C4033]">Restaurante Universitário</h4>
                  <p className="text-lg leading-relaxed">
                    O RU oferece café da manhã (R$ 2,50), almoço (R$ 4,00) e jantar
                    (R$ 4,00). No campus de Aparecida são servidos café e almoço.
                    Estudantes com bolsa de isenção não pagam.
                  </p>
                </div>
              </div>

              {/* CARD: Bolsas e auxílios */}
              <div className="flex-1 xxsm:min-w-[300px] bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex gap-4">
                <div className="bg-stone-100 p-3 h-fit rounded-xl">
                  <GraduationCap className="text-[#8B5E3C] w-6 h-6" />
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-xl font-bold text-[#5C4033]">Bolsas e auxílios</h4>
                  <p className="text-lg leading-relaxed">
                    Bolsa Moradia, Casa do Estudante Universitário (CEU), Alimentação e
                    Bolsa Acolhe.
                  </p>
                  <a href="https://prae.ufg.br/p/29469-programas-e-bolsas" className="inline-block font-bold text-[#8B5E3C] hover:underline">
                    Ver todas as bolsas disponíveis →
                  </a>
                </div>
              </div>
            </div>

            {/* TRANSPORTE */}
            <div className="w-full bg-[#3C2F2F] text-stone-100 rounded-[2rem] p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-8 overflow-hidden relative">
              <div className="flex-1 flex flex-col gap-6 relative z-10">
                <div className="flex items-center gap-3 text-[#DDB892]">
                  <Bus className="w-8 h-8" />
                  <h4 className="text-3xl font-bold text-white">Transporte</h4>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.rmtcgoiania.com.br/linhas-e-trajetos/area-sul/?buscar=555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl underline font-medium text-[#DDB892] hover:text-white transition-colors"
                  >
                    Linha 555 – Campus Aparecida de Goiânia
                  </a>
                  <p className="opacity-90 text-lg leading-relaxed">
                    Trajeto: <strong>Terminal Araguaia → UFG FCT Aparecida</strong>
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 sml:min-w-[280px] relative z-10">
                <h5 className="font-bold text-[#DDB892] text-lg mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                  Horários de Saída
                </h5>
                <ul className="flex flex-col flex-wrap xxms:w-90  sml:h-40 gap-2 font-mono text-base">
                  <li className="flex justify-between border-b border-white/5 pb-1 sml:pr-5 gap-3"><span>07h19</span> <span>→ 07h55</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-1 sml:pr-5 gap-3"><span>09h22</span> <span>→ 09h55</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-1 sml:pr-5 gap-3"><span>11h42</span> <span>→ 12h10</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-1 sml:pr-5 gap-3"><span>12h37</span> <span>→ 13h05</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-1 gap-3"><span>14h21</span> <span>→ 15h10</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-1 gap-3"><span>16h38</span> <span>→ 17h10</span></li>
                  <li className="flex justify-between border-b border-white/5 "><span>17h37</span> <span>→ 18h10</span></li>
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