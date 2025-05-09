import { defineStore } from 'pinia';
import { reactive, ref, type Reactive } from 'vue';
import type { FormGroup } from './types';




export default defineStore('formStore', () => {
  const list_form = ref<Reactive<FormGroup>[]>([]);

  async function constructListForm() {

    list_form.value = [
      reactive({
        id_group: "test_gp",
        id_input: "teste_inpt",
        label: "teste",
        floating: true,
        placeholder: "teste",
        modelValue: ref(""),
        type: "email",
      }),
      reactive({
        id_group: "test_gp2",
        id_input: "teste_inpt2",
        label: "teste2",
        floating: true,
        placeholder: "teste2",
        modelValue: ref(""),
        type: "text",
      }),
    ]

  }

  return { list_form, constructListForm }
})
