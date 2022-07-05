import { FormGroup } from "@angular/forms";

export const fromFormToEntity = (form: FormGroup) => {
    let obj: any = {};
    obj = form.value;
    return obj;
  };
  