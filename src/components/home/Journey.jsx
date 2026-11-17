import Eyebrow from "../Eyebrow"

const steps = [
  { title: "Comece pela conversa", text: "Conte seus trajetos, sua rotina e o que você espera do próximo carro." },
  { title: "Sinta ao dirigir", text: "Compare os modelos e experimente a resposta de um elétrico no seu test-drive." },
  { title: "Escolha com clareza", text: "Avalie condições de compra, recarga e documentação com nossa equipe." },
  { title: "Siga com a Voltes", text: "Tenha orientação para recarga, cuidados e cada etapa da sua nova rotina." },
]

function Journey() {
  return (
    <section className="bg-[#F5F6F2] px-6 py-20 md:px-16 lg:px-24">
      <Eyebrow>Uma escolha acompanhada</Eyebrow>
      <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <h2 className="max-w-xl text-4xl md:text-5xl font-sans font-medium leading-tight">
          Você muda de energia. A gente cuida do caminho.
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-[#687169]">
          Não é só sobre escolher um carro. É sobre encontrar o elétrico que faz sentido para a sua vida.
        </p>
      </div>

      <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="border-t border-[#D9DFD6] pt-6">
            <span className="text-5xl font-light text-[#AEB9AF]">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#687169]">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Journey
