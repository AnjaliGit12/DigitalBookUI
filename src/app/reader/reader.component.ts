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
        console.log(this.userEmailID);
      }

      loadBookHistory(){
    
        this.services.GetBookListReader(this.userEmailID).subscribe(
          response => {this.searchResult = response; }
        )
      }

      readBookClick(item:Book){
        this.book =item; 
        this.bookContent= this.book.bookContent;
        this.readBookdisplay= 'block';
      }
}
