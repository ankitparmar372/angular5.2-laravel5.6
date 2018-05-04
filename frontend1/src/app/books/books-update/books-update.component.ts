import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {BookService} from "./../book.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';

@Component({
  selector: 'app-books-update',
  templateUrl: './books-update.component.html',
  styleUrls: ['./books-update.component.css']
})
export class BooksUpdateComponent implements OnInit {

  	bookData = {isbn:'', title:'', author:'', description:'', image:''}
  	message = ''
  	constructor(
  		private bookService: BookService, 
  		private router: Router,
  		private route: ActivatedRoute,
  		private location: Location,
      private spinnerService: Ng4LoadingSpinnerService,
      private notificationService: NotificationService
  	) { }

  ngOnInit() {
  	this.getBookById()
  }
  getBookById(){
    this.spinnerService.show();
  	const $id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById($id)
      .subscribe((response) => {
        this.bookData = response.data
        this.spinnerService.hide();
    })
  }

  updateBook() {
    this.spinnerService.show();
  	this.bookService.updateBook(this.bookData)
      .subscribe((value) => {
        this.spinnerService.hide();
        this.notificationService.onSuccess('Successfully Updated.')
        this.router.navigate(['book']);   
      });
  }
}
