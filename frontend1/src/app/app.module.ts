import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AlertModule } from 'ngx-bootstrap/alert'; 
import { AuthenticationModule } from './shared';
import { EnvironmentModule } from './shared';
import { FormValidationModule } from './shared';
import { NotificationModule } from './shared';

// Component
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { BookService } from "./books/book.service";
import { BooksIndexComponent } from './books/books-index/books-index.component';
import { BooksAddComponent } from './books/books-add/books-add.component';
import { BooksUpdateComponent } from './books/books-update/books-update.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from "./register/register.service";
import { LoginService } from "./login/login.service";
import { LogoutService } from "./logout/logout.service";
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { LogoutComponent } from './logout/logout.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    BooksIndexComponent,
    BooksAddComponent,
    BooksUpdateComponent,
    RegisterComponent,
    NavHeaderComponent,
    NavSidebarComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AuthenticationModule,
    EnvironmentModule,
    FormValidationModule,
    NotificationModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    AlertModule.forRoot(),
    SweetAlert2Module.forRoot(),
    NgxPaginationModule,
    AppRoutingModule,
    SnotifyModule,
    ModalModule.forRoot()
  ],
  providers: [
    BookService,
    RegisterService,
    LoginService,
    LogoutService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
