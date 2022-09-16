import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { DigitalBooksService } from '../services/digitalbooks.service';
import { ShowBooksComponent } from '../searchbooks/show-books/show-books.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  response :any;
  token : string="";
  usernameC:any;
  passwordC:any;
  constructor(private service: DigitalBooksService,public router:Router) { }

  ngOnInit(): void {
  }

  login(){
    var val = {      
      userName : this.usernameC,
      password : this.passwordC
    }
    this.service.Login(val).subscribe(
      response => {  this.response = response; 
        if(this.response.token != ""){
      console.log(this.response);
      // store jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('token', this.response.token);
      localStorage.setItem('user', JSON.stringify(this.response.user));
      let headerComponentObj = new HeaderComponent(this.service,this.router);
      headerComponentObj.ngOnInit();
      if(this.response.user.roleId == 1) //This is Author
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
    }
    )
  }
}
