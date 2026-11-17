import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const links = [
  { to: "/", label: "Início", end: true },
  { to: "/veiculos", label: "Veículos" },
  { to: "/experiencia-eletrica", label: "Experiência elétrica" },
  { to: "/sobre", label: "Sobre a Voltes" },
  { to: "/contato", label: "Contato" },
]

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const dark = pathname === "/"

  const text = dark ? "#F5F6F2" : "#101613"
  const bg = dark ? "#101613" : "#F5F6F2"
  const border = dark ? "border-[#374239]" : "border-[#D9DFD6]"

  return (
    <header
      className={`relative flex items-center justify-between border-b-2 ${border} px-6 py-6 md:px-12 lg:px-20`}
      style={{ backgroundColor: bg, color: text }}
    >
      <Link to="/" onClick={() => setOpen(false)}>
        <span className="text-4xl font-sans font-bold">
          voltes <span style={{ color: dark ? "#C2F75A" : text }}>/</span>
        </span>
      </Link>

      <nav className={`${open ? "flex" : "hidden"} absolute left-0 top-full z-20 w-full flex-col gap-5 border-b-2 ${border} px-6 py-6 lg:static lg:flex lg:w-auto lg:flex-row lg:gap-10 lg:border-0 lg:p-0`} style={{ backgroundColor: bg }}>
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `border-b-2 pb-1 text-sm transition-colors hover:text-[#8DB82C] ${
                isActive ? "border-[#C2F75A] font-semibold" : "border-transparent opacity-80"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Link
          to="/contato"
          className="hidden items-center justify-between gap-6 rounded-md px-8 py-4 text-sm font-semibold text-[#101613] transition-opacity hover:opacity-80 sm:flex"
          style={{ backgroundColor: "#C2F75A" }}
        >
          Agendar test-drive <img src="/Vector.svg" alt="" />
        </Link>
        <button className="lg:hidden" aria-label="Abrir menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

export default Header
