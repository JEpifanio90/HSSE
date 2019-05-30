import { FormGroup, Validators, FormControl } from '@angular/forms';

import { IQuestion } from '../models/question.interface';

export class FormsHelper {
  public isValid(question: IQuestion, form: FormGroup): boolean {
    return form.controls[question.key].valid;
  }

  // TODO: Come up with a better way to do this, because it sucks
  public toFormGroup(questions: Array<IQuestion>) {
    const group: any = {};
    let validators = null;

    questions.forEach(question => {
      validators = [];

      if (question.input_type === 'email') {
        validators.push(Validators.email);
      }

      if (question.required) {
        validators.push(Validators.required);
      }

      if (question.disabled) {
        group[question.key] = new FormControl({value: question.value, disabled: question.disabled} || '', validators);
      } else {
        group[question.key] = new FormControl(question.value || '', validators);
      }
    });

    return new FormGroup(group);
  }
}
