import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todo.models';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers/todo.reducer';
import * as TodoActions from '../../store/actions/todo.actions';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;

  deleteTodo() {
    this.store.dispatch(new TodoActions.DeleteTodo(this.todo.id));
  }

  constructor(public store: Store<State>) {}

  ngOnInit() {}
}
