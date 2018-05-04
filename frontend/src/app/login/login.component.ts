import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from "./login.service";
import { AuthenticationService } from '../shared';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FormValidationService } from "../shared";
import { NotificationService } from '../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {username:'admin@example.com', password:'123456'}
  message = ''
  errMsgArr = []
  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private loginService: LoginService, 
    private authService: AuthenticationService, 
    private router: Router,
    private formValidationService: FormValidationService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {}

  public login() {
    this.spinnerService.show();
    this.authService.login(this.loginData).subscribe((value) => {
      this.loginService.getMe().subscribe((value) => {
        localStorage.setItem('userInfo', JSON.stringify(value.data))
        console.log(JSON.parse(localStorage.getItem('userInfo')).name);
        this.spinnerService.hide();
        this.notificationService.onSuccess('Welcome...'+JSON.parse(localStorage.getItem('userInfo')).name)
        this.router.navigateByUrl('book');
      });
    }, err => {
      this.spinnerService.hide();
      if (err.status_code == 422) {
        this.errMsgArr = this.formValidationService.getErrors(err.errors);
      } else {
        this.errMsgArr = [err.error.message]
      }
    });
  }

}
