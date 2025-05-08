<script setup lang="ts">
import CardView from "@/components/CardView.vue";
import MainFrame from "@/components/MainFrame.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const SelectedCard = ref("");

const cards = [
  {
    name: "envio-documento",
    title: "Envio de Documentos",
    imgSrc: "/src/assets/25-600x300.jpg",
    imgAlt: "Image 1",
    imgTop: true,
    tag: "article",
    description: "Envio de documentos para admissão",
  },
  {
    name: "Card2",
    title: "Card 2 Title",
    imgSrc: "/src/assets/25-600x300.jpg",
    imgAlt: "Image 2",
    imgTop: true,
    tag: "article",
    description: "description",
  },
];

watch(SelectedCard, (newValue) => {
  router.push({ name: newValue });
});
</script>
<template>
  <MainFrame>
    <div class="d-grid gap-4">
      <CardView
        v-for="card in cards"
        :key="card.name"
        :name="card.name"
        :description="card.description"
        :title="card.title"
        v-model:card-clicked="SelectedCard"
      />
    </div>
  </MainFrame>
</template>
