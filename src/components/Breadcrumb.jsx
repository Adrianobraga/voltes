import { Link } from "react-router-dom"

function Breadcrumb({ items }) {
  return (
    <nav aria-label="Você está em" className="flex items-center gap-3 text-xs text-[#687169]">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-3">
          {i > 0 && <span>/</span>}
          {item.to ? (
            <Link to={item.to} className="hover:text-[#101613]">{item.label}</Link>
          ) : (
            <span className="text-[#101613]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumb
