import { Component, OnInit } from '@angular/core';
import {SnotifyService, SnotifyPosition, SnotifyToastConfig} from 'ng-snotify';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  style = 'material';
 
  constructor(private snotifyService: SnotifyService,private router: Router) {}



  ngOnInit() {
  	 this.router.navigate([''])
  }

}
