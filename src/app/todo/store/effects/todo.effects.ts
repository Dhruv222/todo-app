import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { TodoService } from '../../services/todo.services';
import { Todo } from '../../models/todo.models';

import * as TodoActions from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
  @Effect()
  GetTodo$: Observable<Action> = this.actions$.pipe(
    ofType(TodoActions.TodoActionTypes.GET_TODOS),
    switchMap(() => {
      return this.todoService.GetTodos().pipe(
        map((todos: Todo[]) => {
          return new TodoActions.GetTodosSuccess(todos);
        }),
        catchError((err) =>
          of(
            new TodoActions.GetTodosError({
              message: 'Get Todos Failed',
              error: err,
            }),
          ),
        ),
      );
    }),
  );

  @Effect()
  CreateTodo$: Observable<Action> = this.actions$.pipe(
    ofType(TodoActions.TodoActionTypes.CREATE_TODO),
    map((action: TodoActions.CreateTodo) => action.payload),
    switchMap((todo: Todo) => {
      return this.todoService.CreateTodos(todo).pipe(
        map(() => new TodoActions.CreateTodoSuccess(todo)),
        catchError((err) =>
          of(
            new TodoActions.CreateTodoError({
              message: 'Create Todo Failed',
              error: err,
            }),
          ),
        ),
      );
    }),
  );

  @Effect()
  DeleteTodo$: Observable<Action> = this.actions$.pipe(
    ofType(TodoActions.TodoActionTypes.DELETE_TODO),
    map((action: TodoActions.DeleteTodo) => action.payload),
    switchMap((id: number) => {
      return this.todoService.DeleteTodo(id).pipe(
        map(() => new TodoActions.DeleteTodoSuccess(id)),
        catchError((err) =>
          of(
            new TodoActions.DeleteTodoError({
              message: 'Cant Delete the Todo',
              error: err,
            }),
          ),
        ),
      );
    }),
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
