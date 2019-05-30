import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IQuestion } from '../../models/question.interface';

@Component({
  selector: 'hsse-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  @Input() questions: Array<IQuestion>;
  @Input() form: FormGroup;
  @Input() layout = 'column';
  @Input() gap =  '';

  constructor() {}

  public isValid(question: IQuestion) {
    return this.form.controls[question.key].valid;
  }
}
