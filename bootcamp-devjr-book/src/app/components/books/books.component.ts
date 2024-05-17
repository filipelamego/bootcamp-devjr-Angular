import { Component } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  newBook: Book = {} as Book;

  books: Book[] = [
    {
      id: 1,
      title: "Java 24 horas",
      author: "Filipe Lamego",
      price: 40.50
    },
    {
      id: 2,
      title: "Angular 24 horas",
      author: "Fernanda Szabadi",
      price: 59.90
    },
    {
      id: 3,
      title: "AWS 24 horas",
      author: "Alexandre Arantes",
      price: 45.90
    },
    {
      id: 4,
      title: "JavaScript 24 horas",
      author: "Kaike Fonseca",
      price: 39.90
    }
    
  ];

}
