<script setup lang="js">
import "@/assets/css/dashboard.css";
</script>
<template>
  <MainFrame>
    <BContainer class="bg-blue-chill-600 p-4 rounded-4 shadow">
      <BTabs content-class="mt-3">
        <BTab title="First" active><p>I'm the first tab</p></BTab>
        <BTab title="Second"><p>I'm the second tab</p></BTab>
        <BTab title="Disabled" disabled><p>I'm a disabled tab!</p></BTab>
      </BTabs>
    </BContainer>
  </MainFrame>
</template>
