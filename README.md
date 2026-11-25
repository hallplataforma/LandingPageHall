# Hall Identidade Visual — Pacotes 2026

Landing page estática com os pacotes, valores e informações da Hall. Cada botão de pacote abre o WhatsApp da Hall com uma mensagem pronta indicando o pacote escolhido, a versão (com ou sem aquarela/desenho) e o valor à vista.

## Estrutura

- `index.html`: conteúdo da página (textos e valores).
- `styles.css`: identidade visual (sálvia `#ABB198`, rosé `#DDC3C8`, verde-musgo `#47533F`, Jost e EB Garamond).
- `script.js`: alterna a versão dos preços e monta os links do WhatsApp.
- `assets/`: logotipo, favicon e fotos de portfólio (tiradas do PDF "Pacotes Hall 2026").

Não há build nem dependências.

## Editar valores ou textos

Os preços ficam em `index.html`, nos atributos `data-com` (com aquarela ou desenho) e `data-sem` (sem aquarela ou desenho) de cada card. O texto visível é atualizado pelo script a partir desses atributos.

O número do WhatsApp fica em `script.js` (`WHATSAPP`), no formato internacional sem símbolos.

## Rodar localmente

```bash
python -m http.server 4310
```

Depois abra http://localhost:4310.

## Publicar na Vercel

Importe o repositório na Vercel com o preset **Other**, sem comando de build e com o diretório de saída na raiz do projeto.
