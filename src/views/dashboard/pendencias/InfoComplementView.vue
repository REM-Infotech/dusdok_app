<script setup lang="ts">
import MainFrame from "@/components/MainFrame.vue";
import formStore from "@/stores/formFiles";
import { computed, ref } from "vue";

const show = ref(true);
const isSubmitted = ref(false);
const isSubmitted2 = ref(false);
const store = formStore();

store.constructListForm();

function onSubmit(event: Event) {
  isSubmitted.value = true;
  event.preventDefault();
  console.log("Form submitted:", floatingName.value);
}

function onReset() {
  floatingName.value = "";
  console.log("Form reset");
}

const floatingName = ref("");

const floatingState = computed(() => floatingName.value.length >= 4);
const floatingInvalidFeedback = computed(() =>
  floatingName.value.length > 0 ? "Enter at least 4 characters." : "Please enter something.",
);
</script>
<template>
  <MainFrame>
    <BContainer class="bg-blue-chill-600 p-4 rounded-4 shadow">
      <BTabs content-class="mt-3">
        <BTab title="Passo 1" active>
          <div>
            <BForm v-if="show" @submit="onSubmit" @reset="onReset" data-bs-theme="light">
              <BRow>
                <BCol md="12">
                  <BFormGroup
                    id="fieldset-4"
                    description="Let us know your name."
                    label="Name"
                    label-for="input-floating-4"
                    valid-feedback="Thank you!"
                    :invalid-feedback="floatingInvalidFeedback"
                    :state="floatingState"
                    floating
                  >
                    <BFormInput
                      id="input-floating-4"
                      v-model="floatingName"
                      :state="floatingState"
                      trim
                      placeholder="Enter your name please"
                    />
                  </BFormGroup>
                </BCol>
              </BRow>

              <div class="d-grid mt-4 gap-0">
                <BButton type="submit" variant="primary">Próxima página</BButton>
              </div>
            </BForm>
          </div>
        </BTab>
      </BTabs>
    </BContainer>
  </MainFrame>
</template>
