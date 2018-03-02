import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/actions/todo.actions';
import { State, getNewTodoID } from '../../store/reducers/todo.reducer';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  text: string;
  due_on: number;
  todo$: Observable<number>;
  todo_id: number;

  createTodo() {
    this.todo$.subscribe((num) => (this.todo_id = num));
    console.log('Todo ID: ', this.todo_id);
    this.store.dispatch(
      new TodoActions.CreateTodo({
        id: --this.todo_id,
        text: this.text,
        due_on: this.due_on,
      }),
    );
  }

  constructor(public store: Store<State>) {
    this.todo$ = store.select(getNewTodoID);
  }

  ngOnInit() {}
}
