import { Injectable } from '@angular/core';
import {SnotifyService, SnotifyPosition, SnotifyToastConfig} from 'ng-snotify';

@Injectable()
export class NotificationService {
	style = 'material';
	title = '';
	body = '';
	timeout = 3000;
	position: SnotifyPosition = SnotifyPosition.rightBottom;
	progressBar = true;
	closeClick = true;
	newTop = true;
	backdrop = -1;
	dockMax = 8;
	blockMax = 6;
	pauseHover = true;
	titleMaxLength = 15;
	bodyMaxLength = 80;
	
	constructor(private snotifyService: SnotifyService) { }

	// Notification Config
   	getConfig(): SnotifyToastConfig {
	    this.snotifyService.setDefaults({
	    	global: {
	        	newOnTop: this.newTop,
	        	maxAtPosition: this.blockMax,
	        	maxOnScreen: this.dockMax,
	      	}
	    });
	 	return {
	      	bodyMaxLength: this.bodyMaxLength,
	      	titleMaxLength: this.titleMaxLength,
	      	backdrop: this.backdrop,
	      	position: this.position,
	      	timeout: this.timeout,
	      	showProgressBar: this.progressBar,
	      	closeOnClick: this.closeClick,
	      	pauseOnHover: this.pauseHover
	    };
	}

	// On Success
	onSuccess($body) {
    	this.snotifyService.success($body, 'Success', this.getConfig());
  	}

  	// On Info
  	onInfo($body) {
    	this.snotifyService.info($body, 'Info', this.getConfig());
  	}
  	
  	// On Error
  	onError($body) {
    	this.snotifyService.error($body, 'Error', this.getConfig());
  	}
  	
  	// On Warning
  	onWarning($body) {
    	this.snotifyService.warning($body, 'Warning', this.getConfig());
  	}

  	onConfirmation() {
    	this.position = SnotifyPosition.centerCenter
    	const {timeout, closeOnClick, ...config} = this.getConfig(); // Omit props what i don't need
	    this.snotifyService.confirm(this.body, this.title, {
	      	...config,
	      	buttons: [
	        	{text: 'Yes', action: () => console.log('Clicked: Yes'), bold: false},
	        	{text: 'No', action: (toast) => {this.snotifyService.remove(toast.id)}, bold: true},
	      	]
	    });
	}
}
