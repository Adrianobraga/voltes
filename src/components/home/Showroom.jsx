import { Link } from "react-router-dom"
import { ArrowUpRight, MapPin } from "lucide-react"
import Eyebrow from "../Eyebrow"

function Showroom() {
  return (
    <section className="bg-[#F5F6F2] px-6 py-20 md:px-16 lg:px-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <Eyebrow>Voltes São Paulo</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-6xl font-sans font-medium">Entre. Sinta. Descubra.</h2>
        </div>
        <Link to="/contato" className="hidden items-center gap-4 rounded-md border border-[#AEB9AF] px-5 py-3 text-sm font-semibold hover:bg-[#EBEFE6] sm:flex">
          Planeje sua visita <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="relative mt-10 h-72 overflow-hidden rounded-sm md:h-[26rem]">
        <img src="/images/showroom.jpg" alt="Showroom da Voltes com vista para o jardim" className="h-full w-full object-cover" />
        <p className="absolute bottom-4 left-4 flex items-center gap-3 bg-[#F5F6F2] px-3 py-2 text-xs">
          <MapPin size={14} /> Jardins, São Paulo <span className="text-[#687169]">/</span> Visitas com hora marcada
        </p>
      </div>

      <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row">
        <p className="max-w-sm text-2xl text-[#687169]">Um espaço para tirar as dúvidas. E deixar a curiosidade dirigir.</p>
        <p className="max-w-md text-sm leading-relaxed text-[#687169]">
          Veja os acabamentos de perto, explore as tecnologias e encontre sua posição ao volante. Nossa equipe recebe você com tempo, atenção e um bom café.
        </p>
      </div>
    </section>
  )
}

export default Showroom
