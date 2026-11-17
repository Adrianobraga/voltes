import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import {
  ArrowLeft, ArrowRight, ArrowUpRight, ArrowDown, Check, Maximize2, X,
  Sun, AudioLines, Smartphone, Heart,
} from "lucide-react"
import { vehicles, getVehicle, formatPrice } from "../data/vehicles"
import Breadcrumb from "../components/Breadcrumb"
import Eyebrow from "../components/Eyebrow"
import CtaBand from "../components/CtaBand"
import VehicleCard from "../components/VehicleCard"
import NotFound from "./NotFound"

const colors = [
  { name: "Prata lunar", hex: "#C9CCCC" },
  { name: "Verde floresta", hex: "#34423A" },
  { name: "Areia", hex: "#E9E5DA" },
  { name: "Grafite", hex: "#1E2321" },
]

const tabs = [
  { id: "visao-geral", label: "Visão geral" },
  { id: "design", label: "Design & conforto" },
  { id: "ficha", label: "Ficha técnica" },
  { id: "outros", label: "Outros modelos" },
]

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-6 border-b border-[#D9DFD6] py-4 text-sm">
      <dt className="text-[#687169]">{label}</dt>
      <dd className="text-right">{value}</dd>
    </div>
  )
}

function VeiculoDetalhe() {
  const { id } = useParams()
  const vehicle = getVehicle(id)
  const [color, setColor] = useState(0)
  const [slide, setSlide] = useState(0)
  const [zoom, setZoom] = useState(false)

  if (!vehicle) return <NotFound />

  const gallery = [
    { src: vehicle.hero, label: "Exterior" },
    { src: "/images/interior.jpg", label: "Interior" },
    { src: "/images/recarga.jpg", label: "Recarga" },
  ]
  const others = vehicles.filter((v) => v.id !== vehicle.id).slice(0, 3)
  const go = (d) => setSlide((s) => (s + d + gallery.length) % gallery.length)

  return (
    <div className="bg-[#F5F6F2]">
      <section className="px-6 pt-8 md:px-16 lg:px-24">
        <div className="flex items-center justify-between">
          <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Veículos", to: "/veiculos" }, { label: vehicle.name }]} />
          <Link to="/veiculos" className="inline-flex items-center gap-1 text-xs"><ArrowLeft size={12} /> Voltar ao catálogo</Link>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#D9DFD6]">
              <img src={gallery[slide].src} alt={`${vehicle.name} — ${gallery[slide].label}`} className="h-full w-full object-cover" />
              <span className="absolute left-4 top-4 bg-[#F5F6F2] px-3 py-2 text-[10px] font-bold uppercase tracking-wider">Coleção Voltes / Conceito</span>
              <button aria-label="Ampliar imagem" onClick={() => setZoom(true)} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F6F2]"><Maximize2 size={16} /></button>
              <button aria-label="Imagem anterior" onClick={() => go(-1)} className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#101613] text-white"><ArrowLeft size={16} /></button>
              <button aria-label="Próxima imagem" onClick={() => go(1)} className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#101613] text-white"><ArrowRight size={16} /></button>
              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#101613]">
                {String(slide + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")} &nbsp;•&nbsp; {gallery[slide].label}
              </p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              {gallery.map((g, i) => (
                <button key={g.label} onClick={() => setSlide(i)} className="text-left" aria-label={`Ver ${g.label}`}>
                  <div className={`aspect-[2.4/1] overflow-hidden rounded-sm border-2 ${i === slide ? "border-[#101613]" : "border-transparent"}`}>
                    <img src={g.src} alt="" className="h-full w-full object-cover" />
                  </div>
                  <span className="mt-2 block text-xs text-[#687169]">{g.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow>Sedã elétrico / Tração {vehicle.traction.toLowerCase()}</Eyebrow>
            <h1 className="mt-6 text-5xl md:text-6xl font-sans font-medium">{vehicle.name}</h1>
            <p className="mt-3 text-xl text-[#687169]">{vehicle.tagline}</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#687169]">{vehicle.description}</p>

            <div className="mt-6 border-t border-[#D9DFD6] pt-6">
              <div className="flex justify-between text-xs">
                <span className="font-semibold">Cor exterior</span>
                <span className="text-[#687169]">{colors[color].name}</span>
              </div>
              <div className="mt-4 flex gap-3">
                {colors.map((c, i) => (
                  <button
                    key={c.name}
                    aria-label={c.name}
                    aria-pressed={i === color}
                    onClick={() => setColor(i)}
                    className={`h-9 w-9 rounded-full border border-[#AEB9AF] ${i === color ? "outline outline-2 outline-offset-2 outline-[#101613]" : ""}`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-md border-2 border-[#101613] p-4">
              <div>
                <p className="text-sm font-semibold">Long Range</p>
                <p className="mt-1 text-xs text-[#687169]">{vehicle.battery} kWh • Interior em {vehicle.interior}</p>
              </div>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#101613] text-white"><Check size={12} /></span>
            </div>

            <p className="mt-6 text-xs text-[#687169]">A partir de</p>
            <p className="text-4xl font-semibold">{formatPrice(vehicle.price)}</p>
            <p className="mt-1 text-[11px] text-[#687169]">Valor conceitual. Não constitui oferta comercial.</p>

            <Link
              to={`/contato?veiculo=${vehicle.id}`}
              className="mt-6 flex items-center justify-center gap-6 rounded-md bg-[#C2F75A] px-6 py-4 text-sm font-semibold transition-opacity hover:opacity-80"
            >
              Quero fazer um test-drive <img src="/Vector.svg" alt="" />
            </Link>
            <Link
              to="/contato"
              className="mt-3 flex items-center justify-center gap-6 rounded-md border border-[#AEB9AF] px-6 py-4 text-sm font-semibold transition-colors hover:bg-[#EBEFE6]"
            >
              Falar com um especialista <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <nav className="mt-12 border-t border-[#D9DFD6] px-6 md:px-16 lg:px-24">
        <ul className="flex gap-8 overflow-x-auto py-5 text-sm text-[#687169]">
          {tabs.map((t, i) => (
            <li key={t.id}><a href={`#${t.id}`} className={`whitespace-nowrap hover:text-[#101613] ${i === 0 ? "font-semibold text-[#101613]" : ""}`}>{t.label}</a></li>
          ))}
        </ul>
      </nav>

      <section id="visao-geral" className="grid grid-cols-2 gap-8 bg-[#101613] px-6 py-12 text-[#F5F6F2] md:px-16 lg:grid-cols-4 lg:px-24">
        {[
          [vehicle.range, "km", "Autonomia ilustrativa¹"],
          [vehicle.power, "cv", "Potência conceitual"],
          ["6,8", "s", "0 a 100 km/h²"],
          ["28", "min", "Recarga de 20 a 80%²"],
        ].map(([n, u, l]) => (
          <div key={l}>
            <p className="text-5xl font-light">{n} <span className="text-xl text-[#C2F75A]">{u}</span></p>
            <p className="mt-3 text-xs text-[#AEB9AF]">{l}</p>
          </div>
        ))}
      </section>

      <section id="design" className="grid items-center gap-12 px-6 py-24 md:px-16 lg:grid-cols-[1.1fr_1fr] lg:px-24">
        <img src="/images/interior.jpg" alt="Interior do veículo com teto panorâmico" className="w-full rounded-sm object-cover" />
        <div>
          <Eyebrow>Projetado para sentir</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-5xl font-sans font-medium leading-tight">Lá fora, o mundo.<br />Aqui dentro, você.</h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#687169]">
            Um ambiente sereno, feito de materiais táteis e tecnologia que não disputa sua atenção. Luz natural, espaço e os detalhes que tornam cada trajeto seu.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#D9DFD6] pt-6 text-xs">
            <p><Sun size={18} className="mb-3" />Teto panorâmico</p>
            <p><AudioLines size={18} className="mb-3" />Áudio imersivo</p>
            <p><Smartphone size={18} className="mb-3" />Conexão sem fios</p>
          </div>
        </div>
      </section>

      <section id="ficha" className="px-6 pb-20 md:px-16 lg:px-24">
        <Eyebrow>Cada detalhe conta</Eyebrow>
        <div className="mt-6 flex items-end justify-between">
          <h2 className="text-4xl md:text-5xl font-sans font-medium">Conheça por completo.</h2>
          <a href="#ficha" className="hidden items-center gap-1 text-xs sm:inline-flex">Ficha técnica conceitual <ArrowDown size={12} /></a>
        </div>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="border-b border-[#D9DFD6] pb-4 text-sm font-semibold">Motor e bateria</h3>
            <dl>
              <Row label="Motorização" value={`100% elétrica • ${vehicle.traction}`} />
              <Row label="Potência / torque²" value={`${vehicle.power} cv / ${vehicle.torque} Nm`} />
              <Row label="Capacidade da bateria" value={`${vehicle.battery} kWh`} />
              <Row label="Autonomia ilustrativa¹" value={`Até ${vehicle.range} km`} />
              <Row label="Recarga AC / DC²" value="11 kW / até 150 kW" />
            </dl>
          </div>
          <div>
            <h3 className="border-b border-[#D9DFD6] pb-4 text-sm font-semibold">Dimensões e equipamentos</h3>
            <dl>
              <Row label="Comprimento / largura" value={vehicle.dims.length} />
              <Row label="Entre-eixos" value={vehicle.dims.wheelbase} />
              <Row label="Porta-malas" value={vehicle.dims.trunk} />
              <Row label="Ocupantes" value={vehicle.dims.seats} />
              <Row label="Assistências" value="ACC, frenagem e câmera 360°" />
            </dl>
          </div>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-[#687169]">
          ¹ Alcance ilustrativo, sem ciclo de homologação. ² Dados de desempenho e recarga fictícios, apenas para este conceito. Na vida real, resultados dependem de temperatura, bateria, carregador e condições de condução. Todos os equipamentos descritos são conceituais.
        </p>
      </section>

      <section id="outros" className="bg-[#EBEFE6] px-6 py-20 md:px-16 lg:px-24">
        <Eyebrow>Continue descobrindo</Eyebrow>
        <div className="mt-6 flex items-end justify-between">
          <h2 className="text-4xl md:text-5xl font-sans font-medium">Outros jeitos de ir além.</h2>
          <Link to="/veiculos" className="hidden items-center gap-1 text-xs sm:inline-flex">Ver toda a coleção <ArrowUpRight size={12} /></Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((v) => <VehicleCard key={v.id} vehicle={v} />)}
        </div>
      </section>

      <CtaBand
        title={<>Agora, sinta tudo isso.<br />Ao vivo.</>}
        text={`Reserve um encontro com o ${vehicle.name}. Um especialista acompanha você do primeiro olhar ao primeiro quilômetro.`}
        to={`/contato?veiculo=${vehicle.id}`}
        eyebrow="Menos dúvida. Mais experiência."
      />

      {zoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6" role="dialog" aria-modal="true" onClick={() => setZoom(false)}>
          <button aria-label="Fechar" className="absolute right-6 top-6 text-white"><X /></button>
          <img src={gallery[slide].src} alt="" className="max-h-full max-w-full object-contain" />
        </div>
      )}
    </div>
  )
}

export default VeiculoDetalhe
