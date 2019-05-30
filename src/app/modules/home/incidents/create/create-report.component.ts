import { Component, ViewChild } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { IQuestion } from 'src/app/shared/models/question.interface';
import { FormsHelper } from 'src/app/shared/utils/forms.helper';
import { SessionService } from 'src/app/shared/services/session.service';
import { IReport } from 'src/app/shared/models/report.interface';
import { IReportQ } from 'src/app/shared/models/report-q.interface';
import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';
import { IUser } from 'src/app/shared/models/user.interface';
import { ReportsService } from 'src/app/core/http/reports/reports.service';
import { UtilsService } from 'src/app/core/http/utils/utils.service';

@Component({
  selector: 'hsse-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})

export class CreateReportComponent {
  @ViewChild('stepper') stepper: CdkStepper;
  public ApprovalsForm: FormGroup;
  public eventDescriptionForm: FormGroup;
  public incidentDescriptionForm: FormGroup;
  public incidentAnalysisForm: FormGroup;
  public personalInfoForm: FormGroup;
  public ApprovalsQuestions: Array<IQuestion> = [];
  public eventDescriptionQuestions: Array<IQuestion> = [];
  public incidentDescriptionQuestions: Array<IQuestion> = [];
  public incidentAnalysisQuestions: Array<IQuestion> = [];
  public personalInfoQuestions: Array<IQuestion> = [];
  public dateFields = [];
  public errorList: Array<string> = [];
  public userList: Array<any> = [];
  public formsHelper = new FormsHelper();

  constructor(
    private acr: ActivatedRoute,
    private sessionService: SessionService,
    private snackService: MatSnackBar,
    private reportService: ReportsService,
    private utilService: UtilsService
  ) {
    this.getAllUsers();
    this.getQuestions();
    this.setForms();
  }

  public saveReport() {
    this.reportService.createReport(this.getReportData()).subscribe(
      (createdReport: IReport) => {
        this.snackService.open('Succesfully Created a report!', 'OK', { duration: 2500 });
        this.stepper.reset();
      },
      (errors: Array<string>) => {
        if (errors.length > 1) {
          this.errorList = errors;
          this.snackService.open('Check the sumary tab!', 'OK', { duration: 2500 });
        } else {
          this.snackService.open(errors[0], 'OK', { duration: 2500 });
        }
      }
    );
  }

  private getQuestions(): void {
    this.acr.data.subscribe((data: { questions: IReportQ }) => {
      this.ApprovalsQuestions = this.getModifiedQuestions(data.questions.approvalsQs);
      this.eventDescriptionQuestions = this.getModifiedQuestions(data.questions.eventDescriptionQs);
      this.incidentDescriptionQuestions = this.getModifiedQuestions(data.questions.incidentDescriptionQs);
      this.incidentAnalysisQuestions = this.getModifiedQuestions(data.questions.incidentAnalysisQs);
      this.personalInfoQuestions = this.getModifiedQuestions(data.questions.personalInfoQs);
    });
  }

  private getModifiedQuestions(questionsList: Array<IQuestion>): Array<IQuestion> {
    const modifiedQuestions: Array<IQuestion> = [];
    for (const question of questionsList) {
      switch (question.control_type) {
        case 'dropdown':
          modifiedQuestions.push(this.setDropdownOptions(question));
          break;
        case 'multipledropdown':
          modifiedQuestions.push(this.setMultipleDropdownOptions(question));
          break;
        case 'userdropdown':
          modifiedQuestions.push(this.setUserdropdown(question));
          break;
        default:
          modifiedQuestions.push(question);
          break;
      }

      if (question.control_type === 'datepicker') {
        this.dateFields.push(question.key);
      }

      if (question.form === HSSEConstants.APPROVALS_VIEW && question.key === 'created_by') {
        question.value = this.sessionService.currentUser.name;
      }
    }

    return modifiedQuestions;
  }

  private setDropdownOptions(question: IQuestion): IQuestion {
    switch (question.key) {
      case 'gender':
        question.options = HSSEConstants.GENDERS;
        break;
      case 'shift':
        question.options = HSSEConstants.COMMON_CHOICES;
        break;
      case 'body_side':
        question.options = HSSEConstants.BODY_SIDE;
        break;
      case 'case_type':
        question.options = HSSEConstants.CASE_TYPES;
        break;
      case 'accident_type':
        question.options = HSSEConstants.ACCIDENT_TYPES;
        break;
      case 'other_results':
        question.options = HSSEConstants.OTHER_RESULTS;
        break;
      case 'at_operation':
        question.options = HSSEConstants.COMMON_CHOICES;
        break;
      case 'fatality_potential':
        question.options = HSSEConstants.FATALITY_POTENTIAL;
        break;
      case 'major_accident':
        question.options = HSSEConstants.COMMON_CHOICES;
        break;
      case 'injury_mecahnism':
        question.options = HSSEConstants.INJURY_MECHANISMS;
        break;
      case 'status':
        question.options = HSSEConstants.STATUS_CHOICES;
        break;
      case 'supervisor':
      case 'ehhs_leader':
      case 'approved_by':
        question.options = this.userList;
        break;
    }

    return question;
  }

  private setMultipleDropdownOptions(question: IQuestion): IQuestion {
    switch (question.key) {
      case 'contributing_actions':
        question.options = HSSEConstants.CONTRIBUTING_ACTIONS;
        break;
      case 'contributing_conditions':
        question.options = HSSEConstants.CONTRIBUTING_CONDITIONS;
        break;
      case 'influenced_actions':
        question.options = HSSEConstants.INFLUENCE_CONTRIBUTING_ACTIONS;
        break;
      case 'influenced_conditions':
        question.options = HSSEConstants.INFLUENCE_CONTRIBUTING_CONDITIONS;
        break;
    }

    return question;
  }

  private setUserdropdown(question: IQuestion): IQuestion {
    question.options = this.sessionService.users;

    return question;
  }

  private setForms(): void {
    this.ApprovalsForm = this.formsHelper.toFormGroup(this.ApprovalsQuestions);
    this.eventDescriptionForm = this.formsHelper.toFormGroup(this.eventDescriptionQuestions);
    this.incidentDescriptionForm = this.formsHelper.toFormGroup(this.incidentDescriptionQuestions);
    this.incidentAnalysisForm = this.formsHelper.toFormGroup(this.incidentAnalysisQuestions);
    this.personalInfoForm = this.formsHelper.toFormGroup(this.personalInfoQuestions);
  }

  private getReportData(): IReport {
    const report = {};
    const rawData: Array<FormGroup> = [
      this.ApprovalsForm,
      this.eventDescriptionForm,
      this.incidentDescriptionForm,
      this.incidentAnalysisForm,
      this.personalInfoForm
    ];
    for (const form of rawData) {
      const formData = form.getRawValue();
      for (const key in formData) {
        if (key) {
          if (this.dateFields.indexOf(key.toString()) !== -1 && formData[key]) {
            report[key] = formData[key].getFullYear() + '-' + formData[key].getMonth() + '-' + formData[key].getDay();
          } else {
            report[key] = formData[key];
          }
        }
      }
    }
    report['site'] = this.sessionService.currentUser.site;
    report['created_by'] = this.sessionService.currentUser.id;
    return report as IReport;
  }

  private getAllUsers(): void {
    this.utilService.getUsers().subscribe((users: Array<IUser>) => {
      for (const usr of users) {
        this.userList.push ({ name: usr.name, value: usr.id});
      }
      this.sessionService.users = users;
    });
  }
}
