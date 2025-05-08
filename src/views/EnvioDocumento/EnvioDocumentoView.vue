<script setup lang="js">
import "@/assets/css/dashboard.css";
import NavbarView from "@/components/NavbarView.vue";
import { BTab, BTabs } from "bootstrap-vue-next";
</script>
<template>
  <NavbarView />
  <main class="container p-4 mt-4 bg-white rounded rounded-4">
    <BTabs content-class="mt-3">
      <BTab title="First" active><p>I'm the first tab</p></BTab>
      <BTab title="Second"><p>I'm the second tab</p></BTab>
      <BTab title="Disabled" disabled><p>I'm a disabled tab!</p></BTab>
    </BTabs>
  </main>
</template>
