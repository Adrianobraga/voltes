import Hero from "../components/Hero"
import FeaturedVehicles from "../components/FeaturedVehicles"
import ChargingSection from "../components/home/ChargingSection"
import Journey from "../components/home/Journey"
import Financing from "../components/home/Financing"
import Showroom from "../components/home/Showroom"
import Journal from "../components/home/Journal"
import Faq from "../components/home/Faq"
import CtaBand from "../components/CtaBand"

function Home() {
  return (
    <>
      <Hero />
      <FeaturedVehicles />
      <ChargingSection />
      <Journey />
      <Financing />
      <Showroom />
      <Journal />
      <Faq />
      <CtaBand
        title="Seu próximo capítulo começa ao volante."
        text="Conheça o silêncio, a resposta e o prazer de dirigir um elétrico. Reserve seu horário e sinta a diferença."
      />
    </>
  )
}

export default Home
