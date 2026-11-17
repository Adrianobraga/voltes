import { useState } from "react"
import { Link } from "react-router-dom"
import { Heart } from "lucide-react"
import { formatPrice } from "../data/vehicles"

function VehicleCard({ vehicle }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="overflow-hidden rounded-lg border border-[#AEB9AF]/20 bg-[#FFFF] transition-all duration-300 hover:-translate-y-2 hover:border-[#C2F75A]/50">
      <div className="relative h-56 overflow-hidden bg-[#D9DFD6]">
        <Link to={`/veiculos/${vehicle.id}`} className="block h-full">
          <img src={vehicle.image} alt={vehicle.name} className="h-full w-full object-cover" />
        </Link>
        <span className="pointer-events-none absolute left-4 top-4 bg-[#F5F6F2] px-2 py-1 text-[10px] font-bold tracking-wider">
          {vehicle.badge}
        </span>
        <button
          onClick={() => setLiked(!liked)}
          aria-label={liked ? `Remover ${vehicle.name} dos favoritos` : `Favoritar ${vehicle.name}`}
          aria-pressed={liked}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F6F2] transition-transform hover:scale-110"
        >
          <Heart size={16} fill={liked ? "#101613" : "none"} />
        </button>
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{vehicle.name}</h2>
          <span className="px-3 py-1 text-[10px] font-bold tracking-wider text-[#687169]">100% ELÉTRICO</span>
        </div>

        <p className="mb-6 text-sm text-[#687169]">{vehicle.body} · Tração {vehicle.traction.toLowerCase()}</p>

        <div className="grid grid-cols-3 gap-3 border-b border-[#AEB9AF]/20 pb-6">
          <div>
            <p className="text-xl font-bold">{vehicle.range} km</p>
            <span className="text-xs text-[#687169]">Autonomia¹</span>
          </div>
          <div>
            <p className="text-xl font-bold">{vehicle.power} cv</p>
            <span className="text-xs text-[#687169]">Potência</span>
          </div>
          <div>
            <p className="text-xl font-bold">{vehicle.battery} kWh</p>
            <span className="text-xs text-[#687169]">Bateria</span>
          </div>
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <span className="text-xs text-[#687169]">A partir de</span>
            <p className="text-2xl font-bold">{formatPrice(vehicle.price)}</p>
          </div>

          <Link
            to={`/veiculos/${vehicle.id}`}
            aria-label={`Ver detalhes do ${vehicle.name}`}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#C2F75A] transition-all hover:bg-[#D5FF75] hover:scale-105"
          >
            <img src="/Vector.svg" alt="" className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VehicleCard
