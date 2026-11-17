import { Link } from "react-router-dom"

function Hero() {
  return (
    <>
      <section className="min-h-screen bg-[url('/images/hero.png')] bg-cover bg-center flex items-center">
        <div className="w-full px-8 md:px-16 lg:px-24 py-20">
          <div className="max-w-3xl flex flex-col gap-8">
            <p
              className="text-sm md:text-base tracking-[0.2em] font-medium"
              style={{ color: "#AEB9AF" }}
            >
              MOBILIDADE ELÉTRICA. SEM COMPLICAR.
            </p>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-left font-sans font-bold leading-tight"
              style={{ color: "#AEB9AF" }}
            >
              O futuro não espera. Dirija.
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed max-w-xl"
              style={{ color: "#AEB9AF" }}
            >
              Uma curadoria de elétricos para transformar o seu jeito de ir.
              Da primeira dúvida à próxima viagem, a Voltes vai com você.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contato"
                className="flex items-center justify-between gap-6 px-8 py-4 rounded-md font-semibold transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#C2F75A" }}
              >
                Agendar test-drive
                <img src="/Vector.svg" alt="" />
              </Link>

              <Link
                to="/sobre"
                className="px-8 py-4 rounded-md font-semibold transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#F5F6F2" }}
              >
                Conheça a Voltes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#101613] px-10 md:px-16 lg:px-24 py-5 border-t-2 border-[#374239]">
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          <div className="lg:w-1/3 flex items-center">
            <h3
              className="text-3xl md:text-3xl font-sans font-bold"
              style={{ color: "#AEB9AF" }}
            >
              Outra energia.
              <br />
              A mesma liberdade.
            </h3>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="grid grid-cols-[24px_1fr] gap-x-3">
              <img src="/zap.svg" alt="" className="w-6 h-6 mt-1" />
              <h4 className="text-lg font-bold" style={{ color: "#C2F75A" }}>
                100% elétricos
              </h4>
              <p className="col-start-2 leading-relaxed text-xs -mt-4" style={{ color: "#AEB9AF" }}>
                Uma seleção feita para o seu ritmo.
              </p>
            </div>

            <div className="grid grid-cols-[24px_1fr] gap-x-3">
              <img src="/messages-square.svg" alt="" className="w-6 h-6 mt-1" />
              <h4 className="text-lg font-bold" style={{ color: "#C2F75A" }}>
                Consultoria de verdade
              </h4>
              <p className="col-start-2 leading-relaxed text-xs -mt-4" style={{ color: "#AEB9AF" }}>
                Respostas claras, sem pressão.
              </p>
            </div>

            <div className="grid grid-cols-[24px_1fr] gap-x-3">
              <img src="/plug-zap.svg" alt="" className="w-6 h-6 mt-1" />
              <h4 className="text-lg font-bold" style={{ color: "#C2F75A" }}>
                Do carro à recarga
              </h4>
              <p className="col-start-2 leading-relaxed text-xs -mt-4" style={{ color: "#AEB9AF" }}>
                Suporte em cada nova descoberta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
