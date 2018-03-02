import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/actions/todo.actions';
import { getTodos } from '../../store/reducers/todo.reducer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<any>;

  constructor(public store: Store<'todo-app'>) {
    this.todos$ = store.select(getTodos);
  }

  ngOnInit() {
    this.store.dispatch({
      type: 'GET_TODOS',
    });
    console.log();
  }
}
