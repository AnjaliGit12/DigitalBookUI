import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Model/bookmodel';
import { DigitalBooksService } from '../services/digitalbooks.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  CategoryList:any[] =[];
  books:Book[] = [];
  book : Book = {
    bookName: '',
    categoryId: 0,
    price: 0,
    publisher: '',
    userId: 0,
    publishedDate: new Date(),
    bookContent: '',
    active: true,
    bookId: 0
  }
  
  GetUserID(){
    let values = JSON.parse(localStorage.getItem("user") || '');
    this.book.userId = values.userId;
  }

  onSelected(value:string): void {
		this.book.categoryId = Number.parseInt(value);
	}

  constructor(private service: DigitalBooksService,public router:Router) { }

  ngOnInit(): void {
    this.GetUserID();
    this.loadCategoryList();
  }

  loadCategoryList() {
    this.service.GetAllCategory()
    .subscribe(
      response => { this.CategoryList = response}
    );
  }

  onSubmitClick(){
    this.service.SaveBook(this.book).subscribe(
      response => { 
        alert('Book Added Successfully');
        this.router.navigate(['/author']);     
    }
    );
  }
}
