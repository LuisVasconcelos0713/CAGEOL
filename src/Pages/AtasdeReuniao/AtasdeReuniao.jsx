import { useContext, useEffect, useState } from "react";
import HeaderText from "../../Components/HeaderText/HeaderText";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import CardAtas from "../../Components/CardAtas/CardAtas";
import Loading from "../../Components/Loading/Loading";
import { FileClock } from "lucide-react";
import NotFoundCard from "../../Components/NotFoundCard/NotFoundCard";

const AtasdeReuniao = () => {

    const {BASE_URL} = useContext(AppContext)
    const [dataForm, setDataForm] = useState([])
    const [loading, setLoading] = useState((true))

    const getDataForm = async () => {
        axios.get(`${BASE_URL}/ATAS`).then(res => setDataForm(res.data)).finally(() => setLoading(false))
    }

    useEffect(() => {
        getDataForm()
    },[])
    
    console.log(dataForm)

    return(
        <div className="">
            <HeaderText title="Atas de reunião" subtitle="Econtre aqui todas as Atas de Reunião do CAGEOL!" background={true}></HeaderText>
            <div className="flex flex-wrap items-center justify-center gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {loading ? (<Loading/>) : (dataForm.length > 0) 
                ? dataForm.map((data) => (
                <CardAtas meeting={data.Reuniao} date={data.Data} startTime={data.HoraInicio} endTime={data.HoraFim} PDF_URL={data.PDF_URL} t></CardAtas>
                 )) 
                 : (<NotFoundCard text={"Sem registro de Atas no momento"} icon={FileClock} ></NotFoundCard>)}
            </div>

        </div>
    )
}

export default AtasdeReuniao;