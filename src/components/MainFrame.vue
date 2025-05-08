<script setup lang="ts">
import { onBeforeMount } from "vue";
import NavbarView from "./NavbarView.vue";

onBeforeMount(() => {
  document.body.classList.add(...["bg-blue-chill-800"]);
});
</script>

<template>
  <NavbarView />
  <main class="container px-4 mt-4">
    <slot></slot>
  </main>
</template>
