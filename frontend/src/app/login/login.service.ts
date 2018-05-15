import { Injectable } from '@angular/core';
// import {Http, Response} from "@angular/http";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EnvironmentService } from "./../shared/environment/environment.service";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

  constructor(
    private _http: HttpClient,
    private environmentService: EnvironmentService
  ) { }

  login(loginData){
    let url = this.environmentService.setAuthService('oauth/token')
    return this._http.post(url, loginData)
        .map(res=> res)
        .catch(this.handleError)
  }

  getMe(){
    let url = this.environmentService.setApiService('me')
    return this._http.get(url)
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
