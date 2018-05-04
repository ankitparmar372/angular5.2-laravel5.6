import { Injectable } from '@angular/core';
// import { Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';
import { EnvironmentService } from "./../shared/environment/environment.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class BookService {

  constructor(
    private _http: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  getBooks(page){
    let url = this.environmentService.setApiServiceWithPage('book', page)
    return this._http.get(url)
        .map(res=> res)
        .catch(this.handleError)
  }

  getBookById($id){
    let url = this.environmentService.setApiServiceById('book', $id)
    return this._http.get(url)
        .map(res=> res)
        .catch(this.handleError)
  }

  addBooks(bookData){
    let url = this.environmentService.setApiService('book')
    return this._http.post(url, bookData)
        .map(res=> res)
        .catch(this.handleError)
  }

  updateBook(bookData){
    let url = this.environmentService.setApiServiceById('book', bookData.id)
    return this._http.put(url, bookData)
        .map(res=> res)
        .catch(this.handleError)
  }

  deleteBook($id){
    let url = this.environmentService.setApiServiceById('book', $id)
    return this._http.delete(url)
        .map(res=> res)
        .catch(this.handleError)
  }

  private handleError (error: HttpErrorResponse | any) {
    let errMsg: string;
    errMsg = error.error
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
