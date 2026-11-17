function Eyebrow({ children, light = false }) {
  return (
    <p
      className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider"
      style={{ color: light ? "#AEB9AF" : "#101613" }}
    >
      <span className="inline-block h-1.5 w-1.5" style={{ backgroundColor: light ? "#C2F75A" : "#101613" }} />
      {children}
    </p>
  )
}

export default Eyebrow
