import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export default defineStore('formStore', () => {
  const list_form = [
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
      type: "password",
    }),
  ];

  return { list_form }
})
