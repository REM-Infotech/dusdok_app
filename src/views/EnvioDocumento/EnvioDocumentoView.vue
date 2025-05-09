<script setup lang="ts">
import MainFrame from "@/components/MainFrame.vue";
import { ref } from "vue";
import FormGroup from "./res/FormGroup.vue";
const floatingName = ref("");

function onSubmit(event: Event) {
  event.preventDefault();
  console.log("Form submitted:", floatingName.value);
}

function onReset() {
  floatingName.value = "";
  console.log("Form reset");
}
const show = ref(true);
</script>
<template>
  <MainFrame>
    <BContainer class="bg-blue-chill-600 p-4 rounded-4 shadow">
      <BTabs content-class="mt-3">
        <BTab title="Passo 1" active>
          <div>
            <BForm v-if="show" @submit="onSubmit" @reset="onReset" data-bs-theme="light">
              <FormGroup
                v-model:model-value="floatingName"
                id_input="teste_inpt"
                id_group="test_gp"
                label="teste"
                label-for="teste_inpt"
                :floating="true"
                placeholder="teste"
                description="teste"
              />
            </BForm>
          </div>
        </BTab>
        <BTab title="Passo 2" disabled>
          <p>I'm the second tab</p>
        </BTab>
        <BTab title="Passo 3" disabled>
          <p>I'm a disabled tab!</p>
        </BTab>
      </BTabs>
    </BContainer>
  </MainFrame>
</template>
