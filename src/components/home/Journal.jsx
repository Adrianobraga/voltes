import { ArrowUpRight } from "lucide-react"
import Eyebrow from "../Eyebrow"

const posts = [
  { image: "/images/journal-1.jpg", tag: "Dia a dia elétrico", time: "5 min de leitura", title: "Carregar em casa: por onde começar?" },
  { image: "/images/journal-2.jpg", tag: "Na estrada", time: "7 min de leitura", title: "Seu primeiro roteiro de viagem elétrica." },
  { image: "/images/journal-3.jpg", tag: "Design & tecnologia", time: "4 min de leitura", title: "O luxo de ouvir menos e sentir mais." },
]

function Journal() {
  return (
    <section className="bg-[#F5F6F2] px-6 pb-20 md:px-16 lg:px-24">
      <Eyebrow>Em movimento / Journal Voltes</Eyebrow>
      <div className="mt-6 flex items-end justify-between gap-6">
        <h2 className="max-w-xl text-3xl md:text-5xl font-sans font-medium">Boas ideias para novos caminhos.</h2>
        <a href="#" className="hidden items-center gap-1 text-sm sm:inline-flex">Explore o journal <ArrowUpRight size={14} /></a>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {posts.map((p) => (
          <a key={p.title} href="#" className="group block">
            <div className="aspect-[16/10] overflow-hidden bg-[#D9DFD6]">
              <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-3 flex justify-between text-[10px] uppercase tracking-wider text-[#687169]">
              <span>{p.tag}</span><span className="normal-case">{p.time}</span>
            </div>
            <h3 className="mt-3 flex items-start justify-between gap-4 text-lg">
              {p.title} <ArrowUpRight size={16} className="mt-1 shrink-0" />
            </h3>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Journal
