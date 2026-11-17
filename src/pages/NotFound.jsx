import { Link } from "react-router-dom"
import PageTitle from "../components/PageTitle"

function NotFound() {
  return (
    <>
      <PageTitle title="Página não encontrada." text="O endereço não existe ou foi movido." />
      <div className="bg-[#F5F6F2] px-6 pb-16 md:px-16 lg:px-24">
        <Link to="/" className="inline-block rounded-md px-8 py-4 font-semibold" style={{ backgroundColor: "#C2F75A" }}>
          Voltar ao início
        </Link>
      </div>
    </>
  )
}

export default NotFound
