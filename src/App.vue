<script setup lang="ts">
import { Keyboard } from "@capacitor/keyboard";
import { RouterView } from "vue-router";

Keyboard.addListener("keyboardDidShow", (info) => {
  const activeElement = document.activeElement;
  if (
    activeElement &&
    (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA")
  ) {
    const rect = activeElement.getBoundingClientRect();
    const keyboardTop = window.innerHeight - info.keyboardHeight;
    if (rect.bottom > keyboardTop) {
      const offset = rect.bottom - keyboardTop + 10; // extra margin

      const mainFrame = document.getElementById("MainFrame");
      if (mainFrame) {
        mainFrame.classList.remove("pb-20");
        mainFrame.classList.add(`pb-${offset}`);
        alert(`pb-${offset}`);
      }

      window.scrollBy({ top: offset, behavior: "smooth" });
    }
  }
});
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
