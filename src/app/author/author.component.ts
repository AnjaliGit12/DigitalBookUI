import { Component, OnInit } from '@angular/core';
import { DigitalBooksService } from '../services/digitalbooks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  searchResult: any;
  ModalTitle:string="";
  display = "none";
  userID : string ='';
  constructor(private service:DigitalBooksService) { }

  ngOnInit(): void {
    console.log('author oninit');
    this.service.CheckUserLoggedInOrNot();
    this.GetUserID();
    this.loadBooks();    
    }

  GetUserID(){
    let values = JSON.parse(localStorage.getItem("user") || '');
    console.log(values);    
    this.userID = values.userId;
    console.log(this.userID);
  }
  
  loadBooks(){
    this.service.SearchBooks('0',this.userID,0).subscribe(
      response => {this.searchResult = response; console.log(this.searchResult);}
    );
    }

    openModal() {
      this.ModalTitle ="Add Book";
      this.display = "block";
    }
  
    onCloseHandled() {
      this.display = "none";
    }
    
}
