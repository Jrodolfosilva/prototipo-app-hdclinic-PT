# HD Clinic App

App para a [HD Clinic](https://hdclinicpt.com/), clínica médica, estética e dentária em Lisboa.

## Regra principal

**Fazer só o que foi pedido.** Nada além disso. Descrever para que algo vai servir não é ordem para construir.

## Fase atual: coleta de dados

**Não prototipar nem criar telas até o usuário pedir.** Agora só organizamos marca e informações.

Plano depois da coleta:

1. Protótipo em HTML puro, navegável, com bypass entre telas.
2. Recriar em React Native (Android e iOS).

## Estrutura

```
style-brand/        Estilo da marca
  tokens.json       Cores, gradiente, fontes, tipografia, espaços, raios, sombra
  logo/             logo-horizontal e logo-mark (1x, @2x, @3x) e original
  images/           Imagens da clínica
info-brand/         Informações da clínica
  hd-clinic.md      Marca, contato, legal, redes, equipa, academy, FAQ, pendências
  procedimentos.md  Procedimentos por segmento, com textos do site
  loja.md           Produtos e preços
  blog.md           Artigos
info-hdvita/        Serviços da HD Vita, para futuro módulo dentro do app
  hdvita.md         Protocolos, consultas, exames, preços, pendências
```

`tokens.json` é a fonte única de estilo. `info-brand/` e `info-hdvita/` são as fontes únicas de dados. Consultar antes de escrever qualquer texto ou valor.

## Marca

| Token | Valor | Uso |
|---|---|---|
| `gold` | `#C9A546` | Cor principal: botões, ícones ativos, destaques sobre preto |
| `gold-light` | `#FCF6A5` | Início do gradiente do logo |
| `gold-deep` | `#C1983D` | Fim do gradiente do logo |
| `gold-text` | `#7D6219` | **Derivado.** Texto dourado sobre fundo claro |
| `black` | `#050505` | Fundos escuros, header, tab bar |
| `graphite` | `#2E2E2E` | Texto principal sobre fundo claro |
| `offwhite` | `#FAFAFA` | Fundo de tela, texto sobre preto |
| `muted` | `#6B6B6B` | **Derivado.** Texto secundário sobre claro |
| `muted-dark` | `#A8A8A8` | **Derivado.** Texto secundário sobre preto |
| `whatsapp` | `#00CF4B` | Botão WhatsApp, sempre com texto preto |

Fontes do site: **DM Sans** (títulos, labels, botões) e **Roboto** (texto corrido).

Regras de contraste (medidas):

- `gold` sobre branco dá 2,35:1. **Nunca usar `gold` como texto em fundo claro:** usar `gold-text` (5,54:1).
- `gold` e `black` entre si dão 8,69:1. Botão dourado sempre com texto preto.
- `gray` (`#7A7A7A`) do site dá 4,11:1 sobre `offwhite`, abaixo do AA. Usar `muted` para texto.
- Branco sobre os verdes do site não passa AA. WhatsApp usa texto preto.

Logo: o lado esquerdo é muito claro, então usar **preferencialmente sobre `black`**. Só temos raster de 1452 px; pedir o vetor à clínica antes de gerar ícone do app e splash.

`#6EC1E4` e `#61CE70` aparecem no CSS do site, mas são padrões do Elementor, não da marca. Não usar.

## Regras para quando o protótipo começar

### Princípio

Toda decisão no HTML existe para facilitar a migração. Se algo não existe em React Native, não usar.

### Tamanhos

**1 px no HTML = 1 dp no React Native.** Usar só px, nunca `rem`, `em`, `vw`, `vh` ou `%` em fonte.

- Tela base: **390 x 844**. Conferir também em **360 x 800**, Android pequeno.
- Área segura: topo 47, base 34. Margem lateral: 16.
- Header 56, tab bar 56, botão 52, input 48, toque mínimo 48.
- Espaçamento só pela escala de `tokens.json`: `1`=4, `2`=8, `3`=12, `4`=16, `5`=20, `6`=24, `8`=32, `10`=40, `12`=48, `16`=64.
- Raio: `sm`=4, `md`=12, `lg`=16, `full`.
- Tipografia: `display` 38, `h1` 32, `h2` 26, `h3` 20, `body-lg` 18, `body` 16, `label` 14, `caption` 12.

### Libs do HTML

Nenhum framework. Só Google Fonts e Lucide via CDN (versão fixa), mais JS mínimo para estado visual.

### Classes

Usar nomes do Tailwind (`flex-row`, `p-4`, `gap-2`, `bg-gold`, `rounded-md`), escritos em CSS próprio a partir de `tokens.json`. Assim as mesmas classes funcionam no NativeWind. Texto: `type-h1`, `type-body`. Componentes: `btn btn-primary`, `card`, `chip`, `input`.

### Fazer

- Toda caixa se comporta como `View`: flex coluna, stretch, `flex-shrink: 0`.
- Layout só com flexbox e `gap`.
- Todo texto em `h1-h3`, `p` ou `span`, com classe de tipo e cor na própria tag. Em RN, texto não herda de `View`.
- Sem `style=""` e sem CSS por tela.
- Navegar com `<a href>`, sem validação, login real ou backend.
- Nome do arquivo = rota do Expo Router.
- Dados fictícios. **Nunca usar dados nem fotos de pacientes reais.**

### Não usar (não existe em RN)

- `display: grid`, `float`, `inline`, `table`, `position: fixed` ou `sticky`
- `::before`, `::after`, `:hover`, `:nth-child`, `:first-child`
- `transition` e `@keyframes` para lógica
- `calc()`, `background-image` para foto, `<table>`
- Texto solto dentro de `div`

### Mapa de migração

| HTML | React Native |
|---|---|
| `div`, `section`, `header`, `nav` | `View` |
| Área com scroll | `ScrollView` |
| Lista repetida | `FlashList` ou `FlatList` |
| `h1-h3`, `p`, `span` | `Text` (componente `<Text variant>`) |
| `a` | `Link` (expo-router) ou `Pressable` |
| `img` | `Image` (expo-image) |
| `input` | `TextInput` |
| `<i data-lucide="calendar">` | `<Calendar />` (lucide-react-native) |
| `a:active` | Estado `pressed` do `Pressable` |
| Classes utilitárias | `className` igual no NativeWind |
| `type-h1` | `<Text variant="h1">` |
| `btn btn-primary` | `<Button variant="primary">` |
| Sombra | iOS `shadow*`, Android `elevation` |

### Stack React Native planejada

Expo com TypeScript, Expo Router, NativeWind, `lucide-react-native` + `react-native-svg`, `expo-image`, `expo-linear-gradient`, `@expo-google-fonts/dm-sans` e `@expo-google-fonts/roboto`, Reanimated, `react-native-safe-area-context`.

Conferir versões atuais e compatibilidade com o SDK do Expo na hora de instalar. Em RN, peso de fonte é família própria (`DMSans_500Medium`): usar os nomes do campo `rn` em `tokens.json`, não `fontWeight`.
