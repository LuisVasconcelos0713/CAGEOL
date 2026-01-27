import { motion } from "framer-motion"
import { Calendar, Clock, FileText } from "lucide-react"

const CardAtas = ({ meeting, date, PDF_URL, endTime, startTime }) => {

  if(!meeting) return (<span></span>)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        bg-[var(--color-backgroundPrimary)]
        text-[var(--color-textPrimary)]
        border border-gray-200/60
        rounded-2xl
        p-6
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        max-w-[360px]
        w-full
        flex
        flex-col
        gap-4
      "
    >
      <h1 className="text-xl font-semibold leading-tight">
        {meeting}
      </h1>

      <div className="flex flex-col gap-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span className="flex items-center gap-1">{!date ? <p>Não informado</p> : date}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span className="flex items-center gap-1">Início: {!startTime ? <p>Não informado</p> : startTime}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span className="flex items-center gap-1">Fim: {!endTime ? <p>Não informado</p> : endTime}</span>
        </div>
      </div>

      <a
        href={PDF_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-4
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-button
          text-textSecondary
          px-5
          py-2.5
          text-sm
          font-medium
          transition-all
          duration-200
          hover:scale-[1.03]
          hover:opacity-90
        "
      >
        <FileText size={16} />
        Ver ata completa
      </a>
    </motion.div>
  )
}

export default CardAtas
