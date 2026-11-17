import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight, Minus, Plus } from "lucide-react"
import Eyebrow from "../Eyebrow"

const faqs = [
  { q: "Preciso ter um carregador em casa?", a: "Não necessariamente. Você pode usar pontos públicos ou no trabalho. Ter uma solução residencial costuma trazer mais conveniência; a instalação deve ser avaliada por um profissional habilitado." },
  { q: "Como escolher a autonomia ideal?", a: "Pense na sua rotina diária e nas viagens mais frequentes. Nossa equipe ajuda a comparar trajetos reais com a autonomia de cada modelo." },
  { q: "Posso usar meu carro atual na troca?", a: "Sim. Fazemos uma avaliação individual do seu usado, com critérios transparentes, e ele pode compor a entrada." },
  { q: "Como funciona o test-drive?", a: "Você escolhe dia e horário, leva sua CNH e reserva cerca de 45 minutos para conhecer o carro, conversar e dirigir." },
]

function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-[#F5F6F2] px-6 pb-24 md:px-16 lg:px-24">
      <div className="grid gap-12 border-t border-[#D9DFD6] pt-16 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Eyebrow>Pode perguntar</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-5xl font-sans font-medium leading-tight">
            Toda mudança começa com uma pergunta.
          </h2>
          <p className="mt-6 max-w-xs text-sm text-[#687169]">
            Nossa equipe está aqui para tornar sua escolha mais simples, sem jargões e no seu tempo.
          </p>
          <Link to="/contato" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold">
            Fale com a Voltes <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="divide-y divide-[#D9DFD6] border-y border-[#D9DFD6]">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="text-lg">{f.q}</span>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                {isOpen && <p className="max-w-lg pb-6 text-sm leading-relaxed text-[#687169]">{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
