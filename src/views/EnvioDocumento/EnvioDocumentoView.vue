<script setup lang="ts">
import "@/assets/css/dashboard.css";
import { BForm } from "bootstrap-vue-next";
import { reactive, ref } from "vue";

const foods = [{ text: "Select One", value: null }, "Carrots", "Beans", "Tomatoes", "Corn"];

const form = reactive({
  email: "",
  name: "",
  food: null,
  checked: [],
});
const show = ref(true);

const onSubmit = (event: Event) => {
  event.preventDefault();

  alert(JSON.stringify(form));
};

const onReset = (event: Event) => {
  event.preventDefault();
  // Reset our form values
  form.email = "";
  form.name = "";
  form.food = null;
  form.checked = [];
  // Trick to reset/clear native browser form validation state
  show.value = false;
};
</script>
<template>
  <MainFrame>
    <BContainer class="bg-blue-chill-600 p-4 rounded-4 shadow">
      <BTabs content-class="mt-3">
        <BTab title="Passo 1" active>
          <div>
            <BForm v-if="show" @submit="onSubmit" @reset="onReset">
              <BFormGroup
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <BFormInput
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </BFormGroup>

              <BFormGroup id="input-group-2" label="Your Name:" label-for="input-2">
                <BFormInput id="input-2" v-model="form.name" placeholder="Enter name" required />
              </BFormGroup>
              <BFormGroup id="input-group-3" label="Food:" label-for="input-3">
                <BFormSelect id="input-3" v-model="form.food" :options="foods" required />
              </BFormGroup>

              <BFormGroup id="input-group-4">
                <BFormCheckboxGroup id="checkboxes-4" v-model="form.checked">
                  <BFormCheckbox value="me">Check me out</BFormCheckbox>
                  <BFormCheckbox value="that">Check that out</BFormCheckbox>
                </BFormCheckboxGroup>
              </BFormGroup>
              <BButton type="submit" variant="primary">Submit</BButton>
              <BButton type="reset" variant="danger">Reset</BButton>
            </BForm>

            <BCard class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ form }}</pre>
            </BCard>
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
