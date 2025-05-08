import { computed, ref, type ComputedRef } from "vue";


interface InptController {

  typeInput: string
  floatingState: ComputedRef<boolean | null>
  invalidFeedback: ComputedRef<string>

}

export class InputController implements InptController {


  typeInput: string;

  constructor(typeInput: string) {

    this.typeInput = typeInput

  }

  public floatingVal = ref("")
  public floatingState = computed(() =>
    this.floatingVal.value.length >= 4 ? true : this.floatingVal.value.length === 0 ? null : false,
  );
  public invalidFeedback = computed(() =>
    this.floatingVal.value.length > 1 ? "Enter at least 4 characters." : "Please enter something.",
  );
}

export type { InptController };



