import { Link } from "react-router-dom"
import { ArrowUpRight, Wallet, RefreshCw, PlugZap } from "lucide-react"
import Eyebrow from "../Eyebrow"

const items = [
  { icon: Wallet, title: "Financiamento sob medida", text: "Prazos e entrada alinhados ao seu momento." },
  { icon: RefreshCw, title: "Seu usado como parte do caminho", text: "Avaliação individual, com critérios transparentes." },
  { icon: PlugZap, title: "Recarga pensada desde o início", text: "Orientação para a infraestrutura do seu imóvel." },
]

function Financing() {
  return (
    <section className="bg-[#101613] px-6 py-20 text-[#F5F6F2] md:px-16 lg:px-24">
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <Eyebrow light>A escolha também precisa fazer sentido na conta</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-5xl font-sans font-medium leading-tight">
            Um novo carro.<br />Um plano que é seu.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-[#AEB9AF]">
            Converse sobre financiamento, avaliação do seu usado e possibilidades de recarga. Sem letras miúdas na conversa.
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center gap-6 rounded-md bg-[#C2F75A] px-6 py-4 text-sm font-semibold text-[#101613] transition-opacity hover:opacity-80"
          >
            Converse com especialista <ArrowUpRight size={16} />
          </Link>
        </div>

        <ul className="flex flex-col divide-y divide-[#374239] border-y border-[#374239]">
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4 py-6">
              <Icon size={20} color="#C2F75A" className="mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-[#AEB9AF]">{text}</p>
              </div>
            </li>
          ))}
          <li className="pt-6 text-xs text-[#AEB9AF]">
            Condições sujeitas à análise e à proposta individual. Nenhuma simulação implica aprovação de crédito.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Financing
