import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

const col = "flex flex-col gap-3 text-sm"
const title = "mb-4 text-[11px] font-medium uppercase tracking-wider text-[#AEB9AF]"

function Footer() {
  return (
    <footer className="bg-[#101613] px-6 pt-16 md:px-16 lg:px-24 text-[#F5F6F2]">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="text-5xl font-sans font-bold">voltes/</p>
          <p className="mt-6 text-[#AEB9AF]">Novos caminhos. Outra energia.</p>
          <div className="mt-3 flex gap-5 text-sm">
            <a href="#" className="inline-flex items-center gap-1 hover:text-[#C2F75A]">Instagram <ArrowUpRight size={12} /></a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-[#C2F75A]">LinkedIn <ArrowUpRight size={12} /></a>
          </div>
        </div>

        <div>
          <p className={title}>Explore</p>
          <ul className={col}>
            <li><Link to="/veiculos" className="hover:text-[#C2F75A]">Nossos veículos</Link></li>
            <li><Link to="/experiencia-eletrica" className="hover:text-[#C2F75A]">Experiência elétrica</Link></li>
            <li><Link to="/sobre" className="hover:text-[#C2F75A]">Sobre a Voltes</Link></li>
            <li><Link to="/contato" className="hover:text-[#C2F75A]">Agende um test-drive</Link></li>
          </ul>
        </div>

        <div>
          <p className={title}>Vamos conversar</p>
          <ul className={col}>
            <li>ola@voltes.example</li>
            <li>(11) 4000-0000</li>
            <li className="text-xs text-[#AEB9AF]">Seg–sex, 9h–19h • Sáb, 10h–17h</li>
          </ul>
        </div>

        <div>
          <p className={title}>Voltes São Paulo</p>
          <p className="text-sm leading-relaxed">Av. Horizonte, 1200 — Jardins<br />São Paulo, SP</p>
          <Link to="/contato" className="mt-4 inline-flex items-center gap-1 text-sm text-[#C2F75A]">
            Conheça nosso showroom <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>

      <div className="mt-14 border-t border-[#374239] py-6 text-xs text-[#AEB9AF]">
        <div className="flex flex-col justify-between gap-3 md:flex-row">
          <p>© 2026 Voltes. Uma nova direção.</p>
          <div className="flex gap-6">
            <a href="#">Privacidade</a>
            <a href="#">Termos de uso</a>
            <a href="#">Preferências de cookies</a>
          </div>
        </div>
        <p className="mt-4 leading-relaxed">
          Projeto conceitual. Veículos, imagens, preços, especificações, endereço e contatos são fictícios e ilustrativos, sem vínculo com fabricantes reais.
          ¹ Autonomia ilustrativa; condições de uso, clima e trajeto alteram o alcance. Não constitui oferta comercial.
        </p>
      </div>
    </footer>
  )
}

export default Footer
