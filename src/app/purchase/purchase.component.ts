import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { purchase } from '../Model/purchasemodel';
import { DigitalBooksService } from '../services/digitalbooks.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  @Input() bookID:any;
  bookHistoryList : any =[];
  display = "none";

  objpurchase : purchase={
    emailid : '',
    bookid : 0
  }
  constructor(private services: DigitalBooksService,public router:Router) { }

  ngOnInit(): void {
  }

  loadBookHistory(){
    
    this.services.GetBookHistory(this.objpurchase.emailid).subscribe(
      response => {this.bookHistoryList = response;
        this.display = "block";
      }
    )
  }

  onSubmit(){
    this.objpurchase.bookid = this.bookID;
    this.services.PurchaseBook(this.objpurchase).subscribe(
      response => { alert("Book Purchased Successfully. Please sign in to read Book");
      this.router.navigate(['/reader']);  
      this.loadBookHistory(); }
    )
  }
  onFocusOutEvent(event: any){
    this.loadBookHistory();
 }
 
}
