import styled from "@vue-styled-components/core";
import { BContainer, BFormGroup, BInput } from "bootstrap-vue-next";
import { computed, onBeforeMount, ref } from "vue";
import "./assets/css/sign-in.css";

const floatingName = ref("");

const floatingState = computed(() =>
  floatingName.value.length >= 4 ? true : floatingName.value.length === 0 ? null : false,
);

const floatingInvalidFeedback = computed(() =>
  floatingName.value.length > 1 ? "Enter at least 4 characters." : "Please enter something.",
);

const name = ref("");

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

export default {
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
            <FloatingForm
              id="fieldset-4"
              label="Name"
              label-for="input-floating-4"
              valid-feedback="Thank you!"
              invalid-feedback={floatingInvalidFeedback.value}
              state={floatingState.value}
              floating
            >
              <InputLogin
                id="input-floating-4"
                v-model={floatingName.value}
                state={floatingState.value}
                placeholder="Enter your name please"
              />
            </FloatingForm>
            <FloatingForm
              id="fieldset-4"
              label="Name"
              label-for="input-floating-4"
              valid-feedback="Thank you!"
              invalid-feedback={floatingInvalidFeedback.value}
              state={floatingState.value}
              floating
            >
              <InputPassword
                id="input-floating-4"
                v-model={floatingName.value}
                state={floatingState.value}
                placeholder="Enter your name please"
              />
            </FloatingForm>
          </form>
        </Container>
      </>
    );
  },
};
