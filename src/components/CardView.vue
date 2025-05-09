<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "Card Title",
  },
  imgSrc: {
    type: String,
    default: "/src/assets/25-600x300.jpg",
  },
  imgAlt: {
    type: String,
    default: "Image",
  },
  imgTop: {
    type: Boolean,
    default: true,
  },
  tag: {
    type: String,
    default: "article",
  },

  cardClicked: {
    type: String,
    default: "cardClicked",
  },
  description: {
    type: String,
    default:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
});

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
    :title="props.title"
    :img-src="props.imgSrc"
    :img-alt="props.imgAlt"
    :img-top="props.imgTop"
    :tag="props.tag"
    style="max-width: 20rem"
  >
    <BCardText>
      {{ props.description }}
    </BCardText>
    <BButton variant="primary" @click="getRoute"> Go somewhere </BButton>
  </BCard>
</template>
