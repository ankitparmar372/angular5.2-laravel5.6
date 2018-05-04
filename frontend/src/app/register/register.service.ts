import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';
import { EnvironmentService } from "./../shared/environment/environment.service";

@Injectable()
export class RegisterService {

  constructor(private _http: Http, private environmentService: EnvironmentService) { }

  register(registerData){
    let url = this.environmentService.setApiService('register')
    return this._http.post(url, registerData)
        .map(res=> res.json())
        .catch(this.handleError)
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    const body = error.json() || '';
    errMsg = error.message ? error.message : error.toString();
    console.error(errMsg);
    return Observable.throw(body);
  }
}
