import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EnvironmentService } from "./../shared/environment/environment.service";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';

@Injectable()
export class LogoutService {

  constructor(
    private _http: HttpClient,
    private environmentService: EnvironmentService
  ) { }

  logOut(){
    let url = this.environmentService.setApiService('logout')
    return this._http.post(url, {})
        .map(res=> res)
        .catch(this.handleError)
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    const body = error.json() || '';
    errMsg = error.message ? error.message : error.toString();
    return Observable.throw(body);
  }

}
