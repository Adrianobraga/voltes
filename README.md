# Voltes

React + Vite + Tailwind CSS v4 + React Router + lucide-react.

## Rodar

```bash
npm install
npm run dev
```

Outros comandos: `npm run build` e `npm run preview`.

## Rotas

| Rota | Página |
| --- | --- |
| `/` | Início (hero, curadoria, recarga, jornada, financiamento, showroom, journal, FAQ, CTA) |
| `/veiculos` | Catálogo com filtros, abas, ordenação e comparação |
| `/veiculos/:id` | Detalhe do veículo (galeria, cores, ficha técnica, outros modelos) |
| `/contato` | Agendar test-drive e enviar mensagem |
| `/experiencia-eletrica`, `/sobre` | Páginas simples (sem design enviado ainda) |
| `*` | 404 |

## Estrutura

```
src/
  components/      Header, Hero, VehicleCard, Footer, CtaBand, Eyebrow, Breadcrumb...
  components/home/ seções da página inicial
  data/vehicles.js os 6 modelos (preço, autonomia, tração etc.)
  layouts/         MainLayout (Header + Outlet + Footer)
  pages/           uma página por rota
public/images/     imagens usadas pelo site
```

Para adicionar ou editar um veículo, mexa só em `src/data/vehicles.js`.

## Imagens

As imagens em `public/images/` foram recortadas dos screenshots enviados (baixa resolução).
Substitua pelas originais do Figma mantendo os nomes.

- `hero.png` é um placeholder escuro. Coloque aqui a sua `Umanovadireção.png`.
- Se mudar os nomes, ajuste `src/data/vehicles.js` e as seções em `src/components/home/`.
