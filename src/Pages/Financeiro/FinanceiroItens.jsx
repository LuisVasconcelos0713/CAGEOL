
const FinanceiroItens = ({Titulo,Link}) => {

    return(
          <ul className="list-disc pl-6 space-y-2 text-[#584738] mt-2">
            <li>
              <a href={Link} className="underline hover:text-[#76461B]">
                {Titulo}
              </a>
            </li>
          </ul>
    )
}

export default FinanceiroItens;