import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class FormValidationService {

  constructor(private http: HttpClient) { }

    getErrors(errArr){
    	var errMsgArr = []
    	Object.keys(errArr).forEach(key => {
          let value = errArr[key];
            value.forEach((item, index) => {
              errMsgArr.push(item)
            });
        });
    	return errMsgArr;
	}

}
