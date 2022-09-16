import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../Model/bookmodel';
import { purchase } from '../Model/purchasemodel';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
export class DigitalBooksService {

    baseUrl = 'https://localhost:7154/';
    
    constructor(private https: HttpClient,public router:Router) {}

    //Get All Categories
    GetAllCategory():Observable<any[]>{
        return this.https.get<any>(this.baseUrl + "api/Categories");
    }

    //Get All Author List
    GetAllAuthors(auth: number):Observable<any[]>{
        return this.https.get<any>(this.baseUrl + "api/UserTables/GetAuthors?roleId="+auth);
    }

    //Get All Role List
    GetAllRoles():Observable<any[]>{
        return this.https.get<any>(this.baseUrl + "api/UserTables/GetRoles");
    }

    // Save / Add new User
    AddUser(val:any):Observable<any[]>{
        return this.https.post<any>(this.baseUrl + "api/UserTables",val);
    }

    // Login WebAPI
    Login(val:any):Observable<any[]>{
        return this.https.post<any>(this.baseUrl + "Login",val)
    }

    // Search books
    SearchBooks(c:string, aID:string, p: number ):Observable<any[]>{
        return this.https.get<any>(this.baseUrl +"api/Books/SearchBooks?cId="+ c+"&aId="+aID+"&price="+p);
    }
    // Save book
    SaveBook(book : Book):Observable<Book>{
        return this.https.post<Book>(this.baseUrl + "api/Books",book);
    }
    // Purchase 
    PurchaseBook(purchases : purchase):Observable<purchase>{
        return this.https.post<purchase>(this.baseUrl + "api/Purchases",purchases);
    }

    //Book History
    GetBookHistory(emailId :string):Observable<any>{
        return this.https.get<any>(this.baseUrl +"Purchases/BookHistory/"+emailId);
    }

    //Get Book List For Reader
    GetBookListReader(emailId :string):Observable<any>{
        return this.https.get<any>(this.baseUrl +"GetBooksWithStatus/"+emailId);
    }
    //Check User Logged in or not
    CheckUserLoggedInOrNot():boolean{
        if (localStorage.getItem('token')) {
            // logged in so return true
            console.log(localStorage.getItem('token'));
            this.router.navigate(['/author']);  
            return true;
        }
        // not logged in so redirect to sign page with the return url
         this.router.navigate(['/searchbooks']);     
        return false;
    }
}