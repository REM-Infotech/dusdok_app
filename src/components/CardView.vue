<script setup lang="ts">
import { computed, onMounted } from "vue";
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
    default: "",
  },
  addrimgSrc: {
    type: String,
    default: "",
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

const imgSrcCheck = computed(() => (props.imgSrc !== "" ? false : true));
const emit = defineEmits(["update:imgSrc"]);
const img = computed(() => (props.imgSrc === "" ? "" : props.imgSrc));

onMounted(async () => {
  setTimeout(async () => {
    const img_import = await import(`@/assets/${props.addrimgSrc}.jpg`);
    console.log(img_import.default);

    if (img_import.default) {
      emit("update:imgSrc", img_import.default as unknown as string);
    }
  }, 1000);
});
</script>

<template>
  <BOverlay fade :show="imgSrcCheck" rounded="sm">
    <BCard
      :name="props.name"
      :img-src="img"
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
  </BOverlay>
</template>
