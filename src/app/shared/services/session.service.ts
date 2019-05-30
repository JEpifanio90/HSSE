import { Injectable } from '@angular/core';

import { IUser } from '../models/user.interface';
import { ISite } from '../models/site.interface';
import { IQuestion } from '../models/question.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public currentUser: IUser = null;
  public redirectUrl: string;
  public users: Array<IUser> = [];
  public sites: Array<ISite> = [];
  public loginQuestions: Array<IQuestion> = [];
  public newUserQuestions: Array<IQuestion> = [];
  public reportQuestions: Array<IQuestion> = [];
  public indicatorQuestions: Array<IQuestion> = [];
  public isDarkThemeActive: boolean;

  constructor() { }
}
