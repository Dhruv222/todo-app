import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/actions/todo.actions';
import { State, getTodos } from '../../store/reducers/todo.reducer';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  text: string;
  due_on: number;
  todo$;
  todo_id: number;
  createTodo() {
    this.store.dispatch(
      new TodoActions.CreateTodo({
        id: --this.todo$,
        text: this.text,
        due_on: this.due_on,
      }),
    );
  }

  constructor(public store: Store<State>) {
    this.todo$ = store.select(getTodos);
  }

  ngOnInit() {}
}
