import { Component, Input, OnInit } from "@angular/core";
import { Book } from "src/app/Model/bookmodel";
@Component({
    selector : 'app-show-books',
    templateUrl:'./show-books.component.html'
})
export class ShowBooksComponent implements OnInit{
   
    @Input() searchResult:any;

    constructor(){}
    SignupModaldisplay ="none";
    book :any;
    bookID : any;
    display : string = 'none';
    ModalTitle="Purchase Book";
    ngOnInit(): void {
    }
    BuyOrReadBook() {
        this.ModalTitle ="Sign In";
        this.display = "block";
        this.SignupModaldisplay = "none";
      }
      purchaseClick(item:Book){
        this.book =item; 
        this.bookID= this.book.bookId;
        this.display= 'block';
    }
    onCloseHandled() {
        this.display = "none";
      }
}