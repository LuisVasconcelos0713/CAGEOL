import { useContext, useEffect, useState } from "react";
import HeaderText from "../../Components/HeaderText/HeaderText";
import axios from "axios";
import { AppContext } from "../../Context/Appcontext";

const GuiadoEstudante = () => {
    const { BASE_URL } = useContext(AppContext)
    const [noticias, setNoticias] = useState([])

    const getNoticias = async () => {
        await axios.get(`${BASE_URL}/Noticias`).then((res) => {setNoticias(res.data)})
    }

    useEffect(() => {
        getNoticias()
    },[])

    return(
        <div className="">
            <HeaderText title="Guia do estudante" subtitle="O Guia do estudante do CAGEOL!" background={true}></HeaderText>
            {noticias.map((news) => (
                <div className="">
                    <a href="/">{news.Produto}</a>
                </div>
            ))}
            <h1>Teste</h1>
        </div>
    )
}

export default GuiadoEstudante;