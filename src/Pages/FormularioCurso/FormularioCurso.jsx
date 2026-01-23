import { useContext, useEffect, useState } from "react";
import HeaderText from "../../Components/HeaderText/HeaderText";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import FormularioCard from "../../Components/FormularioCard/FormularioCard";
import Loading from "../../Components/Loading/Loading";
import { FileX } from "lucide-react";
import NotFoundCard from "../../Components/NotFoundCard/NotFoundCard";

const FormularioCurso = () => {
    const {BASE_URL} = useContext(AppContext)
    const [forms,setForms] = useState([])
    const [loading, setLoading] = useState(true)

    const getFormsData = async () => {
        axios.get(`${BASE_URL}/FormulariosCurso`).then(res => setForms(res.data)).finally(() => setLoading(false))
    }

    useEffect(() => {
        getFormsData()
    },[])

    return(
        <div className="">
            <HeaderText title="Formulario Curso" subtitle="Econtre aqui todos os formulario dos cursos necessário do CAGEOL!" background={true}></HeaderText>
            <div className="flex flex-wrap items-center justify-center gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {loading ? (<Loading/>) : (forms.length > 0) ? forms.map((data,index) => (
                    <FormularioCard Titulo={data.Titulo} Descricao={data.Descricao} Link={data.Link} DataValidade={data.Validade} id={index}></FormularioCard>
                )): (<NotFoundCard text={'Sem formulários no momento!'} icon={FileX}></NotFoundCard>)}
            </div>
        </div>
    )
}

export default FormularioCurso;