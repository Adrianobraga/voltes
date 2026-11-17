import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { vehicles } from "../data/vehicles"
import VehicleCard from "./VehicleCard"
import Eyebrow from "./Eyebrow"

function FeaturedVehicles() {
  const featured = vehicles.filter((v) => ["vertice-01", "forma-x", "brisa-c"].includes(v.id))

  return (
    <section className="px-6 py-16 md:px-16 lg:px-24 bg-[#F5F6F2]">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <Eyebrow>Curadoria Voltes / 2026</Eyebrow>
          <h1 className="mt-6 max-w-xl text-3xl md:text-5xl font-sans font-bold">
            Qual é o seu próximo movimento?
          </h1>
        </div>
        <Link
          to="/veiculos"
          className="hidden items-center gap-4 rounded-md border border-[#AEB9AF] px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#EBEFE6] sm:flex"
        >
          Ver todos os veículos <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((v) => (
          <VehicleCard key={v.id} vehicle={v} />
        ))}
      </div>

      <p className="mt-6 text-xs text-[#687169]">
        Coleção conceitual. Preços e especificações ilustrativos. Consulte as notas no rodapé.
      </p>
    </section>
  )
}

export default FeaturedVehicles
