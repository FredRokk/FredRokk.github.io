**Beskrivelse**
Denne ændring samler en større polish-pass på CV-siden med fokus på mobil/tablet, card-præsentation, semantik, accessibility og visuel konsistens. Siden er stadig den samme løsning og identitet, men den er gjort mere robust, mere læsbar og nemmere at vedligeholde.

**Hovedændringer**
- Forbedret `experience`-cards med et mere bevidst reveal-forløb:
  først billede, derefter tekst som overtager visuelt.
- Justeret card-layout og spacing:
  bedre venstremargin, større radius, mere luft mellem tags ved linjeskift og tydeligere tekstlæsbarhed.
- Indført kompakt "back to top"-header med hint-adfærd:
  vises ved scroll og forklarer kort funktionen første gang.
- Ombygget mobil/tablet-layout:
  top-UI er flyttet rundt flere gange og ender i en løsning, hvor navn og sprog/theme-kontroller er lettere at bruge, og experience-progressen kan vises som bund-bar på små skærme.
- Gjort `index.html` mere semantisk:
  `main`, bedre `section`-labels, `article` til experience-cards, `address` til kontaktblok, mere meningsfulde nav/heading-relationer.
- Forbedret accessibility:
  progressbar får opdateret `aria-valuenow`/`aria-valuetext`, kontaktlinks har mere præcise labels, eksterne links bruger ens `rel`.
- Ryddet CSS op med design tokens:
  brandfarver, spacing, radius, shadows, section padding og typografi er mere centraliseret.
- Skiftet flere billeder til `.webp`:
  profilbillede, JE Electronic, Aarhus University og nyt Pressalit-billede.
- Tilføjet lazy-loading / async decoding på ikke-kritiske billeder.

**Filer**
- `index.html`
- `styles.css`
- `scripts.js`
- nye billeder i `Pictures/`:
  `Profil_billede_2025.webp`
  `je-electronic.webp`
  `aarhusUnversitet.webp`
  `pressalit-headquarters-01-dsc02792.webp`

**Tekniske noter**
- Ændringerne ligger på branchen `responsive-polish`.
- Commit: `2e130f5` (`Polish responsive CV experience page`)
