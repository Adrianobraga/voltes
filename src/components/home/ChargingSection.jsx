import { Link } from "react-router-dom"
import { ArrowUpRight, PlugZap } from "lucide-react"
import Eyebrow from "../Eyebrow"

function ChargingSection() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="relative min-h-80">
        <img src="/images/recarga.jpg" alt="Carro elétrico carregando em uma garagem residencial" className="absolute inset-0 h-full w-full object-cover" />
        <p className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#F5F6F2] px-3 py-2 text-xs">
          <PlugZap size={14} /> Sua próxima parada pode ser em casa.
        </p>
      </div>

      <div className="flex flex-col justify-center bg-[#EBEFE6] px-6 py-16 md:px-16">
        <Eyebrow>Elétrico na vida real</Eyebrow>
        <h2 className="mt-6 text-4xl md:text-5xl font-sans font-medium leading-tight">
          Menos ruído.<br />Mais possibilidades.
        </h2>
        <p className="mt-6 max-w-md leading-relaxed text-[#687169]">
          Acordar com a bateria pronta. Redescobrir o silêncio. Trocar o posto por novos destinos.
          A experiência elétrica é mais simples do que parece.
        </p>
        <div className="mt-8 grid max-w-md grid-cols-2 gap-6 text-sm">
          <p><span className="block text-[#687169]">01 /</span>Recarga no seu tempo</p>
          <p><span className="block text-[#687169]">02 /</span>Condução sem emissões locais</p>
        </div>
        <Link
          to="/experiencia-eletrica"
          className="mt-10 inline-flex w-fit items-center gap-6 rounded-md bg-[#101613] px-6 py-4 text-sm font-semibold text-[#F5F6F2] transition-opacity hover:opacity-80"
        >
          Entenda a vida com um elétrico <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  )
}

export default ChargingSection
