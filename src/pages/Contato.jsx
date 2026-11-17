import { useMemo, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import {
  ArrowUpRight, ChevronLeft, ChevronRight, CalendarDays, MapPin, MessageSquare,
  CircleParking, Accessibility, CreditCard, Clock, Users, Check,
} from "lucide-react"
import { vehicles } from "../data/vehicles"
import Breadcrumb from "../components/Breadcrumb"
import Eyebrow from "../components/Eyebrow"

const times = ["10:00", "11:00", "14:00", "15:30"]
const weekdays = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"]
const units = ["São Paulo — Jardins"]
const input = "w-full rounded-md border border-[#D9DFD6] bg-white px-4 py-4 text-sm outline-none focus:border-[#101613]"
const label = "mb-2 block text-xs font-medium"

function useDays(page) {
  return useMemo(() => {
    const days = []
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    d.setDate(d.getDate() + 1)
    while (days.length < (page + 1) * 5) {
      if (d.getDay() !== 0) days.push(new Date(d))
      d.setDate(d.getDate() + 1)
    }
    return days.slice(page * 5, page * 5 + 5)
  }, [page])
}

const fmtDay = (d) => d.toLocaleDateString("pt-BR", { day: "numeric", month: "long" })

function TestDriveForm() {
  const [params] = useSearchParams()
  const initial = vehicles.find((v) => v.id === params.get("veiculo"))?.id ?? vehicles[0].id

  const [form, setForm] = useState({ name: "", email: "", phone: "", vehicle: initial, unit: units[0], privacy: false, news: false })
  const [page, setPage] = useState(0)
  const days = useDays(page)
  const [dayIdx, setDayIdx] = useState(0)
  const [time, setTime] = useState("14:00")
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value })
  const vehicle = vehicles.find((v) => v.id === form.vehicle)
  const day = days[Math.min(dayIdx, 4)]
  const rawMonth = days[0].toLocaleDateString("pt-BR", { month: "long", year: "numeric" }).replace(" de ", " ")
  const monthLabel = rawMonth.charAt(0).toUpperCase() + rawMonth.slice(1)

  const submit = (e) => {
    e.preventDefault()
    const err = {}
    if (!form.name.trim()) err.name = "Informe seu nome completo."
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Informe um e-mail válido."
    if (form.phone.replace(/\D/g, "").length < 10) err.phone = "Informe um celular com DDD."
    if (!form.privacy) err.privacy = "É preciso aceitar a Política de Privacidade."
    setErrors(err)
    if (Object.keys(err).length === 0) setSent(true)
  }

  if (sent)
    return (
      <div className="py-16 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C2F75A]"><Check /></span>
        <h2 className="mt-6 text-3xl font-sans font-medium">Solicitação enviada.</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-[#687169]">
          Recebemos seu pedido para {fmtDay(day)}, às {time}. Nossa equipe confirma os detalhes com você pelo WhatsApp.
        </p>
        <button onClick={() => setSent(false)} className="mt-6 text-sm underline">Fazer outra solicitação</button>
      </div>
    )

  return (
    <form onSubmit={submit} noValidate>
      <h2 className="text-3xl md:text-4xl font-sans font-medium">Reserve seu primeiro encontro.</h2>
      <p className="mt-3 text-sm text-[#687169]">Preencha seus dados e escolha a melhor data. Confirmaremos os detalhes com você.</p>
      <p className="mt-3 text-[11px] text-[#687169]">* Campos obrigatórios</p>

      <p className="mt-8 text-sm"><span className="text-[#687169]">01 /</span> <strong className="ml-2 font-medium">Vamos nos conhecer</strong></p>
      <div className="mt-5">
        <label className={label} htmlFor="name">Nome completo *</label>
        <input id="name" className={input} placeholder="Como podemos chamar você?" value={form.name} onChange={set("name")} />
        {errors.name && <p className="mt-1 text-xs text-red-700">{errors.name}</p>}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <label className={label} htmlFor="email">E-mail *</label>
          <input id="email" type="email" className={input} placeholder="voce@exemplo.com" value={form.email} onChange={set("email")} />
          {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email}</p>}
        </div>
        <div>
          <label className={label} htmlFor="phone">Celular / WhatsApp *</label>
          <input id="phone" type="tel" className={input} placeholder="(11) 99999-9999" value={form.phone} onChange={set("phone")} />
          {errors.phone && <p className="mt-1 text-xs text-red-700">{errors.phone}</p>}
        </div>
      </div>

      <p className="mt-10 text-sm"><span className="text-[#687169]">02 /</span> <strong className="ml-2 font-medium">Escolha sua experiência</strong></p>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <label className={label} htmlFor="vehicle">Veículo de interesse *</label>
          <select id="vehicle" className={input} value={form.vehicle} onChange={set("vehicle")}>
            {vehicles.map((v) => <option key={v.id} value={v.id}>{v.name} — {v.id === "vertice-01" ? "Long Range" : `${v.battery} kWh`}</option>)}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="unit">Unidade *</label>
          <select id="unit" className={input} value={form.unit} onChange={set("unit")}>
            {units.map((u) => <option key={u}>{u}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs font-medium">Data de preferência *</span>
        <span className="flex items-center gap-3 text-xs">
          <button type="button" aria-label="Datas anteriores" disabled={page === 0} onClick={() => { setPage(page - 1); setDayIdx(0) }} className="disabled:opacity-30"><ChevronLeft size={14} /></button>
          {monthLabel}
          <button type="button" aria-label="Próximas datas" onClick={() => { setPage(page + 1); setDayIdx(0) }}><ChevronRight size={14} /></button>
        </span>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-3">
        {days.map((d, i) => (
          <button
            type="button"
            key={d.toISOString()}
            aria-pressed={i === dayIdx}
            onClick={() => setDayIdx(i)}
            className={`rounded-sm border py-4 text-center transition-colors ${i === dayIdx ? "border-[#101613] bg-[#101613] text-white" : "border-[#D9DFD6] bg-white hover:border-[#101613]"}`}
          >
            <span className="block text-[10px] opacity-70">{weekdays[d.getDay()]}</span>
            <span className="text-2xl">{d.getDate()}</span>
          </button>
        ))}
      </div>

      <span className="mt-6 block text-xs font-medium">Horário de preferência *</span>
      <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
        {times.map((t) => (
          <button
            type="button"
            key={t}
            aria-pressed={t === time}
            onClick={() => setTime(t)}
            className={`rounded-sm border py-3 text-sm ${t === time ? "border-[#101613] bg-[#EBEFE6] font-semibold" : "border-[#D9DFD6] bg-white hover:border-[#101613]"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <p className="mt-6 flex flex-wrap items-center gap-3 rounded-sm bg-[#F5F6F2] px-4 py-4 text-xs">
        <CalendarDays size={16} />
        {fmtDay(day)}, às {time.replace(":00", "h").replace(":", "h")} • São Paulo • {vehicle.name}
      </p>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-xs text-[#687169]">
        <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[#101613]" checked={form.privacy} onChange={set("privacy")} />
        Li a Política de Privacidade e autorizo o contato da Voltes para organizar meu test-drive. *
      </label>
      {errors.privacy && <p className="mt-1 text-xs text-red-700">{errors.privacy}</p>}
      <label className="mt-3 flex cursor-pointer items-start gap-3 text-xs text-[#687169]">
        <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[#101613]" checked={form.news} onChange={set("news")} />
        Quero receber novidades e conteúdos da Voltes. (Opcional)
      </label>

      <button type="submit" className="mt-6 flex w-full items-center justify-center gap-6 rounded-sm bg-[#C2F75A] py-4 text-sm font-semibold transition-opacity hover:opacity-80">
        Solicitar meu test-drive <img src="/Vector.svg" alt="" />
      </button>
      <p className="mt-4 text-[11px] leading-relaxed text-[#687169]">
        Este é um formulário conceitual. Em uma operação real, o horário seria confirmado pela equipe conforme a disponibilidade. Para dirigir, é necessário apresentar CNH válida.
      </p>
    </form>
  )
}

function MessageForm() {
  const [sent, setSent] = useState(false)

  if (sent)
    return (
      <div className="py-16 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C2F75A]"><Check /></span>
        <h2 className="mt-6 text-3xl font-sans font-medium">Mensagem enviada.</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-[#687169]">Respondemos por e-mail em até um dia útil.</p>
      </div>
    )

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
      <h2 className="text-3xl md:text-4xl font-sans font-medium">Conte o que você procura.</h2>
      <p className="mt-3 text-sm text-[#687169]">Escreva sua dúvida e a equipe responde no seu tempo.</p>
      <div className="mt-8 grid gap-5">
        <div><label className={label} htmlFor="m-name">Nome completo *</label><input id="m-name" required className={input} /></div>
        <div><label className={label} htmlFor="m-email">E-mail *</label><input id="m-email" type="email" required className={input} /></div>
        <div><label className={label} htmlFor="m-text">Mensagem *</label><textarea id="m-text" required rows={5} className={input} /></div>
      </div>
      <button type="submit" className="mt-6 flex w-full items-center justify-center gap-6 rounded-sm bg-[#C2F75A] py-4 text-sm font-semibold hover:opacity-80">
        Enviar mensagem <img src="/Vector.svg" alt="" />
      </button>
    </form>
  )
}

function Contato() {
  const [tab, setTab] = useState("test-drive")

  return (
    <div className="bg-[#F5F6F2]">
      <section className="px-6 pt-8 md:px-16 lg:px-24">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Contato & test-drive" }]} />
        <div className="mt-8"><Eyebrow>O próximo passo é sentir</Eyebrow></div>
        <div className="mt-6 flex flex-col justify-between gap-8 pb-12 lg:flex-row lg:items-end">
          <h1 className="max-w-2xl text-5xl md:text-7xl font-sans font-medium leading-tight">A experiência começa com você.</h1>
          <div className="max-w-xs">
            <p className="leading-relaxed text-[#687169]">Escolha um horário, traga sua curiosidade e deixe o resto com a gente. Seu próximo elétrico espera por você.</p>
            <p className="mt-4 text-xs">Sem compromisso. Sem pressa.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-10 px-6 pb-20 md:px-16 lg:grid-cols-[1fr_1.8fr] lg:px-24">
        <aside>
          <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-[#D9DFD6]">
            <img src="/images/showroom.jpg" alt="Showroom da Voltes em São Paulo" className="h-full w-full object-cover object-[70%_center]" />
            <p className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#F5F6F2] px-3 py-2 text-[10px] font-semibold uppercase tracking-wider">
              <MapPin size={12} /> Voltes / São Paulo
            </p>
          </div>
          <h2 className="mt-8 text-4xl font-sans font-medium leading-tight">Portas abertas.<br />Novos caminhos.</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#687169]">Av. Horizonte, 1200 — Jardins<br />São Paulo, SP • Endereço conceitual</p>
          <div className="mt-4 flex gap-5 text-xs text-[#687169]">
            <span className="flex items-center gap-2"><CircleParking size={16} /> Estacionamento</span>
            <span className="flex items-center gap-2"><Accessibility size={16} /> Espaço acessível</span>
          </div>
          <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold">Como chegar <ArrowUpRight size={12} /></a>

          <div className="mt-8 border-t border-[#D9DFD6] pt-6 text-sm">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-[#687169]">Seu tempo, nosso encontro</p>
            <p className="flex justify-between py-1"><span>Segunda a sexta</span><span className="text-[#687169]">9h às 19h</span></p>
            <p className="flex justify-between py-1"><span>Sábado</span><span className="text-[#687169]">10h às 17h</span></p>
            <p className="mt-2 text-xs text-[#687169]">Domingos e feriados: fechado.</p>
          </div>

          <div className="mt-8 rounded-sm bg-[#101613] p-6 text-[#F5F6F2]">
            <MessageSquare size={22} color="#C2F75A" />
            <p className="mt-5 text-2xl">Prefere conversar primeiro?</p>
            <p className="mt-3 text-sm text-[#AEB9AF]">Tire suas dúvidas com um especialista antes de escolher seu horário.</p>
            <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm text-[#C2F75A]">Fale pelo WhatsApp <ArrowUpRight size={12} /></a>
            <p className="mt-5 text-xs text-[#AEB9AF]">(11) 4000-0000 &nbsp;•&nbsp; ola@voltes.example</p>
          </div>
        </aside>

        <div className="rounded-sm border border-[#D9DFD6] bg-white p-6 md:p-9">
          <div role="tablist" className="mb-8 flex gap-8 border-b border-[#D9DFD6]">
            {[["test-drive", "Agendar test-drive"], ["mensagem", "Enviar uma mensagem"]].map(([id, text]) => (
              <button
                key={id}
                role="tab"
                aria-selected={tab === id}
                onClick={() => setTab(id)}
                className={`-mb-px border-b-2 pb-4 text-sm ${tab === id ? "border-[#101613] font-semibold" : "border-transparent text-[#687169]"}`}
              >
                {text}
              </button>
            ))}
          </div>
          {tab === "test-drive" ? <TestDriveForm /> : <MessageForm />}
        </div>
      </section>

      <section className="bg-[#EBEFE6] px-6 py-20 md:px-16 lg:px-24">
        <Eyebrow>Tudo pronto para receber você</Eyebrow>
        <h2 className="mt-6 text-4xl md:text-5xl font-sans font-medium">Um encontro simples. Uma nova perspectiva.</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            [CreditCard, "O que levar?", "Sua CNH válida e vontade de descobrir uma nova forma de dirigir."],
            [Clock, "Quanto tempo reservar?", "Separe cerca de 45 minutos para conhecer o carro, conversar e dirigir."],
            [Users, "Posso levar companhia?", "Claro. Traga quem faz parte dos seus próximos caminhos."],
          ].map(([Icon, t, d]) => (
            <div key={t}>
              <Icon size={22} />
              <h3 className="mt-5 text-2xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#687169]">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Contato
