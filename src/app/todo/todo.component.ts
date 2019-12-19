import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import  TodoState  from '../store/todo.model';
import { Store, select } from '@ngrx/store';
import * as ToDoActions from '../store/todo.actions';
import { getTodoSelector } from '../store/todo.selector'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit { 
  currentToDo: String;

  todos: Observable<string[]>;

  constructor( private store : Store<TodoState>) { 
    this.todos = this.store.select(getTodoSelector);

  }

  ngOnInit() {}

  addTodo(name) {
   this.store.dispatch(ToDoActions.AddTodoAction({name}));
   this.currentToDo='';
  }
  
  remove(index) {
    this.store.dispatch(ToDoActions.RemoveTodoAction({index}));

  }

}
