import { FileX2} from "lucide-react";
import HeaderText from "../../Components/HeaderText/HeaderText";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import NotFoundCard from "../../Components/NotFoundCard/NotFoundCard";
import { Link } from "react-router";

const InformesCurso = () => {

    const {BASE_URL} = useContext(AppContext)
    const [dataForm, setDataForm] = useState([])
    const [loading, setLoading] = useState(true)


    const getDataForm = async () => {
        axios.get(`${BASE_URL}/InformesCurso`).then(res => setDataForm(res.data)).finally(setLoading(false))
    }

    useEffect(() => {
        getDataForm()
    },[])

    return(
        <div className="">
            <HeaderText title="Informes Curso" subtitle="Encontre aqui todo os informes dos cursos necessário do CAGEOL!" background={true}></HeaderText>
            {loading ? <Loading></Loading> : dataForm.length > 0 ? 
            dataForm.map((data) => (
                <main className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-24 text-stone-700">
                <section id="sigaa" className="flex flex-col gap-6 bg-white p-10 rounded-[2rem] border border-stone-200 shadow-sm">
                    <h3 className="text-2xl xsm:text-3xl font-bold text-[#5C4033]">
                        {data.Titulo}
                    </h3>

                    <div className="flex flex-col gap-4 text-lg leading-relaxed">
                        <p>
                            {data.Descricao}
                        </p>
                        {!data.InfoImportante ? <span></span> : <p className="bg-[#DDB892]/20 p-4 rounded-xl border-l-4 border-[#DDB892]">{data.InfoImportante}</p>}
                    </div>

                    <Link
                        to={data.Link}
                        className="w-fit px-8 py-3 bg-[#8B5E3C] text-white font-bold rounded-full hover:bg-[#5C4033] transition-colors shadow-md"
                    >
                        {data.TituloBotao}
                    </Link>
                </section>
            </main>
            ))
            
            : <NotFoundCard text={'Sem Informes no momento!'} icon={FileX2}></NotFoundCard>}
        </div>
    )
}

export default InformesCurso;