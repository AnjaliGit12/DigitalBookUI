import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthorComponent } from './author/author.component';
import { ReaderComponent } from './reader/reader.component';
import { SearchbooksComponent } from './searchbooks/searchbooks.component';
const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'author',component:AuthorComponent},
  {path:'reader',component:ReaderComponent},
  {path: 'searchbooks', component: SearchbooksComponent },
  {path:'signin',component:SigninComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
