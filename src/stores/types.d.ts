import type { Ref } from "vue";

interface FormGroup {
  id_group: string;
  id_input: string;
  label: string;
  floating: boolean;
  placeholder: string;
  modelValue: Ref<string>;
  type: string;
}

interface Cards {
  name: string;
  title: string;
  imgSrc: string;
  imgAlt: string;
  imgTop: boolean;
  tag: string;
  description: string;
}

export type { Cards, FormGroup };
