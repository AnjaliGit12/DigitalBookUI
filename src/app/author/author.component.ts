import { Component, OnInit } from '@angular/core';
import { DigitalBooksService } from '../services/digitalbooks.service';
import { Router } from '@angular/router';
import { Book } from '../Model/bookmodel';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  loginuserName :any;
  searchResult: any;
  ModalTitle:string="";
  display = "none";
  editdisplay ="none"
  userID : string ='';
  role:any;
  constructor(private service:DigitalBooksService,public router:Router) { }

  ngOnInit(): void {
    console.log('author oninit');
    this.service.CheckUserLoggedInOrNot();
    this.GetUserID();
    this.loadBooks();    
    }

  GetUserID(){
    let values = JSON.parse(localStorage.getItem("user") || '');
    this.userID = values.userId;
    this.loginuserName=values.userName;
    this.role =values.roleId;
    if(this.role == 2) //This is Author
      {
        this.router.navigate(['/author']); 
        console.log('author'); 
      }
      else{ 
        // This is Reader
        console.log('reader');
        this.router.navigate(['/reader']);  
      }
  }
  
  loadBooks(){
    this.service.SearchAuthorBooks(this.userID).subscribe(
      response => {this.searchResult = response; console.log(this.searchResult);}
    );
    }

    openModal() {
      this.ModalTitle ="Add Book";
      this.display = "block";
      this.editdisplay ="none";
    }
  
    onCloseHandled() {
      this.display = "none";
      this.editdisplay ="none";
  }
    // blockBook() {
    //   this.service.BlockBook(this.bookid,this.userID,0);
    // }
}
