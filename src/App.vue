<script setup lang="ts">
import { Keyboard } from "@capacitor/keyboard";
import { RouterView } from "vue-router";
import appStore from "./stores/appStore";

const store = appStore();

Keyboard.addListener("keyboardWillShow", (info) => {
  const activeElement = document.activeElement;
  if (
    activeElement &&
    (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA")
  ) {
    const rect = activeElement.getBoundingClientRect();
    const keyboardTop = window.innerHeight - info.keyboardHeight;
    if (rect.bottom > keyboardTop) {
      const offset = rect.bottom - keyboardTop + 25; // extra margin
      store.increment(offset);
      setTimeout(() => {
        window.scrollBy({ top: offset, behavior: "smooth" });
      }, 500);
    }
  }
});

Keyboard.addListener("keyboardDidHide", () => {
  store.count = store.original_heigth;
});
</script>

<template>
  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>
</template>
