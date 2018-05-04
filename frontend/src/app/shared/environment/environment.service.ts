import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class EnvironmentService {
	
	apiUrl = environment.apiUrl
	// apiUrl = 'http://rbsavani.com/'

  	constructor(private http: HttpClient) { }

  	setApiService(serviceStr){
	    return this.apiUrl +'api/'+ serviceStr
	}
	setApiServiceWithPage(serviceStr, pageNo){
	    return this.apiUrl +'api/'+ serviceStr +'?page='+ pageNo
	}
	setApiServiceById(serviceStr, id){
	    return this.apiUrl +'api/'+ serviceStr +'/'+ id
	}
	setAuthService(serviceStr){
	    return this.apiUrl + serviceStr
	}
	setAuthServiceById(serviceStr, id){
	    return this.apiUrl + serviceStr +'/'+ id
	}
	setLoginJson(longinData) {
		let formObject = longinData
		formObject.client_secret = environment.clientSecret
		formObject.grant_type = environment.grantType
		formObject.client_id = environment.clientId
		return formObject
	}

}
