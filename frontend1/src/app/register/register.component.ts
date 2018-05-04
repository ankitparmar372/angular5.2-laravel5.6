import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from "./register.service";
import { FormValidationService } from "../shared";
import { AuthenticationService } from '../shared';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private registerService: RegisterService, 
    private formValidationService: FormValidationService,
    private router: Router,
  ) { }

  registerData = {name:'', email:'', password:'', c_password:''}
  message = ''
  errMsgArr = []
  ngOnInit() {
  }

  register() {
    this.spinnerService.show();
	  this.registerService.register(this.registerData)
    .subscribe((value) => {
      this.spinnerService.hide();
      this.router.navigate(['login']);   
    }, err => {
      this.spinnerService.hide();
      if (err.status_code == 422) {
        this.errMsgArr = this.formValidationService.getErrors(err.errors);
      } else {
        console.log('Error => ', err.message)
      }
    });
  }
}
