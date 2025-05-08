<script setup lang="ts">
import MainFrame from "@/components/MainFrame.vue";
import { computed, ref } from "vue";
const floatingName = ref("");

const floatingState = computed(() => floatingName.value.length >= 4);
const floatingInvalidFeedback = computed(() =>
  floatingName.value.length > 0 ? "Enter at least 4 characters." : "Please enter something.",
);
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
