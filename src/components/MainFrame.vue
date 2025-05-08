<script setup lang="ts">
import appStore from "@/stores/appStore";
import { onBeforeMount, onMounted } from "vue";
import NavbarView from "./NavbarView.vue";
const store = appStore();
onBeforeMount(() => {
  document.body.classList.add(...["bg-blue-chill-800"]);
});

onMounted(() => {
  const mainFrame = document.getElementById("MainFrame");
  if (mainFrame) {
    store.original_heigth = mainFrame.offsetHeight;
  }
});
</script>

<template>
  <NavbarView />
  <main class="container px-4 mt-4" id="MainFrame" :style="{ height: store.count + 'px' }">
    <slot></slot>
  </main>
</template>
