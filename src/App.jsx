import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Veiculos from "./pages/Veiculos"
import VeiculoDetalhe from "./pages/VeiculoDetalhe"
import ExperienciaEletrica from "./pages/ExperienciaEletrica"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/veiculos" element={<Veiculos />} />
        <Route path="/veiculos/:id" element={<VeiculoDetalhe />} />
        <Route path="/experiencia-eletrica" element={<ExperienciaEletrica />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
