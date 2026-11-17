import Eyebrow from "./Eyebrow"

function PageTitle({ eyebrow, title, text }) {
  return (
    <section className="bg-[#F5F6F2] px-6 py-20 md:px-16 lg:px-24">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className="mt-6 max-w-3xl text-4xl md:text-6xl font-sans font-medium leading-tight">{title}</h1>
      {text && <p className="mt-6 max-w-xl text-[#687169] md:text-lg">{text}</p>}
    </section>
  )
}

export default PageTitle
