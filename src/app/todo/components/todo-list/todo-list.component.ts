import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/actions/todo.actions';
import { getTodos, State } from '../../store/reducers/todo.reducer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  todos$: Observable<any>;

  constructor(public store: Store<State>) {
    this.todos$ = store.select(getTodos);
  }

  ngOnInit() {
    this.store.dispatch(new TodoActions.GetTodos());
  }
}
