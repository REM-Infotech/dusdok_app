import "@/assets/css/sign-in.css";
import styled from "@vue-styled-components/core";
import { BContainer, BFormGroup, BInput } from "bootstrap-vue-next";
import { onBeforeMount } from "vue";

import { InputController } from "./inputHandle.ts";

/**
 *  @type {import("./inputHandle.ts").InptController}
 */
const inputState = new InputController();
/**
 *  @type {import("./inputHandle.ts").InptController}
 */
const inputStatePassword = new InputController();

inputStatePassword.invalidFeedback.value;

const Reactive = {
  setup() {
    onBeforeMount(() => {
      document.body.classList.add(...["d-flex", "align-items-center", "py-4", "bg-purple"]);
    });
  },

  render() {
    return (
      <>
        <Container>
          <form action="">
            <img
              class="mb-4"
              src="./src/assets/brand/bootstrap-logo.svg"
              alt=""
              width="72"
              height="57"
            />
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
            <FloatingForm
              id="fieldset-4"
              label="Name"
              label-for="input-floating-4"
              valid-feedback="Thank you!"
              invalid-feedback={inputState.invalidFeedback.value}
              state={inputState.floatingState.value}
              floating
            >
              <InputLogin
                id="input-floating-4"
                v-model={inputState.floatingVal.value}
                state={inputState.floatingState.value}
                placeholder="Enter your name please"
              />
            </FloatingForm>
            <FloatingForm
              id="fieldset-4"
              label="Name"
              label-for="input-floating-4"
              valid-feedback="Thank you!"
              invalid-feedback={inputStatePassword.invalidFeedback.value}
              state={inputStatePassword.invalidFeedback.value}
              floating
            >
              <InputPassword
                id="input-floating-4"
                v-model={inputStatePassword.floatingVal.value}
                state={inputStatePassword.floatingState.value}
                placeholder="Enter your name please"
              />
            </FloatingForm>
            <FormCheck>
              <input
                class="form-check-input"
                type="checkbox"
                value="remember-me"
                id="checkDefault"
              />
              <label class="ms-2 form-check-label" for="checkDefault">
                Remember me
              </label>
            </FormCheck>
            <button class="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>
            <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2025</p>
          </form>
        </Container>
      </>
    );
  },
};

export default Reactive;

const Container = styled(BContainer)`
  /* background-color: var(--bs-blue-chill); */
  max-width: 330px;
  padding: 1rem;
`;

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
