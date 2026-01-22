import { useContext, useEffect, useState } from "react";
import HeaderText from "../../Components/HeaderText/HeaderText";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import CardAtas from "../../Components/CardAtas/CardAtas";

const AtasdeReuniao = () => {

    const {BASE_URL} = useContext(AppContext)
    const [dataForm, setDataForm] = useState([])

    const getDataForm = async () => {
        axios.get(`${BASE_URL}/ATAS`).then(res => setDataForm(res.data))
    }

    useEffect(() => {
        getDataForm()
    },[])
    
    console.log(dataForm)

    return(
        <div className="">
            <HeaderText title="Atas de reunião" subtitle="Econtre aqui todas as Atas de Reunião do CAGEOL!" background={true}></HeaderText>
            <div className="flex flex-wrap items-center justify-center gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {dataForm.map((data) => (
                <CardAtas meeting={data.Reuniao} date={data.Data} startTime={data.HoraInicio} endTime={data.HoraFim} PDF_URL={data.PDF_URL} t></CardAtas>
                 ))}
            </div>

        </div>
    )
}

export default AtasdeReuniao;