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
  createTodo() {
    this.todo$.map((todos) => {
      console.log(todos);
    });
    this.store.dispatch(
      new TodoActions.CreateTodo({
        id: --this.todo$,
        text: this.text,
        due_on: this.due_on,
      }),
    );
  }

  constructor(public store: Store<State>) {
    this.todo$ = store.select(getTodos).pipe(
      map((todos) => {
        console.log(todos);
        return todos[0].id;
      }),
      catchError((err) => {
        store.dispatch(new TodoActions.GetTodos());
        return of(NaN);
      }),
    );
  }

  ngOnInit() {}
}
