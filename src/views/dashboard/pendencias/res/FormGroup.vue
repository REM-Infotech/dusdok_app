<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = defineProps({
  isSubmitted: {
    type: Boolean,
    default: false,
  },

  type: {
    type: String,
    default: "text",
  },
  id_group: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    defalt: "",
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
  validState: {
    type: Boolean,
    default: false,
  },
});

const list_match = [
  {
    type: "text",
    regex: /^[a-zA-Z\s]+$/,
  },
  {
    type: "email",
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  {
    type: "phone",
    regex: /^\+?[1-9]\d{1,14}$/,
  },
  {
    type: "cpf",
    regex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  },
];

const match_Text = (value: string) => {
  const match = list_match.find((item) => item.type === props.type);
  if (match) {
    return match.regex.test(value);
  }
  return false;
};

const emit = defineEmits(["update:modelValue", "update:validState"]);
const floatingName = ref(props.modelValue);
const floatingState = computed(() =>
  !props.isSubmitted
    ? null
    : floatingName.value.length === 0
      ? false
      : match_Text(floatingName.value),
);

const text_errors: Record<string, string> = {
  text: "Please enter a valid name.",
  email: "Please enter a valid email address.",
  phone: "Please enter a valid phone number.",
  cpf: "Please enter a valid CPF.",
};

const floatingInvalidFeedback = computed(() =>
  floatingName.value.length >= 0 ? text_errors[props.type] : text_errors[props.type],
);
watch(floatingName, (newValue) => {
  if (floatingState.value) {
    emit("update:validState", newValue);
  }
});

watch(floatingState, (newValue) => {
  emit("update:validState", newValue);
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
