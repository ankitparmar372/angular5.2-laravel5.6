import { Component,ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';
import { BookService } from "./../book.service";


@Component({
  selector: 'app-books-index',
  templateUrl: './books-index.component.html',
  styleUrls: ['./books-index.component.css']
})
export class BooksIndexComponent implements OnInit {
  @ViewChild('BookImageModal') BookImageModal: ModalDirective;
  p: number = 1;
  books = [];
  errMesg: any;
  totalRecords = 0;
  pageSize = 5;
  bookImage = '';

  constructor(
    private spinnerService: Ng4LoadingSpinnerService, 
    private bookService: BookService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  	this.getBook();
  }

  getBook(){
    this.spinnerService.show();
    this.bookService.getBooks(1)
      .subscribe((response) => {
        this.books = response.data.data
        this.totalRecords =response.data.total
        this.spinnerService.hide();
      });
  }

  getPage($page)
  {
    this.spinnerService.show();
    this.bookService.getBooks($page)
      .subscribe((response) => {
        this.books = response.data.data
        this.totalRecords =response.data.total
        this.p = $page
        this.spinnerService.hide();
      });
  }

  deleteBook($id){
    this.spinnerService.show();
    this.bookService.deleteBook($id)
      .subscribe(data => {
        this.spinnerService.hide();
        this.notificationService.onSuccess('Successfully Deleted.')
        this.getBook()
    })
  }

  viewImage(image){
    this.bookImage = image
    this.BookImageModal.show()
  }

}
