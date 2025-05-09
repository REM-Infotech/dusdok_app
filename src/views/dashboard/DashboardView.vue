<script setup lang="ts">
import CardView from "@/components/CardView.vue";
import MainFrame from "@/components/MainFrame.vue";
import cardStore from "@/stores/cardStore";
import { onBeforeMount, ref } from "vue";

const store = cardStore();
const SelectedCard = ref("");
const cards = store.cardList;

onBeforeMount(() => {
  if (cards.length === 0) {
    store.loadCards();
  }
});
</script>
<template>
  <MainFrame>
    <BTabs content-class="mt-3 p-3" class="bg-blue-chill-700 rounded">
      <BTab title="Pendências">
        <div class="d-grid gap-3 justify-content-center">
          <CardView
            v-for="card in cards"
            :imgSrc="card.imgSrc"
            :key="card.name"
            :name="card.name"
            :description="card.description"
            :title="card.title"
            v-model:card-clicked="SelectedCard"
          />
        </div>
      </BTab>
      <BTab title="Suas Informações">
        <div class="d-grid gap-3 justify-content-center" v-if="cards.length > 0">
          <CardView
            v-for="card in cards"
            :imgSrc="card.imgSrc"
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
