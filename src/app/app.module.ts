import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchbooksComponent } from './searchbooks/searchbooks.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DigitalBooksService } from './services/digitalbooks.service';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import {ShowBooksComponent} from './searchbooks/show-books/show-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthorComponent } from './author/author.component';
import { ReaderComponent } from './reader/reader.component';
import { PurchaseComponent } from './purchase/purchase.component'
import { TokenInterceptorService } from './services/token-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchbooksComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    ShowBooksComponent,
    AddBookComponent,
    AuthorComponent,
    ReaderComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},
    DigitalBooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
