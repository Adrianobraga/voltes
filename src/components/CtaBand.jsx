import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import Eyebrow from "./Eyebrow"

function CtaBand({ title, text, label = "Agendar meu test-drive", to = "/contato", eyebrow = "Menos dúvida. Mais experiência." }) {
  return (
    <section className="bg-[#EBEFE6] px-6 py-20 md:px-16 lg:px-24">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-xl text-4xl md:text-5xl font-sans font-medium leading-tight">{title}</h2>
        </div>
        <div className="max-w-md">
          <p className="text-[#687169] leading-relaxed">{text}</p>
          <Link
            to={to}
            className="mt-6 inline-flex items-center gap-6 rounded-md bg-[#101613] px-6 py-4 text-sm font-semibold text-[#F5F6F2] transition-opacity hover:opacity-80"
          >
            {label} <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CtaBand
