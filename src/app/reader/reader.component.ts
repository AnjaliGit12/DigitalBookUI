import { Component, OnInit } from '@angular/core';
import { Book } from '../Model/bookmodel';
import { DigitalBooksService } from '../services/digitalbooks.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

    searchResult:any;

    book :any;
    bookID : any;
    display : string = 'none';
    ModalTitle="Purchase Book";
    readBookdisplay : string ="none";
    ModalReadBookTitle : string ="Read Book";
    bookContent : string ="";
    userEmailID : string ="";
    userId:any;
    loginuserName:any;

    constructor(private services:DigitalBooksService){}

    ngOnInit(): void {
      this.GetUserID();
      this.loadBookHistory();
    }
    purchaseClick(item:Book){
        this.book =item; 
        this.bookID= this.book.bookId;
        this.display= 'block';
    }
    onCloseHandled() {
        this.display = "none";
        this.readBookdisplay ="none";
      }

      GetUserID(){
        let values = JSON.parse(localStorage.getItem("user") || '');
        this.userEmailID = values.emailId;
        this.userId = values.userId;   
        this.loginuserName=values.userName;
      }

      loadBookHistory(){    
        this.services.GetBookHistory(this.userEmailID).subscribe(
          response => {this.searchResult = response; console.log(response);}
        )
      }

      readBookClick(val: string){
        console.log(val);
        this.bookContent= val;
        this.readBookdisplay= 'block';
      }
}
