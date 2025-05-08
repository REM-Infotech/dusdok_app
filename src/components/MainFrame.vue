<script setup lang="ts">
import NavbarView from "./NavbarView.vue";
</script>

<template>
  <NavbarView />
  <main class="container px-4 mt-4">
    <slot></slot>
  </main>
</template>
