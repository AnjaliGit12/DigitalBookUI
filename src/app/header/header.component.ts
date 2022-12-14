import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigitalBooksService } from '../services/digitalbooks.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 
  constructor(private service: DigitalBooksService,public router:Router) { }

  ModalTitle:string="";
  ActivateSignupComp :boolean=false;
  
  AddBookModal() {
    this.ModalTitle ="Add Book";
    this.displaybook = "block"; this.SignupModaldisplay = "none";
    this.display ="none";
  }

 
  display = "none";
  displaybook="none";
  SignupModaldisplay ="none";
  userLoggedIn :boolean =false;
  showSignInSignUp : boolean = true;
  loginuserName:any;
  openModal() {
    this.ModalTitle ="Sign Up"; this.displaybook = "none";
    this.SignupModaldisplay = "block";
    this.display = "none";
  }
  signOutClick() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isUserLoggedIn(false);
    this.router.navigate(['/signin']);        
  } 

  openSignInModal() {
    this.ModalTitle ="Sign In";
    this.display = "block";    
    this.SignupModaldisplay = "none";
    this.displaybook = "none";
   
  }
  onCloseHandled() {
    this.SignupModaldisplay = "none";
    this.display = "none";
    this.displaybook = "none";
  }
  isUserLoggedIn(loggedIn:boolean){
    if(loggedIn){
      this.showSignInSignUp =false;
    }
    else{
      this.showSignInSignUp =true;
    }
    console.log("showSignInSignUp =" + this.showSignInSignUp);
    console.log("loggedIn =" + loggedIn);
  }
  ngOnInit(): void {
    this.userLoggedIn = this.service.CheckUserLoggedInOrNot();
    this.isUserLoggedIn(this.userLoggedIn);
    this.GetUserID();
  }
  GetUserID(){
    let values = JSON.parse(localStorage.getItem("user") || '');
    this.loginuserName=values.userName;
    console.log(this.loginuserName);
  }

}
