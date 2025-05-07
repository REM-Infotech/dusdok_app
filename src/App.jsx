import { BContainer, BFormGroup, BFormInput } from "bootstrap-vue-next";
import { computed, ref } from "vue";
const name = ref("");

const state = computed(() => name.value.length >= 4);
const invalidFeedback = computed(() =>
  name.value.length > 0 ? "Enter at least 4 characters." : "Please enter something.",
);

// const Header = styled.header`
//   line-height: 1.5;
//   max-height: 100vh;
// `;

export default {
  render() {
    return (
      <>
        <BContainer class="allign-items-center justify-content-center vh-100">
          <BFormGroup
            id="fieldset-1"
            description="Let us know your name."
            label="Enter your name"
            label-for="input-1"
            valid-feedback="Thank you!"
            invalid-feedback={invalidFeedback.value}
            state={state.value}
            label-class="mb-1"
          >
            <BFormInput id="input-1" v-model={name.value} state={state.value} trim />
          </BFormGroup>
          <div>
            Name: <strong>{name.value}</strong>
          </div>
        </BContainer>
      </>
    );
  },
};
