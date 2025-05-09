<script setup lang="ts">
import properties from "@/resources/cardProperties";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps(properties);

const getRoute = () => {
  setTimeout(() => {
    router.push({
      name: props.name,
    });
  }, 1000);
};
</script>

<template>
  <BCard
    :name="props.name"
    :img-src="props.imgSrc"
    :img-alt="props.imgAlt"
    :img-top="props.imgTop"
    :tag="props.tag"
    class="bg-dark bg-opacity-50"
    body-class="bg-secondary bg-opacity-50"
    style="max-width: 20rem"
  >
    <template #header>
      {{ props.title }}
    </template>
    <BCardText class="">
      {{ props.description }}
    </BCardText>
    <template #footer>
      <BButton variant="primary" @click="getRoute"> Go somewhere </BButton>
    </template>
  </BCard>
</template>
