import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.css']
})
export class NavSidebarComponent implements OnInit {

  constructor() { }
  toggledID = "toggled";
  ngOnInit() {
  }

  sidebarToggle()
  {
  	if(this.toggledID == "toggled")
  	{
  		this.toggledID = ""	
  	}else{
  		this.toggledID = "toggled"	
  	}
  }
}
