<script setup lang="ts">
import "@/assets/css/sign-in.css";
import styled from "@vue-styled-components/core";
import { BContainer, BFormGroup, BInput } from "bootstrap-vue-next";
import { onBeforeMount, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { InputController } from "./res/inputHandle.js";

const InputLogin = styled(BInput)`
  margin-bottom: 1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;

const InputPassword = styled(BInput)`
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const FloatingForm = styled(BFormGroup)`
  z-index: 2;
`;

const my_3 = styled("div")`
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
`;

const text_start = styled(my_3)`
  text-align: left !important;
`;
const FormCheck = styled(text_start)`
  display: block;
  min-height: 1.5rem;
`;

const inputState = new InputController("");
const inputStatePassword = new InputController("");

onBeforeMount(() => {
  document.body.classList.add(...["d-flex", "align-items-center", "py-4", "bg-blue-chill-950"]);
});
onBeforeUnmount(() => {
  document.body.classList.remove(...["d-flex", "align-items-center", "py-4", "bg-blue-chill-950"]);
});
const router = useRouter();
function HandleSubmit(event: Event) {
  event.preventDefault();
  // Handle form submission logic here
  router.push({ name: "dashboard" });
}
</script>

<template>
  <BContainer class="bg-blue-chill-800 p-5 rounded rounded-4 shadow form-signin" id="LoginForm">
    <form @submit="HandleSubmit">
      <img class="mb-4 rounded rounded-4" src="@/assets/img/favicon.png" alt="" width="82" />
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <FloatingForm
        id="fieldset-4"
        label="Email"
        label-for="input-floating-4"
        :invalid-feedback="inputState.invalidFeedback.value"
        :state="inputState.floatingState.value"
        floating
      >
        <InputLogin
          id="input-floating-4"
          type="email"
          v-model="inputState.floatingVal.value"
          :state="inputState.floatingState.value"
          placeholder="Email"
          required
        />
      </FloatingForm>
      <FloatingForm
        id="fieldset-4"
        label="Senha"
        label-for="input-floating-4"
        :invalid-feedback="inputStatePassword.invalidFeedback.value"
        :state="inputStatePassword.floatingState.value"
        floating
      >
        <InputPassword
          id="input-floating-4"
          v-model="inputStatePassword.floatingVal.value"
          :state="inputStatePassword.floatingState.value"
          placeholder="Password"
          type="password"
          required
        />
      </FloatingForm>
      <FormCheck>
        <input class="form-check-input" type="checkbox" value="remember-me" id="checkDefault" />
        <label class="ms-2 form-check-label" for="checkDefault"> Remember me </label>
      </FormCheck>
      <button class="btn btn-success shadow w-100 py-2" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-body-secondary">&copy; 2017 2025</p>
    </form>
  </BContainer>
</template>
;
