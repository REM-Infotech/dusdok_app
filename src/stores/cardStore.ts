import imageTemplate from "@/assets/25-600x300.jpg";
import { defineStore } from "pinia";
import { reactive, ref, type Reactive } from "vue";
import type { Cards } from "./types";

const cards = [
  {
    name: "info-complementar",
    title: "Informações complementares",
    imgSrc: imageTemplate,
    imgAlt: "Image 2",
    imgTop: true,
    tag: "article",
    description:
      "Envio de dados complementares para admissão. Exemplo: Nome dos pais, RG/CPF/CNH, etc.",
  },
  {
    name: "envio-documento",
    title: "Envio de Documentos",
    imgSrc: imageTemplate,
    imgAlt: "Image 1",
    imgTop: true,
    tag: "article",
    description: "Envio de documentos para admissão",
  },
];

export default defineStore("loadCards", () => {
  const cardList = ref<Reactive<Cards>[]>([]);

  function loadCards() {
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const reactiveCard = reactive({
        name: card.name,
        title: card.title,
        imgSrc: card.imgSrc,
        imgAlt: card.imgAlt,
        imgTop: card.imgTop,
        tag: card.tag,
        description: card.description,
      });
      cardList.value.push(reactiveCard);
    }
  }

  return { loadCards, cardList };
});
