<script setup lang="ts">
import CardView from "@/components/CardView.vue";
import MainFrame from "@/components/MainFrame.vue";
import { reactive, ref } from "vue";

const SelectedCard = ref("");

const cards = [
  reactive({
    name: "envio-documento",
    title: "Envio de Documentos",
    imgSrc: ref(""),
    addrimgSrc: "25-600x300",
    imgAlt: "Image 1",
    imgTop: true,
    tag: "article",
    description: "Envio de documentos para admissão",
  }),
  reactive({
    name: "Card2",
    title: "Card 2 Title",
    imgSrc: ref(""),
    addrimgSrc: "25-600x300",
    imgAlt: "Image 2",
    imgTop: true,
    tag: "article",
    description: "description",
  }),
];
</script>
<template>
  <MainFrame>
    <BTabs content-class="mt-3 p-3" class="bg-blue-chill-700 rounded">
      <BTab title="Pendências">
        <div class="d-grid gap-3 justify-content-center">
          <CardView
            v-for="card in cards"
            v-model:imgSrc="card.imgSrc"
            :addrimgSrc="card.addrimgSrc"
            :key="card.name"
            :name="card.name"
            :description="card.description"
            :title="card.title"
            v-model:card-clicked="SelectedCard"
          />
        </div>
      </BTab>
    </BTabs>
  </MainFrame>
</template>
