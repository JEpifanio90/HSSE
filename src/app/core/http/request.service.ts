import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { _throw } from 'rxjs/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'en-US',
      Authorization: ''
    }
  };

  constructor(private httpClient: HttpClient) { }

  public post(url: string, data: object): Observable<any> {
    return this.httpClient.post(url, data, this.options)
      .catch(this.handleError);
  }

  public get(url: string): Observable<any> {
    return this.httpClient.get(url, this.options)
      .catch(this.handleError);
  }

  public patch(url: string, data: object): Observable<any> {
    return this.httpClient.patch(url, data, this.options)
      .catch(this.handleError);
  }

  public update(url: string, data: object): Observable<any> {
    return this.httpClient.put(url, data, this.options)
      .catch(this.handleError);
  }

  public delete(url: string): Observable<any> {
    return this.httpClient.delete(url, this.options)
      .catch(this.handleError);
  }

  public addToken(token: string): void {
    this.options.headers.Authorization = 'Token ' + token;
  }

  private handleError(exception: HttpErrorResponse): Observable<never> {
    const errors: Array<string> = [];
    for (const key in exception.error) {
      if (exception.error[key]) {
        errors.push(key + ':  ' + exception.error[key][0] + '   ');
      }
    }

    return _throw(errors);
  }
}
