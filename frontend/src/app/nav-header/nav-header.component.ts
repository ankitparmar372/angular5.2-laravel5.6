import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  toggledID = "toggled";
  constructor() { }

  userDetail = localStorage.getItem(JSON.parse(localStorage.getItem('userInfo')))
  ngOnInit() {
  }

  myMethod()
  {
  	if(this.toggledID == "toggled")
  	{
  		this.toggledID = ""	
  	}else{
  		this.toggledID = "toggled"	
  	}
  }
  

}
