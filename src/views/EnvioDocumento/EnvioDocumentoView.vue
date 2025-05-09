<script setup lang="ts">
import MainFrame from "@/components/MainFrame.vue";
import { ref } from "vue";
import FormGroup from "./res/FormGroup.vue";
const floatingName = ref("");

const isSubmitted = ref(false);
const isSubmitted2 = ref(false);

function onSubmit(event: Event) {
  isSubmitted.value = true;
  event.preventDefault();
  console.log("Form submitted:", floatingName.value);
}

function onReset() {
  floatingName.value = "";
  console.log("Form reset");
}
const show = ref(true);

import formStore from "@/stores/formFiles";

const store = formStore();
const list_form = store.constructListForm();

const checkState = (pageIndex: string) => {
  if (isSubmitted.value && pageIndex === "page2" && invalidFeedbackref.value) {
    return false;
  } else if (isSubmitted2.value && pageIndex === "page3" && invalidFeedbackref.value) {
    return false;
  }

  return true;
};

const invalidFeedbackref = ref(false);
</script>
<template>
  <MainFrame>
    <BContainer class="bg-blue-chill-600 p-4 rounded-4 shadow">
      <BTabs content-class="mt-3">
        <BTab title="Passo 1" active>
          <div>
            <BForm v-if="show" @submit="onSubmit" @reset="onReset" data-bs-theme="light">
              <BRow>
                <BCol v-for="(form, index) in list_form" :key="index">
                  <FormGroup
                    v-model:model-value="form.modelValue"
                    v-model:validState="invalidFeedbackref"
                    :isSubmitted="isSubmitted"
                    :type="form.type"
                    :id_input="form.id_input"
                    :id_group="form.id_group"
                    :label="form.label"
                    :label-for="form.id_input"
                    :floating="true"
                    :placeholder="form.placeholder"
                  />
                </BCol>
              </BRow>

              <div class="d-grid mt-4 gap-0">
                <BButton type="submit" variant="primary">Próxima página</BButton>
              </div>
            </BForm>
          </div>
        </BTab>
        <BTab title="Passo 2" :disabled="checkState('page2')">
          <div class="d-grid mt-4 gap-0">
            <BButton type="submit" variant="primary" @click="isSubmitted2 = true">
              Próxima página
            </BButton>
          </div>
        </BTab>
        <BTab title="Passo 3" :disabled="checkState('page3')">
          <p>I'm a disabled tab!</p>
        </BTab>
      </BTabs>
    </BContainer>
  </MainFrame>
</template>
