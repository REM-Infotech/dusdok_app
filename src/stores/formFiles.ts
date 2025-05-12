import { defineStore } from "pinia";
import { reactive, ref, type Reactive } from "vue";
import type { FormGroup } from "./types";

export default defineStore("formStore", () => {
  const list_form = ref<Reactive<FormGroup>[]>([]);

  async function constructListForm() {
    list_form.value = [
      reactive({
        id_group: "nome_group",
        id_input: "nome",
        label: "Nome Completo",
        floating: true,
        placeholder: "Nome completo",
        modelValue: ref(""),
        type: "text",
      }),
      reactive({
        id_group: "data_nascimento_group",
        id_input: "data_nascimento",
        label: "Data de Nascimento",
        floating: true,
        placeholder: "Data de nascimento",
        modelValue: ref(""),
        type: "text",
      }),
      reactive({
        id_group: "nacionalidade_group",
        id_input: "nacionalidade",
        label: "Nacionalidade",
        floating: true,
        placeholder: "Nacionalidade",
        modelValue: ref(""),
        type: "text",
      }),
      reactive({
        id_group: "cpf_group",
        id_input: "cpf",
        label: "CPF",
        floating: true,
        placeholder: "CPF",
        modelValue: ref(""),
        type: "text",
      }),
      reactive({
        id_group: "genero_group",
        id_input: "genero",
        label: "Gênero",
        floating: true,
        placeholder: "Gênero",
        modelValue: ref(""),
        type: "text",
      }),
      reactive({
        id_group: "cor_raca_group",
        id_input: "cor_raca",
        label: "Cor/Raça",
        floating: true,
        placeholder: "Cor e raça",
        modelValue: ref(""),
        type: "text",
      }),
      reactive({
        id_group: "cor_raca_group",
        id_input: "cor_raca",
        label: "Cor/Raça",
        floating: true,
        placeholder: "Cor e raça",
        modelValue: ref(""),
        type: "text",
      }),

      reactive({
        id_group: "cep_group",
        id_input: "cep",
        label: "CEP",
        floating: true,
        placeholder: "CEP",
        modelValue: ref(""),
        type: "text",
      }),
      reactive({
        id_group: "endereco_group",
        id_input: "endereco",
        label: "Endereço",
        floating: true,
        placeholder: "Endereço",
        modelValue: ref(""),
        type: "text",
      }),
      reactive({
        id_group: "numero_group",
        id_input: "numero",
        label: "Número",
        floating: true,
        placeholder: "Número",
        modelValue: ref(""),
        type: "text",
      }),
      reactive({
        id_group: "bairro_group",
        id_input: "bairro",
        label: "Bairro",
        floating: true,
        placeholder: "Bairro",
        modelValue: ref(""),
        type: "text",
      }),
      reactive({
        id_group: "cidade_group",
        id_input: "cidade",
        label: "Cidade",
        floating: true,
        placeholder: "Cidade",
        modelValue: ref(""),
        type: "text",
      }),
      reactive({
        id_group: "nome_pai_group",
        id_input: "nome_pai",
        label: "Nome do Pai",
        floating: true,
        placeholder: "Nome do pai",
        modelValue: ref(""),
        type: "text",
      }),
      reactive({
        id_group: "nome_mae_group",
        id_input: "nome_mae",
        label: "Nome da Mãe",
        floating: true,
        placeholder: "Nome da mãe",
        modelValue: ref(""),
        type: "text",
      }),
    ];
  }

  return { list_form, constructListForm };
});
