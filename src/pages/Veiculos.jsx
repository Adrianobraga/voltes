import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight, Minus, MessageSquare } from "lucide-react"
import { vehicles, categories, formatPrice } from "../data/vehicles"
import VehicleCard from "../components/VehicleCard"
import Breadcrumb from "../components/Breadcrumb"
import Eyebrow from "../components/Eyebrow"
import CtaBand from "../components/CtaBand"

const priceRanges = [
  { id: "p1", label: "Até R$ 200 mil", test: (v) => v.price <= 200000 },
  { id: "p2", label: "R$ 200 mil a R$ 300 mil", test: (v) => v.price > 200000 && v.price <= 300000 },
  { id: "p3", label: "Acima de R$ 300 mil", test: (v) => v.price > 300000 },
]
const rangeRanges = [
  { id: "r1", label: "Até 400 km", test: (v) => v.range <= 400 },
  { id: "r2", label: "400 a 500 km", test: (v) => v.range > 400 && v.range <= 500 },
  { id: "r3", label: "Acima de 500 km", test: (v) => v.range > 500 },
]
const tractions = ["Dianteira", "Traseira", "Integral"]

const sorters = {
  featured: { label: "Destaques", fn: () => 0 },
  priceAsc: { label: "Menor preço", fn: (a, b) => a.price - b.price },
  priceDesc: { label: "Maior preço", fn: (a, b) => b.price - a.price },
  range: { label: "Maior autonomia", fn: (a, b) => b.range - a.range },
}

const toggle = (set, value) => {
  const next = new Set(set)
  next.has(value) ? next.delete(value) : next.add(value)
  return next
}

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-[#D9DFD6] py-6">
      <p className="mb-4 flex items-center justify-between text-sm font-semibold">
        {title} <Minus size={14} />
      </p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}

function Check({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-[#687169]">
      <input type="checkbox" checked={checked} onChange={onChange} className="h-4 w-4 accent-[#101613]" />
      {label}
    </label>
  )
}

function Veiculos() {
  const [cats, setCats] = useState(new Set())
  const [prices, setPrices] = useState(new Set())
  const [ranges, setRanges] = useState(new Set())
  const [drives, setDrives] = useState(new Set())
  const [sort, setSort] = useState("featured")
  const [compare, setCompare] = useState(["vertice-01", "forma-x"])
  const [showCompare, setShowCompare] = useState(false)

  const clear = () => {
    setCats(new Set()); setPrices(new Set()); setRanges(new Set()); setDrives(new Set())
  }

  const list = useMemo(() => {
    const match = (set, defs, v) => set.size === 0 || defs.some((d) => set.has(d.id) && d.test(v))
    return vehicles
      .filter(
        (v) =>
          (cats.size === 0 || cats.has(v.category)) &&
          match(prices, priceRanges, v) &&
          match(ranges, rangeRanges, v) &&
          (drives.size === 0 || drives.has(v.traction))
      )
      .sort(sorters[sort].fn)
  }, [cats, prices, ranges, drives, sort])

  const selected = compare.map((id) => vehicles.find((v) => v.id === id)).filter(Boolean)
  const countOf = (id) => vehicles.filter((v) => v.category === id).length
  const toggleCompare = (id) =>
    setCompare((c) => (c.includes(id) ? c.filter((x) => x !== id) : c.length < 3 ? [...c, id] : c))

  return (
    <>
      <section className="bg-[#F5F6F2] px-6 pt-8 md:px-16 lg:px-24">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Veículos" }]} />
        <div className="mt-8"><Eyebrow>A energia certa para você</Eyebrow></div>
        <div className="mt-6 flex flex-col justify-between gap-8 pb-12 lg:flex-row lg:items-end">
          <h1 className="max-w-2xl text-5xl md:text-7xl font-sans font-medium leading-tight">
            Seu próximo elétrico está aqui.
          </h1>
          <div className="max-w-sm">
            <p className="text-lg leading-relaxed text-[#687169]">
              Explore nossa coleção conceitual. Compare estilos, descubra possibilidades e encontre o seu próximo movimento.
            </p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider">
              {String(vehicles.length).padStart(2, "0")} modelos • 100% elétricos
            </p>
          </div>
        </div>
      </section>

      <div className="border-y border-[#D9DFD6] bg-[#F5F6F2] px-6 py-4 md:px-16 lg:px-24">
        <div className="flex gap-2 overflow-x-auto">
          <button
            onClick={() => setCats(new Set())}
            className={`shrink-0 rounded-full px-5 py-2 text-sm ${cats.size === 0 ? "bg-[#101613] text-[#F5F6F2]" : "text-[#687169] hover:text-[#101613]"}`}
          >
            Todos os veículos
          </button>
          {categories.map((c) => {
            const active = cats.size === 1 && cats.has(c.id)
            return (
              <button
                key={c.id}
                onClick={() => setCats(new Set([c.id]))}
                className={`shrink-0 rounded-full px-5 py-2 text-sm ${active ? "bg-[#101613] text-[#F5F6F2]" : "text-[#687169] hover:text-[#101613]"}`}
              >
                {c.label}
              </button>
            )
          })}
        </div>
      </div>

      <section className="grid gap-10 bg-[#F5F6F2] px-6 py-10 md:px-16 lg:grid-cols-[250px_1fr] lg:px-24">
        <aside>
          <div className="flex items-baseline justify-between border-b border-[#D9DFD6] pb-4">
            <h2 className="text-2xl">Filtros</h2>
            <button onClick={clear} className="text-xs underline text-[#687169]">Limpar tudo</button>
          </div>

          <FilterGroup title="Faixa de preço">
            {priceRanges.map((p) => (
              <Check key={p.id} label={p.label} checked={prices.has(p.id)} onChange={() => setPrices(toggle(prices, p.id))} />
            ))}
          </FilterGroup>
          <FilterGroup title="Carroceria">
            {categories.map((c) => (
              <Check key={c.id} label={`${c.filterLabel} (${countOf(c.id)})`} checked={cats.has(c.id)} onChange={() => setCats(toggle(cats, c.id))} />
            ))}
          </FilterGroup>
          <FilterGroup title="Autonomia ilustrativa¹">
            {rangeRanges.map((r) => (
              <Check key={r.id} label={r.label} checked={ranges.has(r.id)} onChange={() => setRanges(toggle(ranges, r.id))} />
            ))}
          </FilterGroup>
          <FilterGroup title="Tração">
            {tractions.map((t) => (
              <Check key={t} label={t} checked={drives.has(t)} onChange={() => setDrives(toggle(drives, t))} />
            ))}
          </FilterGroup>

          <div className="mt-6 rounded-md bg-[#EBEFE6] p-5">
            <MessageSquare size={20} />
            <p className="mt-3 text-lg leading-snug">Ainda não sabe por onde começar?</p>
            <p className="mt-2 text-xs leading-relaxed text-[#687169]">Conte sua rotina. A gente ajuda a encontrar seu elétrico.</p>
            <Link to="/contato" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold">
              Fale com a Voltes <ArrowUpRight size={12} />
            </Link>
          </div>
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-[#687169]">Mostrando {list.length} veículos</p>
            <label className="text-sm">
              <span className="sr-only">Ordenar</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-md border border-[#D9DFD6] bg-white px-4 py-3 text-sm"
              >
                {Object.entries(sorters).map(([k, s]) => (
                  <option key={k} value={k}>Ordenar: {s.label}</option>
                ))}
              </select>
            </label>
          </div>

          {list.length === 0 ? (
            <div className="rounded-md border border-dashed border-[#AEB9AF] p-10 text-center">
              <p className="text-lg">Nenhum veículo com esses filtros.</p>
              <button onClick={clear} className="mt-3 text-sm underline">Limpar filtros</button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {list.map((v) => (
                <div key={v.id}>
                  <VehicleCard vehicle={v} />
                  <label className="mt-3 flex cursor-pointer items-center gap-3 text-xs text-[#687169]">
                    <input type="checkbox" className="h-4 w-4 accent-[#101613]" checked={compare.includes(v.id)} onChange={() => toggleCompare(v.id)} />
                    {compare.includes(v.id) ? "Adicionado à comparação" : "Adicionar à comparação"}
                  </label>
                </div>
              ))}
            </div>
          )}

          {selected.length > 0 && (
            <div className="mt-8 flex flex-col gap-4 rounded-md bg-[#101613] p-5 text-[#F5F6F2] sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#AEB9AF]">{selected.length} veículos selecionados</p>
                <p className="mt-1 text-lg">{selected.map((v) => v.name).join("  +  ")}</p>
              </div>
              <button
                disabled={selected.length < 2}
                onClick={() => setShowCompare(!showCompare)}
                className="inline-flex items-center justify-center gap-6 rounded-md bg-[#C2F75A] px-6 py-4 text-sm font-semibold text-[#101613] disabled:opacity-40"
              >
                {showCompare ? "Fechar comparação" : "Comparar veículos"} <ArrowUpRight size={16} />
              </button>
            </div>
          )}

          {showCompare && selected.length >= 2 && (
            <div className="mt-6 overflow-x-auto rounded-md border border-[#D9DFD6] bg-white">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-[#D9DFD6]">
                    <th className="p-4" />
                    {selected.map((v) => <th key={v.id} className="p-4 text-lg font-semibold">{v.name}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Carroceria", (v) => v.body],
                    ["Tração", (v) => v.traction],
                    ["Autonomia¹", (v) => `${v.range} km`],
                    ["Potência", (v) => `${v.power} cv`],
                    ["Bateria", (v) => `${v.battery} kWh`],
                    ["A partir de", (v) => formatPrice(v.price)],
                  ].map(([label, fn]) => (
                    <tr key={label} className="border-b border-[#D9DFD6] last:border-0">
                      <td className="p-4 text-[#687169]">{label}</td>
                      {selected.map((v) => <td key={v.id} className="p-4">{fn(v)}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <p className="mt-6 text-xs text-[#687169]">
            Modelos e valores fictícios para demonstração. ¹ Autonomia conceitual, sem homologação. Imagens meramente ilustrativas. Nenhum dado se refere a um fabricante real.
          </p>
        </div>
      </section>

      <CtaBand
        title="A melhor comparação é ao volante."
        text="Leve suas dúvidas para o test-drive. Nossa equipe ajuda você a comparar sensações, espaço e tecnologia."
      />
    </>
  )
}

export default Veiculos
