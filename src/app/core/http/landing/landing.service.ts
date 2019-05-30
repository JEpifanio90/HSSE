import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestService } from '../request.service';
import { IUser } from 'src/app/shared/models/user.interface';
import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private apiService: RequestService) { }

  public createUser(newUser: IUser): Observable<any> {
    return this.apiService.post(HSSEConstants.NEW_USER, newUser);
  }

  public authenticateUser(user: IUser): Observable<any> {
    const credentials = { username: user.email, password: user.password };
    return this.apiService.post(HSSEConstants.USER_LOGIN, credentials);
  }
}
