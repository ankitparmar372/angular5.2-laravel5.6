import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared';
import { NotificationService } from '../shared';
import {LogoutService} from "./logout.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
  	private authService: AuthenticationService,
  	private router: Router,
    private notificationService: NotificationService,
  	private logoutService: LogoutService
  ) { }

  ngOnInit() {
  	this.logoutService.logOut()
      .subscribe((res) => {
        this.notificationService.onSuccess('Good bye...'+JSON.parse(localStorage.getItem('userInfo')).name)
        this.authService.logout()
      });

  }

}
