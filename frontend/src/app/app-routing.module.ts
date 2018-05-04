import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { BooksIndexComponent }   from './books/books-index/books-index.component';
import { BooksAddComponent }   from './books/books-add/books-add.component';
import { BooksUpdateComponent }   from './books/books-update/books-update.component';
import { LoginComponent }   from './login/login.component';
import { LogoutComponent }   from './logout/logout.component';
import { AboutComponent }   from './about/about.component';
import { RegisterComponent }   from './register/register.component';
import { PublicGuard, ProtectedGuard } from 'ngx-auth';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/book', 
    pathMatch: 'full' 
  },
  {
    path: 'book',
    canActivate: [ ProtectedGuard ],
    component: BooksIndexComponent 
  },
  { path: 'book/add', canActivate: [ ProtectedGuard ], component: BooksAddComponent },
  { path: 'book/update/:id', canActivate: [ ProtectedGuard ], component: BooksUpdateComponent },
  { path: 'login', canActivate: [ PublicGuard ], component: LoginComponent },
  { path: 'logout', canActivate: [ ProtectedGuard ], component: LogoutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', canActivate: [ PublicGuard ], component: RegisterComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' } // catch any unfound routes and redirect to home page
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}