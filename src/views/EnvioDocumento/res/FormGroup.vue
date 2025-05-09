<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = defineProps({
  id_group: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  labelFor: {
    type: String,
    required: true,
  },

  floating: {
    type: Boolean,
    required: true,
  },
  id_input: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
const floatingName = ref(props.modelValue);
const floatingState = computed(() => floatingName.value.length >= 4);
const floatingInvalidFeedback = computed(() =>
  floatingName.value.length > 0 ? "Enter at least 4 characters." : "Please enter something.",
);
watch(floatingName, (newValue) => {
  if (floatingState.value) {
    emit("update:modelValue", newValue);
  }
});
</script>

<template>
  <BFormGroup
    :id="props.id_group"
    :description="props.description"
    :label="props.label"
    :label-for="props.labelFor"
    :invalid-feedback="floatingInvalidFeedback"
    :state="floatingState"
    :floating="props.floating"
  >
    <BFormInput
      id="input-floating-4"
      v-model="floatingName"
      :state="floatingState"
      trim
      placeholder="Enter your name please"
    />
  </BFormGroup>
</template>
