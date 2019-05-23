import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'To become an expert in angular', false, new Date()),
    new Todo(3, 'Work in Australia', false, new Date())
  ];

  // Sample Array
  // todos = [
  //   {id : 1, description : 'Learn to Dance'},
  //   {id : 2, description : 'To become an expert in angular'},
  //   {id : 2, description : 'Work in Australia'},
  // ];

  constructor() {}
  ngOnInit() {
  }
}