// Hall — landing de pacotes: troca de versão e links do WhatsApp com mensagem pronta.
(() => {
  const WHATSAPP = "555499177277"; // (54) 9917-7277
  const VARIANTS = {
    com: "com aquarela ou desenho",
    sem: "sem aquarela ou desenho",
  };
  let variant = "com";

  const waUrl = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

  const messages = {
    geral: () =>
      "Olá, Hall! Vi a página de pacotes 2026 e gostaria de saber mais sobre a identidade visual do meu casamento.",
    extras: () =>
      "Olá, Hall! Vi a página de pacotes 2026 e quero saber mais sobre os extras (site, vídeo, aquarela e estampa).",
    pacote: (card) => {
      const name = card.dataset.package;
      const price = card.querySelector(".price").dataset[variant];
      return (
        `Olá, Hall! Vi a página de pacotes 2026 e tenho interesse no *pacote ${name}*, ` +
        `versão ${VARIANTS[variant]} (${price} à vista). Podem me passar mais informações?`
      );
    },
  };

  function updateLinks() {
    document.querySelectorAll("[data-whatsapp]").forEach((link) => {
      const kind = link.dataset.whatsapp;
      const card = link.closest("[data-package]");
      link.href = waUrl(kind === "pacote" ? messages.pacote(card) : messages[kind]());
    });
  }

  function setVariant(next) {
    variant = next;
    document.querySelectorAll(".toggle__opt").forEach((opt) => {
      const active = opt.dataset.variant === next;
      opt.setAttribute("aria-checked", String(active));
      opt.tabIndex = active ? 0 : -1;
    });
    document.querySelectorAll("[data-com][data-sem]").forEach((el) => {
      el.textContent = el.dataset[next];
    });
    updateLinks();
  }

  const options = [...document.querySelectorAll(".toggle__opt")];
  options.forEach((opt, i) => {
    opt.addEventListener("click", () => setVariant(opt.dataset.variant));
    opt.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
      event.preventDefault();
      const step = event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 1;
      const target = options[(i + step + options.length) % options.length];
      setVariant(target.dataset.variant);
      target.focus();
    });
  });

  setVariant(variant);
})();
